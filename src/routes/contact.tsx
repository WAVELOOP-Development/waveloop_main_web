import { createFileRoute } from "@tanstack/react-router";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ContactUs } from "@/components/sections/ContactUs/page";
import { BackToTop } from "@/components/ui/BackToTop";
import { CustomCursor } from "@/components/ui/CustomCursor";

const title = "Contact Waveloop — Start Your Project";
const description =
  "Contact Waveloop to discuss software, mobile, cloud, cybersecurity, AI and design projects.";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
});

function ContactPage() {
  return (
    <>
      <CustomCursor />
      <Navbar ready />
      <main>
        <ContactUs />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
