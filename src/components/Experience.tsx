import { GraduationCap, Waves, Wrench, type LucideIcon } from 'lucide-react'
import { useLanguage } from '../hooks/useLanguage'
import { EXPERIENCE_IDS, type ExperienceId } from '../constants/experience'
import { card, cardIconCircle } from '../constants/cardStyles'
import { sectionHeading } from '../constants/sectionStyles'

const ICONS: Record<ExperienceId, LucideIcon> = {
  tutor: GraduationCap,
  lifeguard: Waves,
  technician: Wrench,
}

/** Experience section: brief highlights from work history, most recent first. */
function Experience() {
  const { t } = useLanguage()

  return (
    <section id="experience" className="mx-auto max-w-2xl px-6 py-24">
      <h2 className={`${sectionHeading} mb-10`}>{t.experience.heading}</h2>

      <ul role="list" className="space-y-4">
        {EXPERIENCE_IDS.map((id) => {
          const entry = t.experience.entries[id]
          const Icon = ICONS[id]

          return (
            <li key={id} className={card}>
              <div className="flex gap-4">
                <div className={`${cardIconCircle} shrink-0`}>
                  <Icon size={18} className="text-foreground" />
                </div>

                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                    <h3 className="font-medium text-foreground">
                      {entry.role}
                    </h3>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      {entry.period}
                    </span>
                  </div>
                  <p className="mb-1 text-sm text-gray-500 dark:text-gray-400">
                    {entry.org}
                  </p>
                  <p className="text-gray-600 dark:text-gray-400">
                    {entry.description}
                  </p>
                </div>
              </div>
            </li>
          )
        })}
      </ul>
    </section>
  )
}

export default Experience
