import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/data/selectedwork";

export function ProjectCard({ project, active }: { project: Project; active: boolean }) {
  const reduced = useReducedMotion();
  const category = project.services[0] ?? "Project";

  return (
    <motion.article
      data-cursor="project"
      className="group relative aspect-[4/3] w-full overflow-hidden rounded-[28px] bg-black md:rounded-[40px]"
      initial={false}
      animate={{ opacity: active ? 1 : 0, scale: reduced ? 1 : active ? 1 : 0.94 }}
      transition={{ duration: reduced ? 0 : 0.8, ease: [0.22, 1, 0.36, 1] }}
      style={{ pointerEvents: active ? "auto" : "none" }}
      aria-hidden={!active}
    >
      <img
        src={project.image}
        alt={`${project.title} — ${category} project preview`}
        loading="lazy"
        decoding="async"
        className="h-full w-full object-cover transition-transform duration-[1400ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-6 md:p-9">
        <div className="min-w-0">
          <p className="text-[11px] tracking-[0.16em] text-white/60 uppercase">{category}</p>
          <h3 className="mt-2 truncate text-4xl font-semibold tracking-[-0.05em] text-white md:text-6xl">
            {project.title}
          </h3>
        </div>
        <span className="hidden shrink-0 items-center gap-2 text-xs tracking-[0.12em] text-white/70 uppercase transition-transform duration-500 group-hover:-translate-y-1 sm:inline-flex">
          View project
          <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
        </span>
      </div>
    </motion.article>
  );
}
