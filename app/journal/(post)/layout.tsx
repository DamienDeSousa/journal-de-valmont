import Link from "next/link";

export default function PostLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <article className="mx-auto w-full max-w-2xl px-5 pt-16 pb-24 sm:px-8 sm:pt-24">
      <Link
        href="/journal"
        className="text-sm uppercase tracking-[0.14em] text-muted transition-colors hover:text-foreground"
      >
        ← Le journal
      </Link>
      <div className="mt-8">{children}</div>
    </article>
  );
}
