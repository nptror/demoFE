import { useReducedMotion as useMotionReducedMotion } from 'framer-motion'

/**
 * Single source of truth for the prefers-reduced-motion query.
 * Returns true when the visitor asked for less motion, in which case every
 * section renders its final state with no transition.
 */
export function useReducedMotion() {
  return Boolean(useMotionReducedMotion())
}

export default useReducedMotion
