/**
 * Avis / témoignages. Contenu PROVISOIRE (placeholders) — à remplacer par de
 * vrais avis recueillis auprès des abonnés.
 */
export type Review = { quote: string; author: string; detail?: string };

export const defaultReviews: Review[] = [
  {
    quote:
      "J'avais oublié ce que ça faisait, de trouver autre chose qu'une facture dans la boîte. Je garde chaque lettre.",
    author: "Camille",
    detail: "abonnée depuis le premier mois",
  },
  {
    quote:
      "L'écriture, la cire, le papier… on sent que c'est fait à la main. C'est devenu mon petit rituel du mois.",
    author: "Léa",
    detail: "Lyon",
  },
  {
    quote:
      "Un cadeau que je me fais à moi-même. Le poème tombe toujours étrangement juste.",
    author: "Sofia",
    detail: "Bordeaux",
  },
];

export function Reviews({ items = defaultReviews }: { items?: Review[] }) {
  return (
    <div className="grid gap-6 sm:grid-cols-3">
      {items.map((review) => (
        <figure
          key={review.author}
          className="flex flex-col rounded-sm border border-border bg-surface p-6 shadow-sm"
        >
          <blockquote className="flex-1 font-serif text-lg italic leading-relaxed text-foreground">
            « {review.quote} »
          </blockquote>
          <figcaption className="mt-4 text-sm text-muted">
            <span className="text-foreground">{review.author}</span>
            {review.detail ? ` — ${review.detail}` : null}
          </figcaption>
        </figure>
      ))}
    </div>
  );
}
