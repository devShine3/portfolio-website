import Link from "next/link";
import { site } from "@/content/education";
import SystemPanel from "@/components/SystemPanel";
import styles from "./page.module.css";

export default function HomePage() {
  return (
    <section className={`${styles.hero} page-enter`}>
      <div className={styles.copy}>
        <p className={`mono ${styles.index}`}>portfolio</p>
        <h1 className={styles.name}>{site.nameDisplay}</h1>
        <p className={styles.tagline}>{site.tagline}</p>
        <p className={styles.pitch}>
          I build production Odoo systems — payroll, HR requests, petty cash,
          and REST APIs — and ship full-stack products like Lann Pya.
        </p>
        <div className={styles.cta}>
          <Link href="/work" className={styles.primary}>
            View work
          </Link>
          <Link href="/architecture" className={styles.secondary}>
            Architecture
          </Link>
          <a
            href={site.resume}
            className={styles.secondary}
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </a>
          <a href={`mailto:${site.email}`} className={styles.secondary}>
            Email
          </a>
        </div>
        <p className={styles.meta}>
          <span className="mono">focus</span>
          <span>odoo · python · full-stack</span>
        </p>
        <p className={styles.hint}>
          <span className="mono">tip</span>
          <span>
            <kbd className={styles.kbd}>⌘K</kbd> /{" "}
            <kbd className={styles.kbd}>Ctrl+K</kbd> to search · theme toggle in
            the nav
          </span>
        </p>
      </div>
      <SystemPanel />
    </section>
  );
}
