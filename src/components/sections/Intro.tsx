"use client";

import { Lightbulb, ShieldCheck, Sparkles, UserRound } from "lucide-react";
import aboutStudio from "@/assets/about-studio.jpg";
import { Container, SectionLabel } from "@/components/ui/Container";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { RevealText } from "@/components/motion/RevealText";
import { ImageReveal, Parallax } from "@/components/motion/Parallax";
import { values } from "@/data/process";

const icons = [Lightbulb, ShieldCheck, Sparkles, UserRound];

export function Intro() {
  return (
    <section
      id="company"
      className="grain relative overflow-hidden bg-ink py-24 text-[color:var(--paper)] sm:py-32"
    >
      {/* Giant faded watermark, sits behind everything — decorative only */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-8 -translate-x-1/2 select-none whitespace-nowrap bg-gradient-to-b from-transparent via-[color:var(--paper)]/[0.06] to-transparent bg-clip-text font-display text-[22vw] font-bold uppercase leading-none tracking-tight text-transparent sm:text-[16vw] lg:text-[13vw]"
      >
        Waveloop
      </span>

      <Container className="relative">
        <div className="grid items-start gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <Parallax distance={40}>
              <div className="relative overflow-hidden rounded-[28px]">
                <ImageReveal
                  src={aboutStudio}
                  alt="Three members of the Waveloop team reviewing product architecture in a dark studio"
                  width={1008}
                  height={1312}
                  className="rounded-[28px]"
                  imgClassName="aspect-[4/5] grayscale-[35%]"
                />

                {/* Stat overlay card, testimonials-style */}
                <div className="pointer-events-none absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/70 via-black/10 to-transparent p-6">
                  <span className="font-display text-5xl font-bold text-[color:var(--paper)] sm:text-6xl">
                    8+
                  </span>
                  <span className="mt-1.5 text-sm text-[color:var(--paper)]/70">
                    Years Building AI Platforms
                  </span>
                </div>
              </div>
            </Parallax>
          </div>

          <div className="lg:col-span-7 lg:pl-6">
            <SectionLabel className="text-[color:var(--paper)]/70">Who We Are</SectionLabel>

            <RevealText
              as="h2"
              mode="line"
              className="display-lg mt-7"
            >{`Creators of\nintelligent technology.`}</RevealText>

            <Reveal
              delay={0.1}
              className="mt-8 max-w-2xl space-y-5 text-base leading-relaxed text-[color:var(--paper)]/65 sm:text-lg"
            >
              <p>
                We are <span className="text-[color:var(--paper)]">Waveloop</span> — a future-driven
                technology company crafting secure, user-first solutions. We merge creativity with
                innovation to build bold AI platforms and seamless digital experiences.
              </p>
              <p>
                At our core, we are thinkers, builders and problem solvers shaping a smarter digital
                world for the businesses that rely on it.
              </p>
            </Reveal>

            <Stagger className="mt-14 grid grid-cols-2 gap-y-10 border-t border-[color:var(--paper)]/15 pt-10 sm:grid-cols-4">
              {values.map((value, i) => {
                const Icon = icons[i] ?? Sparkles;
                return (
                  <StaggerItem key={value.title} className="pr-4">
                    <Icon className="size-5 text-accent" aria-hidden="true" />
                    <h3 className="mt-4 font-display text-lg tracking-tight">{value.title}</h3>
                    <p className="mt-1.5 text-sm text-[color:var(--paper)]/50">
                      {value.description}
                    </p>
                  </StaggerItem>
                );
              })}
            </Stagger>
          </div>
        </div>
      </Container>
    </section>
  );
}
