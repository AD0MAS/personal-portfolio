import { useLanguage } from '../hooks/useLanguage'
import { buttonFilled, buttonOutline } from '../constants/buttonStyles'

/** Landing section: introduces who I am and the two primary calls to action. */
function Hero() {
  const { t } = useLanguage()

  return (
    <section
      id="home"
      className="flex min-h-screen flex-col items-center justify-center px-6 text-center motion-safe:animate-fade-in-up"
    >
      <p className="mb-3 text-gray-500 dark:text-gray-400">{t.hero.greeting}</p>

      <h1 className="mb-4 text-3xl font-bold text-foreground sm:text-5xl">
        {t.hero.titleLine1}
        <br />
        {t.hero.titleLine2}
      </h1>

      <p className="mb-8 max-w-xl text-gray-600 dark:text-gray-400">
        {t.hero.subtitle}
      </p>

      <div className="flex gap-4">
        <a href="#projects" className={buttonFilled}>
          {t.hero.viewProjects}
        </a>

        <a href="#contact" className={buttonOutline}>
          {t.hero.contactMe}
        </a>
      </div>
    </section>
  )
}

export default Hero
