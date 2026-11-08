import type { Metadata } from "next";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { JournalGallery } from "@/components/journal/journal-gallery";
import { getEntries } from "@/lib/journal";

export const metadata: Metadata = {
  title: "Le carnet",
  description:
    "Toutes les planches du journal de Valmont : des vers mis au propre à la plume, en calligraphie anglaise, de la plus récente à la plus ancienne.",
};

export default function CarnetPage() {
  return (
    <>
      <SiteHeader />

      <main className="flex-1">
        <section className="mx-auto w-full max-w-5xl px-5 pt-20 pb-24 sm:px-8 sm:pt-28">
          <p className="text-center text-xs uppercase tracking-[0.3em] text-accent">
            Le carnet
          </p>
          <h1 className="mx-auto mt-6 max-w-2xl text-balance text-center text-4xl text-foreground sm:text-5xl">
            Toutes les planches
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-center text-muted">
            Mes vers, mis au propre à la plume, de la plus récente à la plus
            ancienne. Les imperfections restent&nbsp;: elles disent le chemin
            parcouru.
          </p>
          <div className="mt-14">
            <JournalGallery entries={getEntries()} />
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
