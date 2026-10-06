import { useLanguage } from '../hooks/useLanguage'
import { sectionHeading } from '../constants/sectionStyles'

/** About section: short personal narrative — who I am, what draws me to programming, and current goal. */
function About() {
  const { t } = useLanguage()

  return (
    <section id="about" className="mx-auto max-w-2xl px-6 py-24">
      <h2 className={`${sectionHeading} mb-6`}>{t.about.heading}</h2>

      <div className="space-y-4 leading-relaxed text-gray-600 dark:text-gray-400">
        <p>{t.about.paragraph1}</p>
        <p>{t.about.paragraph2}</p>
        <p className="font-medium text-foreground">{t.about.cta}</p>
      </div>
    </section>
  )
}

export default About
