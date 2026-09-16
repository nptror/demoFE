import { memo } from 'react'
import { motion } from 'framer-motion'
import { easeGateway } from '../../utils/animation'

/**
 * DAON Core: the single partner between Seoul and Vietnam.
 *
 * Lights up while any service node is active, which is what makes the flow
 * read as "one connected partner" instead of four unrelated services.
 */
function DaonCore({ variant = 'stage', x = 50, y = 36, active = false, shouldReduceMotion = false }) {
  const card = (
    <div
      className="surface relative w-full overflow-hidden px-6 py-5 text-center transition-[border-color,box-shadow] duration-300 ease-gateway"
      style={{
        borderColor: active ? 'rgb(79 140 255 / 0.55)' : undefined,
        boxShadow: active
          ? '0 24px 60px -34px rgba(79, 140, 255, 0.95)'
          : '0 20px 50px -38px rgba(0, 0, 0, 0.9)',
      }}
    >
      <span
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-px"
        style={{
          backgroundImage:
            'linear-gradient(to right, transparent, rgb(79 140 255 / 0.8), transparent)',
        }}
      />
      <span className="label-micro">One partner</span>
      <p className="mt-1.5 text-[1.5rem] leading-none font-extrabold tracking-[-0.02em] text-mist">
        DAON
      </p>
      <p className="mt-2 text-[0.75rem] text-muted">
        한국에서 베트남까지, 하나의 파트너
      </p>
      <div className="mt-4 flex items-center justify-center gap-3 text-[0.6875rem] text-muted">
        <span>4 nhóm dịch vụ</span>
        <span aria-hidden="true" className="h-3 w-px bg-white/15" />
        <span>Tiếng Hàn · Việt · Anh</span>
      </div>
    </div>
  )

  const halo = (
    <span
      aria-hidden="true"
      className="absolute inset-6 -z-10 rounded-full bg-daond/25 blur-2xl"
      style={
        shouldReduceMotion
          ? undefined
          : { animation: 'core-pulse 6s ease-in-out infinite' }
      }
    />
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
      <motion.div
        {...reveal}
        transition={{ duration: 0.55, ease: easeGateway }}
        className="relative"
      >
        {halo}
        {card}
      </motion.div>
    )
  }

  return (
    <div
      className="absolute z-20"
      style={{ left: `${x}%`, top: `${y}%`, transform: 'translate(-50%, -50%)' }}
    >
      <motion.div
        initial={shouldReduceMotion ? false : { opacity: 0, y: 14, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{
          duration: 0.7,
          delay: shouldReduceMotion ? 0 : 0.35,
          ease: easeGateway,
        }}
        className="relative w-[248px] xl:w-[276px]"
      >
        {halo}
        {card}
      </motion.div>
    </div>
  )
}

export default memo(DaonCore)