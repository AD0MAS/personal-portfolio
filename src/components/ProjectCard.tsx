import type { ProjectEntry } from '../types/translations'

interface ProjectCardProps {
  project: ProjectEntry
}

/** Card displaying a single project: title, description, tech tags, and links. */
function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900 rounded-2xl p-6 flex flex-col hover:bg-gray-100 dark:hover:bg-gray-800 hover:scale-[1.02] hover:shadow-md transition-all duration-200">
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
          className="hover:underline"
        >
          GitHub
        </a>

        <a
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline"
        >
          Live Demo
        </a>
      </div>
    </div>
  )
}

export default ProjectCard
