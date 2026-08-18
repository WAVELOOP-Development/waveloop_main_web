import dilpriya from "@/assets/dilpriya.jpeg";
import diluka from "@/assets/diluka.jpeg";
import athula from "@/assets/athula.jpeg";
import induwara from "@/assets/induwara.jpg";
import { ArrowUpRight } from "lucide-react";
import { Container, SectionLabel } from "@/components/ui/Container";

const visionaries = [
  {
    id: "1",
    name: "Hirushi Dilpriya",
    username: "Lecturer, University of Plymouth",
    url: "https://www.linkedin.com/in/hirushi-dilpriya-a5498a215/",
    body: "Thank you so much for adding value to our NSBM Math Master 2025 event. Anyone interested in working on projects, I highly recommend Waveloop.",
    img: dilpriya,
  },
  {
    id: "2",
    name: "Diluka Wijesinghe",
    username: "Lecturer, University of Plymouth",
    url: "https://www.linkedin.com/in/diluka-w-682502223/",
    body: "Collaborating with Waveloop has always been a positive experience. Their team is professional, dedicated, and consistently goes the extra mile to ensure high-quality outcomes.",
    img: diluka,
  },
  {
    id: "3",
    name: "Athula Weerasinghe",
    username: "VP, Digital Infrastructure, Nations Trust Bank PLC",
    url: "https://www.linkedin.com/in/athula-weerasinghe-bsc-eng-msc-infosec-mba-3205807/",
    body: "Waveloop really simplified our work. Their platform is easy to use, and we've seen a big improvement in how our team operates. Their support is excellent.",
    img: athula,
  },
  {
    id: "4",
    name: "Induwara Wickramasinghe",
    username: "CEO, I O N Groups Pvt Ltd",
    url: "https://www.linkedin.com/in/induwarawickramasinghe/",
    body: "Working with Waveloop was a real pleasure. Their technical expertise and commitment to delivering solid solutions make them a reliable partner.",
    img: induwara,
  },
];

type Visionary = (typeof visionaries)[number];

function VisionaryCard({ img, name, username, url, body }: Visionary) {
  return (
    <figure className="flex h-[20rem] w-[19rem] shrink-0 flex-col rounded-[24px] border border-border bg-card p-6 sm:h-[22rem] sm:w-[22rem]">
      <blockquote className="flex-1 text-sm leading-relaxed text-foreground sm:text-base">
        “{body}”
      </blockquote>
      <a
        href={url}
        target="_blank"
        rel="noreferrer"
        className="group mt-6 flex items-center gap-3 outline-offset-4"
        aria-label={`View ${name}'s LinkedIn profile`}
      >
        <img
          className="size-12 rounded-full object-cover"
          width={48}
          height={48}
          alt={`${name} sample portrait`}
          src={img}
          loading="lazy"
          decoding="async"
        />
        <figcaption className="min-w-0 flex-1">
          <span className="block text-sm font-medium text-foreground">{name}</span>
          <span className="mt-0.5 block text-xs text-muted-foreground">{username}</span>
        </figcaption>
        <ArrowUpRight
          className="size-4 shrink-0 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
          aria-hidden="true"
        />
      </a>
    </figure>
  );
}

interface TrustedVisionariesSectionProps {
  id?: string;
}

export function TrustedVisionariesSection({ id }: TrustedVisionariesSectionProps) {
  const cards = [...visionaries, ...visionaries];

  return (
    <section id={id} className="overflow-hidden bg-background pt-24 pb-12 sm:pt-32 sm:pb-16">
      <Container>
        <div className="max-w-2xl">
          <SectionLabel>Client perspectives</SectionLabel>
          <h2 className="display-lg mt-7">Endorsed by the bold.</h2>
          <p className="mt-6 text-sm leading-relaxed text-muted-foreground sm:text-base">
            Visionaries and industry leaders trust us to bring their digital ideas to life.
          </p>
        </div>

        <div className="relative mt-12 -mx-5 overflow-hidden sm:-mx-8 lg:-mx-14">
          <div className="marquee-track gap-4 px-5 hover:[animation-play-state:paused] sm:gap-5 sm:px-8 lg:px-14">
            {cards.map((visionary, index) => (
              <VisionaryCard key={`${visionary.id}-${index}`} {...visionary} />
            ))}
          </div>
          <div className="pointer-events-none absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-background sm:w-24" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-background sm:w-24" />
        </div>
      </Container>
    </section>
  );
}
