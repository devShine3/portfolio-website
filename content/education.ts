export type EducationItem = {
  id: string;
  year: string;
  institution: string;
  detail: string;
};

/** Order: foundation first, then continuing study — Odoo story stays primary on About */
export const education: EducationItem[] = [
  {
    id: "nmc",
    year: "2016",
    institution: "National Management College",
    detail: "Diploma in Information Technology — systems & programming foundation",
  },
  {
    id: "mern",
    year: "2025",
    institution: "Edoxi",
    detail: "Additional certification — MERN full-stack (supporting web work)",
  },
];

export const skills = {
  languages: ["Python", "JavaScript", "TypeScript", "SQL"],
  frameworks: ["Odoo", "Next.js", "React", "Django", "Node.js"],
  data: ["PostgreSQL", "MongoDB", "Redis"],
  practice: [
    "ERP workflows",
    "Payroll & costing",
    "REST APIs",
    "Approvals & ops finance",
  ],
} as const;

export const site = {
  name: "Htet Aung Shine",
  nameDisplay: "HTET AUNG SHINE",
  tagline: "Odoo systems · APIs · full-stack products",
  email: null as string | null,
  resume: "/HTETAUNGSHINE.pdf",
  github: "https://github.com/devShine3",
  linkedin: "https://www.linkedin.com/in/htet-aung-shine-813822233/",
  facebook: "https://www.facebook.com/htetag.shine.71/",
} as const;
