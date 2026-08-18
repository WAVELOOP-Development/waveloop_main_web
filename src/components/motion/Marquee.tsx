"use client";

type MarqueeProps = {
  items: string[];
  reverse?: boolean | undefined;
  duration?: number | undefined;
  className?: string | undefined;
  separator?: string | undefined;
};

/**
 * CSS-driven infinite marquee. The track holds two identical halves and
 * translates -50%, so the loop is seamless and costs no JS per frame.
 */
export function Marquee({
  items,
  reverse = false,
  duration = 34,
  className,
  separator = "×",
}: MarqueeProps) {
  const half = (
    <div className="flex shrink-0 items-center" aria-hidden="true">
      {items.map((item, i) => (
        <span key={`${item}-${i}`} className="flex items-center">
          <span className="whitespace-nowrap px-6 sm:px-9">{item}</span>
          <span className="opacity-40">{separator}</span>
        </span>
      ))}
    </div>
  );

  return (
    <div className={`w-full overflow-hidden ${className ?? ""}`}>
      <div
        className={reverse ? "marquee-track-reverse" : "marquee-track"}
        style={{ ["--marquee-duration" as string]: `${duration}s` }}
      >
        {half}
        {half}
      </div>
      <span className="sr-only">{items.join(", ")}</span>
    </div>
  );
}
