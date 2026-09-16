import { useScroll, useSpring } from 'framer-motion'

/**
 * Scroll progress of a target element as a MotionValue between 0 and 1.
 *
 * Deliberately a MotionValue instead of React state: a scroll listener that
 * writes to state re-renders the tree on every frame. Consumers can feed this
 * straight into a scaleX transform or a useMotionValueEvent.
 */
export function useScrollProgress(target, options = {}) {
  const {
    offset = ['start end', 'end start'],
    spring = { stiffness: 120, damping: 24, mass: 0.4 },
  } = options

  const { scrollYProgress } = useScroll(target ? { target, offset } : { offset })

  return useSpring(scrollYProgress, spring)
}

export default useScrollProgress
