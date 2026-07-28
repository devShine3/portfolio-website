import styles from "./SystemPanel.module.css";

const layers = [
  { id: "01", label: "Clients", detail: "Next.js · mobile hub" },
  { id: "02", label: "Odoo domain", detail: "Workflows · ORM · APIs" },
  { id: "03", label: "PostgreSQL", detail: "Source of truth" },
] as const;

export default function SystemPanel() {
  return (
    <aside className={styles.panel} aria-label="System stack preview">
      <div className={styles.chrome}>
        <span className={styles.dot} />
        <span className={styles.dot} />
        <span className={styles.dot} />
        <span className={`mono ${styles.chromeLabel}`}>system · stack</span>
      </div>
      <ul className={styles.layers}>
        {layers.map((layer, i) => (
          <li
            key={layer.id}
            className={styles.layer}
            style={{ animationDelay: `${0.18 + i * 0.12}s` }}
          >
            <span className={styles.idx}>{layer.id}</span>
            <div>
              <strong>{layer.label}</strong>
              <p>{layer.detail}</p>
            </div>
          </li>
        ))}
      </ul>
      <p className={styles.foot}>
        <span className="mono">stack</span>
        batch ops · approvals · REST
      </p>
    </aside>
  );
}
