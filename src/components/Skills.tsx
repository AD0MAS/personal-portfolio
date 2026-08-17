import { Code2, Database, Wrench } from 'lucide-react'
import { skillCategories } from '../data/skills'
import { useLanguage } from '../hooks/useLanguage'

const CATEGORY_ICONS: Record<string, typeof Code2> = {
  Frontend: Code2,
  Backend: Database,
  Tools: Wrench,
}

/** Skills section: technical skills grouped into cards by category. */
function Skills() {
  const { t } = useLanguage()

  return (
    <section id="skills" className="max-w-4xl mx-auto px-6 py-24">
      <h2 className="text-2xl font-semibold text-foreground mb-10 text-center">
        {t.skills.heading}
      </h2>

      <div className="grid sm:grid-cols-3 gap-6">
        {skillCategories.map((category) => {
          const Icon = CATEGORY_ICONS[category.title]

          return (
            <div
              key={category.title}
              className="border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900 rounded-2xl p-6 hover:bg-gray-100 dark:hover:bg-gray-800 hover:scale-[1.02] hover:shadow-md transition-all duration-200"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                  <Icon size={18} className="text-foreground" />
                </div>
                <h3 className="font-medium text-foreground">
                  {category.title}
                </h3>
              </div>

              <ul className="space-y-2 text-gray-600 dark:text-gray-400 text-sm">
                {category.skills.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Skills
