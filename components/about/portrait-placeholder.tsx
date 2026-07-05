/** Vignette provisoire évoquant un portrait, rendue en CSS (buste à la plume). */
export function PortraitPlaceholder() {
  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 grid place-items-center bg-gradient-to-br from-surface-2 to-surface"
    >
      <svg
        viewBox="0 0 64 72"
        className="h-1/2 w-1/2 text-foreground/20"
        fill="currentColor"
      >
        <circle cx="32" cy="26" r="14" />
        <path d="M6 72c0-14.4 11.6-24 26-24s26 9.6 26 24z" />
      </svg>
    </div>
  );
}
