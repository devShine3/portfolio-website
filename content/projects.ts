export type Project = {
  id: string;
  title: string;
  summary: string;
  outcome?: string;
  tags: string[];
  image?: string;
  github?: string;
  live?: string;
  /** When true (or when no public links), show a quiet private label */
  private?: boolean;
};

export const projectFilters = [
  "All",
  "Odoo",
  "Python",
  "Next.js",
  "APIs",
] as const;

export type ProjectFilter = (typeof projectFilters)[number];

export const projects: Project[] = [
  {
    id: "hr-ops-suite",
    title: "HR Ops Suite — Odoo app",
    summary:
      "Install-ready Odoo 18 application: employee transfer, IT hardware, and clearance requests with approvals, checklist sign-off, PDF reports, and demo data.",
    outcome:
      "Install → assign groups → run workflows without custom development.",
    tags: ["Odoo", "Python", "PostgreSQL"],
    github: "https://github.com/devShine3/hr-ops-suite",
    live: "https://apps.odoo.com/apps/modules/18.0/hr_ops_suite",
  },
  {
    id: "hr-ops-portal",
    title: "HR Ops Portal — frontend app",
    summary:
      "Next.js employee self-service portal UI for transfer, IT hardware, and clearance requests, with dynamic forms, role-based actions, status timeline, checklist progress, and ops analytics dashboard.",
    outcome:
      "Shows production-style frontend UX and reporting for the same HR workflows as the Odoo module.",
    tags: ["Next.js", "APIs"],
    github: "https://github.com/devShine3/hr-request-portal",
    live: "https://hr-request-portal.vercel.app",
  },
  {
    id: "lannpya",
    title: "Lann Pya — guides platform",
    summary:
      "Full product for Myanmar youth in the UAE: official guides, news, and community publishing. Odoo backend for content, auth, feeds, and REST APIs; Next.js front end in Myanmar language.",
    outcome:
      "Shipped as a live public site with editorial workflow, community posts, and searchable guide catalog.",
    tags: ["Odoo", "Python", "Next.js", "APIs", "PostgreSQL"],
    live: "https://lannpya.site",
  },
  {
    id: "payroll-costing",
    title: "Payroll & labor costing",
    summary:
      "Enterprise payslip runs with labor payroll logic, cost allocation, reporting rules, and batch processing on top of Odoo payroll — built for real close cycles, not demos.",
    outcome:
      "Finance and HR can attribute labor cost and close payslip runs with less spreadsheet work.",
    tags: ["Odoo", "Python", "PostgreSQL"],
    private: true,
  },
  {
    id: "request-platform",
    title: "HR requests & clearance",
    summary:
      "Unified request platform covering employee transfers, IT hardware, clearance forms, and related HR ops — approvals, status tracking, and structured records inside ERP.",
    outcome:
      "One path for staff requests and exit/clearance instead of email and paper trails.",
    tags: ["Odoo", "Python", "PostgreSQL"],
    private: true,
  },
  {
    id: "petty-cash",
    title: "Petty cash & expense ops",
    summary:
      "Batch petty-cash flows, holder approval, project/city governance, and tighter expense-sheet behavior for day-to-day finance operations.",
    outcome:
      "Ops teams submit and review cash in batches instead of one-off entries.",
    tags: ["Odoo", "Python", "PostgreSQL"],
    private: true,
  },
  {
    id: "mobile-api",
    title: "Mobile & hub API layer",
    summary:
      "Centralized REST layer for mobile and hub clients: auth, projects, HR, requests, and related domains — consistent responses and cache-ready services.",
    outcome:
      "One stable API surface for apps instead of scattered, one-off endpoints.",
    tags: ["Odoo", "Python", "APIs"],
    private: true,
  },
  {
    id: "fleet-hotel",
    title: "Early ERP modules — fleet & hotel",
    summary:
      "Earlier client Odoo work: workshop fleet tracking and hotel/workshop customizations (Python models, XML views, PostgreSQL).",
    outcome: "Foundation projects that shaped later enterprise ERP delivery.",
    tags: ["Odoo", "Python", "PostgreSQL"],
    github: "https://github.com/devShine3/Shineworkshop",
  },
];
