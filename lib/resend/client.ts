/**
 * Client Resend partagé (une seule instance par process).
 *
 * En dev, le rechargement à chaud (HMR) réévalue ce module à chaque
 * sauvegarde et recréerait un client à chaque fois : on le cache sur
 * `globalThis`, qui lui survit au HMR, pour n'en garder qu'un seul.
 */
import { Resend } from "resend";

const globalForResend = globalThis as unknown as {
  resendClient?: Resend | null;
};

/**
 * Renvoie le client Resend partagé, ou `null` si `RESEND_API_KEY` n'est pas
 * définie (mode « pas encore branché », utile en local et dans les tests).
 */
export function getResendClient(): Resend | null {
  if (globalForResend.resendClient === undefined) {
    const apiKey = process.env.RESEND_API_KEY;
    globalForResend.resendClient = apiKey ? new Resend(apiKey) : null;
  }

  return globalForResend.resendClient;
}
