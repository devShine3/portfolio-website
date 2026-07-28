"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { site } from "@/content/education";
import { projects } from "@/content/projects";
import { useTheme } from "@/components/ThemeProvider";
import styles from "./CommandPalette.module.css";

type Command = {
  id: string;
  label: string;
  hint?: string;
  group: string;
  run: () => void;
};

export default function CommandPalette() {
  const router = useRouter();
  const { theme, toggleTheme } = useTheme();
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  const close = useCallback(() => {
    setOpen(false);
    setQuery("");
    setActive(0);
  }, []);

  const commands = useMemo<Command[]>(() => {
    const nav: Command[] = [
      {
        id: "home",
        label: "Home",
        hint: "/",
        group: "Navigate",
        run: () => router.push("/"),
      },
      {
        id: "work",
        label: "Work",
        hint: "/work",
        group: "Navigate",
        run: () => router.push("/work"),
      },
      {
        id: "architecture",
        label: "Architecture",
        hint: "/architecture",
        group: "Navigate",
        run: () => router.push("/architecture"),
      },
      {
        id: "experience",
        label: "Experience",
        hint: "/experience",
        group: "Navigate",
        run: () => router.push("/experience"),
      },
      {
        id: "about",
        label: "About",
        hint: "/about",
        group: "Navigate",
        run: () => router.push("/about"),
      },
      {
        id: "refactor",
        label: "View ORM refactor demo",
        hint: "/work#orm-refactor",
        group: "Navigate",
        run: () => router.push("/work#orm-refactor"),
      },
      {
        id: "case-petty",
        label: "Case study · Petty-cash batch",
        hint: "/work/petty-cash",
        group: "Navigate",
        run: () => router.push("/work/petty-cash"),
      },
      {
        id: "case-payroll",
        label: "Case study · Labor payroll",
        hint: "/work/payroll",
        group: "Navigate",
        run: () => router.push("/work/payroll"),
      },
    ];

    const links: Command[] = [
      {
        id: "email",
        label: "Email me",
        hint: site.email,
        group: "Links",
        run: () => {
          window.location.href = `mailto:${site.email}`;
        },
      },
      {
        id: "github",
        label: "Open GitHub",
        hint: "devShine3",
        group: "Links",
        run: () => window.open(site.github, "_blank", "noopener,noreferrer"),
      },
      {
        id: "linkedin",
        label: "Open LinkedIn",
        group: "Links",
        run: () => window.open(site.linkedin, "_blank", "noopener,noreferrer"),
      },
      {
        id: "resume",
        label: "Open resume PDF",
        group: "Links",
        run: () => window.open(site.resume, "_blank", "noopener,noreferrer"),
      },
      {
        id: "theme",
        label: theme === "dark" ? "Switch to light mode" : "Switch to dark mode",
        hint: theme,
        group: "Links",
        run: () => toggleTheme(),
      },
    ];

    const liveProjects = projects
      .filter((p) => p.live || p.github)
      .slice(0, 8)
      .map((p) => ({
        id: `project-${p.id}`,
        label: p.id.replace(/-/g, " "),
        hint: p.live ? "Live" : "Code",
        group: "Projects",
        run: () =>
          window.open(
            p.live || p.github!,
            "_blank",
            "noopener,noreferrer",
          ),
      }));

    return [...nav, ...links, ...liveProjects];
  }, [router, theme, toggleTheme]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return commands;
    return commands.filter(
      (c) =>
        c.label.toLowerCase().includes(q) ||
        c.hint?.toLowerCase().includes(q) ||
        c.group.toLowerCase().includes(q),
    );
  }, [commands, query]);

  useEffect(() => {
    setActive(0);
  }, [query, open]);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      const isPalette =
        (e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k";
      if (isPalette) {
        e.preventDefault();
        setOpen((v) => !v);
        return;
      }
      if (!open) return;
      if (e.key === "Escape") {
        e.preventDefault();
        close();
      } else if (e.key === "ArrowDown") {
        e.preventDefault();
        setActive((i) => Math.min(i + 1, Math.max(filtered.length - 1, 0)));
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setActive((i) => Math.max(i - 1, 0));
      } else if (e.key === "Enter" && filtered[active]) {
        e.preventDefault();
        filtered[active].run();
        close();
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, filtered, active, close]);

  useEffect(() => {
    if (open) {
      const t = window.setTimeout(() => inputRef.current?.focus(), 10);
      return () => window.clearTimeout(t);
    }
  }, [open]);

  if (!open) return null;

  const groups = [...new Set(filtered.map((c) => c.group))];

  return (
    <div className={styles.overlay} role="dialog" aria-modal="true" aria-label="Command palette">
      <button type="button" className={styles.backdrop} aria-label="Close" onClick={close} />
      <div className={styles.panel}>
        <div className={styles.inputRow}>
          <span className={styles.kbd}>⌘K</span>
          <input
            ref={inputRef}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search pages, projects, or links…"
            className={styles.input}
            autoComplete="off"
            spellCheck={false}
          />
        </div>
        <ul className={styles.list}>
          {filtered.length === 0 ? (
            <li className={styles.empty}>No matches.</li>
          ) : (
            groups.map((group) => (
              <li key={group} className={styles.group}>
                <p className={styles.groupLabel}>{group}</p>
                <ul>
                  {filtered
                    .filter((c) => c.group === group)
                    .map((cmd) => {
                      const index = filtered.indexOf(cmd);
                      return (
                        <li key={cmd.id}>
                          <button
                            type="button"
                            className={`${styles.item} ${
                              index === active ? styles.itemActive : ""
                            }`}
                            onMouseEnter={() => setActive(index)}
                            onClick={() => {
                              cmd.run();
                              close();
                            }}
                          >
                            <span>{cmd.label}</span>
                            {cmd.hint ? (
                              <span className={styles.hint}>{cmd.hint}</span>
                            ) : null}
                          </button>
                        </li>
                      );
                    })}
                </ul>
              </li>
            ))
          )}
        </ul>
        <p className={styles.footer}>
          <span>↑↓</span> move <span>↵</span> open <span>esc</span> close
        </p>
      </div>
    </div>
  );
}
