import type { Metadata } from "next";
import Link from "next/link";
import { getSortedPosts, formatPostDate } from "@/lib/journal";

export const metadata: Metadata = {
  title: "Le journal",
  description:
    "Le journal du club : notes sur l'écriture à la main, la correspondance, la poésie et l'art de la lettre.",
};

export default function JournalIndexPage() {
  const posts = getSortedPosts();

  return (
    <div className="mx-auto w-full max-w-2xl px-5 pt-20 pb-24 sm:px-8 sm:pt-28">
      <p className="text-xs uppercase tracking-[0.3em] text-accent">Le journal</p>
      <h1 className="mt-6 text-4xl text-foreground sm:text-5xl">
        Notes sur l&apos;art de la lettre
      </h1>
      <p className="mt-5 text-lg text-muted">
        Quelques pages sur l&apos;écriture à la main, la correspondance et la
        poésie — qui prolongent les lettres du club.
      </p>

      <div className="mt-14 divide-y divide-border border-t border-border">
        {posts.map((post) => (
          <article key={post.slug} className="py-8">
            <p className="text-sm uppercase tracking-[0.14em] text-muted">
              {formatPostDate(post.date)}
            </p>
            <h2 className="mt-2 font-serif text-2xl text-foreground">
              <Link
                href={`/journal/${post.slug}`}
                className="transition-colors hover:text-primary"
              >
                {post.title}
              </Link>
            </h2>
            <p className="mt-2 text-muted">{post.excerpt}</p>
            <Link
              href={`/journal/${post.slug}`}
              className="mt-3 inline-block text-sm uppercase tracking-[0.14em] text-primary underline-offset-4 hover:underline"
            >
              Lire la suite
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}
