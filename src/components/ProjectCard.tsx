import type { ProjectEntry } from '../types/translations'
import { card } from '../constants/cardStyles'

interface ProjectCardProps {
  project: ProjectEntry
}

/** Card displaying a single project: title, description, tech tags, and links. */
function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className={`${card} flex flex-col`}>
      <h3 className="font-medium text-foreground mb-2">{project.title}</h3>
      <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 flex-1">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2 mb-4">
        {project.tech.map((tech) => (
          <span
            key={tech}
            className="text-xs text-gray-600 dark:text-gray-300 bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded-full"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="flex gap-4 text-sm font-medium">
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`GitHub: ${project.title}`}
          className="hover:underline"
        >
          GitHub
        </a>

        <a
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Live Demo: ${project.title}`}
          className="hover:underline"
        >
          Live Demo
        </a>
      </div>
    </div>
  )
}

export default ProjectCard
