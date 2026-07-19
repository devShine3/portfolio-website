export type Experience = {
  id: string;
  period: string;
  role: string;
  company: string;
  bullets: string[];
  stack: string[];
};

export const experiences: Experience[] = [
  {
    id: "odoo-dev",
    period: "2022 — 2024",
    role: "Odoo Developer",
    company: "Myanmar Information Technology",
    bullets: [
      "Built and customized Odoo ERP modules for workshop fleet and hotel management.",
      "Implemented backend logic in Python with PostgreSQL persistence.",
      "Designed reports and dashboards with XML, JavaScript, and QWeb.",
    ],
    stack: ["Python", "Odoo", "Django", "PostgreSQL", "JavaScript"],
  },
  {
    id: "intern",
    period: "2022",
    role: "Developer Intern",
    company: "Myanmar Information Technology",
    bullets: [
      "Customized Odoo modules against client requirements.",
      "Shipped features, fixed issues, and documented processes.",
      "Grew Python and ERP skills on live projects.",
    ],
    stack: ["Python", "Odoo", "ERP"],
  },
  {
    id: "it-support",
    period: "2021 — 2022",
    role: "IT Support Specialist",
    company: "Kangle (Kyan Sit Min)",
    bullets: [
      "Resolved hardware, software, and network issues for daily operations.",
      "Supported marketing teams with digital tools and campaigns.",
    ],
    stack: ["Support", "Networking"],
  },
];
