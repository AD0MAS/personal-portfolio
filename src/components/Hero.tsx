import { useLanguage } from '../hooks/useLanguage'

/** Landing section: introduces who I am and the two primary calls to action. */
function Hero() {
  const { t } = useLanguage()

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center text-center px-6"
    >
      <p className="text-gray-500 dark:text-gray-400 mb-3">{t.hero.greeting}</p>

      <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
        {t.hero.titleLine1}
        <br />
        {t.hero.titleLine2}
      </h1>

      <p className="text-gray-600 dark:text-gray-400 max-w-xl mb-8">
        {t.hero.subtitle}
      </p>

      <div className="flex gap-4">
        <a
          href="#projects"
          className="bg-foreground text-background px-6 py-3 rounded-full font-medium hover:opacity-90 transition"
        >
          {t.hero.viewProjects}
        </a>

        <a
          href="#contact"
          className="border border-gray-300 dark:border-gray-600 px-6 py-3 rounded-full font-medium hover:bg-gray-50 dark:hover:bg-gray-800 transition"
        >
          {t.hero.contactMe}
        </a>
      </div>
    </section>
  )
}

export default Hero
