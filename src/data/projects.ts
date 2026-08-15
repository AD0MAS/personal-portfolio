import type { Project } from '../types/project'

/** Self-directed roadmap projects shown in the Projects section. */
export const projects: readonly Project[] = [
  {
    title: 'Atidelioju.lt',
    description:
      'A full CRUD task management app with checklist sub-items, live overdue detection, category filtering, dark mode, and full responsiveness (desktop/tablet/mobile).',
    tech: ['React', 'TypeScript', 'Vite'],
    githubUrl: 'https://github.com/AD0MAS/atidelioju-lt',
    liveUrl: 'https://atidelioju-lt.vercel.app',
  },
]
