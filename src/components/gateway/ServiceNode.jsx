import { memo } from 'react'
import { motion } from 'framer-motion'
import Icon from '../common/Icon'
import { cn } from '../../utils/cn'
import { easeGateway } from '../../utils/animation'

/*
 * One service node.
 *
 *   stage  absolutely positioned inside the desktop gateway. Hover or focus
 *          previews the service in the info panel, click pins it.
 *   stack  full card used by the mobile gateway, where hover does not exist,
 *          so description and highlights are always visible.
 *
 * memo() matters here: the gateway owns the hover state, and this keeps a
 * hover from re-rendering all four nodes. Callbacks are stable (the hook
 * wraps them in useCallback) and `service` comes from imported data, so the
 * comparison actually hits.
 */
function ServiceNode({
  service,
  active = false,
  dimmed = false,
  pinned = false,
  onHover,
  onLeave,
  onSelect,
  variant = 'stage',
  x = 50,
  y = 50,
  shouldReduceMotion = false,
  delay = 0.5,
}) {
  if (variant === 'stack') {
    const reveal = shouldReduceMotion
      ? {}
      : {
          initial: { opacity: 0, y: 16 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, amount: 0.3 },
        }

    return (
      <motion.article
        {...reveal}
        transition={{ duration: 0.5, ease: easeGateway }}
        className="surface relative overflow-hidden p-5"
      >
        <span
          aria-hidden="true"
          className="pointer-events-none absolute -top-16 -right-12 h-32 w-32 rounded-full"
          style={{
            background: `radial-gradient(circle, ${service.color}2e, transparent 70%)`,
          }}
        />

        <div className="relative flex items-start gap-3">
          <span
            className="grid h-10 w-10 shrink-0 place-items-center rounded-[14px] border border-hairline"
            style={{ color: service.color }}
          >
            <Icon name={service.icon} size={20} />
          </span>
          <div className="min-w-0">
            <span className="label-micro">{service.label}</span>
            <h3 className="mt-1 text-[1.0625rem] font-bold text-mist">
              {service.title}
            </h3>
            <p className="mt-0.5 text-[0.75rem] text-muted">
              {service.titleKo}
            </p>
          </div>
        </div>

        <p className="relative mt-4 text-sm text-muted">{service.description}</p>

        <ul className="relative mt-3 flex flex-col gap-2">
          {service.highlights.map((item) => (
            <li key={item} className="flex gap-2 text-[0.8125rem] text-mist/85">
              <Icon
                name="check"
                weight="regular"
                size={14}
                className="mt-[3px] shrink-0"
                style={{ color: service.color }}
              />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </motion.article>
    )
  }

  const handleEnter = () => onHover?.(service.id)
  const handleSelect = () => onSelect?.(service.id)

  return (
    <div
      className="absolute z-10"
      style={{ left: `${x}%`, top: `${y}%`, transform: 'translate(-50%, -50%)' }}
    >
      <motion.button
        type="button"
        onMouseEnter={handleEnter}
        onMouseLeave={onLeave}
        onFocus={handleEnter}
        onBlur={onLeave}
        onClick={handleSelect}
        aria-pressed={pinned}
        initial={shouldReduceMotion ? false : { opacity: 0, y: 10 }}
        animate={{ opacity: dimmed ? 0.45 : 1, y: 0, scale: active ? 1.05 : 1 }}
        transition={{
          duration: 0.25,
          ease: easeGateway,
          delay: shouldReduceMotion ? 0 : delay,
        }}
        className={cn(
          'group relative w-[132px] overflow-hidden rounded-[20px] border bg-white/[0.05] px-3.5 py-3 text-left backdrop-blur-md transition-[border-color,box-shadow] duration-200 ease-gateway xl:w-[160px]',
          active
            ? 'border-white/30'
            : 'border-white/10 hover:border-white/20',
        )}
        style={{
          boxShadow: active
            ? `0 20px 44px -26px ${service.color}`
            : '0 12px 32px -28px rgba(0, 0, 0, 0.9)',
        }}
      >
        <span
          aria-hidden="true"
          className="absolute inset-x-0 top-0 h-px"
          style={{
            background: `linear-gradient(to right, transparent, ${service.color}99, transparent)`,
          }}
        />
        <span
          aria-hidden="true"
          className="absolute -top-10 -right-8 h-24 w-24 rounded-full"
          style={{
            background: `radial-gradient(circle, ${service.color}2b, transparent 70%)`,
          }}
        />
        <span className="label-micro relative block">{service.label}</span>
        <span className="relative mt-1 block text-[0.8125rem] leading-snug font-bold text-mist">
          {service.title}
        </span>
        <span className="relative mt-1 block text-[0.6875rem] text-muted">
          {service.titleKo}
        </span>
      </motion.button>
    </div>
  )
}

export default memo(ServiceNode)