"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ElementType, ReactNode } from "react";
import { EASE } from "./Reveal";

type RevealTextProps = {
  children: string;
  as?: ElementType | undefined;
  className?: string | undefined;
  delay?: number | undefined;
  /** Split by "word" for tighter editorial reveals, "line" for statement blocks. */
  mode?: "word" | "line" | undefined;
  animate?: boolean | undefined;
};

/**
 * Masked, staggered text reveal. Words/lines slide up from behind a clip mask.
 */
export function RevealText({
  children,
  as: Tag = "span",
  className,
  delay = 0,
  mode = "word",
  animate = false,
}: RevealTextProps) {
  const reduced = useReducedMotion();
  const parts = mode === "word" ? children.split(" ") : children.split("\n");

  if (reduced) {
    return <Tag className={className}>{children}</Tag>;
  }

  const motionProps = animate
    ? { initial: "hidden" as const, animate: "show" as const }
    : {
        initial: "hidden" as const,
        whileInView: "show" as const,
        viewport: { once: true, margin: "-12% 0px" },
      };

  return (
    <Tag className={className}>
      <motion.span
        className="inline"
        variants={{
          hidden: {},
          show: {
            transition: { staggerChildren: mode === "word" ? 0.045 : 0.1, delayChildren: delay },
          },
        }}
        {...motionProps}
      >
        {parts.map((part, i) => (
          <span
            key={`${part}-${i}`}
            className={
              mode === "line"
                ? "-mb-[0.16em] block overflow-hidden pb-[0.16em]"
                : "-mb-[0.16em] inline-block overflow-hidden pb-[0.16em] align-bottom"
            }
          >
            <motion.span
              className="inline-block will-change-transform"
              variants={{
                hidden: { y: "110%", opacity: 0 },
                show: { y: "0%", opacity: 1, transition: { duration: 0.95, ease: EASE } },
              }}
            >
              {part}
              {mode === "word" && i < parts.length - 1 ? "\u00A0" : null}
            </motion.span>
          </span>
        ))}
      </motion.span>
    </Tag>
  );
}

export function RevealChildren({
  children,
  className,
  delay = 0,
  animate = false,
}: {
  children: ReactNode;
  className?: string | undefined;
  delay?: number | undefined;
  animate?: boolean | undefined;
}) {
  const reduced = useReducedMotion();
  if (reduced) return <span className={className}>{children}</span>;

  const motionProps = animate
    ? { initial: "hidden" as const, animate: "show" as const }
    : {
        initial: "hidden" as const,
        whileInView: "show" as const,
        viewport: { once: true, margin: "-12% 0px" },
      };

  return (
    <span className={`-mb-[0.16em] block overflow-hidden pb-[0.16em] ${className ?? ""}`}>
      <motion.span
        className="block will-change-transform"
        variants={{
          hidden: { y: "110%", opacity: 0 },
          show: { y: "0%", opacity: 1, transition: { duration: 1, ease: EASE, delay } },
        }}
        {...motionProps}
      >
        {children}
      </motion.span>
    </span>
  );
}
