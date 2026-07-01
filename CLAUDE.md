@AGENTS.md

# Le journal de Valmont — guide du dépôt

Landing page (bientôt boutique) d'un club de correspondance : lettres
manuscrites et poèmes d'amour, cachetés à la cire. Copie et contenu **en
français**.

## Stack

- **Next.js 16.2.9**, App Router (dossier `app/`). Pas de Pages Router.
- **React 19.2** (`react` / `react-dom` 19.2.x).
- **TypeScript strict**, alias d'import `@/*` → racine du projet.
- **Tailwind CSS v4** (`@import "tailwindcss"` dans `app/globals.css`, tokens via
  `@theme inline`). Pas de `tailwind.config.js`.
- **@next/mdx** : les `.md`/`.mdx` sont des pages (`pageExtensions` dans
  `next.config.ts`, `withMDX`). Styles MDX mutualisés dans `mdx-components.tsx`.

## Commandes

```bash
npm run dev     # next dev (Turbopack, sort dans .next/dev)
npm run build   # next build (Turbopack par défaut)
npm run start   # next start
npm run lint    # eslint  (⚠ « next lint » n'existe plus ; build ne lint plus)
```

## ⚠ Next.js 16 — ce qui a changé par rapport à ce que tu « connais »

`AGENTS.md` l'impose : **avant d'écrire du code, lis le guide concerné dans
`node_modules/next/dist/docs/01-app/`**. Le guide de bascule complet est
`node_modules/next/dist/docs/01-app/02-guides/upgrading/version-16.md`.
Points qui cassent le plus souvent les habitudes v14/v15 :

- **Turbopack par défaut** : plus de flag `--turbopack`. La config Turbopack est
  l'option **top-level** `turbopack` (plus `experimental.turbopack`).
- **Async Request APIs (obligatoire)** : `cookies()`, `headers()`,
  `draftMode()` s'`await`ent. `params` et `searchParams` de `page`/`layout`/
  `route` sont des **Promises** — il faut les `await`. Utilise les helpers de
  types `PageProps<'/route'>`, `LayoutProps<'/route'>`, `RouteContext` et
  régénère-les avec `npx next typegen`.
- **Metadata dynamique async** : dans `opengraph-image`/`twitter-image`/`icon`/
  `apple-icon`, `params` **et** `id` sont des Promises. Idem `id` dans `sitemap`.
- **`middleware` → `proxy`** : fichier `proxy.ts`, export nommé `proxy`, runtime
  **`nodejs` uniquement** (pas d'`edge`). Flags renommés
  (`skipMiddlewareUrlNormalize` → `skipProxyUrlNormalize`).
- **Cache** : `revalidateTag(tag, profile)` exige un 2ᵉ argument (profil
  `cacheLife`). Nouveaux `updateTag` (read-your-writes) et `refresh()`.
  `cacheLife`/`cacheTag` sont stables (plus de préfixe `unstable_`).
- **PPR** : le flag `experimental.ppr` et `experimental_ppr` sont retirés →
  `cacheComponents: true` (remplace aussi `experimental.dynamicIO`/`useCache`).
- **`next/image`** : `images.domains` déprécié → `remotePatterns` ; défauts
  changés (`minimumCacheTTL` 4 h, `qualities` = `[75]`, `imageSizes` sans 16) ;
  query strings sur images locales → `images.localPatterns.search`.
- **Routes parallèles** : chaque slot exige un `default.js`/`.tsx` explicite.
- **ESLint flat config** ; `next lint` supprimé (`npm run lint` = `eslint`).
- **Retirés** : AMP, `serverRuntimeConfig`/`publicRuntimeConfig` (→ variables
  d'env + `connection()` pour la lecture au runtime), `next/legacy/image`.

Ne devine pas une API depuis ta mémoire : vérifie dans les docs locales.

## Conventions du projet

- **Server Components par défaut.** N'ajoute `"use client"` que si nécessaire
  (état, effets, event handlers) — cf. `components/theme-toggle.tsx`,
  `components/newsletter-form.tsx`.
- **Évite `useEffect` autant que possible.** Cherche d'abord une alternative :
  faire le travail côté serveur (Server Component / Server Action), dériver la
  valeur au rendu plutôt que la synchroniser dans un état, `useMemo` pour un
  calcul, gérer les événements dans le handler qui les déclenche, ou les APIs
  natives (`<form>`, `<details>`, CSS). Ne garde `useEffect` que pour une vraie
  synchronisation avec un système externe (abonnement, `localStorage`, API du
  navigateur, timer) — et alors `useEffectEvent` (React 19.2) aide à en sortir
  la logique non réactive.
- **Un seul composant par fichier `.tsx`.** Un composant = un fichier, nommé
  d'après lui (kebab-case). Les sous-composants privés vont dans leur propre
  fichier plutôt que d'être co-localisés. Les données/types/helpers non-JSX
  (tableaux, `type`, fonctions pures) peuvent rester dans le même fichier.
- **Extrais la logique métier hors des composants** autant que possible. Un
  composant orchestre l'UI ; le reste (calculs, accès données, règles métier,
  état complexe) part dans un helper (`lib/`) ou un hook (`hooks/`).
- **Découpage par domaine métier dans `lib/` et `hooks/` : un domaine = un
  dossier.** P. ex. `lib/journal/`, `lib/poems/`, `lib/newsletter/` ;
  `hooks/theme/`. On regroupe par domaine, jamais par type technique.
- **Server Actions** dans `app/actions/*` (`"use server"`), cf.
  `newsletter.ts`. Secrets via `process.env` (`.env*` est gitignore).
- **Design system** — tout passe par les tokens de `app/globals.css`, exposés en
  utilitaires Tailwind. N'écris pas de couleurs en dur :
  - Fonds/texte : `bg-background`, `bg-surface`, `bg-surface-2`,
    `text-foreground`, `text-muted`, `border-border`.
  - Marque : `bg-primary` / `hover:bg-primary-hover` / `text-primary-foreground`,
    `text-accent` (or patiné), `ring-ring`.
  - Polices : `font-serif` (Cormorant, titres/citations), `font-body`
    (EB Garamond) via `next/font`.
- **Thème clair/sombre** : classe `.dark` posée avant le paint par un script
  inline dans `app/layout.tsx`. Style le mode sombre avec la variante `dark:`.
- **Images** : `next/image`, assets dans `public/`. Assets de marque documentés
  dans `public/brand/README.md`, photos des lettres dans
  `public/letters/README.md`. Esprit maison : le rendu papier/collage est
  recréé en CSS plutôt que d'importer des images jetables.
- **Contenu français** : `lang="fr"`. Dans le JSX, échappe les apostrophes
  (`&apos;`) ; dans les chaînes, apostrophe typographique `’`.

## Structure

```
app/                Routes App Router
  layout.tsx        Root layout (fonts, metadata, thème, <html lang="fr">)
  page.tsx          Landing (sections : hero, concept, lettres, poème, offre, faq, newsletter)
  journal/          Blog « Le journal » ; articles en .mdx sous (post)/
  a-propos/         Page à propos
  actions/          Server Actions ("use server")
components/         Composants UI partagés
lib/                Helpers / logique métier — un dossier par domaine (journal/, poems/…)
hooks/              Hooks React — un dossier par domaine
public/             Assets statiques (brand/, letters/)
mdx-components.tsx  Styles globaux des éléments MDX
```
