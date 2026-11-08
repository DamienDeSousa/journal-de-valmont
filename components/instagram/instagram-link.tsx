import { InstagramIcon } from "@/components/instagram/instagram-icon";
import { INSTAGRAM_URL } from "@/lib/instagram";

/**
 * Lien externe vers Instagram (le compte par défaut, ou un post via `href`),
 * ouvert dans un nouvel onglet. L'affichage (`inline-flex`, `flex`…) est laissé
 * à l'appelant via `className`, pour ne pas entrer en conflit avec ses classes.
 */
export function InstagramLink({
  href = INSTAGRAM_URL,
  className = "",
  children = "Instagram",
}: {
  href?: string;
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`items-center gap-2 ${className}`}
    >
      <InstagramIcon className="shrink-0" />
      {children}
      <span className="sr-only"> (nouvel onglet)</span>
    </a>
  );
}
