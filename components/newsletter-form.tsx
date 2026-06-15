"use client";

import { useActionState } from "react";
import {
  subscribeToNewsletter,
  type NewsletterState,
} from "@/app/actions/newsletter";

const initialState: NewsletterState = { status: "idle", message: "" };

export function NewsletterForm({ id }: { id?: string }) {
  const [state, formAction, isPending] = useActionState(
    subscribeToNewsletter,
    initialState,
  );

  return (
    <form action={formAction} className="mx-auto w-full max-w-md">
      <div className="flex flex-col gap-3 sm:flex-row">
        <label htmlFor={id ?? "newsletter-email"} className="sr-only">
          Votre adresse e-mail
        </label>
        <input
          id={id ?? "newsletter-email"}
          type="email"
          name="email"
          required
          autoComplete="email"
          placeholder="votre@adresse.fr"
          aria-invalid={state.status === "error"}
          className="h-12 flex-1 rounded-full border border-border bg-surface px-5 text-foreground placeholder:text-muted/70 focus:border-primary"
        />
        {/* Honeypot anti-bot, masqué visuellement et aux lecteurs d'écran */}
        <input
          type="text"
          name="company"
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
          className="hidden"
        />
        <button
          type="submit"
          disabled={isPending}
          className="inline-flex h-12 items-center justify-center rounded-full bg-primary px-7 font-medium text-primary-foreground transition-colors hover:bg-primary-hover disabled:opacity-60"
        >
          {isPending ? "Un instant…" : "Je m'inscris"}
        </button>
      </div>

      <p
        aria-live="polite"
        className={`mt-3 min-h-5 text-sm ${
          state.status === "error" ? "text-primary" : "text-muted"
        }`}
      >
        {state.message}
      </p>
    </form>
  );
}
