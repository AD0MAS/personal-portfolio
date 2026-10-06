import { tw } from '../utils/tw'

/** Bordered content card (Skills, Projects, Experience): subtle gray fill that tints, lifts and grows slightly on hover. */
export const card = tw`border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900 rounded-2xl p-6 hover:bg-gray-100 dark:hover:bg-gray-800 hover:scale-[1.02] hover:shadow-md transition-all duration-200`

/** Round gray badge holding a card's icon, centered. */
export const cardIconCircle = tw`w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center`
