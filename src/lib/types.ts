export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  highlights: string[];
  url?: string;
  repository?: string;
  status: "completed" | "in-progress" | "maintained";
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string | "Present";
  description: string;
  contributions: string[];
  technologies: string[];
}

export interface Skill {
  id: string;
  name: string;
  category: string;
  level: "beginner" | "intermediate" | "advanced" | "expert";
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  date: string;
  type: "certification" | "award" | "milestone" | "publication";
}

export interface AuditLog {
  id: string;
  title: string;
  description: string;
  date: string;
  impact: "high" | "medium" | "low";
  category: string;
}

export interface WorkHistory {
  id: string;
  title: string;
  description: string;
  date: string;
  type: "contribution" | "feature" | "milestone" | "log";
}
