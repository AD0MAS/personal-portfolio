/** Shared focus, press and tap-highlight classes for both button styles. */
const buttonStates =
  'active:duration-0 focus-visible:duration-0 [-webkit-tap-highlight-color:transparent] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900 dark:focus-visible:outline-gray-100'

/** Filled pill button (primary call to action): dims slightly on hover and press. */
export const buttonFilled = `bg-foreground text-background px-6 py-3 rounded-full font-medium hover:opacity-90 transition active:opacity-90 ${buttonStates}`

/** Outlined pill button (secondary action): gray tint on hover and press. */
export const buttonOutline = `border border-gray-300 dark:border-gray-600 px-6 py-3 rounded-full font-medium hover:bg-gray-50 dark:hover:bg-gray-800 transition active:bg-gray-50 dark:active:bg-gray-800 ${buttonStates}`
