/** Skill categories displayed in the Skills section, grouped by area. */
export const skillCategories = [
  {
    title: 'Frontend',
    skills: [
      'React',
      'Next.js',
      'TypeScript',
      'JavaScript',
      'HTML',
      'CSS',
      'Tailwind CSS',
    ],
  },
  {
    title: 'Backend',
    skills: [
      'PostgreSQL',
      'SQL',
      'Supabase',
      'Drizzle ORM',
      'REST APIs',
      'C#',
      'Java',
      'Python',
    ],
  },
  {
    title: 'Tools',
    skills: [
      'Git',
      'GitHub',
      'Vercel',
      'VS Code',
      'Vite',
      'Visual Studio',
      'IntelliJ IDEA',
    ],
  },
] as const

/** Title of a skill category, e.g. 'Frontend'. */
export type SkillCategoryTitle = (typeof skillCategories)[number]['title']
