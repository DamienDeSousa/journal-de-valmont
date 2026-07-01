import Image from "next/image";
import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Reviews } from "@/components/reviews";
import { Faq } from "@/components/faq";
import { NewsletterForm } from "@/components/newsletter-form";
import { LettersGallery } from "@/components/letters-gallery";

const steps = [
  {
    n: "I",
    title: "Vous vous abonnez",
    text: "Choisissez votre rythme et indiquez l'adresse où la lettre doit voyager.",
  },
  {
    n: "II",
    title: "Une lettre prend forme",
    text: "À la plume, je copie pour vous un poème d'amour sur un beau papier, cacheté à la main.",
  },
  {
    n: "III",
    title: "Elle arrive chez vous",
    text: "Quelques jours plus tard, une enveloppe cachetée vous attend. Rien que pour vous.",
  },
];

export default function Home() {
  return (
    <>
      <SiteHeader />

      <main className="flex-1">
        {/* Hero */}
        <section className="mx-auto w-full max-w-5xl px-5 pt-20 pb-24 text-center sm:px-8 sm:pt-28">
          <p className="text-xs uppercase tracking-[0.3em] text-accent">
            Club de correspondance · Lettres manuscrites
          </p>

          <h1 className="mx-auto mt-6 max-w-3xl text-balance text-4xl leading-[1.05] text-foreground sm:text-6xl">
            Recevez l&apos;amour,&nbsp;
            <span className="italic text-primary">cacheté à la cire.</span>
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-lg text-muted">
            Chaque mois, une lettre manuscrite contenant un poème d&apos;amour, tracés à
            la plume et scellés à la cire, rien que pour vous. Le plaisir oublié
            de décacheter une enveloppe.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="#offre"
              className="inline-flex h-12 items-center justify-center rounded-full bg-primary px-7 text-base font-medium text-primary-foreground transition-colors hover:bg-primary-hover"
            >
              Recevoir ma première lettre
            </Link>
            <a
              href="#concept"
              className="inline-flex h-12 items-center justify-center rounded-full border border-border px-7 text-base text-foreground transition-colors hover:border-primary hover:text-primary"
            >
              Comment ça marche
            </a>
          </div>

          {/* Sceau à la fleur de lys */}
          <div className="mt-16 flex justify-center" aria-hidden="true">
            <Image
              src="/brand/logo_tampon.png"
              alt=""
              width={1024}
              height={1040}
              priority
              className="h-28 w-28 opacity-80 dark:opacity-90 dark:invert sm:h-32 sm:w-32"
            />
          </div>
        </section>

        {/* Concept */}
        <section
          id="concept"
          className="scroll-mt-20 border-y border-border bg-surface/50"
        >
          <div className="mx-auto w-full max-w-5xl px-5 py-20 sm:px-8">
            <h2 className="text-center text-3xl text-foreground sm:text-4xl">
              Comment ça marche
            </h2>
            <div className="mt-14 grid gap-10 sm:grid-cols-3">
              {steps.map((step) => (
                <div key={step.n} className="text-center">
                  <span className="font-serif text-2xl italic text-accent">
                    {step.n}
                  </span>
                  <h3 className="mt-3 text-xl text-foreground">{step.title}</h3>
                  <p className="mt-2 text-muted">{step.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Photos des lettres */}
        <section id="lettres" className="scroll-mt-20">
          <div className="mx-auto w-full max-w-5xl px-5 py-24 sm:px-8">
            <p className="text-center text-xs uppercase tracking-[0.3em] text-accent">
              En images
            </p>
            <h2 className="mx-auto mt-6 max-w-2xl text-balance text-center text-3xl text-foreground sm:text-4xl">
              Chaque lettre est unique, écrite à la main
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-center text-muted">
              Le papier, l&apos;encre et la cire : quelques images de ce qui vous
              attend dans la boîte aux lettres.
            </p>
            <div className="mt-14">
              <LettersGallery />
            </div>
          </div>
        </section>

        {/* Aperçu d'un poème */}
        <section id="poeme" className="scroll-mt-20">
          <div className="mx-auto w-full max-w-2xl px-5 py-24 sm:px-8">
            <p className="text-center text-xs uppercase tracking-[0.3em] text-accent">
              Un aperçu
            </p>
            <figure className="mt-8 rounded-sm border border-border bg-surface px-8 py-12 shadow-sm sm:px-14">
              <blockquote className="space-y-4 text-center font-serif text-2xl italic leading-relaxed text-foreground sm:text-[1.7rem]">
                <p>Le remous de tes mains, rompt mon intérieur</p>
                <p>Mordu par le moment, affamé par l’absence</p>
                <p>Tes lèvres sur ma peau, ont forcés mes défenses</p>
                <p>Le monde devient flou, supprimant ma douleur</p>
              </blockquote>
              <figcaption className="mt-8 text-center text-sm uppercase tracking-[0.18em] text-muted">
                Extrait — Le journal de Valmont
              </figcaption>
            </figure>
          </div>
        </section>

        {/* Avis - Commenté car aucun avis
        <section id="avis" className="scroll-mt-20 border-y border-border bg-surface/50">
          <div className="mx-auto w-full max-w-5xl px-5 py-20 sm:px-8">
            <h2 className="text-center text-3xl text-foreground sm:text-4xl">
              Ils décachètent chaque mois
            </h2>
            <div className="mt-12">
              <Reviews />
            </div>
          </div>
        </section> */}

        {/* Offre (teaser — la boutique complète arrive en Phase 2) */}
        <section
          id="offre"
          className="scroll-mt-20 border-t border-border bg-surface/50"
        >
          <div className="mx-auto w-full max-w-md px-5 py-24 text-center sm:px-8">
            <h2 className="text-3xl text-foreground sm:text-4xl">L&apos;abonnement</h2>
            <p className="mt-3 text-muted">
              Une lettre manuscrite et son poème, chaque mois, dans votre boîte.
            </p>

            <div className="mt-10 rounded-sm border border-border bg-surface p-8 text-left shadow-sm">
              <p className="font-serif text-4xl text-foreground">
                Bientôt
                <span className="ml-2 align-middle text-base not-italic text-muted">
                  / formule à venir
                </span>
              </p>
              <ul className="mt-6 space-y-3 text-muted">
                <li>· Une lettre écrite et cachetée à la main</li>
                <li>· Un poème d&apos;amour choisi pour la saison</li>
                <li>· Sans engagement, résiliable à tout moment</li>
              </ul>
              <button
                type="button"
                disabled
                className="mt-8 inline-flex h-12 w-full cursor-not-allowed items-center justify-center rounded-full bg-primary/40 px-7 text-base font-medium text-primary-foreground"
              >
                Ouverture des abonnements prochainement
              </button>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="scroll-mt-20">
          <div className="mx-auto w-full max-w-2xl px-5 py-20 sm:px-8">
            <h2 className="text-center text-3xl text-foreground sm:text-4xl">
              Questions fréquentes
            </h2>
            <div className="mt-12">
              <Faq />
            </div>
          </div>
        </section>

        {/* Newsletter */}
        <section
          id="newsletter"
          className="scroll-mt-20 border-t border-border bg-surface/50"
        >
          <div className="mx-auto w-full max-w-2xl px-5 py-20 text-center sm:px-8">
            <p className="text-xs uppercase tracking-[0.3em] text-accent">
              La correspondance
            </p>
            <h2 className="mt-6 text-3xl text-foreground sm:text-4xl">
              Recevez des nouvelles du club
            </h2>
            <p className="mx-auto mt-3 max-w-md text-muted">
              Quelques mots, de temps en temps, quand une nouvelle lettre se
              prépare. Jamais d&apos;encombrement.
            </p>
            <div className="mt-8">
              <NewsletterForm />
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
