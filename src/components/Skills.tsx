import { Code2, Database, Wrench, type LucideIcon } from 'lucide-react'
import { skillCategories, type SkillCategoryTitle } from '../data/skills'
import { useLanguage } from '../hooks/useLanguage'
import { card, cardIconCircle } from '../constants/cardStyles'
import { sectionHeading } from '../constants/sectionStyles'

const CATEGORY_ICONS: Record<SkillCategoryTitle, LucideIcon> = {
  Frontend: Code2,
  Backend: Database,
  Tools: Wrench,
}

/** Skills section: technical skills grouped into cards by category. */
function Skills() {
  const { t } = useLanguage()

  return (
    <section id="skills" className="max-w-4xl mx-auto px-6 py-24">
      <h2 className={`${sectionHeading} mb-10 text-center`}>
        {t.skills.heading}
      </h2>

      <div className="grid sm:grid-cols-3 gap-6">
        {skillCategories.map((category) => {
          const Icon = CATEGORY_ICONS[category.title]

          return (
            <div key={category.title} className={card}>
              <div className="flex items-center gap-3 mb-4">
                <div className={cardIconCircle}>
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
