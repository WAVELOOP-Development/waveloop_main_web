export type Stage = { id: string; title: string; description: string };

export const stages: Stage[] = [
  {
    id: "01",
    title: "Discover",
    description:
      "We start with the business, not the backlog. Stakeholder interviews, technical audits and a clear picture of what actually needs to change.",
  },
  {
    id: "02",
    title: "Define",
    description:
      "Scope, architecture and success metrics agreed up front, so every decision downstream has something to measure itself against.",
  },
  {
    id: "03",
    title: "Design",
    description:
      "Interface systems and product flows designed for the people who use them daily — considered, accessible, and built to scale.",
  },
  {
    id: "04",
    title: "Develop",
    description:
      "Engineering in short, reviewable increments. Clean architecture, automated testing and continuous delivery from day one.",
  },
  {
    id: "05",
    title: "Launch",
    description:
      "Hardening, observability and a controlled rollout. We ship with monitoring in place and a plan for the first ninety days.",
  },
  {
    id: "06",
    title: "Grow",
    description:
      "Iteration guided by real usage. We keep improving the product long after the launch announcement goes quiet.",
  },
];

export const capabilities = [
  { id: "01", title: "Web Development", meta: "React · Next · Node" },
  { id: "02", title: "Mobile Development", meta: "iOS · Android · Cross-platform" },
  { id: "03", title: "Cloud & DevOps", meta: "AWS · Azure · Kubernetes" },
  { id: "04", title: "Cyber Security", meta: "Audits · Hardening · Compliance" },
  { id: "05", title: "UI / UX Design", meta: "Systems · Prototypes · Research" },
  { id: "06", title: "Digital Strategy", meta: "Roadmaps · Discovery · Advisory" },
  { id: "07", title: "Automation & AI", meta: "LLM · Workflows · Data" },
  { id: "08", title: "Enterprise Solutions", meta: "Integration · Migration · Support" },
];

export const values = [
  { title: "Innovative", description: "New thinking, applied carefully." },
  { title: "Secure", description: "Security designed in, not bolted on." },
  { title: "Intelligent", description: "Systems that learn from their data." },
  { title: "User First", description: "People before platforms, always." },
];

export const posts = [
  {
    id: "01",
    category: "Technology",
    title: "How to start a digital transformation that actually finishes",
    meta: "8 min read",
  },
  {
    id: "02",
    category: "Design",
    title: "Designing interfaces for high-pressure environments",
    meta: "6 min read",
  },
  {
    id: "03",
    category: "Engineering",
    title: "Choosing a cloud architecture you will not regret",
    meta: "10 min read",
  },
];
