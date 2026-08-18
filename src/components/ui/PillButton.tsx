"use client";

import type { ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";
import { Magnetic } from "@/components/motion/MagneticButton";
import { scrollToTarget } from "@/components/motion/SmoothScroll";

type Variant = "solid" | "outline" | "accent" | "ghost";

const base =
  "group relative inline-flex items-center gap-3 rounded-full text-sm font-medium tracking-tight transition-colors duration-500 focus-visible:outline-2";

const variants: Record<Variant, string> = {
  solid: "bg-ink text-[color:var(--paper)] hover:bg-accent",
  accent: "bg-accent text-accent-foreground hover:bg-ink hover:text-[color:var(--paper)]",
  outline: "border border-border-strong text-current hover:border-accent hover:text-accent",
  ghost: "text-current hover:text-accent",
};

export function PillButton({
  children,
  href = "#contact",
  variant = "solid",
  arrow = true,
  className,
  size = "md",
}: {
  children: ReactNode;
  href?: string | undefined;
  variant?: Variant | undefined;
  arrow?: boolean | undefined;
  className?: string | undefined;
  size?: "sm" | "md" | "lg" | undefined;
}) {
  const sizing =
    size === "lg" ? "px-8 py-4 text-base" : size === "sm" ? "px-5 py-2.5" : "px-6 py-3.5";

  return (
    <Magnetic strength={0.14}>
      <a
        href={href}
        onClick={(event) => {
          if (href.startsWith("#")) {
            event.preventDefault();
            scrollToTarget(href);
          }
        }}
        className={`${base} ${variants[variant]} ${sizing} ${className ?? ""}`}
        data-cursor="cta"
      >
        <span className="relative overflow-hidden">
          <span className="block transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-full">
            {children}
          </span>
          <span className="absolute inset-0 block translate-y-full transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-y-0">
            {children}
          </span>
        </span>
        {arrow ? (
          <ArrowUpRight
            className="size-4 shrink-0 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1 group-hover:-translate-y-1"
            aria-hidden="true"
          />
        ) : null}
      </a>
    </Magnetic>
  );
}
