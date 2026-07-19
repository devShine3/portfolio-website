import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { education, skills, site } from "@/content/education";
import styles from "./about.module.css";

export const metadata: Metadata = {
  title: "About",
  description:
    "Htet Aung Shine — Odoo developer building ERP workflows, APIs, and products like Lann Pya.",
};

export default function AboutPage() {
  return (
    <section className={`${styles.page} page-enter`}>
      <header className={styles.header}>
        <p className="mono">03 / About</p>
        <h1 className={styles.title}>Odoo & systems engineer</h1>
      </header>

      <div className={styles.intro}>
        <div className={styles.portrait}>
          <Image
            src="/shine.jpeg"
            alt={site.name}
            width={320}
            height={400}
            className={styles.photo}
            priority
          />
        </div>
        <div className={styles.copy}>
          <p>
            I build production Odoo systems — payroll costing, employee request
            flows, expense and petty-cash ops, and the Python/PostgreSQL layers
            that keep them reliable for real teams.
          </p>
          <p>
            I also ship full products end to end.{" "}
            <a href="https://lannpya.site" target="_blank" rel="noopener noreferrer">
              Lann Pya
            </a>{" "}
            is one: an Odoo-backed content platform with a Next.js front end for
            Myanmar-language guides, news, and community publishing.
          </p>
          <p>
            Day to day I sit between process and code — models, approvals, REST
            APIs for mobile, reports — the work that makes ERP usable, not just
            installed. See{" "}
            <Link href="/work">selected work</Link>.
          </p>
          <pre className={styles.snippet} aria-hidden="true">
            <code>{`# api / payslip run / request.approve
# Odoo models · PostgreSQL · REST for mobile`}</code>
          </pre>
        </div>
      </div>

      <section className={styles.block}>
        <h2 className={styles.blockTitle}>
          <span className="mono">skills</span>
        </h2>
        <div className={styles.skillGrid}>
          <div>
            <h3 className="mono">Languages</h3>
            <ul>
              {skills.languages.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mono">Frameworks</h3>
            <ul>
              {skills.frameworks.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mono">Data</h3>
            <ul>
              {skills.data.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mono">Practice</h3>
            <ul>
              {skills.practice.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className={styles.block}>
        <h2 className={styles.blockTitle}>
          <span className="mono">background</span>
        </h2>
        <p className={styles.eduLead}>
          Formal study sits behind the work — Odoo and production systems are the
          main story.
        </p>
        <ul className={styles.eduList}>
          {education.map((item) => (
            <li key={item.id} className={styles.eduItem}>
              <span className="mono">{item.year}</span>
              <div>
                <strong>{item.institution}</strong>
                <p>{item.detail}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </section>
  );
}
