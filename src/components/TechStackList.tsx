interface TechStackListProps {
  technologies: string[];
}

export function TechStackList({ technologies }: TechStackListProps) {
  return (
    <div className="flex flex-wrap gap-1.5">
      {technologies.map((tech) => (
        <span
          key={tech}
          className="inline-block rounded-md bg-secondary/10 px-2 py-0.5 text-xs font-medium text-secondary"
        >
          {tech}
        </span>
      ))}
    </div>
  );
}
