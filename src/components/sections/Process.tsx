"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { stages } from "@/data/process";
import { Container, SectionLabel } from "@/components/ui/Container";
import { RevealText } from "@/components/motion/RevealText";

function Stage({ stage, index }: { stage: (typeof stages)[number]; index: number }) {
  const ref = useRef<HTMLLIElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 82%", "start 42%"] });
  const opacity = useTransform(scrollYProgress, [0, 1], [0.28, 1]);
  const x = useTransform(scrollYProgress, [0, 1], [index % 2 === 0 ? -18 : 18, 0]);

  return (
    <motion.li
      ref={ref}
      style={{ opacity, x }}
      className="grid gap-4 border-t border-[color:var(--paper)]/15 py-8 sm:grid-cols-12 sm:gap-8 sm:py-10"
    >
      <span className="font-display text-5xl leading-none tracking-[-0.05em] text-accent sm:col-span-2 sm:text-6xl">
        {stage.id}
      </span>
      <h3 className="font-display text-3xl tracking-tight sm:col-span-4 sm:text-4xl">
        {stage.title}
      </h3>
      <p className="max-w-xl text-base leading-relaxed text-[color:var(--paper)]/60 sm:col-span-6">
        {stage.description}
      </p>
    </motion.li>
  );
}

export function Process() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 70%", "end 60%"] });
  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section
      id="process"
      className="grain relative bg-ink py-24 text-[color:var(--paper)] sm:py-32"
    >
      <Container>
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <div className="max-w-3xl">
            <SectionLabel className="text-[color:var(--paper)]/70">How We Work</SectionLabel>
            <RevealText as="h2" mode="line" className="display-lg mt-7">
              {`A process built for\nmomentum, not meetings.`}
            </RevealText>
          </div>
          <p className="max-w-xs text-sm text-[color:var(--paper)]/55">
            Six stages, one continuous conversation — from first audit to long-term growth.
          </p>
        </div>

        <div ref={ref} className="relative mt-14">
          <div
            aria-hidden="true"
            className="absolute left-0 top-0 hidden h-full w-px bg-[color:var(--paper)]/12 sm:block"
          >
            <motion.div className="h-full w-full origin-top bg-accent" style={{ scaleY }} />
          </div>
          <ul className="sm:pl-10">
            {stages.map((stage, i) => (
              <Stage key={stage.id} stage={stage} index={i} />
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
