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
    location: "Al Ain · On-site",
    bullets: [
      "Build and extend production Odoo: payroll and labor costing, HR requests and clearance, IT hardware workflows.",
      "Improve petty-cash batches, expense approvals, and project/city review rules.",
      "Maintain the mobile/hub REST API (auth, HR, projects, requests) with consistent JSON responses.",
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
    period: "Sep 2022 — Apr 2024",
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
    period: "Jul 2022 — Aug 2022",
    role: "Developer Intern",
    company: "Myanmar Information Technology",
    bullets: [
      "Customized Odoo modules for client needs.",
      "Added features, fixed bugs, and wrote documentation.",
      "Learned Python and ERP delivery on live projects.",
    ],
    stack: ["Python", "Odoo", "ERP"],
  },
  {
    id: "it-support",
    period: "Feb 2021 — May 2022",
    role: "IT Support Specialist",
    company: "Kangle (Kyan Sit Min)",
    bullets: [
      "Resolved hardware, software, and network issues for daily operations.",
      "Supported marketing teams with digital tools and campaigns.",
    ],
    stack: ["Support", "Networking"],
  },
];
