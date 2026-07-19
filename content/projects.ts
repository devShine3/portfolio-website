export type Project = {
  id: string;
  title: string;
  summary: string;
  tags: string[];
  image: string;
  github: string;
  live?: string;
};

export const projectFilters = [
  "All",
  "Python",
  "Django",
  "React",
  "Odoo",
] as const;

export type ProjectFilter = (typeof projectFilters)[number];

export const projects: Project[] = [
  {
    id: "fleet",
    title: "Odoo Fleet Operations",
    summary:
      "Custom Odoo module for workshop fleet tracking — Python models, PostgreSQL, and operational reporting for day-to-day vehicle workflows.",
    tags: ["Python", "Odoo", "PostgreSQL"],
    image: "/fleet.jpeg",
    github: "https://github.com/devShine3/Shineworkshop",
  },
  {
    id: "hotel",
    title: "Odoo Hotel Management",
    summary:
      "Tailored hotel and workshop ERP extensions — XML views, Python business logic, and PostgreSQL-backed records for client-specific flows.",
    tags: ["Python", "Odoo", "PostgreSQL"],
    image: "/hotel.jpeg",
    github: "https://github.com/devShine3/Shinehotelia",
  },
  {
    id: "django-portfolio",
    title: "Portfolio — Django",
    summary:
      "Earlier personal site built with Django and Bootstrap — server-rendered pages and a simple project showcase.",
    tags: ["Django", "Bootstrap", "Python"],
    image: "/favicon.jpeg",
    github: "https://github.com/devShine3/my-portfolio",
    live: "https://shine-portfolio.onrender.com/",
  },
  {
    id: "react-portfolio",
    title: "Portfolio — React",
    summary:
      "Client-side portfolio iteration in React — routing, project filters, and Vercel deployment.",
    tags: ["React", "Bootstrap"],
    image: "/bike.jpeg",
    github: "https://github.com/devShine3/portfolio-website",
    live: "https://portfolio-website-two-kohl.vercel.app/",
  },
];
