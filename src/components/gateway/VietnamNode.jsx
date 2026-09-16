import { memo } from 'react'
import { motion } from 'framer-motion'
import Icon from '../common/Icon'
import { easeGateway } from '../../utils/animation'

/**
 * Destination node: the operating company in Vietnam.
 * The mint tint marks the completed half of the flow.
 */
function VietnamNode({ variant = 'stage', x = 50, y = 88.5, shouldReduceMotion = false }) {
  const card = (
    <div className="relative w-full overflow-hidden rounded-[20px] border border-mint/25 bg-white/[0.05] px-4 py-3 text-center backdrop-blur-md">
      <span
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-px"
        style={{
          backgroundImage:
            'linear-gradient(to right, transparent, rgb(57 217 138 / 0.6), transparent)',
        }}
      />
      <span className="label-micro inline-flex items-center gap-1.5">
        <Icon name="checkCircle" weight="fill" size={12} className="text-mint" />
        Vietnam
      </span>
      <p className="mt-1 text-[0.9375rem] font-bold text-mist">현지 실행</p>
      <p className="mt-1 text-[0.6875rem] text-muted">
        TP. Hồ Chí Minh · Hà Nội
      </p>
    </div>
  )

  if (variant === 'flow') {
    const reveal = shouldReduceMotion
      ? {}
      : {
          initial: { opacity: 0, y: 16 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, amount: 0.4 },
        }

    return (
      <motion.div {...reveal} transition={{ duration: 0.55, ease: easeGateway }}>
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
        initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.6,
          delay: shouldReduceMotion ? 0 : 1.05,
          ease: easeGateway,
        }}
        className="w-[222px]"
      >
        {card}
      </motion.div>
    </div>
  )
}

export default memo(VietnamNode)