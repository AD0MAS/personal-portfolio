import { focusRing } from './focusStyles'
import { tw } from '../utils/tw'

/** Shared focus, press and tap-highlight classes for both button styles. */
const buttonStates = tw`[-webkit-tap-highlight-color:transparent] focus-visible:duration-0 active:duration-0 ${focusRing}`

/** Filled pill button (primary call to action): dims slightly on hover and press. */
export const buttonFilled = tw`rounded-full bg-foreground px-6 py-3 font-medium text-background transition hover:opacity-90 active:opacity-90 ${buttonStates}`

/** Outlined pill button (secondary action): gray tint on hover and press. */
export const buttonOutline = tw`rounded-full border border-gray-300 px-6 py-3 font-medium transition hover:bg-gray-50 active:bg-gray-50 dark:border-gray-600 dark:hover:bg-gray-800 dark:active:bg-gray-800 ${buttonStates}`
