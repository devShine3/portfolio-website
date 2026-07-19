import type { Metadata } from "next";
import { experiences } from "@/content/experience";
import styles from "./experience.module.css";

export const metadata: Metadata = {
  title: "Experience",
  description: "Professional experience in Odoo development and IT.",
};

export default function ExperiencePage() {
  return (
    <section className={`${styles.page} page-enter`}>
      <header className={styles.header}>
        <p className="mono">02 / Experience</p>
        <h1 className={styles.title}>Professional path</h1>
      </header>

      <ol className={styles.list}>
        {experiences.map((job) => (
          <li key={job.id} className={styles.item}>
            <div className={styles.meta}>
              <span className="mono">{job.period}</span>
            </div>
            <div className={styles.body}>
              <h2 className={styles.role}>{job.role}</h2>
              <p className={styles.company}>{job.company}</p>
              <ul className={styles.bullets}>
                {job.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
              <p className={styles.stack}>
                {job.stack.map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
