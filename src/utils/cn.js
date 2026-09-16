/**
 * Join class names and drop anything falsy.
 * Keeps conditional Tailwind sets readable without adding a dependency.
 */
export function cn(...values) {
  return values.flat(Infinity).filter(Boolean).join(' ')
}

export default cn
