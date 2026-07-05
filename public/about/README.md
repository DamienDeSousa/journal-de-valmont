# Portrait

Déposez ici la photo de Damien affichée sur la page « à propos », à côté de la
présentation, via `components/about/portrait.tsx`.

## Ajouter la photo

1. Déposez le fichier dans ce dossier, p. ex. `damien.jpg`.
2. Dans `app/a-propos/page.tsx`, passez le `src` au composant :
   `<Portrait src="/about/damien.jpg" />`.

Tant que `src` n'est pas renseigné, une vignette « buste » est rendue en CSS à
la place — dans l'esprit de `public/brand/README.md`.

## Format conseillé

- Orientation portrait, ratio ~4:5 (la vignette est en `aspect-[4/5]`).
- Au moins 800 × 1000 px, en `.jpg` ou `.webp`.
- Bien éclairé, fond neutre, pour rester cohérent avec l'univers du site.
