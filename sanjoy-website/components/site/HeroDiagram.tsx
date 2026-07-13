"use client"

import type { PointerEvent } from "react"
import type { LucideIcon } from "lucide-react"
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "framer-motion"
import { BarChart3, BookOpen, Box, MessageSquare, User, Users } from "lucide-react"

type ModuleContent = {
  title: string
  detail: string
  icon: LucideIcon
}

type DesktopModule = ModuleContent & {
  /** Horizontal center position as a percentage of the container. */
  x: number
  /** Vertical center position as a percentage of the container. */
  y: number
  /** Preferred card width as a percentage of the container. */
  width: number
  /** Minimum card width in rem. */
  minWidth: number
  /** Parallax intensity multiplier. */
  depth: number
}

const modules: ModuleContent[] = [
  {
    title: "Sales",
    detail: "Drive revenue with intelligence",
    icon: BarChart3,
  },  
  {
    title: "Leadership",
    detail: "Make smarter decisions",
    icon: User,
  },
  {
    title: "HR",
    detail: "Empower people. Elevate performance.",
    icon: Users,
  },
  {
    title: "Operations",
    detail: "Automate workflows. Increase efficiency.",
    icon: Box,
  },
  {
    title: "Knowledge",
    detail: "Unify information. Unlock expertise.",
    icon: BookOpen,
  },
  {
    title: "Customer Experience",
    detail: "Deliver exceptional experiences",
    icon: MessageSquare,
  }  
]

const desktopModules: DesktopModule[] = [
  { ...modules[0], x: 50, y: 7.5, width: 36, minWidth: 9.5, depth: 0.6 },
  { ...modules[1], x: 11, y: 29, width: 34, minWidth: 9.75, depth: -0.75 },
  { ...modules[2], x: 89, y: 29, width: 34, minWidth: 9.75, depth: 0.7 },
  { ...modules[3], x: 10, y: 71, width: 34, minWidth: 10, depth: 0.55 },
  { ...modules[4], x: 90, y: 71, width: 36, minWidth: 10.25, depth: -0.6 },
  { ...modules[5], x: 50, y: 92.5, width: 36, minWidth: 9.75, depth: -0.5 },
]

const ariaLabel =
  "Sanjoy as a central enterprise AI operating layer connecting leadership, sales, HR, operations, knowledge, and customer experience"

type ModulePanelProps = DesktopModule & {
  index: number
  shouldReduceMotion: boolean | null
  smoothX: ReturnType<typeof useSpring>
  smoothY: ReturnType<typeof useSpring>
}

function ModulePanel({
  title,
  detail,
  icon: Icon,
  x,
  y,
  width,
  minWidth,
  depth,
  index,
  shouldReduceMotion,
  smoothX,
  smoothY,
}: ModulePanelProps) {
  const panelX = useTransform(smoothX, [-1, 1], [-8 * depth, 8 * depth])
  const panelY = useTransform(smoothY, [-1, 1], [-6 * depth, 6 * depth])

  return (
    <motion.div
      className="absolute z-20 -translate-x-1/2 -translate-y-1/2"
      style={{
        left: `${x}%`,
        top: `${y}%`,
        width: `clamp(${minWidth}rem, ${width}%, 12.5rem)`,
        ...(shouldReduceMotion ? {} : { x: panelX, y: panelY }),
      }}
      initial={shouldReduceMotion ? false : { opacity: 0, y: 10, scale: 0.97 }}
      animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0, scale: 1 }}
      transition={{
        duration: 0.6,
        delay: 0.4 + index * 0.07,
        ease: [0.2, 0.8, 0.2, 1],
      }}
    >
      <motion.div
        className="rounded-2xl border border-border/80 bg-surface-subtle/95 p-3 shadow-md backdrop-blur-sm md:p-3.5 lg:p-4"
        animate={shouldReduceMotion ? undefined : { y: [0, index % 2 === 0 ? -3 : 3, 0] }}
        transition={{
          duration: 8 + index * 0.4,
          repeat: Infinity,
          repeatType: "mirror",
          delay: index * 0.2,
          ease: [0.2, 0.8, 0.2, 1],
        }}
      >
        <div className="flex items-start gap-2.5 lg:gap-3">
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-brand-muted text-foreground lg:h-9 lg:w-9">
            <Icon className="h-4 w-4" aria-hidden="true" />
          </span>
          <div className="min-w-0 flex-1">
            <p className="text-[clamp(0.625rem,2.8cqi,0.8125rem)] font-semibold uppercase leading-tight tracking-[0.06em] text-foreground">
              {title}
            </p>
            <p className="mt-1.5 text-[clamp(0.625rem,2.5cqi,0.75rem)] leading-snug text-muted-foreground">
              {detail}
            </p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

