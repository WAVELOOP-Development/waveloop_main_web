"use client";

import { lazy, Suspense, useState, type FormEvent } from "react";
import { Mail, MapPin, Phone, Upload } from "lucide-react";

import { Container } from "@/components/ui/Container";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
const ContactMap = lazy(() => import("@/components/sections/ContactUs/ContactMap"));

const projectTypes = [
  "Software Development",
  "Mobile Application",
  "Cybersecurity",
  "AI Solutions",
  "Cloud Services",
  "UI/UX Design",
  "Other",
];

const faqs = [
  {
    question: "What's your response time?",
    answer:
      "We normally respond to new project enquiries within one business day. Urgent support requests are prioritised immediately.",
  },
  {
    question: "Do you offer free consultations?",
    answer:
      "Yes. We offer an initial discovery call to understand your goals, constraints and the most useful next step for your project.",
  },
  {
    question: "What services do you provide?",
    answer:
      "We provide custom software, mobile application development, cybersecurity, cloud platforms, AI solutions and UI/UX design.",
  },
  {
    question: "How does your pricing work?",
    answer:
      "Pricing is based on project scope, complexity and delivery timeline. After discovery, we provide a clear proposal with milestones and costs.",
  },
  {
    question: "What kind of support do you provide after project completion?",
    answer:
      "We provide launch support, monitoring, maintenance, security updates and ongoing product improvements based on the needs of your team.",
  },
];

