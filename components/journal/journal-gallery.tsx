import { JournalEmpty } from "@/components/journal/journal-empty";
import { JournalEntryCard } from "@/components/journal/journal-entry-card";
import type { NumberedEntry } from "@/lib/journal";

/**
 * Grille des planches (accueil et `/carnet`). Les données viennent de
 * `lib/journal` ; sans planche, on affiche l'état vide plutôt qu'un faux contenu.
 */
export function JournalGallery({ entries }: { entries: NumberedEntry[] }) {
  if (entries.length === 0) {
    return <JournalEmpty />;
  }

  return (
    <ul className="grid gap-12 sm:grid-cols-3 sm:gap-8">
      {entries.map((entry, i) => (
        <li key={entry.slug}>
          <JournalEntryCard entry={entry} index={i} />
        </li>
      ))}
    </ul>
  );
}
