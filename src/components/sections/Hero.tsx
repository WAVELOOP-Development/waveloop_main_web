"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import heroWake from "@/assets/hero-wake.jpg";
import { Container } from "@/components/ui/Container";
import { PillButton } from "@/components/ui/PillButton";

const EASE = [0.16, 1, 0.3, 1] as const;

export function Hero({ ready }: { ready: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const mediaScale = useTransform(scrollYProgress, [0, 1], [1, 1.12]);
  const mediaY = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, 120]);

  const show = (delay: number) => ({
    initial: { opacity: 0, y: 26 },
    animate: ready ? { opacity: 1, y: 0 } : { opacity: 0, y: 26 },
    transition: { duration: 1, ease: EASE, delay },
  });

  const lines = [
    <>
      Empowering <span className="accent-italic">Innovation</span>
    </>,
    <>Through Intelligent</>,
    <>Solutions</>,
  ];

  return (
    <section
      id="top"
      ref={ref}
      className="grain relative overflow-hidden bg-[#f2f2f2] pb-10 pt-28 sm:pt-32 lg:pb-16"
    >
      {/* soft radial wash */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-[70vh]"
        style={{
          background:
            "radial-gradient(120% 70% at 50% 0%, color-mix(in oklab, var(--accent) 12%, transparent) 0%, transparent 62%)",
        }}
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[size:2.5rem_2.5rem] opacity-70 sm:bg-[size:4rem_4rem]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgb(22 93 252 / 12%) 1px, transparent 1px), linear-gradient(to bottom, rgb(22 93 252 / 12%) 2px, transparent 2px)",
          maskImage: "radial-gradient(ellipse 82% 68% at 50% 38%, black 0%, transparent 78%)",
          WebkitMaskImage: "radial-gradient(ellipse 82% 68% at 50% 38%, black 0%, transparent 78%)",
        }}
      />

      <motion.div
        {...show(0.08)}
        className="absolute left-1/2 top-0 z-20 flex h-12 w-[min(23.5rem,calc(100vw-1.5rem))] -translate-x-1/2 items-center justify-center gap-3 rounded-b-[2rem] bg-[#303030] px-5 text-[#f2f2f2] sm:h-[3.35rem] sm:gap-4"
      >
        <span className="relative flex size-2.5 shrink-0 sm:size-3">
          <span className="absolute inline-flex size-full animate-ping rounded-full bg-[#56c94d] opacity-70" />
          <span className="relative inline-flex size-full rounded-full bg-[#56c94d]" />
        </span>
        <span className="whitespace-nowrap text-xs font-normal tracking-tight sm:text-[1.1rem]">
          Available for New Projects
        </span>
      </motion.div>

      <Container className="relative">
        <motion.div style={{ y: reduced ? 0 : textY }} className="relative mt-16 sm:mt-20">
          <h1 className="display-xl mx-auto max-w-[68rem] text-center">
            {lines.map((line, i) => (
              <span key={i} className="-mb-[0.14em] block overflow-hidden pb-[0.2em] last:mb-0">
                <motion.span
                  className="block will-change-transform"
                  initial={{ y: "110%" }}
                  animate={ready ? { y: "0%" } : { y: "110%" }}
                  transition={{ duration: 1.1, ease: EASE, delay: 0.25 + i * 0.11 }}
                >
                  {line}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.p
            {...show(0.7)}
            className="mx-auto mt-8 max-w-xl text-center text-base leading-relaxed text-muted-foreground sm:text-lg"
          >
            We are a future-driven technology company crafting secure, user-first products — merging
            creativity with engineering to build bold platforms and seamless digital experiences.
          </motion.p>

          <motion.div
            {...show(0.82)}
            className="mt-9 flex flex-wrap items-center justify-center gap-3"
          >
            <PillButton href="#services" size="lg">
              Wanna Know Us?
            </PillButton>
            <PillButton href="#works" variant="outline" size="lg">
              See Our Work
            </PillButton>
          </motion.div>
        </motion.div>
      </Container>

      {/* cinematic media band */}
      <motion.div
        className="relative mx-auto mt-14 w-full max-w-[92rem] px-5 sm:mt-20 sm:px-8 lg:px-14"
        initial={{ opacity: 0, y: 60 }}
        animate={ready ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
        transition={{ duration: 1.3, ease: EASE, delay: 0.55 }}
      >
        <div
          className="relative aspect-[16/10] w-full overflow-hidden rounded-[28px] bg-ink sm:aspect-[16/8] sm:rounded-[40px]"
          data-cursor="drag"
        >
          <motion.img
            src={heroWake}
            alt="Aerial view of a single rowing boat cutting a clean line through dark water"
            width={1600}
            height={912}
            loading="eager"
            decoding="async"
            className="h-full w-full object-cover"
            style={{ scale: reduced ? 1 : mediaScale, y: reduced ? 0 : mediaY }}
          />
          <div
            aria-hidden="true"
            className="absolute inset-0"
            style={{
              background: "linear-gradient(to top, oklch(0.16 0.005 60 / 55%) 0%, transparent 55%)",
            }}
          />

          <motion.div
            className="absolute bottom-5 left-5 right-5 flex flex-wrap items-end justify-between gap-4 sm:bottom-8 sm:left-8 sm:right-8"
            initial={{ opacity: 0, y: 24 }}
            animate={ready ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
            transition={{ duration: 1, ease: EASE, delay: 1 }}
          >
            <p className="label-xs max-w-[16rem] text-[color:var(--paper)]/70">
              Direction, engineering and momentum for ambitious teams
            </p>
            <div className="flex items-center gap-2 rounded-full border border-[color:var(--paper)]/25 px-4 py-2 text-[color:var(--paper)]">
              <ArrowDown className="size-3.5 animate-bounce" aria-hidden="true" />
              <span className="label-xs">Scroll</span>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
