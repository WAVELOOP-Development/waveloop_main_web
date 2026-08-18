"use client";

import { ArrowUpRight } from "lucide-react";
import { projects, type Project } from "@/data/projects";
import { Container, SectionLabel } from "@/components/ui/Container";
import { Reveal } from "@/components/motion/Reveal";
import { RevealText } from "@/components/motion/RevealText";
import { Parallax } from "@/components/motion/Parallax";

function ProjectRow({ project, index }: { project: Project; index: number }) {
  const isWide = project.align === "wide";
  const mediaFirst = project.align !== "right";

  return (
    <article
      className={`grid items-center gap-8 lg:gap-14 ${isWide ? "" : "lg:grid-cols-12"} ${
        index > 0 ? "border-t border-border pt-14 sm:pt-20" : ""
      }`}
    >
      <div
        className={
          isWide
            ? "order-1 w-full"
            : `order-1 lg:col-span-7 ${mediaFirst ? "" : "lg:order-2 lg:col-start-6"}`
        }
      >
        <Parallax distance={isWide ? 30 : 50}>
          <a
            href="#contact"
            data-cursor="view"
            className="group relative block overflow-hidden rounded-[26px] bg-ink"
            aria-label={`${project.title} case study`}
          >
            <img
              src={project.image}
              alt={`${project.title} — ${project.category} project preview`}
              loading="lazy"
              decoding="async"
              className={`w-full object-cover transition-transform duration-[1500ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.06] ${
                isWide ? "aspect-[16/9]" : "aspect-[4/3]"
              }`}
            />
            <span
              aria-hidden="true"
              className="absolute inset-0 bg-ink/10 opacity-0 transition-opacity duration-700 group-hover:opacity-100"
            />
            <span className="label-xs absolute left-5 top-5 rounded-full bg-[color:var(--paper)]/85 px-3 py-1.5 text-ink backdrop-blur-md">
              Project {project.id}
            </span>
          </a>
        </Parallax>
      </div>

      <div
        className={
          isWide
            ? "order-2 w-full"
            : `order-2 lg:col-span-5 ${mediaFirst ? "" : "lg:order-1 lg:row-start-1"}`
        }
      >
        <div
          className={
            isWide ? "flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between" : ""
          }
        >
          <div>
            <div className="flex flex-wrap items-center gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="label-xs rounded-full border border-border-strong px-3 py-1.5"
                >
                  {tag}
                </span>
              ))}
            </div>
            <h3 className="display-md mt-6">{project.title}</h3>
          </div>
          <p
            className={`mt-5 text-base leading-relaxed text-muted-foreground ${isWide ? "max-w-md lg:mt-0" : "max-w-md"}`}
          >
            {project.description}
          </p>
        </div>
        <a
          href="#contact"
          className="group mt-7 inline-flex items-center gap-2 border-b border-ink/25 pb-1 text-sm font-medium transition-colors hover:border-accent hover:text-accent"
        >
          View case study
          <ArrowUpRight
            className="size-4 transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1"
            aria-hidden="true"
          />
        </a>
      </div>
    </article>
  );
}

export function Work() {
  return (
    <section id="work" className="grain relative bg-secondary/40 py-24 sm:py-32">
      <Container>
        <div className="max-w-4xl">
          <SectionLabel>Our Featured Work</SectionLabel>
          <RevealText as="h2" mode="line" className="display-lg mt-7">
            {`Work that solves problems,\nbuilds brands and drives growth.`}
          </RevealText>
          <Reveal delay={0.1} className="mt-7 max-w-xl text-base text-muted-foreground">
            <p>
              In today&apos;s crowded digital world it is not about being louder — it is about being
              sharper. These are products we built and continue to grow with their teams.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 flex flex-col gap-14 sm:mt-20 sm:gap-20">
          {projects.map((project, i) => (
            <ProjectRow key={project.id} project={project} index={i} />
          ))}
        </div>
      </Container>
    </section>
  );
}
