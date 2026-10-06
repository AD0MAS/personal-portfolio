import { tw } from '../utils/tw'

/** Monochrome color of every keyboard focus ring. */
const focusRingColor = tw`focus-visible:outline-gray-900 dark:focus-visible:outline-gray-100`

/** Keyboard focus ring drawn just outside the element, shared by all interactive elements. */
export const focusRing = tw`focus-visible:outline-2 focus-visible:outline-offset-2 ${focusRingColor}`

/**
 * Keyboard focus ring drawn inside the element, for items in an overflow-hidden rounded container
 * (the language options), where an outside ring would be clipped. The 6px inset keeps the ring's
 * corners clear of the container's rounded clip.
 */
export const focusRingInset = tw`focus-visible:outline-2 focus-visible:-outline-offset-6 ${focusRingColor}`
