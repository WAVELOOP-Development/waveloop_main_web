import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useScroll } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/data/selectedwork";
import { ProjectCard } from "@/components/ui/projectcard";
import { Container } from "@/components/ui/Container";

const ease = [0.22, 1, 0.36, 1] as const;

export function SelectedWork() {
  const ref = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });

  useEffect(() => {
    return scrollYProgress.on("change", (v) => {
      const next = Math.min(projects.length - 1, Math.floor(v * projects.length));
      setIndex((prev) => (prev === next ? prev : next));
    });
  }, [scrollYProgress]);

  const active = projects[index] ?? projects[0]!;

  return (
    <section id="works" className="bg-ink text-white">
      <Container className="pt-24 sm:pt-28 lg:pt-36">
        <div className="flex flex-wrap items-end justify-between gap-6 border-b border-white/10 pb-10">
          <div>
            <p className="text-[11px] tracking-[0.16em] text-white/40 uppercase">(Selected Work)</p>
            <h2 className="display-md mt-6">Recent projects</h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-white/50">
            Five engagements from the last three years — brand systems, editorial sites and products
            built to last.
          </p>
        </div>
      </Container>

      <div ref={ref} style={{ height: `${projects.length * 90}vh` }} className="relative">
        <div className="sticky top-0 flex min-h-svh items-center">
          <Container className="grid gap-6 py-8 sm:py-12 lg:grid-cols-[minmax(0,220px)_minmax(0,1fr)_minmax(0,220px)] lg:items-center lg:gap-12 lg:py-24">
            <AnimatePresence mode="wait">
              <motion.div
                key={`meta-left-${active.id}`}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.5, ease }}
                className="order-2 lg:order-1"
              >
                <p className="text-[11px] tracking-[0.16em] text-white/40 uppercase">Overview</p>
                <p className="mt-4 text-sm leading-relaxed text-white/60">{active.description}</p>
                {/* <a
                  href="#contact"
                  data-cursor="button"
                  className="mt-6 inline-flex items-center gap-2 text-sm text-white/80 transition-colors hover:text-accent"
                >
                  {active.url}
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </a> */}
              </motion.div>
            </AnimatePresence>

            <div className="relative order-1 lg:order-2">
              <div className="relative">
                {projects.map((project, i) => (
                  <div key={project.id} className={i === 0 ? "" : "absolute inset-0"}>
                    <ProjectCard project={project} active={i === index} />
                  </div>
                ))}
              </div>

              <div className="mt-6 flex items-center justify-between text-[11px] tracking-[0.16em] text-white/40 uppercase">
                <span className="tabular-nums">
                  {active.id} / {String(projects.length).padStart(2, "0")}
                </span>
                <div className="flex gap-1.5" aria-hidden="true">
                  {projects.map((p, i) => (
                    <span
                      key={p.id}
                      className={`h-px w-8 transition-colors duration-500 ${
                        i === index ? "bg-accent" : "bg-white/20"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>

            <AnimatePresence mode="wait">
              <motion.dl
                key={`meta-right-${active.id}`}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.5, ease }}
                className="order-3 grid grid-cols-2 gap-6 lg:grid-cols-1"
              >
                {/* <div>
                  <dt className="text-[11px] tracking-[0.16em] text-white/40 uppercase">Year</dt>
                  <dd className="mt-2 text-sm text-white/80">{active.year}</dd>
                </div> */}
                {/* <div>
                  <dt className="text-[11px] tracking-[0.16em] text-white/40 uppercase">Role</dt>
                  <dd className="mt-2 text-sm text-white/80">{active.role}</dd>
                </div> */}
                <div className="col-span-2 lg:col-span-1">
                  <dt className="text-[11px] tracking-[0.16em] text-white/40 uppercase">
                    Services
                  </dt>
                  <dd className="mt-2 space-y-1 text-sm text-white/80">
                    {active.services.map((s) => (
                      <span key={s} className="block">
                        {s}
                      </span>
                    ))}
                  </dd>
                </div>
              </motion.dl>
            </AnimatePresence>
          </Container>
        </div>
      </div>
    </section>
  );
}
