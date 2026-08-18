const partners = [
  { name: "NATIONS TRUST", detail: "BANK" },
  { name: "NSBM", detail: "GREEN UNIVERSITY" },
  { name: "ION", detail: "GROUPS" },
  { name: "CLOUDWAVE", detail: "TECHNOLOGIES" },
  { name: "HORIZON", detail: "DIGITAL" },
  { name: "NEXUS", detail: "SYSTEMS" },
];

function PartnerMark({ name, detail }: (typeof partners)[number]) {
  return (
    <div className="flex min-w-44 items-center justify-center gap-2 px-7 text-center text-black sm:min-w-52 sm:px-10">
      <span className="font-display text-lg font-semibold tracking-[-0.06em] sm:text-2xl">
        {name}
      </span>

      <span className="text-[8px] font-semibold tracking-[0.15em] sm:text-[9px]">{detail}</span>
    </div>
  );
}

/** A seamless horizontal logo strip that pauses when hovered or focused. */
export function InfinityCarousel() {
  const items = [...partners, ...partners];

  return (
    <section aria-label="Selected clients" className="overflow-hidden py-4 sm:py-8">
      <div className="border-y border-black bg-white py-3 sm:py-4">
        <div className="marquee-track items-center hover:[animation-play-state:paused] focus-within:[animation-play-state:paused]">
          {items.map((partner, index) => (
            <PartnerMark key={`${partner.name}-${index}`} {...partner} />
          ))}
        </div>
      </div>
    </section>
  );
}
