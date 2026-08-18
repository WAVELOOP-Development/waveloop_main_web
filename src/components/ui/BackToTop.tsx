"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { scrollToTarget } from "@/components/motion/SmoothScroll";

export function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.9);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible ? (
        <motion.button
          type="button"
          onClick={() => scrollToTarget(0)}
          aria-label="Back to top"
          initial={{ opacity: 0, scale: 0.7, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.7, y: 16 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="group fixed bottom-6 right-5 z-[70] grid size-12 place-items-center rounded-full border border-border-strong bg-[color:var(--paper)]/80 text-ink shadow-[var(--shadow-float)] backdrop-blur-xl transition-colors duration-500 hover:bg-accent hover:text-accent-foreground sm:bottom-8 sm:right-8"
        >
          <ArrowUp
            className="size-4 transition-transform duration-500 group-hover:-translate-y-0.5"
            aria-hidden="true"
          />
        </motion.button>
      ) : null}
    </AnimatePresence>
  );
}
