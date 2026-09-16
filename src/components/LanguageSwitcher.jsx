import { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { cn } from '../utils/cn'
import { easeGateway } from '../utils/animation'
import { useReducedMotion } from '../hooks/useReducedMotion'
import { languages as LANGUAGES } from '../data/site'

/**
 * Compact KR / VN control for the desktop header.
 *
 * Deliberately quiet: a hairline-bordered utility, visually secondary to the
 * CTA next to it. Switching fires the DAON signature micro-interaction — a
 * tiny cyan particle travels from the previous language code to the new one
 * (Korea → Vietnam), 450 ms, skipped entirely for reduced-motion visitors.
 */
export default function LanguageSwitcher({
  language = 'KR',
  onChange,
  className,
}) {
  const shouldReduceMotion = useReducedMotion()
  const boxRef = useRef(null)
  const codeRefs = useRef({})
  const particleSeq = useRef(0)
  const [particle, setParticle] = useState(null)

  const switchTo = (next) => {
    if (next === language || !LANGUAGES.some((item) => item.code === next)) {
      return
    }

    if (!shouldReduceMotion && boxRef.current) {
      const fromEl = codeRefs.current[language]
      const toEl = codeRefs.current[next]
      if (fromEl && toEl) {
        /* offsetLeft is relative to the container (its offsetParent). */
        setParticle({
          key: `${language}-${next}-${(particleSeq.current += 1)}`,
          x0: fromEl.offsetLeft + fromEl.offsetWidth / 2,
          x1: toEl.offsetLeft + toEl.offsetWidth / 2,
        })
      }
    }

    onChange?.(next)
  }

  return (
    <div
      ref={boxRef}
      role="group"
      aria-label="언어 선택 · Ngôn ngữ"
      className={cn(
        'group relative inline-flex items-center gap-0.5 rounded-[10px] border border-hairline bg-white/[0.03] px-2.5 py-1.5',
        'transition-[border-color,background-color,box-shadow] duration-200 ease-gateway',
        'hover:border-white/25 hover:bg-white/[0.06] hover:shadow-[0_0_18px_-6px_rgba(49,130,246,0.45)]',
        className,
      )}
    >
      {LANGUAGES.map((item, index) => {
        const active = item.code === language
        return (
          <span key={item.code} className="flex items-center">
            {index > 0 ? (
              <span aria-hidden="true" className="px-1 text-[0.625rem] text-muted/70">
                /
              </span>
            ) : null}
            <button
              ref={(el) => {
                codeRefs.current[item.code] = el
              }}
              type="button"
              onClick={() => switchTo(item.code)}
              aria-pressed={active}
              className={cn(
                'rounded-md px-1 font-mono text-[0.6875rem] font-semibold tracking-[0.1em] transition-colors duration-200 ease-gateway',
                active
                  ? 'text-mist group-hover:text-daond-soft'
                  : 'text-muted hover:text-mist',
              )}
            >
              {item.code}
            </button>
          </span>
        )
      })}

      {particle ? (
        <motion.span
          key={particle.key}
          aria-hidden="true"
          className="pointer-events-none absolute top-1/2 h-[3px] w-[3px] rounded-full"
          style={{
            left: particle.x0,
            top: 'calc(50% - 1.5px)',
            backgroundColor: '#22D3EE',
            boxShadow: '0 0 8px rgba(34, 211, 238, 0.85)',
          }}
          initial={{ opacity: 0, x: 0, scale: 0.5 }}
          animate={{
            opacity: [0, 1, 1, 0],
            x: particle.x1 - particle.x0,
            scale: [0.5, 1, 1, 0.5],
          }}
          transition={{ duration: 0.45, ease: easeGateway }}
          onAnimationComplete={() => setParticle(null)}
        />
      ) : null}
    </div>
  )
}
