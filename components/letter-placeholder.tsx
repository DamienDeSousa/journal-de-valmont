/** Vignette provisoire évoquant une lettre manuscrite, rendue en CSS. */
export function LetterPlaceholder() {
  const lines = [96, 88, 92, 72, 84, 90, 58];
  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 bg-gradient-to-br from-surface-2 to-surface"
    >
      <div className="absolute inset-x-7 top-9 space-y-3.5">
        {lines.map((width, i) => (
          <span
            key={i}
            className="block h-[3px] rounded-full bg-foreground/20"
            style={{ width: `${width}%` }}
          />
        ))}
      </div>
      <div className="absolute bottom-6 right-6 grid h-14 w-14 place-items-center rounded-full bg-primary/85 shadow-md">
        <span className="font-serif text-xl italic text-primary-foreground">
          V
        </span>
      </div>
    </div>
  );
}
