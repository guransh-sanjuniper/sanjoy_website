import { useEffect, useState } from "react"

export function useScrollSpy(
  sectionIds: readonly string[],
  enabled: boolean,
  offset = 96
) {
  const [activeId, setActiveId] = useState<string | null>(
    sectionIds[0] ?? null
  )

  useEffect(() => {
    if (!enabled || sectionIds.length === 0) return

    const updateActiveSection = () => {
      let current = sectionIds[0]

      for (const id of sectionIds) {
        const element = document.getElementById(id)
        if (!element) continue

        if (element.getBoundingClientRect().top <= offset) {
          current = id
        }
      }

      setActiveId(current)
    }

    updateActiveSection()
    window.addEventListener("scroll", updateActiveSection, { passive: true })
    window.addEventListener("resize", updateActiveSection)
    window.addEventListener("hashchange", updateActiveSection)

    return () => {
      window.removeEventListener("scroll", updateActiveSection)
      window.removeEventListener("resize", updateActiveSection)
      window.removeEventListener("hashchange", updateActiveSection)
    }
  }, [enabled, sectionIds, offset])

  return enabled ? activeId : null
}
