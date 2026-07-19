import type { Metadata } from "next";
import WorkList from "@/components/WorkList";
import styles from "./work.module.css";

export const metadata: Metadata = {
  title: "Work",
  description: "Odoo systems I’ve built — ERP modules, workflows, and APIs.",
};

export default function WorkPage() {
  return (
    <section className={`${styles.page} page-enter`}>
      <header className={styles.header}>
        <p className="mono">01 / Work</p>
        <h1 className={styles.title}>Odoo I’ve built</h1>
        <p className={styles.lead}>
          Production modules and workflows — payroll, requests, finance ops, APIs.
          Plus one public product on top of Odoo.
        </p>
      </header>
      <WorkList />
    </section>
  );
}
