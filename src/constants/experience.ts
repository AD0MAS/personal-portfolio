/** Experience entry ids in display order, most recent first. */
export const EXPERIENCE_IDS = ['tutor', 'lifeguard', 'technician'] as const

/** Stable, language-independent id of an experience entry; links it to non-translated data such as its icon. */
export type ExperienceId = (typeof EXPERIENCE_IDS)[number]
