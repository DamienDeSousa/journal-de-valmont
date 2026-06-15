import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { NewsletterForm } from "@/components/newsletter-form";
import { samplePoems } from "@/lib/poems";

export const metadata: Metadata = {
  title: "À propos",
  description:
    "Derrière Le journal de Valmont : Damien, le concept du club, ses influences et sa manière d'écrire chaque lettre à la main.",
};

const influences = [
  {
    name: "Les Liaisons dangereuses",
    note: "Choderlos de Laclos — l'art de la lettre qui séduit, dont Valmont est le maître.",
  },
  {
    name: "Les romantiques",
    note: "Hugo, Musset, Nerval — la lettre comme aveu, l'amour porté à incandescence.",
  },
  {
    name: "Les correspondances",
    note: "Celles, réelles, des amants d'autrefois : papier jauni, encre pâlie, mots qui survivent.",
  },
];

const method = [
  {
    title: "La plume",
    text: "Chaque lettre est tracée à la main, sans raccourci. L'écriture porte la trace du temps qu'on y a mis.",
  },
  {
    title: "Le papier",
    text: "Un papier choisi pour sa texture et sa tenue à l'encre, dans l'esprit des correspondances anciennes.",
  },
  {
    title: "La cire",
    text: "L'enveloppe est close d'un cachet de cire au sceau à la fleur de lys. On la rompt comme on ouvre un secret.",
  },
];

export default function AProposPage() {
  return (
    <>
      <SiteHeader />

      <main className="flex-1">
        {/* Intro — Damien */}
        {/* TODO: remplacer par la vraie biographie de Damien */}
        <section className="mx-auto w-full max-w-2xl px-5 pt-20 pb-16 sm:px-8 sm:pt-28">
          <p className="text-xs uppercase tracking-[0.3em] text-accent">À propos</p>
          <h1 className="mt-6 text-4xl text-foreground sm:text-5xl">
            Derrière les lettres
          </h1>
          <div className="mt-8 space-y-5 text-lg text-muted">
            <p>
              Je m&apos;appelle <span className="text-foreground">Damien</span>.
              J&apos;ai grandi avec l&apos;idée qu&apos;une lettre n&apos;est
              pas un message : c&apos;est une présence. Quelque chose qu&apos;on
              tient, qu&apos;on plie, qu&apos;on range dans un tiroir et
              qu&apos;on relit des années plus tard.
            </p>
            <p>
              Le journal de Valmont est né de cette conviction : à l&apos;heure
              où tout va vite et s&apos;efface, redonner à l&apos;amour le temps
              long de l&apos;encre et du papier.
            </p>
          </div>
        </section>

        {/* Le concept */}
        <section className="scroll-mt-20 border-y border-border bg-surface/50">
          <div className="mx-auto w-full max-w-2xl px-5 py-16 sm:px-8">
            <h2 className="text-3xl text-foreground">Le concept</h2>
            <p className="mt-5 text-lg text-muted">
              Un club de correspondance. Chaque mois, vous recevez une lettre
              manuscrite et un poème d&apos;amour, écrits à la plume et cachetés
              à la cire — rien que pour vous. Pas d&apos;écran, pas de
              notification : une enveloppe, un cachet à rompre, quelques vers à
              lire lentement.
            </p>
          </div>
        </section>

        {/* Influences */}
        <section className="mx-auto w-full max-w-2xl px-5 py-16 sm:px-8">
          <h2 className="text-3xl text-foreground">Mes influences</h2>
          <ul className="mt-8 space-y-6">
            {influences.map((inf) => (
              <li key={inf.name}>
                <p className="font-serif text-xl italic text-primary">{inf.name}</p>
                <p className="mt-1 text-muted">{inf.note}</p>
              </li>
            ))}
          </ul>
        </section>

        {/* Ma manière de travailler */}
        <section className="scroll-mt-20 border-y border-border bg-surface/50">
          <div className="mx-auto w-full max-w-2xl px-5 py-16 sm:px-8">
            <h2 className="text-3xl text-foreground">Ma manière de travailler</h2>
            <div className="mt-8 grid gap-8 sm:grid-cols-3">
              {method.map((m) => (
                <div key={m.title}>
                  <h3 className="text-xl text-foreground">{m.title}</h3>
                  <p className="mt-2 text-muted">{m.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Quelques poèmes */}
        <section className="mx-auto w-full max-w-2xl px-5 py-20 sm:px-8">
          <h2 className="text-center text-3xl text-foreground">Quelques poèmes</h2>
          <p className="mt-3 text-center text-muted">
            Un avant-goût de ce qui se glisse dans les enveloppes.
          </p>
          <div className="mt-12 space-y-12">
            {samplePoems.map((poem) => (
              <figure key={poem.id} className="text-center">
                <h3 className="font-serif text-sm uppercase tracking-[0.2em] text-accent">
                  {poem.title}
                </h3>
                <blockquote className="mt-4 space-y-1 font-serif text-xl italic leading-relaxed text-foreground sm:text-2xl">
                  {poem.lines.map((line, i) => (
                    <p key={i}>{line}</p>
                  ))}
                </blockquote>
              </figure>
            ))}
          </div>
        </section>

        {/* Contact / newsletter */}
        <section
          id="newsletter"
          className="scroll-mt-20 border-t border-border bg-surface/50"
        >
          <div className="mx-auto w-full max-w-2xl px-5 py-20 text-center sm:px-8">
            <h2 className="text-3xl text-foreground">Restons en correspondance</h2>
            <p className="mx-auto mt-3 max-w-md text-muted">
              Laissez-moi votre adresse e-mail : je vous écris quand une nouvelle
              lettre se prépare, sans jamais vous encombrer.
            </p>
            <div className="mt-8">
              <NewsletterForm id="apropos-newsletter-email" />
            </div>
            <p className="mt-8 text-sm text-muted">
              Une question, un mot&nbsp;?{" "}
              <a
                href="mailto:contact@journaldevalmont.fr"
                className="text-primary underline-offset-4 hover:underline"
              >
                contact@journaldevalmont.fr
              </a>
            </p>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
