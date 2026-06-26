import type { Skill } from "@/lib/types";

const levelStyles: Record<Skill["level"], string> = {
  beginner: "bg-accent/10 text-accent border-accent/20",
  intermediate: "bg-accent/20 text-accent border-accent/30",
  advanced: "bg-accent/30 text-accent border-accent/40",
  expert: "bg-accent/40 text-accent border-accent/50",
};

export function SkillBadge({ name, level, category }: Skill) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-sm font-medium ${levelStyles[level]}`}
      title={`${category} - ${level}`}
    >
      {name}
    </span>
  );
}
