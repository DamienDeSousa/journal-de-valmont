import { InstagramLink } from "@/components/instagram/instagram-link";
import { PagePlaceholder } from "@/components/journal/page-placeholder";

/** État vide du carnet : une page qui attend sa première planche. */
export function JournalEmpty() {
  return (
    <div className="mx-auto max-w-xs text-center">
      <div className="relative aspect-[4/5] -rotate-1 overflow-hidden rounded-sm border border-border bg-surface shadow-sm">
        <PagePlaceholder />
      </div>
      <p className="mt-5 text-xs uppercase tracking-[0.2em] text-accent">
        Planche n°&nbsp;1 · à paraître
      </p>
      <p className="mt-3 text-muted">
        Les premières planches paraissent d&apos;abord sur Instagram.
      </p>
      <InstagramLink className="mt-3 inline-flex text-sm text-primary underline-offset-4 hover:underline">
        Suivre sur Instagram
      </InstagramLink>
    </div>
  );
}
