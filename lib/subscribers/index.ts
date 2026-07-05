/**
 * Domaine « abonnés ».
 *
 * Un abonné (`Subscriber`) = une adresse e-mail + son consentement newsletter.
 * La persistance est déléguée à Resend : un `Subscriber` correspond à un
 * « contact » dans l'audience Resend, où `newsletter` ⇔ `!unsubscribed`.
 */
import { z } from "zod";

import { getResendClient } from "@/lib/resend/client";

export type Subscriber = {
  email: string;
  newsletter: boolean;
};

/**
 * Schéma de validation de l'entrée du formulaire d'inscription. On trime et met
 * en minuscules **avant** de valider le format (une adresse avec espaces ou
 * casse ne doit pas créer de doublon de contact) — d'où le `.pipe(z.email())`.
 */
export const subscriberSchema = z.object({
  email: z.string().trim().toLowerCase().pipe(z.email()),
});

export type SubscriberInput = z.infer<typeof subscriberSchema>;

/**
 * Fabrique un abonné à partir d'un e-mail déjà validé. Une inscription via le
 * formulaire vaut consentement à la newsletter.
 */
export function createSubscriber(email: string): Subscriber {
  return { email, newsletter: true };
}

export type SaveResult = { ok: true } | { ok: false };

/**
 * Enregistre l'abonné dans l'audience Resend (un contact par abonné).
 *
 * Nécessite `RESEND_API_KEY` et `RESEND_AUDIENCE_ID`. Sans ces variables, on
 * journalise l'inscription et on la considère comme réussie (mode « pas encore
 * branché »), pour que le formulaire reste fonctionnel en local.
 */
export async function saveSubscriber(subscriber: Subscriber): Promise<SaveResult> {
  const audienceId = process.env.RESEND_AUDIENCE_ID;
  const resend = getResendClient();

  if (!resend || !audienceId) {
    console.info(
      `[newsletter] inscription en attente de branchement Resend : ${subscriber.email}`,
    );
    return { ok: true };
  }

  const { error } = await resend.contacts.create({
    audienceId,
    email: subscriber.email,
    unsubscribed: !subscriber.newsletter,
  });

  return error ? { ok: false } : { ok: true };
}
