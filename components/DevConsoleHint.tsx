"use client";

import { useEffect } from "react";
import { site } from "@/content/education";

/** Console note for people who open DevTools. */
export default function DevConsoleHint() {
  useEffect(() => {
    const accent = "#c45c26";
    console.log(
      `%c ${site.name} | Odoo · Python · full-stack`,
      `color: ${accent}; font-size: 14px; font-weight: 700; font-family: ui-monospace, monospace;`,
    );
    console.log(
      "%cNext.js App Router · CSS modules.",
      "color: #888; font-family: ui-monospace, monospace;",
    );
    console.log(
      `%c/work · /architecture${site.email ? ` · ${site.email}` : ""}`,
      `color: ${accent}; font-family: ui-monospace, monospace;`,
    );
  }, []);

  return null;
}
