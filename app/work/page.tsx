import type { Metadata } from "next";
import WorkList from "@/components/WorkList";
import styles from "./work.module.css";

export const metadata: Metadata = {
  title: "Work",
  description: "Selected projects — Odoo modules, Python backends, and web apps.",
};

export default function WorkPage() {
  return (
    <section className={`${styles.page} page-enter`}>
      <header className={styles.header}>
        <p className="mono">01 / Work</p>
        <h1 className={styles.title}>Selected projects</h1>
        <p className={styles.lead}>
          ERP modules and web systems — filtered by stack.
        </p>
      </header>
      <WorkList />
    </section>
  );
}