export function ContactUs() {
  const [projectType, setProjectType] = useState(projectTypes[0]);
  const [fileName, setFileName] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const subject = encodeURIComponent(
      `${projectType} enquiry from ${form.get("name") ?? "Website"}`,
    );
    const body = encodeURIComponent(
      `Project type: ${projectType}\n\nName: ${form.get("name") ?? ""}\nEmail: ${form.get("email") ?? ""}\nPhone: ${form.get("phone") ?? ""}\n\nProject details:\n${form.get("message") ?? ""}`,
    );

    window.location.href = `mailto:info@waveloop.dev?subject=${subject}&body=${body}`;
  }

  return (
    <section id="contact" className="bg-white pt-44 pb-24 text-[#10182a] sm:pt-52 sm:pb-32">
      <Container className="max-w-[78rem]">
        <header className="text-center">
          <p className="text-[11px] font-medium tracking-[0.2em] text-accent uppercase">
            Contact us
          </p>
          <h2 className="mt-4 font-display text-[clamp(2.5rem,5vw,4.75rem)] leading-[0.95] font-semibold tracking-[-0.055em] text-black">
            Stay connected with us
          </h2>
          <p className="mt-5 text-base text-slate-500 sm:text-xl">
            Ideas that spark innovation. Powered by WAVELOOP.
          </p>
        </header>

        <div className="mt-16 grid items-start gap-10 lg:mt-20 lg:grid-cols-[1.08fr_0.92fr] lg:gap-8">
          <div>
            <div className="grid gap-8 sm:grid-cols-2 sm:gap-10">
              <div>
                <span className="grid size-12 place-items-center rounded-xl bg-blue-50 text-accent">
                  <Phone className="size-5" aria-hidden="true" />
                </span>
                <h3 className="mt-3 text-lg font-semibold">Contact Numbers</h3>
                <div className="mt-2 space-y-1 text-sm text-slate-500 sm:text-base">
                  <p>
                    Main:{" "}
                    <a href="tel:+94719967276" className="hover:text-accent">
                      +94 71 996 7276
                    </a>
                  </p>
                  <p>
                    Support:{" "}
                    <a href="tel:+94701289704" className="hover:text-accent">
                      +94 70 128 9704
                    </a>
                  </p>
                </div>
              </div>

              <div>
                <span className="grid size-12 place-items-center rounded-xl bg-blue-50 text-accent">
                  <Mail className="size-5" aria-hidden="true" />
                </span>
                <h3 className="mt-3 text-lg font-semibold">Email Addresses</h3>
                <div className="mt-2 space-y-1 text-sm text-slate-500 sm:text-base">
                  <p>
                    General:{" "}
                    <a href="mailto:info@waveloop.dev" className="hover:text-accent">
                      info@waveloop.dev
                    </a>
                  </p>
                  <p>
                    Marketing:{" "}
                    <a href="mailto:marketing@waveloop.dev" className="hover:text-accent">
                      marketing@waveloop.dev
                    </a>
                  </p>
                </div>
              </div>
            </div>

            <div className="relative mt-12 h-[28rem] overflow-hidden rounded-2xl border border-black/10 shadow-[0_18px_45px_-30px_rgba(15,23,42,0.45)] sm:h-[38rem]">
              <Suspense
                fallback={
                  <div
                    className="h-full w-full animate-pulse bg-slate-100"
                    aria-label="Loading map"
                  />
                }
              >
                <ContactMap />
              </Suspense>

              <div className="pointer-events-none absolute top-3 left-3 z-10 flex items-center gap-3 rounded-lg bg-white px-4 py-3 shadow-md">
                <span className="grid size-8 place-items-center rounded-full bg-blue-50 text-accent">
                  <MapPin className="size-4" aria-hidden="true" />
                </span>
                <span>
                  <strong className="block text-sm">Colombo</strong>
                  <span className="block text-xs text-slate-500">Sri Lanka</span>
                </span>
              </div>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="rounded-2xl border border-black/10 bg-white p-6 shadow-[0_20px_55px_-32px_rgba(15,23,42,0.4)] sm:p-8"
          >
            <h3 className="max-w-md font-display text-3xl leading-[1.05] font-semibold tracking-[-0.035em] text-[#10182a] sm:text-4xl">
              Let us know what you&apos;re working on
            </h3>

            <fieldset className="mt-8">
              <legend className="text-sm text-slate-600">What&apos;s your project about?</legend>
              <div className="mt-3 flex flex-wrap gap-2">
                {projectTypes.map((type) => (
                  <button
                    key={type}
                    type="button"
                    onClick={() => setProjectType(type)}
                    aria-pressed={projectType === type}
                    className={`rounded-full border px-4 py-2 text-sm transition-colors ${
                      projectType === type
                        ? "border-accent bg-accent text-white"
                        : "border-slate-300 text-slate-600 hover:border-accent hover:text-accent"
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </fieldset>

            <div className="mt-7 space-y-1">
              <label htmlFor="contact-name" className="text-sm text-slate-600">
                Full Name *
              </label>
              <input
                id="contact-name"
                name="name"
                required
                autoComplete="name"
                className="h-10 w-full border-0 border-b border-slate-300 bg-transparent px-0 outline-none focus:border-accent"
              />
            </div>
            <div className="mt-5 space-y-1">
              <label htmlFor="contact-email" className="text-sm text-slate-600">
                Email Address *
              </label>
              <input
                id="contact-email"
                name="email"
                type="email"
                required
                autoComplete="email"
                className="h-10 w-full border-0 border-b border-slate-300 bg-transparent px-0 outline-none focus:border-accent"
              />
            </div>
            <div className="mt-5 space-y-1">
              <label htmlFor="contact-phone" className="text-sm text-slate-600">
                Phone Number
              </label>
              <input
                id="contact-phone"
                name="phone"
                type="tel"
                autoComplete="tel"
                className="h-10 w-full border-0 border-b border-slate-300 bg-transparent px-0 outline-none focus:border-accent"
              />
            </div>
            <div className="mt-5 space-y-2">
              <label htmlFor="contact-message" className="text-sm text-slate-600">
                Tell us about your project *
              </label>
              <textarea
                id="contact-message"
                name="message"
                required
                rows={3}
                className="w-full resize-none border-0 border-b border-slate-300 bg-transparent px-0 py-2 outline-none focus:border-accent"
              />
            </div>

            <div className="mt-6">
              <p className="text-sm text-slate-600">Attachments (Optional)</p>
              <label className="mt-2 flex min-h-32 cursor-pointer flex-col items-center justify-center rounded-xl border border-dashed border-slate-300 px-5 text-center transition-colors hover:border-accent">
                <Upload className="size-7 text-slate-400" aria-hidden="true" />
                <span className="mt-2 text-sm text-slate-600">
                  {fileName || "Click to upload or drag and drop"}
                </span>
                <span className="mt-1 text-xs text-slate-400">
                  Images, PDF, DOC, XLS, TXT, ZIP (Max 10MB)
                </span>
                <input
                  type="file"
                  className="sr-only"
                  accept="image/*,.pdf,.doc,.docx,.xls,.xlsx,.txt,.zip"
                  onChange={(event) => setFileName(event.target.files?.[0]?.name ?? "")}
                />
              </label>
            </div>

            <button
              type="submit"
              className="mt-8 w-full rounded-xl bg-[#06194f] px-6 py-4 text-sm font-semibold text-white shadow-lg transition-colors hover:bg-accent"
            >
              Send Message
            </button>
          </form>
        </div>

        <div className="mt-24 sm:mt-32">
          <h3 className="font-display text-3xl font-semibold tracking-[-0.035em]">
            Frequently Asked Questions
          </h3>
          <p className="mt-2 text-base text-slate-500 sm:text-lg">
            Find answers to common questions about our services and process.
          </p>

          <Accordion type="single" collapsible className="mt-10 space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={faq.question}
                value={`faq-${index}`}
                className="rounded-xl border border-slate-200 px-6"
              >
                <AccordionTrigger className="py-5 text-left text-base font-semibold hover:no-underline sm:text-lg">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="max-w-3xl pb-5 leading-relaxed text-slate-500">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </Container>
    </section>
  );
}
