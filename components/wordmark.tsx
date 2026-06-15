import Image from "next/image";
import Link from "next/link";

/** Logo principal : sceau à la fleur de lys (public/brand/logo_tampon.png). */
export function Wordmark({ className = "" }: { className?: string }) {
  return (
    <Link
      href="/"
      aria-label="Le journal de Valmont — accueil"
      className={`group inline-flex items-center gap-2.5 ${className}`}
    >
      <Image
        src="/brand/logo_tampon.png"
        alt=""
        width={1024}
        height={1040}
        priority
        className="h-9 w-9 opacity-85 dark:opacity-90 dark:invert"
      />
      <span className="font-serif text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
        Le journal de{" "}
        <span className="italic text-primary transition-colors group-hover:text-primary-hover">
          Valmont
        </span>
      </span>
    </Link>
  );
}
