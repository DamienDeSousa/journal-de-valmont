import type { MDXComponents } from "mdx/types";
import Link from "next/link";

/**
 * Styles globaux des éléments MDX (articles du Journal), accordés au thème.
 * Requis par @next/mdx avec l'App Router.
 */
const components: MDXComponents = {
  h1: ({ children }) => (
    <h1 className="text-4xl text-foreground sm:text-5xl">{children}</h1>
  ),
  h2: ({ children }) => (
    <h2 className="mt-12 text-2xl text-foreground sm:text-3xl">{children}</h2>
  ),
  h3: ({ children }) => (
    <h3 className="mt-8 text-xl text-foreground">{children}</h3>
  ),
  p: ({ children }) => (
    <p className="mt-5 text-lg leading-8 text-muted">{children}</p>
  ),
  a: ({ href, children }) => (
    <Link
      href={href ?? "#"}
      className="text-primary underline-offset-4 hover:underline"
    >
      {children}
    </Link>
  ),
  ul: ({ children }) => (
    <ul className="mt-5 list-disc space-y-2 pl-6 text-lg text-muted">{children}</ul>
  ),
  ol: ({ children }) => (
    <ol className="mt-5 list-decimal space-y-2 pl-6 text-lg text-muted">{children}</ol>
  ),
  blockquote: ({ children }) => (
    <blockquote className="my-8 border-l-2 border-primary pl-6 font-serif text-xl italic text-foreground">
      {children}
    </blockquote>
  ),
  hr: () => <hr className="my-12 border-border" />,
  strong: ({ children }) => (
    <strong className="font-semibold text-foreground">{children}</strong>
  ),
};

export function useMDXComponents(): MDXComponents {
  return components;
}
