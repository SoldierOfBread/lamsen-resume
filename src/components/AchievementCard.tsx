import type { Achievement } from "@/lib/types";

const typeConfig: Record<Achievement["type"], { label: string; icon: string }> = {
  certification: { label: "Certification", icon: "🎓" },
  award: { label: "Award", icon: "🏆" },
  milestone: { label: "Milestone", icon: "⭐" },
  publication: { label: "Publication", icon: "📄" },
};

export function AchievementCard({ title, description, date, type }: Achievement) {
  const { label, icon } = typeConfig[type];

  return (
    <article className="flex gap-4 rounded-xl border border-primary/10 bg-surface p-5 transition-all hover:shadow-sm">
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-secondary/10 text-lg">
        {icon}
      </span>
      <div className="flex min-w-0 flex-col gap-1.5">
        <div className="flex items-center gap-2">
          <h3 className="font-semibold text-primary">{title}</h3>
          <span className="shrink-0 rounded-full bg-secondary/10 px-2 py-0.5 text-xs font-medium text-secondary">
            {label}
          </span>
        </div>
        <p className="text-sm leading-relaxed text-primary/70">{description}</p>
        <p className="text-xs text-primary/40">{date}</p>
      </div>
    </article>
  );
}
