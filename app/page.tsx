import Image from "next/image";
import Link from "next/link";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { InstagramLink } from "@/components/instagram/instagram-link";
import { JournalGallery } from "@/components/journal/journal-gallery";
import { NewsletterForm } from "@/components/newsletter/newsletter-form";
import { getLatestEntries } from "@/lib/journal";

const learning = [
  {
    n: "I",
    title: "La plume",
    text: "La calligraphie anglaise, à la plume pointue\u00a0: des pleins et des déliés, une pente régulière, des ovales qui se tiennent. Rien ne s’improvise.",
  },
  {
    n: "II",
    title: "Le vers",
    text: "La poésie et ses règles\u00a0: le compte des syllabes, la rime, le sonnet. J’écris mes propres vers et j’apprends à les tenir.",
  },
  {
    n: "III",
    title: "La patience",
    text: "Pour l’instant, j’écris gros\u00a0: un vers par page. Chaque planche est mise au propre, sans être parfaite. La main s’affine, page après page.",
  },
];

export default function Home() {
  const latestEntries = getLatestEntries(3);

  return (
    <>
      <SiteHeader />

      <main className="flex-1">
        {/* Hero */}
        <section className="mx-auto w-full max-w-5xl px-5 pt-20 pb-24 text-center sm:px-8 sm:pt-28">
          <p className="text-xs uppercase tracking-[0.3em] text-accent">
            Calligraphie anglaise · Poésie
          </p>

          <h1 className="mx-auto mt-6 max-w-3xl text-balance text-4xl leading-[1.05] text-foreground sm:text-6xl">
            Apprendre les belles lettres,&nbsp;
            <span className="italic text-primary">un vers à la fois.</span>
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-lg text-muted">
            Le journal de Valmont est mon carnet d&apos;apprentissage. J&apos;écris
            mes vers, puis je les mets au propre à la plume, en calligraphie
            anglaise. Je les partage ici, imparfaits encore, mais chaque fois un
            peu plus sûrs.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <InstagramLink className="inline-flex h-12 justify-center rounded-full bg-primary px-7 text-base font-medium text-primary-foreground transition-colors hover:bg-primary-hover">
              Suivre sur Instagram
            </InstagramLink>
            <Link
              href="/carnet"
              className="inline-flex h-12 items-center justify-center rounded-full border border-border px-7 text-base text-foreground transition-colors hover:border-primary hover:text-primary"
            >
              Ouvrir le carnet
            </Link>
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

        {/* Derniers vers */}
        <section
          id="carnet"
          className="scroll-mt-20 border-y border-border bg-surface/50"
        >
          <div className="mx-auto w-full max-w-5xl px-5 py-24 sm:px-8">
            <p className="text-center text-xs uppercase tracking-[0.3em] text-accent">
              Le carnet
            </p>
            <h2 className="mx-auto mt-6 max-w-2xl text-balance text-center text-3xl text-foreground sm:text-4xl">
              Les derniers vers
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-center text-muted">
              Mes pages mises au propre, de la plus récente à la plus ancienne.
              Elles ne sont pas parfaites&nbsp;: c&apos;est tout l&apos;objet du carnet.
            </p>
            <div className="mt-14">
              <JournalGallery entries={latestEntries} />
            </div>
            {latestEntries.length > 0 ? (
              <div className="mt-14 text-center">
                <Link
                  href="/carnet"
                  className="inline-flex h-12 items-center justify-center rounded-full border border-border px-7 text-base text-foreground transition-colors hover:border-primary hover:text-primary"
                >
                  Tout le carnet
                </Link>
              </div>
            ) : null}
          </div>
        </section>

        {/* Ce que j'apprends */}
        <section id="apprentissage" className="scroll-mt-20">
          <div className="mx-auto w-full max-w-5xl px-5 py-20 sm:px-8">
            <h2 className="text-center text-3xl text-foreground sm:text-4xl">
              Ce que j&apos;apprends
            </h2>
            <div className="mt-14 grid gap-10 sm:grid-cols-3">
              {learning.map((item) => (
                <div key={item.n} className="text-center">
                  <span className="font-serif text-2xl italic text-accent">
                    {item.n}
                  </span>
                  <h3 className="mt-3 text-xl text-foreground">{item.title}</h3>
                  <p className="mt-2 text-muted">{item.text}</p>
                </div>
              ))}
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
              Par e-mail
            </p>
            <h2 className="mt-6 text-3xl text-foreground sm:text-4xl">
              Recevoir des nouvelles du journal
            </h2>
            <p className="mx-auto mt-3 max-w-md text-muted">
              Quelques mots, de temps en temps, quand une nouvelle planche paraît.
              Jamais d&apos;encombrement.
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
