"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

const EASE = [0.16, 1, 0.3, 1] as const;

export function Preloader({ onDone }: { onDone: () => void }) {
  const reduced = useReducedMotion();
  const [progress, setProgress] = useState(0);
  const [open, setOpen] = useState(true);

  useEffect(() => {
    if (reduced) {
      setOpen(false);
      onDone();
      return;
    }
    let raf = 0;
    const start = performance.now();
    const total = 1500;

    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / total);
      const eased = 1 - Math.pow(1 - t, 3);
      setProgress(Math.round(eased * 100));
      if (t < 1) {
        raf = requestAnimationFrame(tick);
      } else {
        setOpen(false);
        onDone();
      }
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [reduced, onDone]);

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          className="grain fixed inset-0 z-[100] flex flex-col justify-between overflow-hidden bg-ink px-5 py-6 text-[color:var(--paper)] sm:px-10 sm:py-9"
          exit={{ y: "-101%" }}
          transition={{ duration: 1, ease: EASE }}
        >
          <div className="flex items-center justify-between">
            <motion.span
              className="label-xs"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: EASE }}
            >
              Waveloop
            </motion.span>
            <motion.span
              className="label-xs opacity-60"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              Intelligent Digital Solutions
            </motion.span>
          </div>

          <div className="flex flex-col items-start gap-8">
            <div className="overflow-hidden">
              <motion.h2
                className="display-lg"
                initial={{ y: "110%" }}
                animate={{ y: "0%" }}
                transition={{ duration: 1, ease: EASE, delay: 0.05 }}
              >
                Empowering<span className="accent-italic"> innovation</span>
              </motion.h2>
            </div>
            <div className="w-full">
              <div className="h-px w-full overflow-hidden bg-[color:var(--paper)]/20">
                <motion.div
                  className="h-full bg-accent"
                  style={{ width: `${progress}%` }}
                  transition={{ duration: 0.1 }}
                />
              </div>
            </div>
          </div>

          <div className="flex items-end justify-between">
            <span className="label-xs opacity-60">Loading experience</span>
            <span className="font-display text-4xl tabular-nums tracking-tight sm:text-6xl">
              {String(progress).padStart(3, "0")}
            </span>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
