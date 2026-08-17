import { GraduationCap, Waves, Wrench } from 'lucide-react'
import { useLanguage } from '../hooks/useLanguage'

const ICONS = [GraduationCap, Waves, Wrench]

/** Experience section: brief highlights from work history, most recent first. */
function Experience() {
  const { t } = useLanguage()

  return (
    <section id="experience" className="max-w-2xl mx-auto px-6 py-24">
      <h2 className="text-2xl font-semibold text-foreground mb-10">
        {t.experience.heading}
      </h2>

      <div className="space-y-4">
        {t.experience.entries.map((entry, index) => {
          const Icon = ICONS[index]

          return (
            <div
              key={entry.role}
              className="border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900 rounded-2xl p-6 hover:bg-gray-100 dark:hover:bg-gray-800 hover:scale-[1.02] hover:shadow-md transition-all duration-200"
            >
              <div className="flex gap-4">
                <div className="shrink-0 w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                  <Icon size={18} className="text-foreground" />
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                    <h3 className="font-medium text-foreground">
                      {entry.role}
                    </h3>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      {entry.period}
                    </span>
                  </div>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">
                    {entry.org}
                  </p>
                  <p className="text-gray-600 dark:text-gray-400">
                    {entry.description}
                  </p>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Experience
