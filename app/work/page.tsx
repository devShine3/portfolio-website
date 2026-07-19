import type { Metadata } from "next";
import WorkList from "@/components/WorkList";
import styles from "./work.module.css";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Selected work — Odoo ERP systems, APIs, and Lann Pya (Next.js + Odoo).",
};

export default function WorkPage() {
  return (
    <section className={`${styles.page} page-enter`}>
      <header className={styles.header}>
        <p className="mono">01 / Work</p>
        <h1 className={styles.title}>Selected work</h1>
        <p className={styles.lead}>
          Production ERP systems, APIs, and a public product — problem, build,
          outcome.
        </p>
      </header>
      <WorkList />
    </section>
  );
}
