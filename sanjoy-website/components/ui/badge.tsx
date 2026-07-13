import type { ComponentProps } from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex w-fit shrink-0 items-center gap-1 rounded-full border px-2.5 py-1 text-xs font-medium leading-none tracking-[-0.01em] transition-colors duration-300 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-3",
  {
    variants: {
      variant: {
        default:
          "border-brand-line bg-brand-muted text-brand dark:border-brand-line/70 dark:text-brand-foreground",
        neutral:
          "border-border bg-surface-subtle text-muted-foreground",
        outline:
          "border-border bg-surface text-muted-foreground",
        success:
          "border-success/20 bg-success/10 text-success",
        warning:
          "border-warning/25 bg-warning/10 text-warning",
      },
      size: {
        sm: "px-2 py-0.5 text-[0.7rem]",
        default: "px-2.5 py-1 text-xs",
        lg: "px-3 py-1.5 text-sm",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Badge({
  className,
  variant,
  size,
  ...props
}: ComponentProps<"span"> & VariantProps<typeof badgeVariants>) {
  return (
    <span
      data-slot="badge"
      className={cn(badgeVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Badge, badgeVariants }
