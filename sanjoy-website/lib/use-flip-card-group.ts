"use client"

import { useCallback, useEffect, useState } from "react"

const coarsePointerQuery = "(hover: none), (pointer: coarse)"

export function useFlipCardGroup() {
  const [activeId, setActiveId] = useState<string | null>(null)
  const [isCoarsePointer, setIsCoarsePointer] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia(coarsePointerQuery)
    const update = () => setIsCoarsePointer(mediaQuery.matches)

    update()
    mediaQuery.addEventListener("change", update)

    return () => mediaQuery.removeEventListener("change", update)
  }, [])

  useEffect(() => {
    if (!isCoarsePointer) return

    const handlePointerDown = (event: PointerEvent) => {
      const target = event.target
      if (!(target instanceof Element)) return

      if (!target.closest("[data-flip-card]")) {
        setActiveId(null)
      }
    }

    document.addEventListener("pointerdown", handlePointerDown)

    return () => document.removeEventListener("pointerdown", handlePointerDown)
  }, [isCoarsePointer])

  const toggleCard = useCallback(
    (id: string) => {
      if (!isCoarsePointer) return
      setActiveId((current) => (current === id ? null : id))
    },
    [isCoarsePointer]
  )

  const isCardActive = useCallback(
    (id: string) => isCoarsePointer && activeId === id,
    [activeId, isCoarsePointer]
  )

  return { isCoarsePointer, toggleCard, isCardActive }
}
