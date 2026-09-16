import { memo } from 'react'
import { motion } from 'framer-motion'
import { easeGateway } from '../../utils/animation'

/**
 * Origin node: the Korean head office.
 *
 *   stage  absolutely positioned card inside the desktop diagram
 *   flow   full-width card in the mobile vertical flow
 */
function SeoulNode({ variant = 'stage', x = 50, y = 12, shouldReduceMotion = false }) {
  const card = (
    <div className="surface-quiet w-full px-4 py-3 text-center backdrop-blur-md">
      <span className="label-micro">Seoul</span>
      <p className="mt-1 text-[0.9375rem] font-bold text-mist">한국 본사</p>
      <p className="mt-1 text-[0.6875rem] text-muted">Doanh nghiệp Hàn Quốc</p>
    </div>
  )

  if (variant === 'flow') {
    const reveal = shouldReduceMotion
      ? {}
      : {
          initial: { opacity: 0, y: 14 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, amount: 0.4 },
        }

    return (
      <motion.div {...reveal} transition={{ duration: 0.5, ease: easeGateway }}>
        {card}
      </motion.div>
    )
  }

  return (
    <div
      className="absolute z-10"
      style={{ left: `${x}%`, top: `${y}%`, transform: 'translate(-50%, -50%)' }}
    >
      <motion.div
        initial={shouldReduceMotion ? false : { opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: easeGateway }}
        className="w-[200px]"
      >
        {card}
      </motion.div>
    </div>
  )
}

export default memo(SeoulNode)