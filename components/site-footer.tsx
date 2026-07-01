import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-border bg-surface/60">
      <div className="mx-auto grid w-full max-w-5xl gap-8 px-5 py-12 sm:grid-cols-2 sm:px-8">
        <div>
          <p className="font-serif text-lg text-foreground">
            Le journal de <span className="italic text-primary">Valmont</span>
          </p>
          <p className="mt-2 max-w-xs text-sm text-muted">
            Un club de correspondance. Des lettres manuscrites contenant des poèmes
            d&apos;amour, tracés à la plume rien que pour vous.
          </p>
        </div>

        <nav className="flex flex-col gap-2 text-sm sm:items-end" aria-label="Liens de pied de page">
          <Link href="/a-propos" className="text-muted transition-colors hover:text-foreground">
            À propos
          </Link>
          <Link href="/cgv" className="text-muted transition-colors hover:text-foreground">
            CGV
          </Link>
          <Link href="/confidentialite" className="text-muted transition-colors hover:text-foreground">
            Confidentialité
          </Link>
        </nav>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto w-full max-w-5xl px-5 py-5 text-xs text-muted sm:px-8">
          © {new Date().getFullYear()} Le journal de Valmont — Écrit et cacheté à la main.
        </div>
      </div>
    </footer>
  );
}
