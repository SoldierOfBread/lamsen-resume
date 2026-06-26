import type { ReactNode } from "react";

interface SectionWrapperProps {
  id: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
}

export function SectionWrapper({ id, title, subtitle, children }: SectionWrapperProps) {
  return (
    <section id={id} className="scroll-mt-20">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-primary md:text-3xl">{title}</h2>
        {subtitle && (
          <p className="mt-2 text-sm leading-relaxed text-primary/60">{subtitle}</p>
        )}
        <div className="mt-3 h-0.5 w-12 rounded-full bg-accent" />
      </div>
      {children}
    </section>
  );
}
