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
    <section id="skills" className="mx-auto max-w-4xl px-6 py-24">
      <h2 className={`${sectionHeading} mb-10 text-center`}>
        {t.skills.heading}
      </h2>

      <ul role="list" className="grid gap-6 sm:grid-cols-3">
        {skillCategories.map((category) => {
          const Icon = CATEGORY_ICONS[category.title]

          return (
            <li key={category.title} className={card}>
              <div className="mb-4 flex items-center gap-3">
                <div className={cardIconCircle}>
                  <Icon size={18} className="text-foreground" />
                </div>
                <h3 className="font-medium text-foreground">
                  {category.title}
                </h3>
              </div>

              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                {category.skills.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </li>
          )
        })}
      </ul>
    </section>
  )
}

export default Skills
