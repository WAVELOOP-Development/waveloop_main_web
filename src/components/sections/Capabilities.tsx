"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import svcSecurity from "@/assets/svc-security.jpg";
import svcCloud from "@/assets/svc-cloud.jpg";
import svcMobile from "@/assets/svc-mobile.jpg";
import svcAi from "@/assets/svc-ai.jpg";
import { capabilities } from "@/data/process";
import { Container, SectionLabel } from "@/components/ui/Container";
import { RevealText } from "@/components/motion/RevealText";

const previews = [
  svcMobile,
  svcMobile,
  svcCloud,
  svcSecurity,
  svcMobile,
  svcCloud,
  svcAi,
  svcSecurity,
];

export function Capabilities() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section id="capabilities" className="grain relative bg-background py-24 sm:py-32">
      <Container>
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <div className="max-w-3xl">
            <SectionLabel>Capabilities</SectionLabel>
            <RevealText as="h2" mode="line" className="display-lg mt-7">
              {`Everything we do,\nunder one roof.`}
            </RevealText>
          </div>
          <p className="max-w-xs text-sm text-muted-foreground">
            One accountable team across strategy, design, engineering and operations.
          </p>
        </div>

        <ul className="relative mt-14 border-t border-border">
          {capabilities.map((item, i) => (
            <li key={item.id} className="border-b border-border">
              <a
                href="/contact"
                onMouseEnter={() => setActive(i)}
                onMouseLeave={() => setActive(null)}
                onFocus={() => setActive(i)}
                onBlur={() => setActive(null)}
                className="group relative flex items-center justify-between gap-6 py-6 transition-colors sm:py-8"
              >
                <span className="flex items-baseline gap-5 sm:gap-10">
                  <span className="label-xs text-muted-foreground">{item.id}</span>
                  <span className="font-display text-2xl tracking-tight transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-2 group-hover:text-accent sm:text-4xl">
                    {item.title}
                  </span>
                </span>
                <span className="flex items-center gap-6">
                  <span className="hidden text-sm text-muted-foreground sm:block">{item.meta}</span>
                  <ArrowUpRight
                    className="size-5 shrink-0 text-muted-foreground transition-all duration-500 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-accent"
                    aria-hidden="true"
                  />
                </span>
              </a>
            </li>
          ))}

          {/* hover preview, desktop only */}
          {/* <AnimatePresence>
            {active !== null ? (
              <motion.div
                key={active}
                initial={{ opacity: 0, scale: 0.94, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="pointer-events-none absolute right-24 top-1/2 hidden h-56 w-72 -translate-y-1/2 overflow-hidden rounded-[22px] lg:block"
                aria-hidden="true"
              >
                <img
                  src={previews[active] ?? svcAi}
                  alt=""
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover"
                />
              </motion.div>
            ) : null}
          </AnimatePresence> */}
        </ul>
      </Container>
    </section>
  );
}
