/**
 * FAQ en accordéon natif (<details>/<summary>) — aucun JS requis, accessible.
 * Contenu provisoire : à ajuster avec les vraies réponses.
 */
export type FaqItem = { question: string; answer: string };

export const defaultFaq: FaqItem[] = [
  {
    question: "Qu'est-ce que je reçois, exactement ?",
    answer:
      "Chaque mois, une véritable lettre manuscrite glissée dans une enveloppe cachetée, contenant un poème d'amour copié à la plume. Rien de numérique : du papier, de l'encre, de la cire.",
  },
  {
    question: "Les lettres sont-elles écrites à la main ?",
    answer:
      "Oui. Chaque lettre est tracée à la main, une à une. C'est ce qui prend du temps — et c'est tout l'objet du club.",
  },
  {
    question: "Puis-je l'offrir à quelqu'un ?",
    answer:
      "Pour l'instant, l'abonnement est pensé pour que vous receviez vous-même les lettres. L'option cadeau viendra plus tard.",
  },
  {
    question: "Puis-je résilier quand je veux ?",
    answer:
      "Oui, sans engagement. Vous pouvez interrompre votre abonnement à tout moment depuis votre espace.",
  },
  {
    question: "Dans quels délais arrive la première lettre ?",
    answer:
      "Comptez quelques jours après votre inscription, le temps de l'écrire et de l'acheminer jusqu'à vous par voie postale.",
  },
];

export function Faq({ items = defaultFaq }: { items?: FaqItem[] }) {
  return (
    <div className="mx-auto max-w-2xl divide-y divide-border border-y border-border">
      {items.map((item) => (
        <details key={item.question} className="group py-5">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg text-foreground marker:content-none">
            <span className="font-serif">{item.question}</span>
            <span
              aria-hidden="true"
              className="shrink-0 text-2xl leading-none text-accent transition-transform duration-200 group-open:rotate-45"
            >
              +
            </span>
          </summary>
          <p className="mt-3 pr-8 text-muted">{item.answer}</p>
        </details>
      ))}
    </div>
  );
}
