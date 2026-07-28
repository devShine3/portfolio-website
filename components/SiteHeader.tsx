"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { site } from "@/content/education";
import ThemeToggle from "@/components/ThemeToggle";
import styles from "./SiteHeader.module.css";

const links = [
  { href: "/work", label: "Work" },
  { href: "/architecture", label: "Architecture" },
  { href: "/experience", label: "Experience" },
  { href: "/about", label: "About" },
] as const;

export default function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Link href="/" className={styles.brand} onClick={() => setOpen(false)}>
          {site.nameDisplay}
        </Link>

        <button
          type="button"
          className={styles.menuBtn}
          aria-expanded={open}
          aria-controls="site-nav"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="mono">{open ? "Close" : "Menu"}</span>
        </button>

        <nav
          id="site-nav"
          className={`${styles.nav} ${open ? styles.navOpen : ""}`}
        >
          {links.map((link) => {
            const active =
              pathname === link.href || pathname.startsWith(`${link.href}/`);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`${styles.link} ${active ? styles.active : ""}`}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            );
          })}
          <ThemeToggle />
          <span className={styles.cmdHint} title="Command palette">
            ⌘K
          </span>
        </nav>
      </div>
    </header>
  );
}
