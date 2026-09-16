import { cn } from '../../utils/cn'

/**
 * Glass panel used for cards and the gateway information panel.
 *
 * Elevation comes from a top hairline highlight plus a short-range tinted
 * shadow. Deliberately no neon outer glow: on a deep navy surface a wide
 * bloom washes out neighbouring text.
 */
export default function GlowCard({
  as: Tag = 'div',
  tone,
  interactive = false,
  className,
  children,
  ...rest
}) {
  return (
    <Tag
      className={cn(
        'surface group relative overflow-hidden',
        interactive &&
          'transition-[transform,border-color,box-shadow] duration-300 ease-gateway hover:-translate-y-0.5 hover:border-white/20',
        className,
      )}
      {...rest}
    >
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px"
        style={{
          backgroundImage:
            'linear-gradient(to right, transparent, rgb(255 255 255 / 0.22), transparent)',
        }}
      />
      {tone ? (
        <span
          aria-hidden="true"
          className={cn(
            'pointer-events-none absolute -top-20 -right-14 h-44 w-44 rounded-full',
            interactive
              ? 'opacity-0 transition-opacity duration-500 ease-gateway group-hover:opacity-100'
              : 'opacity-70',
          )}
          style={{
            background: `radial-gradient(circle, ${tone}33, transparent 70%)`,
          }}
        />
      ) : null}
      <div className="relative">{children}</div>
    </Tag>
  )
}