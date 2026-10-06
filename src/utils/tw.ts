/**
 * Identity tag for Tailwind class strings outside JSX (e.g. tw`px-6 py-3`).
 * It returns the string unchanged; it exists only so prettier-plugin-tailwindcss
 * (configured with tailwindFunctions: ["tw"]) sorts the classes in these strings.
 */
export const tw = String.raw
