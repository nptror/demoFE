import { cn } from '../../utils/cn'

/**
 * Section headline block, stacked on purpose: headline first, supporting
 * line directly underneath, capped at 62 characters.
 *
 * `eyebrow` is optional and used at most twice on the page (the gateway hero
 * and the consultation block). Do not add one per section.
 */
export default function SectionTitle({
  id,
  eyebrow,
  title,
  description,
  align = 'left',
  className,
  titleClassName,
  descriptionClassName,
}) {
  const centered = align === 'center'

  return (
    <div
      className={cn(
        'flex flex-col gap-4',
        centered && 'items-center text-center',
        className,
      )}
    >
      {eyebrow ? <span className="label-micro">{eyebrow}</span> : null}
      <h2
        id={id}
        className={cn(
          'text-[1.75rem] leading-[1.15] font-extrabold sm:text-[2rem] lg:text-[2.375rem]',
          titleClassName,
        )}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={cn(
            'max-w-[62ch] text-[0.9375rem] leading-relaxed text-muted sm:text-base',
            centered && 'mx-auto',
            descriptionClassName,
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  )
}