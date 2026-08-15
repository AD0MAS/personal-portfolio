import { skillCategories } from '../data/skills'

/** Skills section: technical skills grouped into cards by category. */
function Skills() {
  return (
    <section id="skills" className="max-w-4xl mx-auto px-6 py-24">
      <h2 className="text-2xl font-semibold text-foreground mb-10 text-center">
        Skills
      </h2>

      <div className="grid sm:grid-cols-3 gap-6">
        {skillCategories.map((category) => (
          <div
            key={category.title}
            className="border border-gray-200 rounded-2xl p-6"
          >
            <h3 className="font-medium text-foreground mb-4">
              {category.title}
            </h3>
            <ul className="space-y-2 text-gray-600 text-sm">
              {category.skills.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills
