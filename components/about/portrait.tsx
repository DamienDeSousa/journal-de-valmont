import Image from "next/image";
import { PortraitPlaceholder } from "@/components/about/portrait-placeholder";

/**
 * Portrait de Damien pour la page « à propos ».
 *
 * La vraie photo se dépose dans `public/about/` (voir le README du dossier).
 * Tant que `src` n'est pas renseigné, une vignette « buste » est rendue en CSS
 * — dans l'esprit du reste du site (cf. `public/brand/README.md`, « le rendu
 * papier/collage est recréé en CSS »). Dès qu'un fichier est fourni, renseignez
 * `src` et la photo passe par `next/image`.
 */
export function Portrait({
  src,
  alt = "Portrait de Damien",
}: {
  /** Ex. "/about/damien.jpg". Absent = vignette CSS. */
  src?: string;
  alt?: string;
}) {
  return (
    <figure>
      <div className="relative aspect-[4/5] -rotate-1 overflow-hidden rounded-sm border border-border bg-surface shadow-sm">
        {src ? (
          <Image
            src={src}
            alt={alt}
            fill
            sizes="(min-width: 768px) 20rem, 100vw"
            className="object-cover"
          />
        ) : (
          <PortraitPlaceholder />
        )}
      </div>
      <figcaption className="mt-4 text-center text-sm uppercase tracking-[0.18em] text-muted">
        Damien
      </figcaption>
    </figure>
  );
}
