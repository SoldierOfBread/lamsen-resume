import type { Project } from "@/lib/types";
import { TechStackList } from "./TechStackList";

const statusConfig: Record<Project["status"], { label: string; style: string }> = {
  completed: { label: "Completed", style: "bg-accent/15 text-accent" },
  "in-progress": { label: "In Progress", style: "bg-secondary/15 text-secondary" },
  maintained: { label: "Maintained", style: "bg-primary/10 text-primary" },
};

export function ProjectCard({ title, description, technologies, highlights, url, repository, status }: Project) {
  const { label, style } = statusConfig[status];

  return (
    <article className="group flex flex-col gap-4 rounded-xl border border-primary/10 bg-surface p-6 shadow-sm transition-all hover:shadow-md hover:border-secondary/20">
      <div className="flex items-start justify-between gap-4">
        <h3 className="text-lg font-semibold text-primary">{title}</h3>
        <span className={`shrink-0 rounded-full px-2.5 py-0.5 text-xs font-medium ${style}`}>
          {label}
        </span>
      </div>

      <p className="text-sm leading-relaxed text-primary/70">{description}</p>

      <ul className="flex flex-col gap-1.5">
        {highlights.slice(0, 3).map((highlight) => (
          <li key={highlight} className="flex items-start gap-2 text-sm text-primary/60">
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
            {highlight}
          </li>
        ))}
      </ul>

      <TechStackList technologies={technologies} />

      {(url || repository) && (
        <div className="flex gap-4 pt-2">
          {url && (
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-secondary transition-colors hover:text-secondary/80"
            >
              Live Demo →
            </a>
          )}
          {repository && (
            <a
              href={repository}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-secondary transition-colors hover:text-secondary/80"
            >
              Repository →
            </a>
          )}
        </div>
      )}
    </article>
  );
}
