import { memo } from 'react'
import { motion } from 'framer-motion'
import { easeGateway } from '../../utils/animation'

/**
 * One connection of the gateway.
 *
 * Two stacked paths per connection:
 *   base  draws itself in once on mount (or appears instantly when the
 *         visitor prefers reduced motion)
 *   flow  a dashed overlay running along the same path, the "data flow"
 *         that keeps the idle state alive without any spinning or pulsing
 *
 * `preserveAspectRatio="none"` stretches the 100x100 viewBox onto the stage,
 * so coordinates are shared with the absolutely positioned nodes.
 * `vector-effect="non-scaling-stroke"` keeps the stroke at 1.25px after that
 * stretch.
 */
function ConnectionLine({
  d,
  color = '#4f8cff',
  highlighted = false,
  dimmed = false,
  drawDelay = 0.35,
  shouldReduceMotion = false,
}) {
  return (
    <g>
      <motion.path
        d={d}
        fill="none"
        stroke={color}
        strokeWidth={1.25}
        strokeLinecap="round"
        vectorEffect="non-scaling-stroke"
        initial={shouldReduceMotion ? false : { pathLength: 0, opacity: 0 }}
        animate={{
          pathLength: 1,
          opacity: dimmed ? 0.22 : highlighted ? 1 : 0.55,
        }}
        transition={{
          pathLength: { duration: 1.1, delay: drawDelay, ease: easeGateway },
          opacity: { duration: 0.2, ease: easeGateway },
        }}
      />

      {shouldReduceMotion ? null : (
        <path
          d={d}
          fill="none"
          stroke={color}
          strokeWidth={2}
          strokeLinecap="round"
          strokeDasharray="6 18"
          vectorEffect="non-scaling-stroke"
          className="animate-dash-flow"
          opacity={dimmed ? 0.12 : highlighted ? 0.8 : 0.35}
        />
      )}
    </g>
  )
}

export default memo(ConnectionLine)