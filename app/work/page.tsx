import type { Metadata } from "next";
import WorkList from "@/components/WorkList";
import styles from "./work.module.css";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Odoo systems and full-stack products — ERP modules, APIs, and Lann Pya.",
};

export default function WorkPage() {
  return (
    <section className={`${styles.page} page-enter`}>
      <header className={styles.header}>
        <p className="mono">01 / Work</p>
        <h1 className={styles.title}>Selected work</h1>
        <p className={styles.lead}>
          Mostly Odoo — payroll, requests, finance ops, APIs. Also full-stack
          products like Lann Pya.
        </p>
      </header>
      <WorkList />
    </section>
  );
}
