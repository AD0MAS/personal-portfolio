/** About section: short personal narrative — who I am, what draws me to programming, and current goal. */
function About() {
  return (
    <section id="about" className="max-w-2xl mx-auto px-6 py-24">
      <h2 className="text-2xl font-semibold text-foreground mb-6">About</h2>

      <div className="space-y-4 text-gray-600 leading-relaxed">
        <p>
          I'm a Software Systems student focused on building useful,
          well-designed software. With a foundation in programming, algorithms,
          databases, and software engineering, I'm currently exploring modern
          web development through JavaScript, TypeScript, and React — learning
          by building real projects from scratch.
        </p>
        <p>
          What draws me to programming is the combination of logic and craft —
          solving a problem is only half the job; building something people can
          actually use well is the other half. I'm driven by continuous
          improvement and interested in the intersection of technology,
          products, and business.
        </p>
        <p className="text-foreground font-medium">
          Currently looking for internship opportunities where I can learn,
          contribute, and build something meaningful.
        </p>
      </div>
    </section>
  )
}

export default About
