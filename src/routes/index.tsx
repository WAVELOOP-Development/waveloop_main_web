import { createFileRoute } from "@tanstack/react-router";
import { useCallback, useEffect, useState } from "react";

import { Preloader } from "@/components/layout/Preloader";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { TickerBands } from "@/components/sections/TickerBands";
import { InfinityCarousel } from "@/components/sections/infinitycarousel";
import { Intro } from "@/components/sections/Intro";
import { Services } from "@/components/sections/Services";
import { Work } from "@/components/sections/Work";
import { Capabilities } from "@/components/sections/Capabilities";
import { Process } from "@/components/sections/Process";
import { Journal } from "@/components/sections/Journal";
import { TrustedVisionariesSection } from "@/components/sections/blog";
import { CTA } from "@/components/sections/CTA";
import { BackToTop } from "@/components/ui/BackToTop";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { SelectedWork } from "@/components/sections/selectedwork";
import { ImpactNumbers } from "@/components/sections/impactnum";

const title = "Waveloop — Intelligent Digital Solutions";
const description =
  "Waveloop is a future-driven technology company crafting secure, user-first digital solutions: software engineering, mobile products, cloud platforms, cyber security and AI.";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Waveloop",
          description,
          url: "/",
          email: "hello@waveloop.dev",
        }),
      },
    ],
  }),
});

function Index() {
  const [ready, setReady] = useState(false);
  const handleDone = useCallback(() => setReady(true), []);

  // Failsafe: never let the hero stay hidden if the preloader is interrupted.
  useEffect(() => {
    const timer = window.setTimeout(() => setReady(true), 2600);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <>
      <Preloader onDone={handleDone} />
      <CustomCursor />
      <Navbar ready={ready} />

      <main>
        <Hero ready={ready} />
        {/* <InfinityCarousel /> */}
        <TickerBands />
        <Intro />
        <ImpactNumbers />
        <Services />
        <SelectedWork />
        {/* <Work /> */}
        <TrustedVisionariesSection id="testimonials" />
        <Capabilities />
        <Process />
        <Journal />
        <CTA />
      </main>

      <Footer />
      <BackToTop />
    </>
  );
}
