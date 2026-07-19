export type Experience = {
  id: string;
  period: string;
  role: string;
  company: string;
  location?: string;
  bullets: string[];
  stack: string[];
};

export const experiences: Experience[] = [
  {
    id: "elrace",
    period: "Feb 2026 — Present",
    role: "Developer",
    company: "El Race Cons. & Gen. Cont. Co. LLC",
    location: "On-site",
    bullets: [
      "Build and extend production Odoo ERP — payroll costing, employee request workflows, clearance and IT hardware requests.",
      "Ship ops-finance improvements for petty cash batches, expense approvals, and project/city governance.",
      "Maintain a centralized mobile API layer (auth, HR/projects/requests) with consistent REST responses.",
    ],
    stack: ["Python", "Odoo", "PostgreSQL", "APIs", "JavaScript"],
  },
  {
    id: "rons",
    period: "Jul 2025 — Jan 2026",
    role: "Developer",
    company: "Rons Enviro Care LLC",
    location: "Ras Al Khor · On-site",
    bullets: [
      "Full-time development supporting business systems and operational tooling.",
      "Work across data analysis and project delivery for day-to-day product and process needs.",
    ],
    stack: ["Python", "Data Analysis", "Project Delivery"],
  },
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
