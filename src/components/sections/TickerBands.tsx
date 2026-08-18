"use client";

import { Marquee } from "@/components/motion/Marquee";

const rowOne = [
  "Software Engineering",
  "Cyber Security",
  "Cloud Platforms",
  "Mobile Products",
  "AI & Automation",
];

const rowTwo = [
  "Digital Strategy",
  "Intelligent Systems",
  "User-First Design",
  "Enterprise Delivery",
];

/** Diagonal crossing ticker bands — the visual signature between light sections. */
export function TickerBands() {
  return (
    <div className="relative isolate my-16 h-[190px] w-full overflow-hidden sm:my-24 sm:h-[240px]">
      <div className="absolute left-1/2 top-1/2 w-[130vw] -translate-x-1/2 -translate-y-1/2 -rotate-[3.5deg]">
        <Marquee
          items={rowOne}
          duration={38}
          className="border-y border-ink/10 bg-ink py-4 font-display text-2xl font-medium tracking-[-0.03em] text-[color:var(--paper)] sm:py-6 sm:text-4xl"
        />
      </div>
      <div className="absolute left-1/2 top-1/2 w-[130vw] -translate-x-1/2 -translate-y-1/2 rotate-[3.5deg]">
        <Marquee
          items={rowTwo}
          reverse
          duration={30}
          className="bg-accent py-4 font-display text-2xl font-medium tracking-[-0.03em] text-accent-foreground sm:py-6 sm:text-4xl"
        />
      </div>
    </div>
  );
}
