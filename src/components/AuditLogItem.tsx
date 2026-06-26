import type { AuditLog } from "@/lib/types";

const impactConfig: Record<AuditLog["impact"], { label: string; style: string }> = {
  high: { label: "High Impact", style: "bg-red-50 text-red-700 border-red-200" },
  medium: { label: "Medium Impact", style: "bg-amber-50 text-amber-700 border-amber-200" },
  low: { label: "Low Impact", style: "bg-accent/10 text-accent border-accent/20" },
};

export function AuditLogItem({ title, description, date, impact, category }: AuditLog) {
  const { label, style } = impactConfig[impact];

  return (
    <article className="flex flex-col gap-3 rounded-lg border border-primary/10 bg-surface p-5">
      <div className="flex items-start justify-between gap-3">
        <div className="flex flex-col gap-1">
          <h3 className="font-semibold text-primary">{title}</h3>
          <p className="text-xs font-medium text-primary/50">{category}</p>
        </div>
        <span className={`shrink-0 rounded-full border px-2.5 py-0.5 text-xs font-medium ${style}`}>
          {label}
        </span>
      </div>
      <p className="text-sm leading-relaxed text-primary/70">{description}</p>
      <p className="text-xs text-primary/40">{date}</p>
    </article>
  );
}
