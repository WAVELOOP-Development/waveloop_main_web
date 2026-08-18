"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react";
import { navItems } from "@/data/navigation";
import { scrollToTarget } from "@/components/motion/SmoothScroll";
import { PillButton } from "@/components/ui/PillButton";

const EASE = [0.16, 1, 0.3, 1] as const;
const companyLinks = [
  { label: "Testimonials", href: "#testimonials" },
  { label: "Careers", href: "mailto:hello@waveloop.dev?subject=Career%20opportunity" },
];

export function Navbar({ ready }: { ready: boolean }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [companyOpen, setCompanyOpen] = useState(false);
  const [mobileCompanyOpen, setMobileCompanyOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const go = (href: string) => {
    setMenuOpen(false);
    setCompanyOpen(false);
    setMobileCompanyOpen(false);
    if (href.startsWith("#") && window.location.pathname !== "/") {
      window.location.href = `/${href}`;
      return;
    }
    scrollToTarget(href);
  };

  return (
    <>
      <motion.header
        className="fixed inset-x-0 top-0 z-[80] flex justify-center px-5 pt-16 sm:px-8 sm:pt-[4.5rem] lg:px-14"
        initial={{ y: -40, opacity: 0 }}
        animate={ready ? { y: 0, opacity: 1 } : { y: -40, opacity: 0 }}
        transition={{ duration: 1, ease: EASE, delay: 0.1 }}
      >
        <nav
          aria-label="Primary"
          className={`flex w-full max-w-[92rem] items-center justify-between rounded-full border transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            scrolled
              ? "border-border-strong bg-[color:var(--paper)]/70 px-4 py-2.5 backdrop-blur-2xl shadow-[var(--shadow-float)] sm:px-5"
              : "border-transparent bg-transparent px-2 py-3 sm:px-4"
          }`}
        >
          <a
            href="#top"
            onClick={(e) => {
              e.preventDefault();
              go("#top");
            }}
            className="inline-flex items-center"
            aria-label="Waveloop home"
          >
            <img
              src="/logo.png"
              alt="Waveloop"
              width={191}
              height={30}
              className="h-6 w-auto sm:h-7"
            />
          </a>

          <ul className="hidden items-center gap-1 md:flex">
            {navItems.map((item) => {
              const navTextClass = scrolled
                ? "text-ink/70 hover:text-ink"
                : "text-ink/70 hover:text-ink";

              if (item.label === "Company") {
                return (
                  <li
                    key={item.label}
                    className="relative"
                    onMouseEnter={() => setCompanyOpen(true)}
                    onMouseLeave={() => setCompanyOpen(false)}
                  >
                    <button
                      type="button"
                      aria-expanded={companyOpen}
                      aria-haspopup="menu"
                      onClick={() => setCompanyOpen((open) => !open)}
                      className={`group flex items-center gap-1.5 rounded-full px-4 py-2 text-sm transition-colors ${navTextClass}`}
                    >
                      <span>Company</span>
                      <ChevronDown
                        className={`size-3.5 transition-transform duration-300 ${companyOpen ? "rotate-180" : ""}`}
                        aria-hidden="true"
                      />
                    </button>

                    <AnimatePresence>
                      {companyOpen ? (
                        <motion.div
                          role="menu"
                          initial={{ opacity: 0, y: 8, scale: 0.96 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 8, scale: 0.96 }}
                          transition={{ duration: 0.2, ease: EASE }}
                          className="absolute left-1/2 top-full z-20 mt-2 w-48 -translate-x-1/2 rounded-2xl border border-border-strong bg-[color:var(--paper)]/95 p-2 shadow-[var(--shadow-lift)] backdrop-blur-xl"
                        >
                          {companyLinks.map((link) => (
                            <a
                              key={link.label}
                              href={link.href}
                              role="menuitem"
                              onClick={(event) => {
                                if (link.href.startsWith("#")) {
                                  event.preventDefault();
                                  go(link.href);
                                }
                                setCompanyOpen(false);
                              }}
                              className="flex items-center rounded-xl px-3 py-2.5 text-sm text-ink/75 transition-colors hover:bg-accent/10 hover:text-accent"
                            >
                              {link.label}
                            </a>
                          ))}
                        </motion.div>
                      ) : null}
                    </AnimatePresence>
                  </li>
                );
              }

              return (
                <li key={item.label}>
                  <a
                    href={item.href}
                    onClick={(event) => {
                      event.preventDefault();
                      go(item.href);
                    }}
                    className={`group relative block overflow-hidden rounded-full px-4 py-2 text-sm transition-colors ${navTextClass}`}
                  >
                    <span className="block transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-full">
                      {item.label}
                    </span>
                    <span className="absolute inset-0 flex translate-y-full items-center justify-center text-accent transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-y-0">
                      {item.label}
                    </span>
                  </a>
                </li>
              );
            })}
          </ul>

          <div className="flex items-center gap-2">
            <div className="hidden md:block">
              <PillButton
                href="/contact"
                size="sm"
                arrow={false}
                className={
                  scrolled
                    ? undefined
                    : "!bg-[color:var(--paper)] !text-ink hover:!bg-accent hover:!text-[color:var(--paper)]"
                }
              >
                Contact Us
              </PillButton>
            </div>
            <button
              type="button"
              aria-label="Open menu"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen(true)}
              className={`grid size-11 place-items-center rounded-full border transition-colors md:hidden ${
                scrolled
                  ? "border-border-strong text-ink hover:bg-ink hover:text-[color:var(--paper)]"
                  : "border-ink/25 text-ink hover:bg-ink hover:text-[color:var(--paper)]"
              }`}
            >
              <Menu className="size-4" aria-hidden="true" />
            </button>
          </div>
        </nav>
      </motion.header>

      <AnimatePresence>
        {menuOpen ? (
          <motion.div
            className="grain fixed inset-0 z-[95] flex flex-col bg-ink px-5 pb-10 pt-6 text-[color:var(--paper)] md:hidden"
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            exit={{ clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.7, ease: EASE }}
          >
            <div className="flex items-center justify-between">
              <img
                src="/logo.png"
                alt="Waveloop"
                width={191}
                height={30}
                className="h-6 w-auto brightness-0 invert"
              />
              <button
                type="button"
                aria-label="Close menu"
                onClick={() => setMenuOpen(false)}
                className="grid size-11 place-items-center rounded-full border border-[color:var(--paper)]/25"
              >
                <X className="size-4" aria-hidden="true" />
              </button>
            </div>

            <ul className="mt-16 flex flex-col gap-2">
              {navItems.map((item, i) => {
                if (item.label === "Company") {
                  return (
                    <li key={item.label}>
                      <motion.button
                        type="button"
                        onClick={() => setMobileCompanyOpen((open) => !open)}
                        aria-expanded={mobileCompanyOpen}
                        className="flex w-full items-center justify-between font-display text-[13vw] font-medium leading-[1.05] tracking-[-0.045em]"
                        initial={{ y: "110%" }}
                        animate={{ y: "0%" }}
                        transition={{ duration: 0.8, ease: EASE, delay: 0.12 + i * 0.06 }}
                      >
                        Company
                        <ChevronDown
                          className={`mr-3 size-7 transition-transform duration-300 ${mobileCompanyOpen ? "rotate-180" : ""}`}
                          aria-hidden="true"
                        />
                      </motion.button>
                      <AnimatePresence initial={false}>
                        {mobileCompanyOpen ? (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden pl-2 pt-3"
                          >
                            {companyLinks.map((link) => (
                              <a
                                key={link.label}
                                href={link.href}
                                onClick={(event) => {
                                  setMenuOpen(false);
                                  setMobileCompanyOpen(false);
                                  if (link.href.startsWith("#")) {
                                    event.preventDefault();
                                    go(link.href);
                                  }
                                }}
                                className="block py-2 text-xl text-[color:var(--paper)]/65 transition-colors hover:text-accent"
                              >
                                {link.label}
                              </a>
                            ))}
                          </motion.div>
                        ) : null}
                      </AnimatePresence>
                    </li>
                  );
                }

                return (
                  <li key={item.label} className="overflow-hidden">
                    <motion.a
                      href={item.href}
                      onClick={(event) => {
                        event.preventDefault();
                        go(item.href);
                      }}
                      className="block font-display text-[13vw] font-medium leading-[1.05] tracking-[-0.045em]"
                      initial={{ y: "110%" }}
                      animate={{ y: "0%" }}
                      transition={{ duration: 0.8, ease: EASE, delay: 0.12 + i * 0.06 }}
                    >
                      {item.label}
                    </motion.a>
                  </li>
                );
              })}
            </ul>

            <div className="mt-auto flex flex-col gap-6">
              <p className="max-w-xs text-sm text-[color:var(--paper)]/60">
                Empowering businesses with innovative solutions and cutting-edge technology.
              </p>
              <PillButton href="/contact" variant="accent">
                Start Your Project
              </PillButton>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
