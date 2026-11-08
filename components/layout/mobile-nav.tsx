"use client";

import Link from "next/link";
import { InstagramLink } from "@/components/instagram/instagram-link";

export type NavLink = { href: string; label: string };

/**
 * Menu mobile sobre. L'ouverture reste gérée par l'élément natif `<details>`
 * (pas de `useState`, pas de `useEffect`) ; on ajoute seulement un handler pour
 * refermer le panneau au clic sur un lien — sinon, sur une ancre de la même page
 * (`/#carnet`, `/#newsletter`), le `<details>` resterait ouvert faute de remontage.
 * Visible sous `md`, là où la navigation desktop est masquée.
 */
export function MobileNav({ links }: { links: NavLink[] }) {
  return (
    <details className="group relative md:hidden" onClick={closeOnLinkClick}>
      <summary
        className="flex h-9 w-9 cursor-pointer list-none items-center justify-center rounded-full border border-border text-foreground/80 transition-colors hover:border-primary hover:text-primary [&::-webkit-details-marker]:hidden"
        aria-label="Ouvrir le menu"
      >
        {/* Hamburger — menu fermé */}
        <svg
          className="group-open:hidden"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          aria-hidden="true"
        >
          <path d="M4 7h16M4 12h16M4 17h16" />
        </svg>
        {/* Croix — menu ouvert */}
        <svg
          className="hidden group-open:block"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          aria-hidden="true"
        >
          <path d="M6 6l12 12M18 6L6 18" />
        </svg>
      </summary>

      <nav
        aria-label="Navigation principale"
        className="absolute right-0 top-[calc(100%+0.75rem)] w-56 rounded-2xl border border-border bg-surface p-2 shadow-lg shadow-black/10"
      >
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="block rounded-lg px-4 py-2.5 text-sm uppercase tracking-[0.14em] text-muted transition-colors hover:bg-surface-2 hover:text-foreground"
          >
            {link.label}
          </Link>
        ))}
        <InstagramLink className="mt-1 flex justify-center rounded-full bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary-hover sm:hidden" />
      </nav>
    </details>
  );
}

/** Referme le `<details>` quand le clic provient d'un lien (pas du bouton toggle). */
function closeOnLinkClick(event: React.MouseEvent<HTMLDetailsElement>) {
  if ((event.target as HTMLElement).closest("a")) {
    event.currentTarget.open = false;
  }
}
