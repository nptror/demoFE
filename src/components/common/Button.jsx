import { cn } from '../../utils/cn'

/*
 * Pill button. Renders an anchor when `href` is passed, otherwise a real
 * button. Labels stay on one line at every breakpoint (no wrapping CTA).
 */
const base =
  'inline-flex shrink-0 items-center justify-center gap-2 rounded-full font-semibold whitespace-nowrap transition-[background-color,border-color,color,box-shadow,transform] duration-200 ease-gateway active:translate-y-px disabled:cursor-not-allowed disabled:opacity-60'

const variants = {
  /* White text on the deep DAON blue passes WCAG AA (6.9:1). */
  primary:
    'bg-daond-deep text-white shadow-[0_16px_40px_-22px_rgba(22,119,255,0.95)] hover:bg-daond-ink',
  secondary:
    'border border-hairline bg-white/[0.04] text-mist hover:border-white/25 hover:bg-white/[0.09]',
  quiet: 'text-daond-soft hover:text-mist',
}

const sizes = {
  sm: 'h-9 px-4 text-[0.8125rem]',
  md: 'h-11 px-5 text-[0.875rem]',
  lg: 'h-12 px-6 text-[0.9375rem]',
}

export default function Button({
  href,
  variant = 'primary',
  size = 'md',
  type,
  className,
  children,
  ...rest
}) {
  const Tag = href ? 'a' : 'button'
  const tagProps = href ? { href } : { type: type ?? 'button' }

  return (
    <Tag
      className={cn(base, variants[variant], sizes[size], className)}
      {...tagProps}
      {...rest}
    >
      {children}
    </Tag>
  )
}