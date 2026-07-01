import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { NewsletterForm } from "@/components/newsletter-form";
import { samplePoems } from "@/lib/poems";

export const metadata: Metadata = {
  title: "À propos",
  description:
    "Derrière Le journal de Valmont : Damien, le concept du club, ce qui l'inspire et sa manière d'écrire chaque lettre à la main.",
};

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
        <section className="mx-auto w-full max-w-2xl px-5 pt-20 pb-16 sm:px-8 sm:pt-28">
          <p className="text-xs uppercase tracking-[0.3em] text-accent">À propos</p>
          <h1 className="mt-6 text-4xl text-foreground sm:text-5xl">
            Derrière les lettres
          </h1>
          <div className="mt-8 space-y-5 text-lg text-muted">
            <p>
              Je m&apos;appelle <span className="text-foreground">Damien</span>.
              J&apos;ai commencé à écrire des vers un soir, et je n&apos;ai plus
              cessé.
            </p>
            <p>
              J&apos;ai choisi la poésie plutôt que la prose : pour parler
              d&apos;amour, rien ne me semble plus juste ni plus élégant. Et le
              sonnet en particulier, assez long pour mener une idée jusqu&apos;à
              sa chute, assez court pour en garder la quintessence. J&apos;ai
              voulu m&apos;approcher de sa forme la plus classique, par amour de
              la langue française — je ne cesse d&apos;apprendre sur toutes les
              subtilités de la langue et des règles de versification.
            </p>
            <p>
              Peu à peu, j&apos;ai compris que je n&apos;écrivais plus seulement
              pour moi. Nous vivons une époque où les hommes et les femmes se
              parlent de moins en moins, où l&apos;on se comprend mal, où les
              écrans nous ont rendus impatients, anxieux, plus seuls que jamais.
              Et depuis peu, l&apos;intelligence artificielle a rendu tout lisse,
              sans grain et sans créativité.
            </p>
            <p>
              Ces lettres sont ma manière de résister à cela : revenir aux
              choses simples, au goût de l&apos;attente, au plaisir d&apos;une
              belle lettre tracée comme autrefois. Réapprendre à se parler, à se
              comprendre, à s&apos;aimer.
            </p>
          </div>
        </section>

        {/* Le concept */}
        <section className="scroll-mt-20 border-y border-border bg-surface/50">
          <div className="mx-auto w-full max-w-2xl px-5 py-16 sm:px-8">
            <h2 className="text-3xl text-foreground">Le concept</h2>
            <p className="mt-5 text-lg text-muted">
              Un club de correspondance. Chaque mois, vous recevez une lettre
              manuscrite contenant un poème d&apos;amour, écrit à la plume et cacheté
              à la cire — rien que pour vous. Pas d&apos;écran, pas de
              notification : une enveloppe, un cachet à rompre, quelques vers à
              lire lentement.
            </p>
          </div>
        </section>

        {/* Ce qui m'inspire */}
        <section className="mx-auto w-full max-w-2xl px-5 py-16 sm:px-8">
          <h2 className="text-3xl text-foreground">Ce qui m&apos;inspire</h2>
          <div className="mt-8 space-y-5 text-lg text-muted">
            <p>
              Je n&apos;écris pas d&apos;après les livres : je n&apos;ai lu que très peu
              des grands auteurs de l&apos;amour. Ce qui me guide, c&apos;est ce
              que je ressens — mes émotions, mon empathie, l&apos;attention que
              je porte à l&apos;autre.
            </p>
            <p>
              Et les belles histoires d&apos;amour, d&apos;où qu&apos;elles
              viennent : d&apos;un dessin animé de Disney à un film comme Coup de
              foudre à Notting Hill. La forme importe peu ; seule compte
              l&apos;émotion, quand elle est vraie.
            </p>
          </div>
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
