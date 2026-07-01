import Image from "next/image";

/**
 * Galerie « photos des lettres » de la page d'accueil.
 *
 * Les vraies photos se déposent dans `public/letters/` (voir le README du
 * dossier). Tant qu'une entrée n'a pas de `src`, une vignette « papier » est
 * rendue en CSS — dans l'esprit du reste du site (cf. `public/brand/README.md`,
 * « le rendu papier/collage est recréé en CSS »). Dès qu'un fichier est fourni,
 * renseignez `src` et l'image passe par `next/image`.
 */
export type LetterPhoto = {
  /** Ex. "/letters/enveloppe-cachetee.jpg". Absent = vignette CSS. */
  src?: string;
  alt: string;
  caption: string;
};

export const defaultLetterPhotos: LetterPhoto[] = [
  {
    // src: "/letters/enveloppe-cachetee.jpg",
    alt: "Une enveloppe de papier ivoire fermée par un sceau de cire bordeaux.",
    caption: "L’enveloppe, cachetée à la cire",
  },
  {
    // src: "/letters/poeme-a-la-plume.jpg",
    alt: "Un poème d’amour recopié à la plume sur un papier vergé.",
    caption: "Le poème, tracé à la plume",
  },
  {
    // src: "/letters/papier-verge.jpg",
    alt: "Gros plan sur le grain d’un beau papier vergé.",
    caption: "Le papier, choisi avec soin",
  },
];

export function LettersGallery({
  photos = defaultLetterPhotos,
}: {
  photos?: LetterPhoto[];
}) {
  return (
    <ul className="grid gap-8 sm:grid-cols-3">
      {photos.map((photo, i) => (
        <li key={photo.caption} className="group">
          <figure>
            <div
              className={`relative aspect-[4/5] overflow-hidden rounded-sm border border-border bg-surface shadow-sm transition-transform duration-500 group-hover:rotate-0 ${
                i % 2 === 0 ? "-rotate-1" : "rotate-1"
              }`}
            >
              {photo.src ? (
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="(min-width: 640px) 33vw, 100vw"
                  className="object-cover"
                />
              ) : (
                <LetterPlaceholder />
              )}
            </div>
            <figcaption className="mt-4 text-center text-sm uppercase tracking-[0.18em] text-muted">
              {photo.caption}
            </figcaption>
          </figure>
        </li>
      ))}
    </ul>
  );
}

/** Vignette provisoire évoquant une lettre manuscrite, rendue en CSS. */
function LetterPlaceholder() {
  const lines = [96, 88, 92, 72, 84, 90, 58];
  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 bg-gradient-to-br from-surface-2 to-surface"
    >
      <div className="absolute inset-x-7 top-9 space-y-3.5">
        {lines.map((width, i) => (
          <span
            key={i}
            className="block h-[3px] rounded-full bg-foreground/20"
            style={{ width: `${width}%` }}
          />
        ))}
      </div>
      <div className="absolute bottom-6 right-6 grid h-14 w-14 place-items-center rounded-full bg-primary/85 shadow-md">
        <span className="font-serif text-xl italic text-primary-foreground">
          V
        </span>
      </div>
    </div>
  );
}
