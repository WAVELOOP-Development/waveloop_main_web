export type NavItem = { label: string; href: string };

export const navItems: NavItem[] = [
  { label: "Home", href: "#top" },
  { label: "Services", href: "#services" },
  { label: "Work", href: "#works" },
  { label: "Company", href: "#company" },
  { label: "Blog", href: "#blog" },
];

export const footerLinks = {
  quickLinks: [
    { label: "Home", href: "#top" },
    { label: "About Us", href: "#company" },
    { label: "Contact", href: "/contact" },
    { label: "Blog", href: "#blog" },
    { label: "Privacy Policy", href: "#contact" },
  ],
  services: [
    { label: "Innovative Software Solutions", href: "#services" },
    { label: "Mobile Application Development", href: "#services" },
    { label: "Cybersecurity & Data Protection", href: "#services" },
    { label: "Cloud-Based Solutions", href: "#services" },
    { label: "AI and Machine Learning Solutions", href: "#services" },
  ],
};

export const socials = [
  { label: "LinkedIn", href: "https://www.linkedin.com/company/waveloop-dev" },
  { label: "Email", href: "mailto:hello@waveloop.dev" },
];
