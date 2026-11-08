import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { NewsletterForm } from "@/components/newsletter/newsletter-form";
import { Portrait } from "@/components/about/portrait";

export const metadata: Metadata = {
  title: "À propos",
  description:
    "Derrière Le journal de Valmont : Damien, ses vers, son apprentissage de la calligraphie anglaise et sa manière de travailler, du brouillon à la plume.",
};

const method = [
  {
    title: "Le brouillon",
    text: "Le vers se cherche d’abord en brouillon\u00a0: raturé, repris, ses syllabes comptées et recomptées, jusqu’à ce qu’il tienne.",
  },
  {
    title: "La mise au propre",
    text: "Une fois le vers trouvé, je le recopie à la plume, en calligraphie anglaise. Pour l’instant en grand\u00a0: un vers par page.",
  },
  {
    title: "Le partage",
    text: "La planche paraît sur Instagram, puis rejoint le carnet. Avec ses défauts\u00a0: ils disent où en est la main.",
  },
];

/** Extrait d'un poème de Damien. */
const excerpt = [
  "Le remous de tes mains, rompt mon intérieur",
  "Mordu par le moment, affamé par l’absence",
  "Tes lèvres sur ma peau, ont forcé mes défenses",
  "Le monde devient flou, supprimant ma douleur",
];

export default function AProposPage() {
  return (
    <>
      <SiteHeader />

      <main className="flex-1">
        {/* Intro — Damien */}
        <section className="mx-auto w-full max-w-5xl px-5 pt-20 pb-16 sm:px-8 sm:pt-28">
          <p className="text-xs uppercase tracking-[0.3em] text-accent">À propos</p>
          <h1 className="mt-6 text-4xl text-foreground sm:text-5xl">
            Derrière les lettres
          </h1>
          <div className="mt-10 grid items-start gap-10 md:grid-cols-[1fr_13rem] md:gap-14 lg:grid-cols-[1fr_15rem]">
            <div className="order-2 space-y-5 text-lg text-muted md:order-1">
              <p>
                Je m&apos;appelle <span className="text-foreground">Damien</span>.
                J&apos;ai commencé à écrire des vers un soir, et je n&apos;ai plus
                cessé.
              </p>
              <p>
                J&apos;ai choisi le vers plutôt que la prose : pour parler
                d&apos;amour, rien ne me semble plus juste ni plus élégant. Et le
                sonnet en particulier, assez long pour mener une idée jusqu&apos;à
                sa chute, assez court pour en garder la quintessence. J&apos;ai
                voulu m&apos;approcher de sa forme la plus classique, par amour de
                la langue française — je ne cesse d&apos;apprendre sur toutes les
                subtilités de la langue et des règles de versification.
              </p>
              <p>
                Puis j&apos;ai voulu donner à ces vers une forme digne d&apos;eux.
                J&apos;ai pris la plume et commencé la calligraphie anglaise&nbsp;: des
                pleins, des déliés, une pente à tenir, et beaucoup de patience.
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
                Ce journal est ma manière de résister à cela : revenir aux choses
                simples, au goût de l&apos;attente, au plaisir d&apos;une belle
                lettre tracée comme autrefois. Réapprendre à se parler, à se
                comprendre, à s&apos;aimer.
              </p>
            </div>
            <div className="order-1 w-full max-w-[11rem] md:order-2 md:max-w-none md:sticky md:top-28">
              <Portrait />
            </div>
          </div>
        </section>

        {/* Ce journal */}
        <section className="scroll-mt-20 border-y border-border bg-surface/50">
          <div className="mx-auto w-full max-w-2xl px-5 py-16 sm:px-8">
            <h2 className="text-3xl text-foreground">Ce journal</h2>
            <p className="mt-5 text-lg text-muted">
              Un carnet d&apos;apprentissage, tenu en public. J&apos;y partage mes
              vers, mis au propre à la plume. Pour l&apos;instant j&apos;écris
              gros, un vers par page, et tout n&apos;est pas parfait&nbsp;: une boucle
              qui penche, un délié qui tremble. C&apos;est voulu. Je préfère
              montrer le chemin plutôt que d&apos;attendre la ligne
              d&apos;arrivée.
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

        {/* Aperçu d'un poème */}
        <section className="mx-auto w-full max-w-2xl px-5 py-20 sm:px-8">
          <p className="text-center text-xs uppercase tracking-[0.3em] text-accent">
            Un aperçu
          </p>
          <figure className="mt-8 rounded-sm border border-border bg-surface px-8 py-12 shadow-sm sm:px-14">
            <blockquote className="space-y-4 text-center font-serif text-2xl italic leading-relaxed text-foreground sm:text-[1.7rem]">
              {excerpt.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </blockquote>
            <figcaption className="mt-8 text-center text-sm uppercase tracking-[0.18em] text-muted">
              Extrait — Le journal de Valmont
            </figcaption>
          </figure>
          <p className="mt-10 text-center">
            <Link
              href="/carnet"
              className="text-primary underline-offset-4 hover:underline"
            >
              Voir les vers calligraphiés dans le carnet
            </Link>
          </p>
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
              planche paraît, sans jamais vous encombrer.
            </p>
            <div className="mt-8">
              <NewsletterForm />
            </div>
            {/* <p className="mt-8 text-sm text-muted">
              Une question, un mot&nbsp;?{" "}
              <a
                href="mailto:contact@journaldevalmont.fr"
                className="text-primary underline-offset-4 hover:underline"
              >
                contact@journaldevalmont.fr
              </a>
            </p> */}
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
