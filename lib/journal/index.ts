/**
 * Domaine « journal » : les planches du carnet.
 *
 * Une planche = un vers de Damien, mis au propre à la plume en calligraphie
 * anglaise, publié d'abord sur Instagram puis recopié ici (photo dans
 * `public/journal/`, voir le README du dossier). Le vers est aussi saisi en
 * texte : la calligraphie est une image, illisible pour un moteur de recherche
 * ou un lecteur d'écran.
 */
export type JournalEntry = {
  /** Identifiant stable, p. ex. "2026-11-08-le-remous". */
  slug: string;
  /** Date de publication, au format ISO "2026-11-08". */
  date: string;
  /** Transcription du vers calligraphié. */
  verse: string;
  /** Titre du poème dont le vers est extrait. */
  poem?: string;
  /** Ex. "/journal/2026-11-08-le-remous.jpg". */
  image: string;
  /** Note d'atelier : ce qui a été travaillé, ce qui reste à reprendre. */
  note?: string;
  /** URL du post Instagram correspondant. */
  instagram?: string;
};

export type NumberedEntry = JournalEntry & {
  /** N° de planche, dans l'ordre chronologique (n° 1 = la première publiée). */
  number: number;
};

/**
 * Les planches publiées, dans n'importe quel ordre : le tri et la numérotation
 * sont calculés à partir de la date. Uniquement de vraies planches.
 */
export const entries: JournalEntry[] = [];

/**
 * Toutes les planches, de la plus récente à la plus ancienne. À date égale,
 * l'ordre du tableau `entries` départage.
 */
export function getEntries(): NumberedEntry[] {
  return [...entries]
    .sort((a, b) => a.date.localeCompare(b.date))
    .map((entry, i) => ({ ...entry, number: i + 1 }))
    .reverse();
}

/** Les `count` planches les plus récentes (pour l'accueil). */
export function getLatestEntries(count: number): NumberedEntry[] {
  return getEntries().slice(0, count);
}

/** Texte alternatif de la photo, construit à partir de la transcription. */
export function getEntryAlt(entry: NumberedEntry): string {
  return `Planche n° ${entry.number} : le vers « ${entry.verse} », calligraphié à la plume en anglaise.`;
}

/** Date lisible en français, p. ex. « 8 novembre 2026 ». */
export function formatEntryDate(date: string): string {
  // `new Date("2026-11-08")` est minuit UTC : on formate en UTC pour ne pas
  // glisser à la veille selon le fuseau du serveur.
  return new Intl.DateTimeFormat("fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(date));
}
