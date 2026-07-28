export type ProjectGroup = "public" | "enterprise" | "earlier";

export type Project = {
  id: string;
  /** Project headline shown on the Work page */
  title: string;
  summary: string;
  outcome?: string;
  /** Short tags shown under each project */
  metrics: string[];
  tags: string[];
  group: ProjectGroup;
  image?: string;
  github?: string;
  live?: string;
  /** Internal case study route, e.g. /work/petty-cash */
  caseStudy?: string;
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

export const projectGroups: {
  id: ProjectGroup;
  label: string;
  blurb: string;
}[] = [
  {
    id: "public",
    label: "Public products",
    blurb: "Apps Store listings, live sites, and public GitHub repos.",
  },
  {
    id: "enterprise",
    label: "Enterprise · private",
    blurb:
      "Production Odoo at work — finance batches, payroll, APIs, HR workflows. Source stays private.",
  },
  {
    id: "earlier",
    label: "Earlier delivery",
    blurb: "Earlier client Odoo modules for fleet and hotel ops.",
  },
];

export const projects: Project[] = [
  {
    id: "hr-ops-suite",
    group: "public",
    title:
      "Odoo 18 HR module on the Apps Store — transfer, IT hardware & clearance",
    summary:
      "Employee transfer, IT hardware, and clearance requests with multi-step approvals, checklist sign-off, PDF reports, and demo data. Packaged for Odoo 18 / LGPL so teams can install without a custom build.",
    outcome:
      "Listed on the Odoo Apps Store with installable package and GitHub source.",
    metrics: ["Odoo 18 Apps Store", "Approvals + PDFs", "Python / PostgreSQL"],
    tags: ["Odoo", "Python", "PostgreSQL"],
    github: "https://github.com/devShine3/hr-ops-suite",
    live: "https://apps.odoo.com/apps/modules/18.0/hr_ops_suite",
  },
  {
    id: "hr-ops-portal",
    group: "public",
    title:
      "Next.js HR portal — role actions, status timelines & reporting",
    summary:
      "Employee and manager UI for the same HR flows: dynamic forms, status timeline, checklist progress, and a reporting dashboard.",
    outcome:
      "Web UI for the HR workflows instead of only backend forms.",
    metrics: ["Next.js 15", "Role-based UX", "Analytics dashboard"],
    tags: ["Next.js", "APIs"],
    github: "https://github.com/devShine3/hr-request-portal",
    live: "https://hr-request-portal.vercel.app",
  },
  {
    id: "lannpya",
    group: "public",
    title:
      "Lann Pya — Odoo content backend + Next.js Myanmar guides site",
    summary:
      "Platform for Myanmar youth in the UAE: official guides, news, and community publishing. Odoo for content, auth, and REST; Next.js front end in Myanmar language.",
    outcome:
      "Live public site with editorial workflow and searchable guides.",
    metrics: ["Odoo + Next.js", "Live product", "REST APIs"],
    tags: ["Odoo", "Python", "Next.js", "APIs", "PostgreSQL"],
    live: "https://lannpya.site",
  },
  {
    id: "shiftline",
    group: "public",
    title:
      "Shiftline — shift-handover landing page and ops desk UI",
    summary:
      "Landing page, demo login, and an ops desk for shift handover notes with blockers, follow-ups, priority flags, and acknowledgements.",
    outcome:
      "Marketing site plus a small app shell for handover notes.",
    metrics: ["Next.js", "Ops UX", "Product UI"],
    tags: ["Next.js"],
    github: "https://github.com/devShine3/shiftline",
    live: "https://shiftline-blush.vercel.app",
  },
  {
    id: "petty-cash",
    group: "enterprise",
    title:
      "Batch petty-cash & expense ops — multi-approver sheets with project/city rules",
    summary:
      "Batch petty-cash flows, holder approval, project/city rules, and tighter expense-sheet behavior for day-to-day finance operations on Odoo.",
    outcome:
      "Ops submit and review cash in batches with utilization checks and project/city review — see case study.",
    metrics: ["Batch processing", "Odoo ORM", "Finance ops"],
    tags: ["Odoo", "Python", "PostgreSQL"],
    private: true,
    caseStudy: "/work/petty-cash",
  },
  {
    id: "payroll-costing",
    group: "enterprise",
    title:
      "Labor payroll & costing — batch payslips with project cost allocation",
    summary:
      "Payslip runs with labor payroll logic, cost attribution, reporting rules, and batch processing on top of Odoo payroll.",
    outcome:
      "Finance and HR can allocate labor cost and close payslip runs in Odoo — see case study.",
    metrics: ["Batch payslips", "Cost allocation", "PostgreSQL"],
    tags: ["Odoo", "Python", "PostgreSQL"],
    private: true,
    caseStudy: "/work/payroll",
  },
  {
    id: "mobile-api",
    group: "enterprise",
    title:
      "Central REST hub for mobile clients — auth, projects, HR & requests",
    summary:
      "REST layer for mobile and hub apps: auth, projects, HR, requests, and related domains with consistent JSON responses.",
    outcome:
      "One API layer for apps that need ERP data, instead of many one-off endpoints.",
    metrics: ["REST / JSON", "Auth layer", "Python / Odoo"],
    tags: ["Odoo", "Python", "APIs"],
    private: true,
  },
  {
    id: "request-platform",
    group: "enterprise",
    title:
      "HR request & clearance platform — transfers, IT hardware, exit flows",
    summary:
      "Request platform for employee transfers, IT hardware, clearance forms, and related HR ops — approvals, status tracking, and structured records.",
    outcome:
      "Staff requests and clearance run in Odoo instead of email and paper.",
    metrics: ["Workflows", "Approvals", "Record rules"],
    tags: ["Odoo", "Python", "PostgreSQL"],
    private: true,
  },
  {
    id: "fleet-hotel",
    group: "earlier",
    title:
      "Early Odoo modules for fleet & hotel ops — models, views, PostgreSQL",
    summary:
      "Earlier client Odoo work: workshop fleet tracking and hotel/workshop customizations (Python models, XML views, PostgreSQL).",
    outcome: "Client ERP customizations that started my Odoo work.",
    metrics: ["Odoo modules", "XML views", "Client delivery"],
    tags: ["Odoo", "Python", "PostgreSQL"],
    github: "https://github.com/devShine3/Shineworkshop",
  },
];
