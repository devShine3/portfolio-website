import type { Metadata } from "next";
import Image from "next/image";
import { education, skills, site } from "@/content/education";
import styles from "./about.module.css";

export const metadata: Metadata = {
  title: "About",
  description: "About Htet Aung Shine — Odoo and full-stack development.",
};

export default function AboutPage() {
  return (
    <section className={`${styles.page} page-enter`}>
      <header className={styles.header}>
        <p className="mono">03 / About</p>
        <h1 className={styles.title}>Builder of ERP systems</h1>
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
            I design and ship Odoo modules and full-stack features — Python
            backends, PostgreSQL models, and the XML/JS layers that make ERP
            workflows usable for real teams.
          </p>
          <p>
            Most of my work sits between business process and code: fleet
            operations, hotel flows, reports, and the quiet glue that keeps
            systems reliable.
          </p>
          <pre className={styles.snippet} aria-hidden="true">
            <code>{`# modules/fleet/models/vehicle.py
class FleetVehicle(models.Model):
    _name = "fleet.vehicle"
    name = fields.Char(required=True)`}</code>
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
          <span className="mono">education</span>
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
