import type { ExperienceId } from '../constants/experience'

/** A single work experience entry. */
interface ExperienceEntry {
  role: string
  period: string
  org: string
  description: string
}

/** A single portfolio project entry. */
export interface ProjectEntry {
  title: string
  description: string
  tech: readonly string[]
  githubUrl: string
  liveUrl: string
}

/** Shape of one language's translation dictionary: every section's text and content entries. */
export interface Translations {
  nav: {
    home: string
    about: string
    skills: string
    projects: string
    experience: string
    contact: string
  }
  hero: {
    greeting: string
    titleLine1: string
    titleLine2: string
    subtitle: string
    viewProjects: string
    contactMe: string
  }
  about: {
    heading: string
    paragraph1: string
    paragraph2: string
    cta: string
  }
  skills: {
    heading: string
  }
  experience: {
    heading: string
    entries: Record<ExperienceId, ExperienceEntry>
  }
  projects: {
    heading: string
    entries: ProjectEntry[]
  }
  contact: {
    heading: string
    subtitle: string
    github: string
    linkedin: string
    copyEmail: string
    copied: string
  }
  footer: {
    builtWith: string
  }
  /** Accessible names for controls without visible text. */
  a11y: {
    home: string
    openMenu: string
    closeMenu: string
    switchToDark: string
    switchToLight: string
    changeLanguage: string
  }
}
