import { useLanguage } from '../hooks/useLanguage'
import { buttonFilled, buttonOutline } from '../constants/buttonStyles'

/** Landing section: introduces who I am and the two primary calls to action. */
function Hero() {
  const { t } = useLanguage()

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center text-center px-6 animate-fade-in-up"
    >
      <p className="text-gray-500 dark:text-gray-400 mb-3">{t.hero.greeting}</p>

      <h1 className="text-3xl sm:text-5xl font-bold text-foreground mb-4">
        {t.hero.titleLine1}
        <br />
        {t.hero.titleLine2}
      </h1>

      <p className="text-gray-600 dark:text-gray-400 max-w-xl mb-8">
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
