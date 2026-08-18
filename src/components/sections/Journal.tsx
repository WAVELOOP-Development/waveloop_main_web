import { useState } from "react";
import { ArrowUpRight } from "lucide-react";

import { Container, SectionLabel } from "@/components/ui/Container";
import mathsmaster_cover from "@/assets/mathsmaster_cover.jpg";
import mobile_blog_1 from "@/assets/mobile_blog_1.jpeg";
import uiux from "@/assets/uiux.jpg";
import web from "@/assets/web.jpg";

const stories = [
  {
    number: "01",
    title: "WAVELOOP’s Role as Knowledge Partner at the NSBM Math Master 2025",
    category: "Events",
    date: "July 09, 2025 • 5 min read",
    image: mathsmaster_cover,
    position: "center",
  },
  {
    number: "02",
    title: "Cross‑Platform Showdown Flutter vs React Native vs Kotlin Multiplatform",
    category: "Technology",
    date: "July 09, 2025 • 5 min read",
    image: mobile_blog_1,
    position: "center",
  },
  {
    number: "03",
    title: "How to Start Your Journey in UI/UX Design: A Beginner’s Guide",
    category: "Design",
    date: "July 10, 2025 • 5 min read",
    image: uiux,
    position: "center",
  },
  {
    number: "04",
    title: "Building modern web and mobile applications seamlessly.",
    category: "Development",
    date: "July 30, 2025 • 5 min read",
    image: web,
    position: "center",
  },
];

export function Journal() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="journal" className="hidden bg-white py-24 text-ink md:block md:py-32 lg:py-36">
      <Container>
        <div className="mb-10 flex flex-col justify-between gap-8 sm:mb-14 lg:flex-row lg:items-end">
          <div>
            <SectionLabel className="text-ink/55">Journal</SectionLabel>
            <h2 className="display-lg mt-7 max-w-4xl">
              Ideas for a more <span className="text-ink">human</span> digital world.
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-ink/55 sm:text-base">
            Field notes on design, technology, and the decisions that turn useful products into
            memorable ones.
          </p>
        </div>

        <div className="grid gap-3 md:flex md:h-[42rem] md:gap-2" role="list">
          {stories.map((story, index) => {
            const active = activeIndex === index;

            return (
              <article
                key={story.number}
                role="listitem"
                onMouseEnter={() => setActiveIndex(index)}
                onFocusCapture={() => setActiveIndex(index)}
                onClick={() => setActiveIndex(index)}
                className={`group relative min-h-[28rem] cursor-pointer overflow-hidden rounded-[1.5rem] bg-ink/5 text-white transition-[flex] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] md:min-h-0 md:min-w-0 ${
                  active ? "md:flex-[2.2]" : "md:flex-1"
                }`}
              >
                <img
                  src={story.image}
                  alt=""
                  loading="lazy"
                  decoding="async"
                  className={`absolute inset-0 h-full w-full object-cover transition duration-700 ease-out ${
                    active ? "scale-105 grayscale-0" : "scale-100 grayscale-[35%]"
                  }`}
                  style={{ objectPosition: story.position }}
                />
                <div
                  className={`absolute inset-0 transition-colors duration-700 ${
                    active ? "bg-[#071736]/62" : "bg-black/20"
                  }`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/10 to-black/10" />

                <div className="absolute inset-x-0 top-0 flex items-center justify-between p-6 sm:p-7">
                  <span className="text-xs tracking-[0.18em] text-white/65">{story.number}</span>
                  <span
                    className={`h-px bg-white/60 transition-all duration-500 ${active ? "w-12" : "w-6"}`}
                    aria-hidden="true"
                  />
                </div>

                <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                  <div
                    className={`mb-4 flex items-center gap-3 text-[10px] tracking-[0.16em] text-white/60 uppercase transition duration-500 ${
                      active ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0 md:opacity-0"
                    }`}
                  >
                    <span>{story.category}</span>
                    <span className="size-1 rounded-full bg-accent" />
                    <time>{story.date}</time>
                  </div>
                  <h3
                    className={`max-w-xl text-2xl leading-[1.06] font-medium transition-opacity duration-500 sm:text-3xl lg:text-[2.65rem] ${
                      active ? "md:opacity-100" : "md:opacity-0"
                    }`}
                  >
                    {story.title}
                  </h3>
                  <a
                    href="#contact"
                    aria-label={`Read ${story.title}`}
                    className={`mt-6 inline-flex items-center gap-2 text-sm text-white transition duration-500 hover:text-accent ${
                      active ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
                    }`}
                  >
                    Read the story
                    <ArrowUpRight className="size-4" aria-hidden="true" />
                  </a>
                </div>
              </article>
            );
          })}
        </div>

        <div className="mt-8 flex items-center justify-between border-t border-ink/15 pt-5 text-[10px] tracking-[0.18em] text-ink/45 uppercase">
          <span>Selected writing</span>
          <span className="tabular-nums">{stories.length} stories · 2026</span>
        </div>
      </Container>
    </section>
  );
}
