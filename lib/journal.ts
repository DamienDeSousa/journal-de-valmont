/**
 * Registre des articles du Journal.
 *
 * Pour publier : créer `app/journal/(post)/<slug>/page.mdx` puis ajouter une
 * entrée ici. (Approche volontairement simple pour la v1 ; un éditeur en
 * back-office ou un sourcing par frontmatter pourra venir plus tard.)
 */
export type JournalPost = {
  slug: string;
  title: string;
  date: string; // ISO (AAAA-MM-JJ)
  excerpt: string;
};

export const journalPosts: JournalPost[] = [
  {
    slug: "le-plaisir-de-decacheter",
    title: "Le plaisir oublié de décacheter une lettre",
    date: "2026-06-01",
    excerpt:
      "Entre deux notifications, il reste un geste que rien n'a remplacé : rompre un cachet de cire et déplier du papier.",
  },
  {
    slug: "pourquoi-ecrire-a-la-main",
    title: "Pourquoi j'écris encore à la main",
    date: "2026-05-15",
    excerpt:
      "Écrire lentement, c'est offrir du temps. Petit éloge de l'encre, de la lenteur et de l'imperfection.",
  },
];

export function getSortedPosts(): JournalPost[] {
  return [...journalPosts].sort((a, b) => b.date.localeCompare(a.date));
}

export function formatPostDate(iso: string): string {
  return new Date(iso).toLocaleDateString("fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}
