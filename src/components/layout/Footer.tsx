"use client";

import { footerLinks, socials } from "@/data/navigation";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/motion/Reveal";
import { RevealText } from "@/components/motion/RevealText";
import { scrollToTarget } from "@/components/motion/SmoothScroll";

export function Footer() {
  const year = 2026;

  return (
    <footer className="grain relative overflow-hidden bg-ink pt-20 text-[color:var(--paper)] sm:pt-28">
      <Container>
        <RevealText as="h2" mode="line" className="display-lg max-w-4xl">
          {`Let's build something\nintelligent.`}
        </RevealText>

        <div className="mt-16 grid gap-12 border-t border-[color:var(--paper)]/15 pt-12 sm:grid-cols-2 lg:grid-cols-4">
          <Reveal className="sm:col-span-2 lg:col-span-1">
            <span className="font-display text-2xl font-semibold tracking-[-0.05em]">
              Wave<span className="text-accent">loop.</span>
            </span>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-[color:var(--paper)]/55">
              Empowering businesses with innovative solutions and cutting-edge technology.
            </p>
            <div className="mt-8">
              <p className="label-xs text-[color:var(--paper)]/70">Wanna stay connected?</p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {socials.map((social) => (
                  <li key={social.label}>
                    <a
                      href={social.href}
                      onClick={(e) => {
                        e.preventDefault();
                        scrollToTarget(social.href);
                      }}
                      className="inline-flex rounded-full border border-[color:var(--paper)]/22 px-4 py-2 text-xs transition-colors hover:border-accent hover:text-accent"
                    >
                      {social.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.05}>
            <h3 className="label-xs text-[color:var(--paper)]/70">Quick Links</h3>
            <ul className="mt-5 space-y-3">
              {footerLinks.quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToTarget(link.href);
                    }}
                    className="text-sm text-[color:var(--paper)]/60 transition-colors hover:text-accent"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.1} className="sm:col-span-1 lg:col-span-2">
            <h3 className="label-xs text-[color:var(--paper)]/70">Services</h3>
            <ul className="mt-5 space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToTarget(link.href);
                    }}
                    className="text-sm text-[color:var(--paper)]/60 transition-colors hover:text-accent"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-[color:var(--paper)]/15 py-8 text-xs text-[color:var(--paper)]/45 sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} Waveloop. All rights reserved.</p>
          <p>Terms &amp; Privacy Policy</p>
        </div>
      </Container>

      <div aria-hidden="true" className="select-none px-4 pb-2">
        <span className="block text-center font-display font-medium leading-[0.8] tracking-[-0.05em] text-[color:var(--paper)]/10 text-[19vw]">
          WAVELOOP
        </span>
      </div>
    </footer>
  );
}
