/**
 * Domaine « thème » (clair/sombre).
 *
 * Source unique de la logique de thème : le script exécuté avant le premier
 * paint (pour éviter tout flash) et la bascule côté client partagent la même
 * clé de stockage et la même classe.
 */
const STORAGE_KEY = "theme";
const DARK_CLASS = "dark";

/**
 * Script inline à injecter dans le `<head>` : applique la classe `.dark` avant
 * le premier paint, d'après le choix mémorisé ou la préférence système.
 */
export const THEME_PREPAINT_SCRIPT = `(function(){try{var t=localStorage.getItem("${STORAGE_KEY}");if(t==="${DARK_CLASS}"||(!t&&window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches)){document.documentElement.classList.add("${DARK_CLASS}")}}catch(e){}})()`;

/** Bascule le thème clair/sombre et le mémorise. À appeler côté client. */
export function toggleTheme(): void {
  const next = !document.documentElement.classList.contains(DARK_CLASS);
  document.documentElement.classList.toggle(DARK_CLASS, next);
  try {
    localStorage.setItem(STORAGE_KEY, next ? DARK_CLASS : "light");
  } catch {
    // localStorage indisponible : le thème reste appliqué pour la session
  }
}
