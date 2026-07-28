import type { Metadata } from "next";
import Link from "next/link";
import WorkList from "@/components/WorkList";
import OrmRefactorDemo from "@/components/OrmRefactorDemo";
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
        <h1 className={styles.title}>Work</h1>
        <p className={styles.lead}>
          Public products, private enterprise Odoo work, and earlier modules.
          See <Link href="/architecture">architecture</Link> for how the stacks
          connect. Press <kbd className={styles.kbd}>⌘K</kbd> to jump anywhere.
        </p>
      </header>
      <WorkList />
      <OrmRefactorDemo />
    </section>
  );
}
