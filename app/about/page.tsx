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
        <h1 className={styles.title}>Odoo & full-stack</h1>
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
            flows, expense and petty-cash batches, and the Python/PostgreSQL
            layers behind them.
          </p>
          <p>
            I also ship full products.{" "}
            <a href="https://lannpya.site" target="_blank" rel="noopener noreferrer">
              Lann Pya
            </a>{" "}
            is an Odoo-backed content platform with a Next.js front end for
            Myanmar-language guides, news, and community posts.{" "}
            <a
              href="https://apps.odoo.com/apps/modules/18.0/hr_ops_suite"
              target="_blank"
              rel="noopener noreferrer"
            >
              HR Ops Suite
            </a>{" "}
            is on the Odoo Apps Store.
          </p>
          <p>
            Day to day I work on models, approvals, REST APIs for mobile, and
            reports — the parts that make ERP usable day to day. See{" "}
            <Link href="/work">work</Link>,{" "}
            <Link href="/architecture">architecture</Link>, or press ⌘K.
          </p>
          <pre className={styles.snippet} aria-hidden="true">
            <code>{`# batch sheet · mapped() · REST hub
# Odoo models · PostgreSQL · Next.js products`}</code>
          </pre>
          <p className={styles.contact}>
            <span className="mono">based</span> {site.location}
          </p>
          <p className={styles.contact}>
            <span className="mono">contact</span>{" "}
            <a href={`mailto:${site.email}`}>{site.email}</a>
          </p>
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
