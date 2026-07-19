import { site } from "@/content/education";
import styles from "./SiteFooter.module.css";

export default function SiteFooter() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <p className={styles.meta}>
          <span className="mono">devShine3</span>
          <span className={styles.sep}>·</span>
          <span>Built with Next.js</span>
        </p>
        <div className={styles.links}>
          <a href={site.github} target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a href={site.linkedin} target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a href={site.facebook} target="_blank" rel="noopener noreferrer">
            Facebook
          </a>
        </div>
      </div>
    </footer>
  );
}
