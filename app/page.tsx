import Link from "next/link";
import { site } from "@/content/education";
import styles from "./page.module.css";

export default function HomePage() {
  return (
    <section className={`${styles.hero} page-enter`}>
      <p className={`mono ${styles.index}`}>index · portfolio</p>
      <h1 className={styles.name}>{site.nameDisplay}</h1>
      <p className={styles.tagline}>{site.tagline}</p>
      <div className={styles.cta}>
        <Link href="/work" className={styles.primary}>
          View work
        </Link>
        <a
          href={site.resume}
          className={styles.secondary}
          target="_blank"
          rel="noopener noreferrer"
        >
          Resume
        </a>
      </div>
      <p className={styles.meta}>
        <span className="mono">focus</span>
        <span>odoo · python · postgresql</span>
      </p>
    </section>
  );
}
