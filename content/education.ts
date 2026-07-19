export type EducationItem = {
  id: string;
  year: string;
  institution: string;
  detail: string;
};

export const education: EducationItem[] = [
  {
    id: "mern",
    year: "2025",
    institution: "Edoxi",
    detail: "MERN Full Stack Development — certification",
  },
  {
    id: "nmc",
    year: "2016",
    institution: "National Management College",
    detail: "Diploma in Information Technology",
  },
  {
    id: "high-school",
    year: "2015",
    institution: "Basic Education High School",
    detail: "High School Diploma",
  },
];

export const skills = {
  languages: ["Python", "JavaScript", "TypeScript", "SQL"],
  frameworks: ["Odoo", "Django", "React", "Node.js", "Express"],
  data: ["PostgreSQL", "MongoDB"],
  practice: ["ERP customization", "REST APIs", "Reporting", "Debugging"],
} as const;

export const site = {
  name: "Htet Aung Shine",
  nameDisplay: "HTET AUNG SHINE",
  tagline: "Odoo & full-stack systems",
  email: null as string | null,
  resume: "/HTETAUNGSHINE.pdf",
  github: "https://github.com/devShine3",
  linkedin: "https://www.linkedin.com/in/htet-aung-shine-813822233/",
  facebook: "https://www.facebook.com/htetag.shine.71/",
} as const;
