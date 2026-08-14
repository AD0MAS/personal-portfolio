/** Landing section: introduces who I am and the two primary calls to action. */
function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center text-center px-6"
    >
      <p className="text-gray-500 mb-3">Hi, I'm Adomas.</p>

      <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
        Software Systems Student
        <br />
        Frontend Developer
      </h1>

      <p className="text-gray-600 max-w-xl mb-8">
        Building modern web applications.
      </p>

      <div className="flex gap-4">
        <a
          href="#projects"
          className="bg-foreground text-background px-6 py-3 rounded-full font-medium hover:opacity-90 transition"
        >
          View Projects
        </a>
        <a
          href="#contact"
          className="border border-gray-300 px-6 py-3 rounded-full font-medium hover:bg-gray-50 transition"
        >
          Contact Me
        </a>
      </div>
    </section>
  )
}

export default Hero
