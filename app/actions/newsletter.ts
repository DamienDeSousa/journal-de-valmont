"use server";

export type NewsletterState = {
  status: "idle" | "success" | "error";
  message: string;
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/**
 * Inscription à la newsletter.
 *
 * Si `RESEND_API_KEY` + `RESEND_AUDIENCE_ID` sont définis, l'adresse est ajoutée
 * à l'audience Resend. Sinon, l'action valide simplement l'email et confirme
 * (le branchement Resend se fera une fois le compte créé).
 *
 * RGPD : prévoir un double opt-in (email de confirmation) avant la mise en
 * production — voir la doc Resend « Contacts » / « Broadcasts ».
 */
export async function subscribeToNewsletter(
  _prevState: NewsletterState,
  formData: FormData,
): Promise<NewsletterState> {
  const email = String(formData.get("email") ?? "").trim();
  // Honeypot anti-bot : un champ caché qui doit rester vide.
  const honeypot = String(formData.get("company") ?? "");

  if (honeypot) {
    return { status: "success", message: "Merci, votre inscription est notée." };
  }
  if (!EMAIL_RE.test(email)) {
    return { status: "error", message: "Cette adresse e-mail ne semble pas valide." };
  }

  const apiKey = process.env.RESEND_API_KEY;
  const audienceId = process.env.RESEND_AUDIENCE_ID;

  if (apiKey && audienceId) {
    try {
      const res = await fetch(
        `https://api.resend.com/audiences/${audienceId}/contacts`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${apiKey}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, unsubscribed: false }),
        },
      );
      if (!res.ok) {
        return {
          status: "error",
          message: "Un souci est survenu. Réessayez dans un instant.",
        };
      }
    } catch {
      return {
        status: "error",
        message: "Un souci est survenu. Réessayez dans un instant.",
      };
    }
  } else {
    // Pas encore branché : on trace côté serveur pour ne rien perdre.
    console.info(`[newsletter] inscription en attente de branchement Resend : ${email}`);
  }

  return {
    status: "success",
    message: "C'est noté. Surveillez votre boîte : une lettre vous attend bientôt.",
  };
}
