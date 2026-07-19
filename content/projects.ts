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
    title: "Payroll costing engine",
    summary:
      "Extended enterprise payslip runs with cost allocation, reporting rules, and batch processing on top of Odoo payroll.",
    outcome:
      "Finance and HR can attribute labor cost with less manual spreadsheet work after each run.",
    tags: ["Odoo", "Python", "PostgreSQL"],
    private: true,
  },
  {
    id: "request-platform",
    title: "Employee request platform",
    summary:
      "Multi-type request workflows — transfers, IT hardware, clearance, and related HR ops — with approvals, status tracking, and form-driven records.",
    outcome:
      "Replaced fragmented email/paper requests with one structured path inside ERP.",
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
    title: "Mobile backend API layer",
    summary:
      "Centralized REST layer for a mobile app: auth, domain controllers (HR, projects, requests), consistent responses, and cache-ready services.",
    outcome:
      "One stable API surface for mobile clients instead of ad-hoc endpoints.",
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
