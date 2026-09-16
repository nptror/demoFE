import { motion } from 'framer-motion'

/**
 * Thin page-scroll progress bar pinned under the header.
 *
 * Receives a MotionValue from useScrollProgress() and feeds it straight into
 * scaleX, so scrolling never triggers a React re-render — the transform is
 * applied by Motion outside the component tree.
 */
export default function ScrollProgressBar({ progress }) {
  return (
    <motion.div
      aria-hidden="true"
      className="fixed inset-x-0 top-0 z-50 h-0.5 origin-left bg-daond"
      style={{ scaleX: progress }}
    />
  )
}
