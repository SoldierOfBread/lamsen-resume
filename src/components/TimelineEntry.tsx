import { TechStackList } from "./TechStackList";

interface TimelineEntryProps {
  role: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string | "Present";
  description: string;
  contributions: string[];
  technologies: string[];
}

export function TimelineEntry({
  role,
  company,
  location,
  startDate,
  endDate,
  description,
  contributions,
  technologies,
}: TimelineEntryProps) {
  return (
    <li className="relative pl-8 pb-12 last:pb-0">
      <div className="absolute left-0 top-1 flex flex-col items-center">
        <div className="h-3 w-3 rounded-full border-2 border-secondary bg-surface" />
        <div className="mt-1 h-full w-px bg-secondary/20" />
      </div>

      <div className="flex flex-col gap-3">
        <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
          <div>
            <h3 className="text-lg font-semibold text-primary">{role}</h3>
            <p className="text-sm font-medium text-secondary">
              {company} &middot; {location}
            </p>
          </div>
          <p className="shrink-0 text-sm text-primary/50">
            {startDate} &mdash; {endDate}
          </p>
        </div>

        <p className="text-sm leading-relaxed text-primary/70">{description}</p>

        <ul className="flex flex-col gap-1.5">
          {contributions.map((item) => (
            <li key={item} className="flex items-start gap-2 text-sm text-primary/60">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
              {item}
            </li>
          ))}
        </ul>

        <TechStackList technologies={technologies} />
      </div>
    </li>
  );
}
