import { focusRing } from './focusStyles'

/** Shared focus, press and tap-highlight classes for both button styles. */
const buttonStates = `active:duration-0 focus-visible:duration-0 [-webkit-tap-highlight-color:transparent] ${focusRing}`

/** Filled pill button (primary call to action): dims slightly on hover and press. */
export const buttonFilled = `bg-foreground text-background px-6 py-3 rounded-full font-medium hover:opacity-90 transition active:opacity-90 ${buttonStates}`

/** Outlined pill button (secondary action): gray tint on hover and press. */
export const buttonOutline = `border border-gray-300 dark:border-gray-600 px-6 py-3 rounded-full font-medium hover:bg-gray-50 dark:hover:bg-gray-800 transition active:bg-gray-50 dark:active:bg-gray-800 ${buttonStates}`
