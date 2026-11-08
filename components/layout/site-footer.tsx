import Link from "next/link";
import { InstagramLink } from "@/components/instagram/instagram-link";

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-border bg-surface/60">
      <div className="mx-auto grid w-full max-w-5xl gap-8 px-5 py-12 sm:grid-cols-2 sm:px-8">
        <div>
          <p className="font-serif text-lg text-foreground">
            Le journal de <span className="italic text-primary">Valmont</span>
          </p>
          <p className="mt-2 max-w-xs text-sm text-muted">
            Un carnet d&apos;apprentissage : des vers mis au propre à la plume, en
            calligraphie anglaise, planche après planche.
          </p>
        </div>

        <nav className="flex flex-col gap-2 text-sm sm:items-end" aria-label="Liens de pied de page">
          <Link href="/carnet" className="text-muted transition-colors hover:text-foreground">
            Le carnet
          </Link>
          <Link href="/a-propos" className="text-muted transition-colors hover:text-foreground">
            À propos
          </Link>
          <InstagramLink className="inline-flex text-muted transition-colors hover:text-foreground" />
        </nav>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto w-full max-w-5xl px-5 py-5 text-xs text-muted sm:px-8">
          © {new Date().getFullYear()} Le journal de Valmont — Écrit à la plume.
        </div>
      </div>
    </footer>
  );
}
