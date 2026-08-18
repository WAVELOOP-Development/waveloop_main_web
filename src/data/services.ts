import security from "@/assets/svc-security.jpg";
import mobile from "@/assets/svc-mobile.jpg";
import ai from "@/assets/svc-ai.jpg";
import cloud from "@/assets/svc-cloud.jpg";
import health from "@/assets/svc-health.jpg";
import heroWake from "@/assets/hero-wake.jpg";

export type Service = {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  span: "feature" | "standard" | "compact";
};

export const services: Service[] = [
  {
    id: "01",
    title: "Cyber Security",
    category: "Security",
    description:
      "Comprehensive security reviews, hardening and monitoring that protect your digital assets and infrastructure end to end.",
    image: security,
    span: "feature",
  },
  {
    id: "02",
    title: "Mobile Development",
    category: "Product",
    description:
      "Native and cross-platform applications engineered for iOS and Android, built to feel effortless in the hand.",
    image: mobile,
    span: "standard",
  },
  {
    id: "03",
    title: "AI Powered Solutions",
    category: "Intelligence",
    description:
      "Machine learning and automation woven into real workflows, turning operational data into decisions.",
    image: ai,
    span: "standard",
  },
  {
    id: "04",
    title: "Cloud Based Services",
    category: "Infrastructure",
    description:
      "Scalable cloud architecture, migration and platform operations designed for resilience and growth.",
    image: cloud,
    span: "compact",
  },
  {
    id: "05",
    title: "Healthcare & Emergency Solutions",
    category: "Systems",
    description:
      "Mission-critical platforms for healthcare providers and emergency response teams, where uptime is not optional.",
    image: health,
    span: "compact",
  },
  {
    id: "06",
    title: "Web Development",
    category: "Experience",
    description:
      "Fast, accessible websites and digital platforms that turn a clear brand story into measurable business momentum.",
    image: heroWake,
    span: "compact",
  },
];
