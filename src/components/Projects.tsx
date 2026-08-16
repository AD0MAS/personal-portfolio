import ProjectCard from './ProjectCard'
import { useLanguage } from '../hooks/useLanguage'

/** Projects section: grid of self-directed portfolio projects. */
function Projects() {
  const { t } = useLanguage()

  return (
    <section id="projects" className="max-w-5xl mx-auto px-6 py-24">
      <h2 className="text-2xl font-semibold text-foreground mb-10 text-center">
        {t.projects.heading}
      </h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {t.projects.entries.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  )
}

export default Projects
