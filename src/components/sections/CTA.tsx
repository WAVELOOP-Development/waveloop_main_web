"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import ctaSky from "@/assets/cta-sky.jpg";
import { Container, SectionLabel } from "@/components/ui/Container";
import { PillButton } from "@/components/ui/PillButton";
import { RevealText } from "@/components/motion/RevealText";
import { Reveal } from "@/components/motion/Reveal";
import { Marquee } from "@/components/motion/Marquee";

export function CTA() {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], [-40, 40]);

  return (
    <section
      id="project-cta"
      ref={ref}
      className="grain relative overflow-hidden bg-ink py-24 text-[color:var(--paper)] sm:py-32"
    >
      {/* oversized outlined type drifting behind the CTA */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-10 opacity-[0.07]"
      >
        <Marquee
          items={["Let's build", "Something intelligent"]}
          duration={44}
          className="font-display text-[16vw] font-medium leading-none tracking-[-0.05em]"
          separator="—"
        />
      </div>

      <Container className="relative">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <SectionLabel className="text-[color:var(--paper)]/70">
              Don&apos;t miss the digital leap
            </SectionLabel>
            <RevealText as="h2" mode="line" className="display-lg mt-7">
              {`Let's take your digital\nstrategy to the next level.`}
            </RevealText>
            <Reveal
              delay={0.1}
              className="mt-8 max-w-xl text-base leading-relaxed text-[color:var(--paper)]/65 sm:text-lg"
            >
              <p>
                Partner with us to unlock your business potential through innovative digital
                solutions. Get in touch and let&apos;s discuss how we can elevate your digital
                presence.
              </p>
            </Reveal>
            <div className="mt-10 flex flex-wrap items-center gap-3">
              <PillButton href="/contact" variant="accent" size="lg">
                Start Your Project
              </PillButton>
              <a
                href="mailto:hello@waveloop.dev"
                className="group inline-flex items-center gap-2 border-b border-[color:var(--paper)]/30 pb-1 text-sm transition-colors hover:border-accent hover:text-accent"
              >
                info@waveloop.dev
              </a>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="overflow-hidden rounded-[28px]">
              <motion.img
                src={ctaSky}
                alt="Glass towers seen from below with an aircraft crossing the sky"
                width={1400}
                height={900}
                loading="lazy"
                decoding="async"
                className="aspect-[4/5] w-full object-cover"
                style={{ y: reduced ? 0 : imgY, scale: 1.12 }}
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
