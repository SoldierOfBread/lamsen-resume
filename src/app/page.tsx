import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SectionWrapper } from "@/components/SectionWrapper";
import { ProjectCard } from "@/components/ProjectCard";
import { TimelineEntry } from "@/components/TimelineEntry";
import { SkillBadge } from "@/components/SkillBadge";
import { AchievementCard } from "@/components/AchievementCard";
import { AuditLogItem } from "@/components/AuditLogItem";
import {
  getProjects,
  getExperience,
  getSkills,
  getAchievements,
  getAuditLogs,
  getWorkHistory,
} from "@/lib/data";

export default function Home() {
  const projects = getProjects();
  const experience = getExperience();
  const skills = getSkills();
  const achievements = getAchievements();
  const auditLogs = getAuditLogs();
  const workHistory = getWorkHistory();

  const categories = [...new Set(skills.map((s) => s.category))];

  return (
    <>
      <Header />
      <main className="mx-auto flex w-full max-w-5xl flex-1 flex-col gap-20 px-4 py-12 sm:px-6 sm:py-16 lg:py-20">
        <HeroSection />
        <SectionWrapper id="experience" title="Experience" subtitle="Professional journey and contributions">
          <ol className="relative">
            {experience.map((exp) => (
              <TimelineEntry key={exp.id} {...exp} />
            ))}
          </ol>
        </SectionWrapper>

        <SectionWrapper id="projects" title="Projects" subtitle="Selected work and side projects">
          <div className="grid gap-6 sm:grid-cols-2">
            {projects.map((project) => (
              <ProjectCard key={project.id} {...project} />
            ))}
          </div>
        </SectionWrapper>

        <SectionWrapper id="skills" title="Skills" subtitle="Technologies and tools I work with">
          <div className="flex flex-col gap-8">
            {categories.map((category) => (
              <div key={category}>
                <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary/50">
                  {category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skills
                    .filter((s) => s.category === category)
                    .map((skill) => (
                      <SkillBadge key={skill.id} {...skill} />
                    ))}
                </div>
              </div>
            ))}
          </div>
        </SectionWrapper>

        <SectionWrapper id="achievements" title="Achievements" subtitle="Certifications, awards, and milestones">
          <div className="grid gap-4 sm:grid-cols-2">
            {achievements.map((achievement) => (
              <AchievementCard key={achievement.id} {...achievement} />
            ))}
          </div>
        </SectionWrapper>

        <SectionWrapper id="audits" title="Technical Audits" subtitle="Performance, security, and quality reviews">
          <div className="grid gap-4 sm:grid-cols-2">
            {auditLogs.map((log) => (
              <AuditLogItem key={log.id} {...log} />
            ))}
          </div>
        </SectionWrapper>

        <SectionWrapper id="work-history" title="Work Log" subtitle="Recent milestones and contributions">
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {workHistory.map((entry) => (
              <div
                key={entry.id}
                className="rounded-lg border border-primary/10 bg-surface p-4"
              >
                <p className="text-xs font-medium uppercase tracking-wider text-secondary">
                  {entry.type}
                </p>
                <h3 className="mt-1 font-semibold text-primary">{entry.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-primary/60">
                  {entry.description}
                </p>
                <p className="mt-2 text-xs text-primary/40">{entry.date}</p>
              </div>
            ))}
          </div>
        </SectionWrapper>
      </main>
      <Footer />
    </>
  );
}

function HeroSection() {
  return (
    <section className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <h1 className="text-4xl font-bold tracking-tight text-primary md:text-5xl lg:text-6xl">
          John Doe
        </h1>
        <p className="text-lg font-medium text-secondary md:text-xl">
          Software Engineer
        </p>
      </div>
      <p className="max-w-2xl text-sm leading-relaxed text-primary/60 md:text-base">
        Full-stack software engineer with 5+ years of experience building
        scalable web applications. Passionate about component-driven
        architecture, developer tooling, and performance optimization.
      </p>
      <div className="flex flex-wrap gap-3">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-secondary/10 px-3 py-1 text-sm font-medium text-secondary">
          <span className="h-2 w-2 rounded-full bg-accent" />
          Open to opportunities
        </span>
        <a
          href="mailto:john@example.com"
          className="inline-flex items-center gap-1.5 rounded-full bg-secondary px-3 py-1 text-sm font-medium text-white transition-colors hover:bg-secondary/90"
        >
          Get in touch
        </a>
      </div>
    </section>
  );
}