function SanjoyCore({ compact = false }: { compact?: boolean }) {
  if (compact) {
    return (
      <div className="relative mx-auto w-[13.65rem] shrink-0">
        <div className="relative aspect-square">
          <div
            className="absolute inset-[6%] translate-y-[5%] rounded-2xl border border-brand-line/70 bg-brand-muted"
            aria-hidden="true"
          />
          <div className="absolute inset-0 rounded-2xl border border-border bg-surface-subtle shadow-sm">
            <div className="flex h-full flex-col items-center justify-center px-4 text-center">
              <p className="text-2xl font-semibold uppercase tracking-[0.1em] text-foreground">
                Sanjoy
              </p>
              <p className="mt-2 text-eyebrow leading-relaxed text-brand">
                Enterprise AI
                <br />
                Operating Layer
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="relative aspect-square">
      <div
        className="absolute inset-x-[13%] top-[13%] bottom-[-22%] rounded-[1.4rem] border border-border/50 bg-brand-muted/50"
        aria-hidden="true"
      />
      <div
        className="absolute inset-x-[9%] top-[9%] bottom-[-15%] rounded-[1.4rem] border border-brand-line/60 bg-brand-muted"
        aria-hidden="true"
      />
      <div
        className="absolute inset-x-[5%] top-[5%] bottom-[-8%] rounded-[1.4rem] border border-brand-line bg-[linear-gradient(180deg,var(--brand),color-mix(in_srgb,var(--brand),white_40%))] shadow-[0_20px_45px_-20px_rgb(232_77_77_/_0.5)]"
        aria-hidden="true"
      />
      <div className="absolute inset-0 rounded-[1.4rem] border border-border bg-surface-subtle shadow-xl">
        <div className="flex h-full flex-col items-center justify-center px-3 text-center md:px-4">
          <p className="text-[clamp(1.35rem,6cqi,1.9rem)] font-semibold uppercase tracking-[0.1em] text-foreground">
            Sanjoy
          </p>
          <p className="mt-2 text-[clamp(0.5rem,2.2cqi,0.625rem)] font-semibold uppercase leading-[1.35] tracking-[0.18em] text-brand md:mt-3">
            Enterprise AI
            <br />
            Operating Layer
          </p>
        </div>
      </div>
    </div>
  )
}

function MobileCapabilityCard({
  title,
  detail,
  icon: Icon,
  index,
  shouldReduceMotion,
}: ModuleContent & {
  index: number
  shouldReduceMotion: boolean | null
}) {
  return (
    <motion.div
      className="w-[10.75rem] shrink-0 rounded-2xl border border-border bg-surface-subtle p-5 shadow-sm"
      initial={shouldReduceMotion ? false : { opacity: 0, y: 10 }}
      animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        delay: 0.1 + index * 0.06,
        ease: [0.2, 0.8, 0.2, 1],
      }}
    >
      <div className="flex flex-col items-center gap-3 text-center">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-muted text-foreground">
          <Icon className="h-5 w-5" aria-hidden="true" />
        </span>
        <p className="text-lg font-semibold tracking-[-0.03em] text-foreground">
          {title}
        </p>
        <p className="text-body text-pretty">{detail}</p>
      </div>
    </motion.div>
  )
}

function MobileHeroDiagram({
  shouldReduceMotion,
}: {
  shouldReduceMotion: boolean | null
}) {
  const [sales, leadership, hr, operations, knowledge, customerExperience] =
    modules

  return (
    <motion.figure
      className="relative mx-auto my-8 w-full max-w-[360px] px-2 md:hidden"
      aria-label={ariaLabel}
      initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
      animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.1, ease: [0.2, 0.8, 0.2, 1] }}
    >
      <div
        className="absolute inset-x-4 inset-y-6 -z-10 rounded-3xl bg-[radial-gradient(circle_at_50%_50%,var(--brand-muted),transparent_72%)] opacity-50"
        aria-hidden="true"
      />

      <div className="flex flex-col items-center gap-5">
        <MobileCapabilityCard
          {...sales}
          index={0}
          shouldReduceMotion={shouldReduceMotion}
        />

        <div className="flex items-start justify-center gap-4">
          <MobileCapabilityCard
            {...leadership}
            index={1}
            shouldReduceMotion={shouldReduceMotion}
          />
          <MobileCapabilityCard
            {...hr}
            index={2}
            shouldReduceMotion={shouldReduceMotion}
          />
        </div>

        <motion.div
          className="py-2"
          initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.96 }}
          animate={shouldReduceMotion ? undefined : { opacity: 1, scale: 1 }}
          transition={{
            duration: 0.55,
            delay: 0.22,
            ease: [0.2, 0.8, 0.2, 1],
          }}
        >
          <SanjoyCore compact />
        </motion.div>

        <div className="flex items-start justify-center gap-4">
          <MobileCapabilityCard
            {...operations}
            index={3}
            shouldReduceMotion={shouldReduceMotion}
          />
          <MobileCapabilityCard
            {...knowledge}
            index={4}
            shouldReduceMotion={shouldReduceMotion}
          />
        </div>

        <MobileCapabilityCard
          {...customerExperience}
          index={5}
          shouldReduceMotion={shouldReduceMotion}
        />
      </div>
    </motion.figure>
  )
}

