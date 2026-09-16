import { motion } from 'framer-motion'
import Button from '../common/Button'
import Icon from '../common/Icon'
import { getServiceById, services } from '../../data/services'
import { easeGateway } from '../../utils/animation'

/**
 * Information panel under the gateway stage.
 *
 * Height is reserved (min-h) so switching services never shifts the layout.
 *
 * Idle state: the four services are preview buttons. Hover or focus lights up
 * the matching node and connection, so pointer users can explore without
 * clicking and keyboard users get the same preview on focus.
 * Active state: description, highlights and a CTA that seeds the contact form
 * with that service.
 */
export default function ServiceInfoPanel({
  activeId,
  pinnedId,
  onHover,
  onLeave,
  onRequest,
  shouldReduceMotion = false,
}) {
  const service = getServiceById(activeId)

  return (
    <div
      id="gateway-service-panel"
      aria-live="polite"
      className="surface mt-6 min-h-[180px] p-5 sm:p-6"
    >
      {service ? (
        <motion.div
          key={service.id}
          initial={shouldReduceMotion ? false : { opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25, ease: easeGateway }}
          className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between lg:gap-10"
        >
          <div className="min-w-0">
            <div className="flex items-center gap-3">
              <span
                className="grid h-10 w-10 shrink-0 place-items-center rounded-[14px] border border-hairline"
                style={{ color: service.color }}
              >
                <Icon name={service.icon} size={20} />
              </span>
              <div className="min-w-0">
                <span className="label-micro">{service.label}</span>
                <p className="text-[1.0625rem] font-bold text-mist">
                  {service.title}
                </p>
                <p className="mt-0.5 text-[0.75rem] text-muted">
                  {service.titleKo}
                </p>
              </div>
            </div>
            <p className="mt-3 max-w-[52ch] text-sm text-muted">
              {service.description}
            </p>
            <p className="mt-3 text-[0.75rem] text-muted">{service.meta}</p>
          </div>

          <div className="flex shrink-0 flex-col gap-4 lg:max-w-[360px]">
            <ul className="flex flex-col gap-2">
              {service.highlights.map((item) => (
                <li
                  key={item}
                  className="flex gap-2 text-[0.8125rem] text-mist/85"
                >
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

            <div className="flex flex-wrap items-center gap-3">
              <Button size="sm" onClick={() => onRequest?.(service.id)}>
                Tư vấn dịch vụ này
              </Button>
              {pinnedId === service.id ? (
                <span className="text-[0.75rem] text-muted">
                  Đang ghim nhóm này
                </span>
              ) : null}
            </div>
          </div>
        </motion.div>
      ) : (
        <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between lg:gap-10">
          <div>
            <p className="text-[0.9375rem] font-semibold text-mist">
              Bốn nhóm dịch vụ, một luồng công việc
            </p>
            <p className="mt-1.5 max-w-[46ch] text-sm text-muted">
              Đưa chuột lên một nhóm để xem chi tiết, hoặc chọn để ghim lại và
              nhận tư vấn cho nhóm đó.
            </p>
          </div>

          <ul className="flex flex-wrap gap-2">
            {services.map((item) => (
              <li key={item.id}>
                <button
                  type="button"
                  onMouseEnter={() => onHover?.(item.id)}
                  onMouseLeave={onLeave}
                  onFocus={() => onHover?.(item.id)}
                  onBlur={onLeave}
                  className="rounded-full border border-hairline px-3.5 py-2 text-[0.8125rem] text-mist transition-colors duration-200 ease-gateway hover:bg-white/[0.08]"
                >
                  {item.title}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}