import rescue from "@/assets/projects/rescue.jpg";
import ceylonevents from "@/assets/projects/ceylonevents.png";
import focusfitness from "@/assets/projects/focusfitness.png";
import sandreva from "@/assets/projects/sandreva.jpg";
import tera from "@/assets/projects/tera.jpg";

export type Project = {
  id: string;
  title: string;
  // year: string;
  // role: string;
  // category: string;
  // url: string;
  description: string;
  services: string[];
  image: string;
};

export const projects: Project[] = [
  {
    id: "01",
    title: "RescueMed",
    description:
      "RescueMed is a real-time emergency response platform that connects ambulance teams with hospitals to streamline communication during patient transport. It enables secure sharing of vital patient data and estimated arrival times, allowing hospitals to prepare in advance and deliver faster, more effective care.",
    services: ["Website Design", "Art Direction", "Branding", "Development"],
    image: rescue,
  },
  {
    id: "02",
    title: "Ceylon Event",
    description:
      "Versatile event management application that streamlines event creation, user management, and ticket booking. The platform allows organizers to manage events efficiently, while users can easily browse, book, and manage their tickets through a seamless interface.",
    services: ["Brand Identity", "Packaging", "E-commerce", "Development"],
    image: ceylonevents,
  },
  {
    id: "03",
    title: "Focus Fitness",
    description:
      "smart fitness management application that offers user and schedule management, AI-powered personal training, and comprehensive tools for fitness center administration—including class scheduling, member tracking, and secure payment handling.",
    services: ["Motion Design", "Identity", "WebGL", "Development"],
    image: focusfitness,
  },
  // {
  //   id: "04",
  //   title: "Sandreva",
  //   year: "2024",
  //   role: "Lead Designer",
  //   category: "Fashion",
  //   url: "sandreva.com",
  //   description:
  //     "Seasonal lookbooks translated into a digital editorial with typography doing most of the talking.",
  //   services: ["Website Design", "Editorial", "Photography", "Development"],
  //   image: sandreva,
  // },
  // {
  //   id: "05",
  //   title: "Tera",
  //   year: "2023",
  //   role: "Product Designer",
  //   category: "Product",
  //   url: "tera.app",
  //   description:
  //     "A dense analytics product made calm — clear hierarchy, restrained colour, zero decoration.",
  //   services: ["Product Design", "Design System", "Prototyping", "Development"],
  //   image: tera,
  // },
];
