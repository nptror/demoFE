import { useEffect, useRef } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Button from '../common/Button'
import Icon from '../common/Icon'
import { languages as LANGUAGES } from '../../data/site'
import { cn } from '../../utils/cn'
import { brand, contact, navItems } from '../../data/site'
import { easeGateway } from '../../utils/animation'

/**
 * Full-screen navigation for touch and narrow viewports.
 *
 * Escape closes, body scroll locks while open, focus moves into the panel on
 * open and everything is restored on cleanup. Links close the panel so the
 * anchor scroll starts immediately.
 */
export default function MobileMenu({ open, onClose, language = 'KR', onLanguageChange }) {
  const closeRef = useRef(null)

  useEffect(() => {
    if (!open) return undefined

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') onClose()
    }

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    document.addEventListener('keydown', handleKeyDown)
    closeRef.current?.focus()

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = previousOverflow
    }
  }, [open, onClose])

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          id="mobile-menu"
          className="fixed inset-0 z-60 bg-ink-950/95 px-5 pt-5 pb-8 backdrop-blur-xl lg:hidden"
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.25, ease: easeGateway }}
          role="dialog"
          aria-modal="true"
          aria-label="Điều hướng di động"
        >
          <div className="flex h-[68px] items-center justify-between">
            <span className="text-[0.9375rem] font-extrabold tracking-[0.16em] text-mist">
              {brand.name}
            </span>
            <button
              ref={closeRef}
              type="button"
              onClick={onClose}
              aria-label="Đóng menu"
              className="grid h-10 w-10 place-items-center rounded-full border border-hairline text-mist transition-colors duration-200 ease-gateway hover:bg-white/[0.08]"
            >
              <Icon name="close" weight="regular" size={18} />
            </button>
          </div>

          <nav aria-label="Điều hướng di động" className="mt-6">
            <ul className="flex flex-col">
              {navItems.map((item) => (
                <li key={item.id} className="border-b border-hairline/60">
                  <a
                    href={item.href}
                    onClick={onClose}
                    className="flex min-h-[56px] items-center justify-between text-lg font-semibold text-mist"
                  >
                    {item.label}
                    <Icon
                      name="arrowRight"
                      weight="regular"
                      size={18}
                      className="text-muted"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="mt-8 border-t border-hairline/60 pt-5">
            <span className="label-micro">Language · 언어</span>
            <ul className="mt-3 flex flex-col">
              {LANGUAGES.map((item) => {
                const active = item.code === language
                return (
                  <li key={item.code}>
                    <button
                      type="button"
                      onClick={() => onLanguageChange?.(item.code)}
                      aria-pressed={active}
                      className="flex min-h-[48px] w-full items-center justify-between text-left transition-colors duration-200 ease-gateway"
                    >
                      <span className="flex items-center gap-3">
                        <span
                          aria-hidden="true"
                          className={
                            active
                              ? 'h-2 w-2 rounded-full bg-daond shadow-[0_0_8px_rgba(49,130,246,0.7)]'
                              : 'h-2 w-2 rounded-full border border-white/35'
                          }
                        />
                        <span
                          className={
                            active
                              ? 'text-[0.9375rem] font-semibold text-mist'
                              : 'text-[0.9375rem] text-muted'
                          }
                        >
                          {item.label}
                        </span>
                      </span>
                      <span
                        className={cn(
                          'font-mono text-[0.6875rem] tracking-[0.1em]',
                          active ? 'text-daond-soft' : 'text-muted',
                        )}
                      >
                        {item.code}
                      </span>
                    </button>
                  </li>
                )
              })}
            </ul>
          </div>

          <div className="mt-8 flex flex-col gap-4">
            <Button href="#consultation" size="lg" onClick={onClose}>
              한국어 상담
            </Button>
            <p className="text-sm text-muted">{contact.languages}</p>
            <a
              href={`mailto:${contact.email}`}
              className="text-sm text-daond-soft underline-offset-4 hover:underline"
            >
              {contact.email}
            </a>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  )
}