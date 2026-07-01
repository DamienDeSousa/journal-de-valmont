# Photos des lettres

Déposez ici les photos réelles des lettres (enveloppes cachetées, poèmes tracés
à la plume, détails de papier). Elles alimentent la galerie « En images » de la
page d'accueil, via `components/letters-gallery.tsx`.

## Ajouter une photo

1. Déposez le fichier dans ce dossier, p. ex. `enveloppe-cachetee.jpg`.
2. Dans `components/letters-gallery.tsx`, renseignez le `src` de l'entrée
   correspondante : `src: "/letters/enveloppe-cachetee.jpg"`.

Tant qu'un `src` n'est pas renseigné, une vignette « papier » est rendue en CSS
à la place — dans l'esprit de `public/brand/README.md`.

## Format conseillé

- Orientation portrait, ratio ~4:5 (les vignettes sont en `aspect-[4/5]`).
- Au moins 800 × 1000 px, en `.jpg` ou `.webp`.
- Bien éclairé, fond neutre, pour rester cohérent avec l'univers du site.
