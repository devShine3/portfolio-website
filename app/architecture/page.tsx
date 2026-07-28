import type { Metadata } from "next";
import Link from "next/link";
import styles from "./architecture.module.css";

export const metadata: Metadata = {
  title: "Architecture",
  description:
    "How the main systems connect — HR Ops, finance/payroll, API hub, and Lann Pya.",
};

type Node = { label: string; detail?: string };

function Flow({
  title,
  subtitle,
  nodes,
  footers,
}: {
  title: string;
  subtitle: string;
  nodes: Node[];
  footers?: { href: string; label: string }[];
}) {
  return (
    <article className={styles.card}>
      <h2 className={styles.cardTitle}>{title}</h2>
      <p className={styles.cardLead}>{subtitle}</p>
      <ol className={styles.flow}>
        {nodes.map((node, i) => (
          <li key={node.label} className={styles.step}>
            <span className={styles.stepIndex}>
              {String(i + 1).padStart(2, "0")}
            </span>
            <div>
              <strong>{node.label}</strong>
              {node.detail ? <p>{node.detail}</p> : null}
            </div>
          </li>
        ))}
      </ol>
      {footers?.length ? (
        <div className={styles.caseLinks}>
          {footers.map((footer) => (
            <p key={footer.href} className={styles.caseLink}>
              <Link href={footer.href}>{footer.label}</Link>
            </p>
          ))}
        </div>
      ) : null}
    </article>
  );
}

export default function ArchitecturePage() {
  return (
    <section className={`${styles.page} page-enter`}>
      <header className={styles.header}>
        <p className="mono">04 / Architecture</p>
        <h1 className={styles.title}>System overview</h1>
        <p className={styles.lead}>
          How the main systems connect — Odoo modules, web front ends, APIs, and
          the database underneath.
        </p>
      </header>

      <div className={styles.grid}>
        <Flow
          title="HR Ops product stack"
          subtitle="Published Odoo module with a Next.js portal on the same workflows."
          nodes={[
            {
              label: "Next.js portal (employees / managers)",
              detail:
                "Forms, role actions, status timeline, checklist progress, analytics UI.",
            },
            {
              label: "Odoo 18 HR Ops Suite",
              detail:
                "Transfer, IT hardware, clearance models · multi-step approvals · PDF reports · security groups.",
            },
            {
              label: "PostgreSQL",
              detail:
                "Transactional records, attachment storage metadata, report data.",
            },
            {
              label: "Distribution",
              detail:
                "Odoo Apps Store package + GitHub source for install / review.",
            },
          ]}
        />

        <Flow
          title="Enterprise finance & payroll ops"
          subtitle="Private client work — batch petty cash, expenses, and payroll on Odoo."
          footers={[
            {
              href: "/work/petty-cash",
              label: "Petty-cash case study →",
            },
            {
              href: "/work/payroll",
              label: "Labor payroll case study →",
            },
          ]}
          nodes={[
            {
              label: "Users (finance / HR / holders)",
              detail: "Submit, approve, and close inside Odoo backends.",
            },
            {
              label: "Odoo apps (petty cash, expenses, payroll)",
              detail:
                "Batch sheets, multi-approver rules, project/city review, payslip / labor costing.",
            },
            {
              label: "ORM + PostgreSQL",
              detail:
                "Batch writes, constrained states, and reporting queries.",
            },
            {
              label: "Outputs",
              detail: "Approved sheets, payslip runs, cost allocation reports.",
            },
          ]}
        />

        <Flow
          title="Mobile / hub API layer"
          subtitle="REST APIs for mobile and hub apps that talk to the ERP."
          nodes={[
            {
              label: "Mobile & hub clients",
              detail: "Field and ops apps that call the API.",
            },
            {
              label: "REST controllers (Odoo)",
              detail:
                "Auth, projects, HR, requests — consistent JSON responses.",
            },
            {
              label: "Domain models + record rules",
              detail:
                "Business rules and access stay in Odoo; the API exposes them.",
            },
            {
              label: "PostgreSQL",
              detail: "Source of truth for transactional data returned to clients.",
            },
          ]}
        />

        <Flow
          title="Lann Pya product"
          subtitle="Public content site — Odoo backend, Myanmar Next.js front end."
          nodes={[
            {
              label: "Next.js (Myanmar UI)",
              detail: "Guides, news, and community pages.",
            },
            {
              label: "Odoo content / auth / feeds",
              detail: "Editorial workflow, users, REST for front-end consumption.",
            },
            {
              label: "PostgreSQL",
              detail: "Content and user data for the live site.",
            },
          ]}
        />
      </div>

      <p className={styles.footerNote}>
        For project details and links, see{" "}
        <Link href="/work">work</Link>.
      </p>
    </section>
  );
}
