import { cn } from '../../utils/cn'

/**
 * Page gutter. One width for the whole site: 1200px max, 20/24px padding.
 */
export default function Container({
  as: Tag = 'div',
  className,
  children,
  ...rest
}) {
  return (
    <Tag
      className={cn('mx-auto w-full max-w-[1200px] px-5 sm:px-6', className)}
      {...rest}
    >
      {children}
    </Tag>
  )
}