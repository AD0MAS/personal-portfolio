/** A single portfolio project entry displayed in the Projects section. */
export interface Project {
  title: string
  description: string
  tech: readonly string[]
  githubUrl: string
  liveUrl: string
}
