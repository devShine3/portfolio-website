import type { Metadata } from "next";
import Link from "next/link";
import styles from "../case-study.module.css";

export const metadata: Metadata = {
  title: "Case study · Labor payroll & costing",
  description:
    "Engineering case study: timesheet-driven labor payroll batches, project cost allocation, and safe cutoff recovery on Odoo.",
};

export default function PayrollCasePage() {
  return (
    <article className={`${styles.page} page-enter`}>
      <p className={styles.back}>
        <Link href="/work">← Work</Link>
        <span className="mono"> · private · enterprise</span>
      </p>

      <header className={styles.header}>
        <p className="mono">Case study · Odoo 14</p>
        <h1 className={styles.title}>
          Labor payroll — timesheet compute, project cost split, safe recovery
        </h1>
        <p className={styles.lead}>
          Construction / enterprise Odoo: default payslip compute was too thin
          for field labor — leaves, OT, mid-period hire/exit, and project
          costing. Built a monthly labor path with allocation and cutover
          recovery. Client details omitted.
        </p>
        <ul className={styles.meta}>
          <li>
            <span className="mono">stack</span> Python · Odoo · PostgreSQL ·
            analytic / OU
          </li>
          <li>
            <span className="mono">scope</span> Labor batch · cost allocation ·
            recovery · journals
          </li>
          <li>
            <span className="mono">role</span> Design &amp; implementation
          </li>
        </ul>
      </header>

      <section className={styles.section}>
        <h2>Problem</h2>
        <p>
          Field labor pay depended on timesheets, leaves, absences, overtime
          tiers, and mid-period join/exit — too heavy and brittle for default
          payslip compute. Costs had to land on the right projects and operating
          units, not a single flat salary expense. A calendar-cutoff change also
          left a paid period partially under-computed, so later months needed a
          controlled recovery without double-paying or skipping real posting.
        </p>
      </section>

      <section className={styles.section}>
        <h2>Domain</h2>
        <ol className={styles.flow}>
          <li>
            <span className={styles.idx}>01</span>
            <div>
              <strong>Labor batch</strong>
              <p>
                Calendar-month payslip run for labor. Submit gated after period
                end (company timezone).
              </p>
            </div>
          </li>
          <li>
            <span className={styles.idx}>02</span>
            <div>
              <strong>Day payload</strong>
              <p>
                Per-employee day map: work, leave types, holidays, off days, OT
                codes, and payable employment bounds.
              </p>
            </div>
          </li>
          <li>
            <span className={styles.idx}>03</span>
            <div>
              <strong>Cost allocation</strong>
              <p>
                Payslip → project / cost-center percentages from timesheets →
                analytic lines → finance journals (OU-aware when mixed).
              </p>
            </div>
          </li>
          <li>
            <span className={styles.idx}>04</span>
            <div>
              <strong>Recovery / comparison</strong>
              <p>
                Source paid period vs target draft; positive-only deltas;
                attested audit. Managed report-only batches can recompute without
                posting costs.
              </p>
            </div>
          </li>
        </ol>
      </section>

      <section className={styles.section}>
        <h2>Design decisions</h2>
        <ul className={styles.bullets}>
          <li>
            <strong>Batch SQL payload over per-slip thrash</strong> — build day
            maps and salary snapshots once, then compute slips from that
            payload.
          </li>
          <li>
            <strong>Separate salary vs variable windows</strong> — after a cutoff
            transition, calendar salary and variable (OT / incentive) windows
            can differ intentionally.
          </li>
          <li>
            <strong>Trusted in-process context</strong> — report-only and
            precomputed flags cannot be forged via ordinary RPC; only managed
            comparison batches skip real costing.
          </li>
          <li>
            <strong>Serialize concurrent compute</strong> — row locks and
            advisory locks on employee×period so recovery apply and recompute
            cannot race.
          </li>
        </ul>
      </section>

      <section className={styles.section}>
        <h2>Engineering patterns</h2>

        <div className={styles.pattern}>
          <h3>
            <span className="mono">01</span> Trusted report-only context
          </h3>
          <p>
            RPC may set flags, but only managed comparison batches receive
            report-only behavior. Real labor batches always run cost allocation.
          </p>
          <pre className={styles.code}>
            <code>{`# Anonymized pattern — not client source
report_only = all(
    slip.batch.is_managed_comparison() for slip in slips
)
# context flags alone cannot skip allocation on real runs`}</code>
          </pre>
        </div>

        <div className={styles.pattern}>
          <h3>
            <span className="mono">02</span> Project days → allocation to 100%
          </h3>
          <p>
            Count timesheet days per project, floor percentages, push remainder
            to the largest project. Leftover share goes to an employee fallback
            cost center when lines do not cover the full slip.
          </p>
          <pre className={styles.code}>
            <code>{`# Anonymized pattern — not client source
days_by_project = count_timesheet_days(exclude_internal=True)
pct = floor(days * 100 / total)
# remainder → largest project
# leftover % → fallback cost center`}</code>
          </pre>
        </div>

        <div className={styles.pattern}>
          <h3>
            <span className="mono">03</span> Serialize recovery vs recompute
          </h3>
          <p>
            Lock the relevant payslip runs, then take an advisory lock on
            company + employee + period keys so recovery apply and fast compute
            cannot race the same attendance / OT deltas.
          </p>
          <pre className={styles.code}>
            <code>{`# Anonymized pattern — not client source
SELECT id FROM hr_payslip_run WHERE id = ANY(...) FOR UPDATE
# + advisory lock (company, employee, date_from, date_to)`}</code>
          </pre>
        </div>
      </section>

      <section className={styles.section}>
        <h2>Constraints &amp; edges</h2>
        <ul className={styles.bullets}>
          <li>Labor batch = one complete calendar month; no submit on/before period end</li>
          <li>Leave precedence over conflicting attendance; unpaid sick reportable but not paid</li>
          <li>Mid-month join/exit clamps payable days; rehire must not inherit old exit cut</li>
          <li>Recovery is positive-only, attested, period-scoped — no auto-deduction, no manual recovery lines</li>
          <li>Journal create only after finance state; block if batch journals already exist</li>
        </ul>
      </section>

      <section className={styles.section}>
        <h2>Batch / compute surface</h2>
        <p>
          Ops work inside Odoo payroll runs: build the day payload, compute
          slips, allocate cost, post journals, and when needed open a recovery /
          comparison path. This case is about the payroll close path — not the
          mobile API hub.
        </p>
      </section>

      <section className={styles.section}>
        <h2>Outcome</h2>
        <p>
          Labor payroll runs from a timesheet-built day payload with clear
          leave / OT / absence rules and employment bounds. Project costing and
          multi-OU journals stay on the same path as compute. Cutover
          underpayment is recovered through an attested, positive-only workflow
          that cannot be forged via context. Comparison batches can recompute
          without posting costs. Ops get a clear monthly labor process instead
          of ad-hoc sheet edits and spreadsheet checks.
        </p>
        <p className={styles.note}>
          Source code stays private. Related notes:{" "}
          <Link href="/work/petty-cash">petty-cash case study</Link>,{" "}
          <Link href="/architecture">architecture</Link>,{" "}
          <Link href="/work#orm-refactor">ORM example</Link>.
        </p>
      </section>

      <p className={styles.footerNav}>
        <Link href="/work/petty-cash">← Petty-cash case</Link>
        <Link href="/work">Back to work →</Link>
      </p>
    </article>
  );
}
