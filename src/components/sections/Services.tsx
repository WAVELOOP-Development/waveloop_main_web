import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { Container } from "@/components/ui/Container";
import { services } from "@/data/services";

const transition = {
  duration: 0.4,
  ease: [0.44, 0, 0.56, 1] as const,
};

function relativePosition(index: number, active: number) {
  const length = services.length;
  let position = (index - active + length) % length;

  if (position > length / 2) position -= length;
  return position;
}

function cardState(position: number) {
  if (position === 0) {
    return { left: "15%", width: "70%", height: 586, opacity: 1, scale: 1, zIndex: 3 };
  }

  if (position === -1) {
    return { left: "4%", width: "43%", height: 486, opacity: 1, scale: 1, zIndex: 2 };
  }

  if (position === 1) {
    return { left: "53%", width: "43%", height: 486, opacity: 1, scale: 1, zIndex: 2 };
  }

  if (position === -2) {
    return { left: "0%", width: "36%", height: 350, opacity: 1, scale: 1, zIndex: 1 };
  }

  if (position === 2) {
    return { left: "64%", width: "36%", height: 350, opacity: 1, scale: 1, zIndex: 1 };
  }

  return { left: "32%", width: "36%", height: 300, opacity: 0, scale: 0.9, zIndex: 0 };
}

export function Services() {
  const [active, setActive] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const reducedMotion = useReducedMotion();
  const service = services[active] ?? services[0]!;
  const carouselTransition = reducedMotion ? { ...transition, duration: 0 } : transition;

  const move = useCallback((direction: number) => {
    setActive((current) => (current + direction + services.length) % services.length);
  }, []);

  useEffect(() => {
    if (isPaused || reducedMotion) return;

    const interval = window.setInterval(() => move(1), 4000);
    return () => window.clearInterval(interval);
  }, [isPaused, move, reducedMotion]);

  return (
    <section id="services" className="overflow-hidden bg-paper py-24 sm:py-28 lg:py-36">
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-8 border-b border-black/10 pb-9">
          <div>
            <p className="text-[11px] tracking-[0.16em] text-black/45 uppercase">(Our services)</p>
            <h2 className="display-md mt-6 max-w-xl">Built for what comes next.</h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-black/55">
            From the first system sketch to production at scale, we build dependable digital
            products around real people and real business needs.
          </p>
        </div>

        <div
          className="mt-14 hidden items-center gap-5 lg:flex"
          role="region"
          aria-roledescription="carousel"
          aria-label="Waveloop services"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onFocusCapture={() => setIsPaused(true)}
          onBlurCapture={(event) => {
            if (!event.currentTarget.contains(event.relatedTarget)) setIsPaused(false);
          }}
          onKeyDown={(event) => {
            if (event.key === "ArrowLeft") move(-1);
            if (event.key === "ArrowRight") move(1);
          }}
        >
          <button
            type="button"
            onClick={() => move(-1)}
            className="relative z-10 grid size-12 shrink-0 place-items-center rounded-sm bg-black text-white transition-colors hover:bg-accent"
            aria-label="Previous service"
            data-cursor="button"
          >
            <ChevronLeft className="size-5" strokeWidth={2.25} />
          </button>

          <motion.div
            className="relative h-[586px] min-w-0 flex-1 touch-pan-y"
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.12}
            onDragEnd={(_, info) => {
              if (info.offset.x < -55) move(1);
              if (info.offset.x > 55) move(-1);
            }}
          >
            {services.map((item, index) => {
              const position = relativePosition(index, active);
              const isActive = position === 0;

              return (
                <motion.article
                  key={item.id}
                  className="absolute top-1/2 overflow-hidden bg-black shadow-2xl"
                  initial={false}
                  animate={{ ...cardState(position), y: "-50%" }}
                  transition={carouselTransition}
                  aria-hidden={!isActive}
                >
                  <motion.img
                    src={item.image}
                    alt=""
                    className="absolute inset-0 h-full w-full object-cover"
                    animate={{ scale: isActive ? 1 : 1.04 }}
                    transition={carouselTransition}
                    draggable={false}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/5 to-black/10" />

                  <motion.div
                    className="absolute inset-x-0 bottom-0 p-7 text-white sm:p-9"
                    animate={{ opacity: isActive ? 1 : 0 }}
                    transition={{ duration: 0.25 }}
                  >
                    <div className="flex items-center justify-between text-[10px] tracking-[0.18em] text-white/60 uppercase">
                      <span>{item.category}</span>
                      <span>{item.id}</span>
                    </div>
                    <h3 className="mt-4 max-w-xl text-3xl leading-none font-medium sm:text-4xl">
                      {item.title}
                    </h3>
                  </motion.div>
                </motion.article>
              );
            })}
          </motion.div>

          <button
            type="button"
            onClick={() => move(1)}
            className="relative z-10 grid size-12 shrink-0 place-items-center rounded-sm bg-black text-white transition-colors hover:bg-accent"
            aria-label="Next service"
            data-cursor="button"
          >
            <ChevronRight className="size-5" strokeWidth={2.25} />
          </button>
        </div>

        <div className="mt-6 hidden items-start justify-between gap-8 lg:flex">
          <AnimatePresence mode="wait">
            <motion.p
              key={service.id}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25 }}
              className="max-w-xl text-sm leading-relaxed text-black/55"
            >
              {service.description}
            </motion.p>
          </AnimatePresence>
          <div className="flex items-center gap-4 text-[11px] tracking-[0.16em] text-black/40 uppercase">
            <span className="text-black tabular-nums">{service.id}</span>
            <span className="h-px w-20 bg-black/15">
              <motion.span
                className="block h-full origin-left bg-accent"
                animate={{ scaleX: (active + 1) / services.length }}
                transition={carouselTransition}
              />
            </span>
            <span>{String(services.length).padStart(2, "0")}</span>
          </div>
        </div>

        <div className="mt-12 grid gap-6 lg:hidden">
          {services.map((item) => (
            <article key={item.id} className="group">
              <div className="relative h-[min(130vw,510px)] overflow-hidden bg-black">
                <img
                  src={item.image}
                  alt=""
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-black/10" />
                <div className="absolute inset-x-0 bottom-0 p-6 text-white sm:p-8">
                  <div className="flex justify-between text-[10px] tracking-[0.18em] text-white/60 uppercase">
                    <span>{item.category}</span>
                    <span>{item.id}</span>
                  </div>
                  <h3 className="mt-4 text-3xl leading-none font-medium">{item.title}</h3>
                </div>
              </div>
              <p className="mt-4 max-w-xl text-sm leading-relaxed text-black/55">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
