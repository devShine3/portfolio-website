"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  projects,
  projectFilters,
  projectGroups,
  type Project,
  type ProjectFilter,
} from "@/content/projects";
import ProjectVisual from "@/components/ProjectVisual";
import styles from "./WorkList.module.css";

function ProjectRow({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const showVisual =
    !project.image &&
    ["hr-ops-suite", "hr-ops-portal", "lannpya", "shiftline", "fleet-hotel"].includes(
      project.id,
    );

  return (
    <li
      className={styles.row}
      style={{ animationDelay: `${index * 50}ms` }}
    >
      <div className={styles.rowHead}>
        <span className="mono">{String(index + 1).padStart(2, "0")}</span>
        <h3 className={styles.title}>{project.title}</h3>
        <div className={styles.actions}>
          {project.caseStudy ? (
            <Link href={project.caseStudy}>Case study</Link>
          ) : null}
          {project.live ? (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
            >
              Live
            </a>
          ) : null}
          {project.github ? (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              Code
            </a>
          ) : null}
          {project.private || (!project.live && !project.github) ? (
            <span className={styles.private}>Private · enterprise</span>
          ) : null}
        </div>
      </div>
      <p className={styles.summary}>{project.summary}</p>
      {project.outcome ? (
        <p className={styles.outcome}>
          <span className="mono">Outcome</span> {project.outcome}
        </p>
      ) : null}
      <p className={styles.metrics}>
        {project.metrics.map((m) => (
          <span key={m}>{m}</span>
        ))}
      </p>
      <p className={styles.tags}>
        {project.tags.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </p>
      {project.image ? (
        <div className={styles.media}>
          <Image
            src={project.image}
            alt=""
            width={960}
            height={540}
            className={styles.image}
          />
        </div>
      ) : null}
      {showVisual ? (
        <div className={styles.visualWrap}>
          <ProjectVisual project={project} />
        </div>
      ) : null}
    </li>
  );
}

export default function WorkList() {
  const [filter, setFilter] = useState<ProjectFilter>("All");

  const filtered = useMemo(() => {
    if (filter === "All") return projects;
    return projects.filter((p) => p.tags.includes(filter));
  }, [filter]);

  const sections = useMemo(() => {
    return projectGroups
      .map((group) => ({
        ...group,
        items: filtered.filter((p) => p.group === group.id),
      }))
      .filter((section) => section.items.length > 0);
  }, [filtered]);

  let running = 0;

  return (
    <div>
      <div className={styles.filters} role="tablist" aria-label="Filter projects">
        {projectFilters.map((tag) => (
          <button
            key={tag}
            type="button"
            role="tab"
            aria-selected={filter === tag}
            className={`${styles.chip} ${filter === tag ? styles.chipActive : ""}`}
            onClick={() => setFilter(tag)}
          >
            {tag}
          </button>
        ))}
      </div>

      {sections.length === 0 ? (
        <p className={styles.empty}>No projects for this filter.</p>
      ) : (
        <div className={styles.sections} key={filter}>
          {sections.map((section) => {
            const start = running;
            running += section.items.length;
            return (
              <section key={section.id} className={styles.section}>
                <header className={styles.sectionHead}>
                  <h2 className={styles.sectionTitle}>{section.label}</h2>
                  <p className={styles.sectionBlurb}>{section.blurb}</p>
                </header>
                <ul className={styles.list}>
                  {section.items.map((project, i) => (
                    <ProjectRow
                      key={project.id}
                      project={project}
                      index={start + i}
                    />
                  ))}
                </ul>
              </section>
            );
          })}
        </div>
      )}
    </div>
  );
}