function DesktopHeroDiagram({
  shouldReduceMotion,
}: {
  shouldReduceMotion: boolean | null
}) {
  const pointerX = useMotionValue(0)
  const pointerY = useMotionValue(0)
  const smoothX = useSpring(pointerX, { stiffness: 80, damping: 24, mass: 0.4 })
  const smoothY = useSpring(pointerY, { stiffness: 80, damping: 24, mass: 0.4 })
  const ringsX = useTransform(smoothX, [-1, 1], [-6, 6])
  const ringsY = useTransform(smoothY, [-1, 1], [-4, 4])
  const coreX = useTransform(smoothX, [-1, 1], [7, -7])
  const coreY = useTransform(smoothY, [-1, 1], [5, -5])

  function handlePointerMove(event: PointerEvent<HTMLElement>) {
    if (shouldReduceMotion) {
      return
    }

    const bounds = event.currentTarget.getBoundingClientRect()
    const nextX = (event.clientX - bounds.left) / bounds.width - 0.5
    const nextY = (event.clientY - bounds.top) / bounds.height - 0.5

    pointerX.set(nextX * 2)
    pointerY.set(nextY * 2)
  }

  function handlePointerLeave() {
    pointerX.set(0)
    pointerY.set(0)
  }

  return (
    <motion.figure
      className="relative mx-auto hidden aspect-square w-full max-w-full @container md:block"
      aria-label={ariaLabel}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
      animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.15, ease: [0.2, 0.8, 0.2, 1] }}
    >
      <div
        className="absolute inset-0 -z-10 rounded-full bg-[radial-gradient(circle_at_50%_45%,var(--brand-muted),transparent_58%)] opacity-80"
        aria-hidden="true"
      />

      {/* Architectural rings — slightly tighter on tablet */}
      <motion.div
        className="absolute inset-[7%] lg:inset-[5%] xl:inset-[6%]"
        style={shouldReduceMotion ? undefined : { x: ringsX, y: ringsY }}
        aria-hidden="true"
      >
        <div className="absolute inset-0 rounded-full border border-border/50" />
        <div className="absolute inset-[13%] rounded-full border border-border/40" />
        <div className="absolute inset-[27%] rounded-full border border-border/30" />
      </motion.div>

      {desktopModules.map((module) => (
        <span
          key={`dot-${module.title}`}
          className="absolute z-10 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand shadow-[0_0_16px_rgb(232_77_77_/_0.3)]"
          style={{
            left: `${(module.x + 50) / 2}%`,
            top: `${(module.y + 50) / 2}%`,
          }}
          aria-hidden="true"
        />
      ))}

      {desktopModules.map((module, index) => (
        <ModulePanel
          key={module.title}
          {...module}
          index={index}
          shouldReduceMotion={shouldReduceMotion}
          smoothX={smoothX}
          smoothY={smoothY}
        />
      ))}

      <motion.div
        className="absolute left-1/2 top-1/2 z-30 w-[clamp(7rem,34%,10.5rem)] -translate-x-1/2 -translate-y-1/2 lg:w-[clamp(7.5rem,36%,10.5rem)]"
        style={shouldReduceMotion ? undefined : { x: coreX, y: coreY }}
        initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.95 }}
        animate={shouldReduceMotion ? undefined : { opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.2, ease: [0.2, 0.8, 0.2, 1] }}
      >
        <SanjoyCore />
      </motion.div>
    </motion.figure>
  )
}

export function HeroDiagram() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <>
      <MobileHeroDiagram shouldReduceMotion={shouldReduceMotion} />
      <DesktopHeroDiagram shouldReduceMotion={shouldReduceMotion} />
    </>
  )
}
