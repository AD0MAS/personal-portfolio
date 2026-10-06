/** Reads a localStorage value; returns null if the key is missing or storage is unavailable (e.g. blocked site data). */
export function readStorage(key: string): string | null {
  try {
    return localStorage.getItem(key)
  } catch {
    return null
  }
}

/** Writes a localStorage value; if storage is unavailable, the value is simply not persisted. */
export function writeStorage(key: string, value: string): void {
  try {
    localStorage.setItem(key, value)
  } catch {
    // Storage unavailable: the preference still applies for this session.
  }
}
