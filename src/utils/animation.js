/*
 * Shared motion vocabulary.
 *
 * Every reveal on the page is built from these variants so timing stays
 * consistent (micro 150-250ms, reveal 500-800ms, connection draw 800-1500ms).
 */

/** Fast out, long settle. Matches --ease-gateway in styles/tailwind.css. */
export const easeGateway = [0.22, 1, 0.36, 1]

/** Section reveal. */
export const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: easeGateway },
  },
}

/** Smaller lift, for list rows and cards. */
export const riseIn = {
  hidden: { opacity: 0, y: 14 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: easeGateway },
  },
}

/** Plain fade, for text blocks that should not move. */
export const fadeIn = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.5, ease: easeGateway } },
}

/** Parent for sequenced children. */
export function staggerGroup(stagger = 0.09, delayChildren = 0) {
  return {
    hidden: {},
    show: { transition: { staggerChildren: stagger, delayChildren } },
  }
}

/** One connection path of the gateway drawing itself in. */
export const connectionDraw = {
  hidden: { pathLength: 0, opacity: 0 },
  show: {
    pathLength: 1,
    opacity: 1,
    transition: { duration: 1.1, ease: easeGateway },
  },
}

/** Scroll-triggered reveals fire once, when a third of the block is visible. */
export const viewportOnce = { once: true, amount: 0.3 }

/**
 * Props for a scroll reveal that degrades to "already visible" when the
 * visitor asked for reduced motion. Initial state is skipped entirely so no
 * content stays hidden behind disabled animation.
 */
export function revealProps(shouldReduceMotion, variants = fadeUp, viewport = viewportOnce) {
  if (shouldReduceMotion) {
    return { initial: false, variants: undefined, viewport }
  }
  return { variants, initial: 'hidden', whileInView: 'show', viewport }
}
