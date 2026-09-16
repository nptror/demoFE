import { useState } from 'react'
import { useMotionValueEvent, useScroll } from 'framer-motion'
import Container from '../common/Container'
import Button from '../common/Button'
import Icon from '../common/Icon'
import MobileMenu from './MobileMenu'
import LanguageSwitcher from '../LanguageSwitcher'
import { brand, navItems, languages } from '../../data/site'
import { cn } from '../../utils/cn'

/**
 * Sticky header. Height is capped at 68px so navigation never eats the
 * viewport, and items sit on one line from lg up.
 *
 * The scrolled state is driven by Motion's scrollY value, not by a scroll
 * listener, and only re-renders when the boolean actually flips.
 */
export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [language, setLanguage] = useState('KR')
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, 'change', (value) => {
    const next = value > 24
    setScrolled((current) => (current === next ? current : next))
  })

  const handleLanguageChange = (next) => {
    setLanguage(next)
    const entry = languages.find((item) => item.code === next)
    if (entry) {
      document.documentElement.lang = entry.htmlLang
    }
  }

  return (
    <>
      <header
        className={cn(
          'fixed inset-x-0 top-0 z-40 border-b transition-colors duration-300 ease-gateway',
          scrolled
            ? 'border-hairline bg-ink-950/85 backdrop-blur-xl'
            : 'border-transparent bg-transparent',
        )}
      >
        <Container className="flex h-[68px] items-center justify-between gap-4">
          <a
            href="#top"
            className="flex items-center gap-3"
            aria-label={`${brand.name} ${brand.suffix}, về đầu trang`}
          >
            <span
              aria-hidden="true"
              className="grid h-9 w-9 place-items-center rounded-[12px] bg-gradient-to-br from-daond to-violet text-[0.8125rem] font-extrabold text-white"
            >
              D
            </span>
            <span className="flex flex-col leading-none">
              <span className="text-[0.9375rem] font-extrabold tracking-[0.16em] text-mist">
                {brand.name}
              </span>
              <span className="mt-[5px] text-[0.6875rem] text-muted">
                {brand.suffix}
              </span>
            </span>
          </a>

          <nav
            aria-label="Điều hướng chính"
            className="hidden items-center gap-1 lg:flex"
          >
            {navItems.map((item) => (
              <a
                key={item.id}
                href={item.href}
                className="rounded-full px-3 py-2 text-[0.875rem] text-muted transition-colors duration-200 ease-gateway hover:text-mist"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <LanguageSwitcher
              language={language}
              onChange={handleLanguageChange}
              className="hidden sm:inline-flex"
            />
            <Button
              href="#consultation"
              size="sm"
              className="hidden sm:inline-flex"
              aria-label="Tư vấn bằng tiếng Hàn"
            >
              한국어 상담
            </Button>
            <button
              type="button"
              onClick={() => setMenuOpen(true)}
              aria-label="Mở menu"
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              className="grid h-10 w-10 place-items-center rounded-full border border-hairline text-mist transition-colors duration-200 ease-gateway hover:bg-white/[0.08] lg:hidden"
            >
              <Icon name="menu" weight="regular" size={18} />
            </button>
          </div>
        </Container>
      </header>

      <MobileMenu
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
        language={language}
        onLanguageChange={handleLanguageChange}
      />
    </>
  )
}