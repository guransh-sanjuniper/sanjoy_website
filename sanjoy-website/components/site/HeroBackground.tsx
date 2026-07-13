export function HeroBackground() {
  return (
    <>
      <div className="hero-dot-grid absolute inset-0 -z-10" aria-hidden="true" />
      <div className="absolute inset-0 -z-10 overflow-hidden" aria-hidden="true">
        <div className="hero-ambient-glow hero-ambient-glow--primary" />
        <div className="hero-ambient-glow hero-ambient-glow--secondary" />
        <div className="hero-ambient-glow hero-ambient-glow--tertiary" />
      </div>
    </>
  )
}
