import type { Metadata } from "next";
import Link from "next/link";
import styles from "../case-study.module.css";

export const metadata: Metadata = {
  title: "Case study · Petty-cash batch",
  description:
    "Engineering case study: holder-bound petty-cash batches, utilization-gated approvals, project/city review, and OU-aware posting on Odoo.",
};

export default function PettyCashCasePage() {
  return (
    <article className={`${styles.page} page-enter`}>
      <p className={styles.back}>
        <Link href="/work">← Work</Link>
        <span className="mono"> · private · enterprise</span>
      </p>

      <header className={styles.header}>
        <p className="mono">Case study · Odoo 14</p>
        <h1 className={styles.title}>
          Petty-cash batch ops — utilization checks, multi-tier review, clean
          posting
        </h1>
        <p className={styles.lead}>
          Construction / enterprise Odoo: replace many one-off expense sheets
          with a holder-bound batch workflow so float limits, project/city
          review, mobile entry, and accounting stay aligned. Client details
          omitted.
        </p>
        <ul className={styles.meta}>
          <li>
            <span className="mono">stack</span> Python · Odoo · PostgreSQL ·
            REST
          </li>
          <li>
            <span className="mono">scope</span> Batch model · approvals · mobile
            API · JV posting
          </li>
          <li>
            <span className="mono">role</span> Design &amp; implementation
          </li>
        </ul>
      </header>

      <section className={styles.section}>
        <h2>Problem</h2>
        <p>
          Field spend sat on many unrelated expense sheets. Float utilization
          was hard to see, drafts could enter approval at the wrong time, and
          reviewers were not always the right project/city owners. Mobile and
          desktop drifted on limit checks. Accounting needed
          operating-unit–aware journals, not a single flat post. Reviewers also
          hit ACL / prefetch failures when the UI loaded sibling sheets in a
          batch.
        </p>
      </section>

      <section className={styles.section}>
        <h2>Domain</h2>
        <ol className={styles.flow}>
          <li>
            <span className={styles.idx}>01</span>
            <div>
              <strong>Holder</strong>
              <p>
                Petty-cash float owner. One open batch at a time; ceiling
                enforced before new spend.
              </p>
            </div>
          </li>
          <li>
            <span className={styles.idx}>02</span>
            <div>
              <strong>Batch</strong>
              <p>
                Container for a small set of expense sheets. Tracks draft /
                submitted / paid / balance and utilization stage.
              </p>
            </div>
          </li>
          <li>
            <span className={styles.idx}>03</span>
            <div>
              <strong>Sheets &amp; lines</strong>
              <p>
                Standard <code>hr.expense.sheet</code> linked to the batch.
                Lines carry project, operating unit, type, and amount.
              </p>
            </div>
          </li>
          <li>
            <span className={styles.idx}>04</span>
            <div>
              <strong>Review tiers</strong>
              <p>
                Holder/manager for the sheet; project agreement managers
                (city-aware) for their lines; separate voucher path where
                needed.
              </p>
            </div>
          </li>
        </ol>
      </section>

      <section className={styles.section}>
        <h2>Design decisions</h2>
        <ul className={styles.bullets}>
          <li>
            <strong>Utilization-gated submit</strong> — drafts only enter tier
            validation after batch usage hits the next milestone (with a
            near-cap escape so the last drafts are not stuck forever).
          </li>
          <li>
            <strong>One pure draft at a time</strong> — avoids parallel
            unfinished sheets fighting the float and the UI.
          </li>
          <li>
            <strong>Same rules on mobile and desktop</strong> — REST hub
            reuses batch limits, required fields, and submit preview so field
            entry cannot bypass the same rules.
          </li>
          <li>
            <strong>OU-split posting</strong> — when a sheet mixes operating
            units, post splits journals cleanly and consolidates holder credit
            lines.
          </li>
        </ul>
      </section>

      <section className={styles.section}>
        <h2>Engineering patterns</h2>

        <div className={styles.pattern}>
          <h3>
            <span className="mono">01</span> KPI visibility vs record rules
          </h3>
          <p>
            Batch totals (draft / submitted / paid / balance) compute with{" "}
            <code>sudo</code> over related sheets and <code>mapped()</code> so
            a reviewer&apos;s narrower ACL does not skew utilization. The UI
            still respects line privacy for agreement managers.
          </p>
          <pre className={styles.code}>
            <code>{`# Anonymized pattern — not client source
sheets = batch.sudo().sheet_ids
draft = sum(sheets.mapped('total_draft_amount'))
# utilization = f(draft, submitted, paid, float_limit)
# submit allowed only when next threshold is met`}</code>
          </pre>
        </div>

        <div className={styles.pattern}>
          <h3>
            <span className="mono">02</span> Sibling-safe reviewer ACL
          </h3>
          <p>
            Assigned reviewers need the reviewed sheet{" "}
            <em>and</em> other sheets in the same batch. Without that,
            loading <code>batch.sheet_ids</code> after <code>sudo</code>{" "}
            prefetch raised AccessError in production. Access is granted via
            record rules plus Python <code>check_access_rule</code> for
            same-batch siblings; tier reviews prefer a direct search over a
            stale related cache.
          </p>
        </div>

        <div className={styles.pattern}>
          <h3>
            <span className="mono">03</span> City-scoped line review + OU post
          </h3>
          <p>
            Project reviewers are resolved city-aware. Agreement-manager–only
            reviewers see filtered expense lines (including after
            approve/reject). On post, expenses group by operating unit when
            mixed; holder credits merge per account/partner on each journal.
          </p>
        </div>
      </section>

      <section className={styles.section}>
        <h2>Constraints &amp; edges</h2>
        <ul className={styles.bullets}>
          <li>Single open batch per holder; zero-limit holders cannot receive sheets</li>
          <li>Required line fields enforced on save and submit; PDF required to enter validation</li>
          <li>Projects must resolve an agreement manager before submit (legacy bypass via config where needed)</li>
          <li>Under-review sheets: blocked writes stripped; reject blocks further approve</li>
          <li>Block repost while posted journals already exist for the sheet</li>
        </ul>
      </section>

      <section className={styles.section}>
        <h2>API surface</h2>
        <p>
          Mobile JSON endpoints sit on the same domain rules: holder context,
          create draft, draft summary, submit preview / submit, paginated
          sheets, home dashboard, sheet detail (approvals + attachments), and
          related purchase documents. Auth is shared with the wider hub — not a
          one-off petty-cash API.
        </p>
      </section>

      <section className={styles.section}>
        <h2>Outcome</h2>
        <p>
          Ops submit and review cash inside a holder-bound batch instead of
          chasing one-off sheets and spreadsheets. Float utilization drives when
          drafts may enter approval. Project/city reviewers see the right lines.
          Mobile and desktop share limits. Accounting posts split cleanly by
          operating unit. The ACL/prefetch edge cases that blocked reviewers in
          the batch UI are closed.
        </p>
        <p className={styles.note}>
          Source code stays private. Related notes:{" "}
          <Link href="/work/payroll">payroll case study</Link>,{" "}
          <Link href="/architecture">architecture</Link>,{" "}
          <Link href="/work#orm-refactor">ORM example</Link>.
        </p>
      </section>

      <p className={styles.footerNav}>
        <Link href="/work">← Back to work</Link>
        <Link href="/work/payroll">Payroll case →</Link>
      </p>
    </article>
  );
}
