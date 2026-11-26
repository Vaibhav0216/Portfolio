"use client";

import { useState } from "react";
import { ChevronDown, ChevronRight } from "lucide-react";
import { type Experience, type Project } from "@/data/experience";

interface TimelineItemProps {
  experience: Experience;
}

function ProjectDetail({ project }: { project: Project }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="mt-3 border border-border dark:border-border-dark rounded-lg overflow-hidden">
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors"
      >
        <div>
          <h4 className="font-medium text-sm">{project.name}</h4>
          <div className="flex flex-wrap gap-1.5 mt-1">
            {project.tech.map((t) => (
              <span
                key={t}
                className="px-2 py-0.5 text-xs font-mono bg-gray-100 dark:bg-gray-800 rounded"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
        {expanded ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
      </button>
      {expanded && (
        <ul className="px-4 pb-4 space-y-2">
          {project.highlights.map((h, i) => (
            <li key={i} className="text-sm text-gray-600 dark:text-gray-400 pl-4 relative before:content-['•'] before:absolute before:left-0 before:text-accent dark:before:text-accent-dark">
              {h}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export function TimelineItem({ experience }: TimelineItemProps) {
  return (
    <div className="relative pl-8 pb-12 border-l-2 border-border dark:border-border-dark last:pb-0">
      <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-accent dark:bg-accent-dark border-2 border-white dark:border-background-dark" />
      <div className="mb-1">
        <h3 className="text-xl font-semibold">{experience.company}</h3>
        <p className="text-accent dark:text-accent-dark font-medium text-sm">
          {experience.role}
        </p>
        <p className="text-gray-500 dark:text-gray-400 text-sm font-mono">
          {experience.period} · {experience.location}
        </p>
      </div>
      {experience.projects.map((project) => (
        <ProjectDetail key={project.name} project={project} />
      ))}
    </div>
  );
}
