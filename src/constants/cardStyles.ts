import { tw } from '../utils/tw'

/** Bordered content card (Skills, Projects, Experience): subtle gray fill that tints, lifts and grows slightly on hover. */
export const card = tw`rounded-2xl border border-gray-200 bg-gray-50 p-6 transition-all duration-200 hover:scale-[1.02] hover:bg-gray-100 hover:shadow-md dark:border-gray-800 dark:bg-gray-900 dark:hover:bg-gray-800`

/** Round gray badge holding a card's icon, centered. */
export const cardIconCircle = tw`flex h-10 w-10 items-center justify-center rounded-full bg-gray-200 dark:bg-gray-700`
