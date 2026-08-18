import rescue from "@/assets/svc-health.jpg";
import events from "@/assets/work-events.jpg";
import fitness from "@/assets/work-fitness.jpg";

export type Project = {
  id: string;
  title: string;
  category: string;
  tags: string[];
  description: string;
  image: string;
  align: "left" | "right" | "wide";
};

export const projects: Project[] = [
  {
    id: "01",
    title: "RescueMed",
    category: "Healthcare",
    tags: ["Healthcare", "Emergency Services"],
    description:
      "A real-time emergency response platform that connects ambulance teams with hospitals to shorten critical response times.",
    image: rescue,
    align: "left",
  },
  {
    id: "02",
    title: "Ceylon Events",
    category: "Entertainment",
    tags: ["Events", "Entertainment"],
    description:
      "A mobile event management application that streamlines ticketing, attendee flow and on-site operations for large-scale events.",
    image: events,
    align: "right",
  },
  {
    id: "03",
    title: "FocusFitness",
    category: "Health & Fitness",
    tags: ["Health & Fitness", "Fitness Centers"],
    description:
      "A smart fitness management application for studios and gyms — class scheduling, member journeys and personalised coaching in one system.",
    image: fitness,
    align: "wide",
  },
];
