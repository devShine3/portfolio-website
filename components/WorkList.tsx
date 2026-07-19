"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import {
  projects,
  projectFilters,
  type ProjectFilter,
} from "@/content/projects";
import styles from "./WorkList.module.css";

export default function WorkList() {
  const [filter, setFilter] = useState<ProjectFilter>("All");

  const filtered = useMemo(() => {
    if (filter === "All") return projects;
    return projects.filter((p) => p.tags.includes(filter));
  }, [filter]);

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

      {filtered.length === 0 ? (
        <p className={styles.empty}>No projects for this filter.</p>
      ) : (
        <ul className={styles.list} key={filter}>
          {filtered.map((project, index) => (
            <li
              key={project.id}
              className={styles.row}
              style={{ animationDelay: `${index * 60}ms` }}
            >
              <div className={styles.rowHead}>
                <span className="mono">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h2 className={styles.title}>{project.title}</h2>
                <div className={styles.actions}>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Code
                  </a>
                  {project.live ? (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Live
                    </a>
                  ) : null}
                </div>
              </div>
              <p className={styles.summary}>{project.summary}</p>
              <p className={styles.tags}>
                {project.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </p>
              <div className={styles.media}>
                <Image
                  src={project.image}
                  alt=""
                  width={960}
                  height={540}
                  className={styles.image}
                />
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
