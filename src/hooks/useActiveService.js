import { useCallback, useState } from 'react'

/**
 * Selection state for the gateway.
 *
 * hoverId   transient preview, cleared when the pointer or focus leaves
 * pinnedId  set by click or Enter, survives pointer leave
 *
 * Nodes and the info panel read `activeId` (hover wins over pin) so hovering
 * one node while another is pinned behaves like a preview, not a reset.
 */
export function useActiveService() {
  const [hoverId, setHoverId] = useState(null)
  const [pinnedId, setPinnedId] = useState(null)

  const hover = useCallback((id) => setHoverId(id), [])
  const clearHover = useCallback(() => setHoverId(null), [])

  const togglePin = useCallback((id) => {
    setHoverId(id)
    setPinnedId((current) => (current === id ? null : id))
  }, [])

  const clearAll = useCallback(() => {
    setHoverId(null)
    setPinnedId(null)
  }, [])

  return {
    activeId: hoverId ?? pinnedId,
    hoverId,
    pinnedId,
    hover,
    clearHover,
    togglePin,
    clearAll,
  }
}

export default useActiveService
