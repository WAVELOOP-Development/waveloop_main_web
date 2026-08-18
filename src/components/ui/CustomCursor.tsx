"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

/**
 * Desktop-only cursor. A small dot follows the pointer; hovering elements that
 * declare data-cursor swaps it for a labelled disc.
 */
export function CustomCursor() {
  const reduced = useReducedMotion();
  const [enabled, setEnabled] = useState(false);
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [label, setLabel] = useState<string | null>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    if (!fine) return;
    setEnabled(true);
    document.documentElement.classList.add("hide-cursor");

    const onMove = (event: MouseEvent) => {
      setPos({ x: event.clientX, y: event.clientY });
      const target = (event.target as HTMLElement | null)?.closest("[data-cursor]");
      const kind = target?.getAttribute("data-cursor") ?? null;
      if (kind === "view") setLabel("View");
      else if (kind === "drag") setLabel("Drag");
      else setLabel(null);
      setActive(
        Boolean(target) || Boolean((event.target as HTMLElement | null)?.closest("a,button")),
      );
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", onMove);
      document.documentElement.classList.remove("hide-cursor");
    };
  }, []);

  if (!enabled || reduced) return null;

  const size = label ? 82 : active ? 46 : 12;

  return (
    <div className="pointer-events-none fixed inset-0 z-[90] hidden md:block" aria-hidden="true">
      <motion.div
        className="absolute flex items-center justify-center rounded-full"
        animate={{ x: pos.x, y: pos.y, width: size, height: size }}
        transition={{ type: "spring", stiffness: 700, damping: 40, mass: 0.35 }}
        style={{
          translateX: "-50%",
          translateY: "-50%",
          backgroundColor: label ? "var(--accent)" : "var(--ink)",
          mixBlendMode: label ? "normal" : "difference",
        }}
      >
        <AnimatePresence>
          {label ? (
            <motion.span
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.7 }}
              className="label-xs text-[color:var(--accent-foreground)]"
            >
              {label}
            </motion.span>
          ) : null}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
