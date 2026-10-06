import type { ProjectEntry } from '../types/translations'
import { card } from '../constants/cardStyles'
import { focusRing } from '../constants/focusStyles'

interface ProjectCardProps {
  project: ProjectEntry
}

/** Card displaying a single project (rendered as a list item): title, description, tech tags, and links. */
function ProjectCard({ project }: ProjectCardProps) {
  return (
    <li className={`${card} flex flex-col`}>
      <h3 className="mb-2 font-medium text-foreground">{project.title}</h3>
      <p className="mb-4 flex-1 text-sm text-gray-600 dark:text-gray-400">
        {project.description}
      </p>

      <div className="mb-4 flex flex-wrap gap-2">
        {project.tech.map((tech) => (
          <span
            key={tech}
            className="rounded-full bg-gray-200 px-2 py-1 text-xs text-gray-600 dark:bg-gray-700 dark:text-gray-300"
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
          className={`${focusRing} hover:underline`}
        >
          GitHub
        </a>

        <a
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Live Demo: ${project.title}`}
          className={`${focusRing} hover:underline`}
        >
          Live Demo
        </a>
      </div>
    </li>
  )
}

export default ProjectCard
