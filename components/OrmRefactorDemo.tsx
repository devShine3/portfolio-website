"use client";

import { useState } from "react";
import styles from "./OrmRefactorDemo.module.css";

const BEFORE = `sheets = env['hr.expense.sheet'].search([
    ('state', '=', 'approve'),
])
# N+1: one search / browse per sheet
for sheet in sheets:
    employee = env['hr.employee'].browse(sheet.employee_id.id)
    projects = sheet.expense_line_ids.mapped('project_id')
    # more per-row work…`;

const AFTER = `sheets = env['hr.expense.sheet'].search([
    ('state', '=', 'approve'),
])
# Prefetch in one mapped pass — no loop queries
employees = sheets.mapped('employee_id')
projects = sheets.mapped('expense_line_ids.project_id')
by_employee = {e.id: e for e in employees}
# then resolve in memory`;

export default function OrmRefactorDemo() {
  const [mode, setMode] = useState<"before" | "after">("before");
  const isBefore = mode === "before";

  return (
    <section id="orm-refactor" className={styles.wrap}>
      <header className={styles.header}>
        <p className="mono">ORM · query density</p>
        <h2 className={styles.title}>Standard loop vs batch-mapped Odoo</h2>
        <p className={styles.lead}>
          From expense / sheet work: do not search or browse inside a{" "}
          <code>for</code> loop. Prefetch with <code>mapped()</code>, then
          resolve in memory. Toggle to compare.
        </p>
      </header>

      <div className={styles.toggle} role="tablist" aria-label="Code version">
        <button
          type="button"
          role="tab"
          aria-selected={isBefore}
          className={`${styles.tab} ${isBefore ? styles.tabActive : ""}`}
          onClick={() => setMode("before")}
        >
          Standard (N+1 risk)
        </button>
        <button
          type="button"
          role="tab"
          aria-selected={!isBefore}
          className={`${styles.tab} ${!isBefore ? styles.tabActive : ""}`}
          onClick={() => setMode("after")}
        >
          Optimized (batch / mapped)
        </button>
      </div>

      <div
        className={`${styles.badge} ${isBefore ? styles.badgeWarn : styles.badgeOk}`}
      >
        {isBefore ? (
          <>
            <span>Many queries</span>
            <span>Per-row browse</span>
            <span>High DB load</span>
          </>
        ) : (
          <>
            <span>Prefetch once</span>
            <span>Mapped relations</span>
            <span>Memory resolve</span>
          </>
        )}
      </div>

      <pre className={styles.code} aria-live="polite">
        <code>{isBefore ? BEFORE : AFTER}</code>
      </pre>

      <p className={styles.note}>
        Illustrative Odoo ORM pattern (anonymized). Same idea shows up in batch
        petty-cash and sheet review paths: fewer round-trips, clearer hot paths.
      </p>
    </section>
  );
}
