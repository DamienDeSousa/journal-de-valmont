"use server";

import {
  createSubscriber,
  saveSubscriber,
  subscriberSchema,
} from "@/lib/subscribers";

export type NewsletterState = {
  status: "idle" | "success" | "error";
  message: string;
};

/**
 * Inscription à la newsletter.
 *
 * Orchestre la requête (honeypot, lecture du `FormData`, messages) et délègue le
 * métier au domaine `lib/subscribers/` : validation (zod), fabrication de
 * l'abonné et persistance dans l'audience Resend.
 *
 * RGPD : prévoir un double opt-in (email de confirmation) avant d'envoyer des
 * newsletters — voir la doc Resend « Contacts » / « Broadcasts ».
 */
export async function subscribeToNewsletter(
  _prevState: NewsletterState,
  formData: FormData,
): Promise<NewsletterState> {
  // Honeypot anti-bot : un champ caché qui doit rester vide.
  const honeypot = String(formData.get("company") ?? "");
  if (honeypot) {
    return { status: "success", message: "Merci, votre inscription est notée." };
  }

  const result = subscriberSchema.safeParse({ email: formData.get("email") });
  if (!result.success) {
    return {
      status: "error",
      message: "Cette adresse e-mail ne semble pas valide.",
    };
  }

  const subscriber = createSubscriber(result.data.email);
  const saved = await saveSubscriber(subscriber);
  if (!saved.ok) {
    return {
      status: "error",
      message: "Un souci est survenu. Réessayez dans un instant.",
    };
  }

  return {
    status: "success",
    message: "C’est noté. Je vous écrirai quand une nouvelle planche paraîtra.",
  };
}
