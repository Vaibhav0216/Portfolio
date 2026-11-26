import { type ProjectCard as ProjectCardType } from "@/data/projects";

interface ProjectCardProps {
  project: ProjectCardType;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="group p-6 rounded-lg border border-border dark:border-border-dark bg-card dark:bg-card-dark hover:shadow-lg transition-all duration-300">
      <h3 className="text-lg font-semibold mb-2 group-hover:text-accent dark:group-hover:text-accent-dark transition-colors">
        {project.title}
      </h3>
      <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 leading-relaxed">
        {project.description}
      </p>
      {project.metric && (
        <p className="text-sm font-mono text-accent dark:text-accent-dark mb-3">
          {project.metric}
        </p>
      )}
      <div className="flex flex-wrap gap-2">
        {project.tech.map((t) => (
          <span
            key={t}
            className="px-2 py-0.5 text-xs font-mono bg-gray-100 dark:bg-gray-800 rounded border border-border dark:border-border-dark"
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}
