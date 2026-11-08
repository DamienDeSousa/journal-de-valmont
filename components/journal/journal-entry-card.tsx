import Image from "next/image";
import { InstagramLink } from "@/components/instagram/instagram-link";
import {
  formatEntryDate,
  getEntryAlt,
  type NumberedEntry,
} from "@/lib/journal";

/** Une planche du carnet : la photo, le vers retranscrit et sa note d'atelier. */
export function JournalEntryCard({
  entry,
  index,
}: {
  entry: NumberedEntry;
  /** Position dans la grille, pour alterner l'inclinaison. */
  index: number;
}) {
  return (
    <figure className="group">
      <div
        className={`relative aspect-[4/5] overflow-hidden rounded-sm border border-border bg-surface shadow-sm transition-transform duration-500 group-hover:rotate-0 ${
          index % 2 === 0 ? "-rotate-1" : "rotate-1"
        }`}
      >
        <Image
          src={entry.image}
          alt={getEntryAlt(entry)}
          fill
          sizes="(min-width: 640px) 33vw, 100vw"
          className="object-cover"
        />
      </div>

      <figcaption className="mt-5 text-center">
        <p className="text-xs uppercase tracking-[0.2em] text-accent">
          Planche n°&nbsp;{entry.number} ·{" "}
          <time dateTime={entry.date}>{formatEntryDate(entry.date)}</time>
        </p>
        <p className="mt-3 font-serif text-xl italic leading-snug text-foreground">
          «&nbsp;{entry.verse}&nbsp;»
        </p>
        {entry.poem ? (
          <p className="mt-1 text-sm text-muted">
            extrait de <span className="italic">{entry.poem}</span>
          </p>
        ) : null}
        {entry.note ? (
          <p className="mt-3 text-sm text-muted">
            <span className="text-foreground/80">Note d&apos;atelier — </span>
            {entry.note}
          </p>
        ) : null}
        {entry.instagram ? (
          <InstagramLink
            href={entry.instagram}
            className="mt-3 inline-flex text-sm text-primary underline-offset-4 hover:underline"
          >
            Voir sur Instagram
          </InstagramLink>
        ) : null}
      </figcaption>
    </figure>
  );
}
