import projectsData from "@/data/projects.json";
import experienceData from "@/data/experience.json";
import skillsData from "@/data/skills.json";
import achievementsData from "@/data/achievements.json";
import auditLogsData from "@/data/audit-logs.json";
import workHistoryData from "@/data/work-history.json";
import type { Project, Experience, Skill, Achievement, AuditLog, WorkHistory } from "./types";

export function getProjects(): Project[] {
  return projectsData as Project[];
}

export function getExperience(): Experience[] {
  return experienceData as Experience[];
}

export function getSkills(): Skill[] {
  return skillsData as Skill[];
}

export function getAchievements(): Achievement[] {
  return achievementsData as Achievement[];
}

export function getAuditLogs(): AuditLog[] {
  return auditLogsData as AuditLog[];
}

export function getWorkHistory(): WorkHistory[] {
  return workHistoryData as WorkHistory[];
}
