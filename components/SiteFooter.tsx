import { site } from "@/content/education";
import styles from "./SiteFooter.module.css";

export default function SiteFooter() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <p className={styles.meta}>
          <span className="mono">devShine3</span>
          <span className={styles.sep}>·</span>
          <span>{site.location}</span>
        </p>
        <div className={styles.links}>
          <a href={`mailto:${site.email}`}>Email</a>
          <a href={site.github} target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a href={site.linkedin} target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
