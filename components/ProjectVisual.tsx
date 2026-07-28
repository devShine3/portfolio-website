import type { Project } from "@/content/projects";
import styles from "./ProjectVisual.module.css";

const visuals: Record<
  string,
  { eyebrow: string; lines: string[]; tone: "green" | "ink" | "warm" }
> = {
  "hr-ops-suite": {
    eyebrow: "Odoo 18 · Apps Store",
    lines: ["Transfer", "IT hardware", "Clearance · PDF"],
    tone: "green",
  },
  "hr-ops-portal": {
    eyebrow: "Next.js · portal",
    lines: ["Role actions", "Timeline", "Ops analytics"],
    tone: "ink",
  },
  lannpya: {
    eyebrow: "Live product",
    lines: ["Guides · news", "Myanmar UI", "Odoo content API"],
    tone: "warm",
  },
  shiftline: {
    eyebrow: "Ops desk UI",
    lines: ["Handover notes", "Blockers", "Acknowledge"],
    tone: "ink",
  },
  "fleet-hotel": {
    eyebrow: "Early ERP",
    lines: ["Fleet models", "Hotel views", "PostgreSQL"],
    tone: "warm",
  },
};

export default function ProjectVisual({ project }: { project: Project }) {
  const visual = visuals[project.id];
  if (!visual) return null;

  return (
    <div
      className={`${styles.frame} ${styles[visual.tone]}`}
      aria-hidden="true"
    >
      <div className={styles.bar}>
        <span className={styles.dots}>
          <i />
          <i />
          <i />
        </span>
        <span className={styles.eyebrow}>{visual.eyebrow}</span>
      </div>
      <div className={styles.body}>
        {visual.lines.map((line) => (
          <div key={line} className={styles.row}>
            <span className={styles.pill} />
            <span>{line}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
