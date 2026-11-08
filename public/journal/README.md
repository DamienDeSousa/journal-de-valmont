# Planches du carnet

Déposez ici les photos des planches : les vers mis au propre à la plume, en
calligraphie anglaise, tels que publiés sur Instagram. Elles alimentent la page
`/carnet` et les « derniers vers » de l'accueil, via `lib/journal/index.ts`.

## Ajouter une planche

1. Déposez la photo dans ce dossier, nommée d'après sa date et son vers, p. ex.
   `2026-11-08-le-remous.jpg`.
2. Dans `lib/journal/index.ts`, ajoutez une entrée au tableau `entries` :

   ```ts
   {
     slug: "2026-11-08-le-remous",
     date: "2026-11-08",
     verse: "Le remous de tes mains, rompt mon intérieur",
     poem: "Titre du poème", // facultatif
     image: "/journal/2026-11-08-le-remous.jpg",
     note: "Ce que j’ai travaillé, ce qui reste à reprendre.", // facultatif
     instagram: "https://www.instagram.com/p/…/", // facultatif
   },
   ```

Le tri (de la plus récente à la plus ancienne) et le numéro de planche sont
calculés à partir de la date : inutile de les saisir. Le vers est retranscrit en
texte : il sert de texte alternatif à la photo et rend la planche lisible par les
moteurs de recherche et les lecteurs d'écran.

## Format conseillé

- Le même cadrage que sur Instagram, ratio 4:5 (les vignettes sont en
  `aspect-[4/5]`).
- Au moins 1080 × 1350 px, en `.jpg` ou `.webp`.
