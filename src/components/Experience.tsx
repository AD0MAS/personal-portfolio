import { experience } from '../data/experience'

/** Experience section: brief highlights from work history, most recent first. */
function Experience() {
  return (
    <section id="experience" className="max-w-2xl mx-auto px-6 py-24">
      <h2 className="text-2xl font-semibold text-foreground mb-10">
        Experience
      </h2>

      <div className="space-y-8">
        {experience.map((entry) => (
          <div key={entry.role} className="border-l-2 border-gray-200 pl-6">
            <div className="flex flex-wrap items-baseline justify-between gap-x-4">
              <h3 className="font-medium text-foreground">{entry.role}</h3>
              <span className="text-sm text-gray-500">{entry.period}</span>
            </div>
            <p className="text-sm text-gray-500 mb-1">{entry.org}</p>
            <p className="text-gray-600">{entry.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Experience
