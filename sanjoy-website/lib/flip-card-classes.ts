import { cn } from "@/lib/utils"

const finePointerHover =
  "[@media(hover:hover)_and_(pointer:fine)]:hover:-translate-y-1 [@media(hover:hover)_and_(pointer:fine)]:hover:border-brand/35 [@media(hover:hover)_and_(pointer:fine)]:hover:shadow-md"

export function flipCardArticleClassName(
  isActive: boolean,
  className?: string
) {
  return cn(
    "group relative overflow-hidden rounded-2xl border border-border transition-all duration-300 focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/20",
    finePointerHover,
    isActive && "-translate-y-1 border-brand/35 shadow-md",
    className
  )
}

export function flipCardTopLineClassName(isActive: boolean) {
  return cn(
    "absolute inset-x-5 top-0 z-30 h-px origin-left scale-x-0 bg-brand transition-transform duration-300 sm:inset-x-6",
    "[@media(hover:hover)_and_(pointer:fine)]:group-hover:scale-x-100 [@media(hover:hover)_and_(pointer:fine)]:group-focus-within:scale-x-100",
    isActive && "scale-x-100"
  )
}

export function flipCardDefaultLayerClassName(isActive: boolean) {
  return cn(
    "relative z-10 flex min-h-[11.5rem] flex-col p-5 transition-opacity duration-300 max-md:min-h-[10.5rem] max-md:p-5 sm:min-h-[12rem] sm:p-6",
    "[@media(hover:hover)_and_(pointer:fine)]:md:group-hover:opacity-0 [@media(hover:hover)_and_(pointer:fine)]:md:group-focus-within:opacity-0",
    isActive && "opacity-0"
  )
}

export function flipCardOverlayClassName(isActive: boolean, overlayBg: string) {
  return cn(
    "absolute inset-0 z-20 hidden flex-col justify-center p-5 opacity-0 backdrop-blur-[2px] transition-opacity duration-300 sm:p-6",
    overlayBg,
    "[@media(hover:hover)_and_(pointer:fine)]:md:flex",
    "[@media(hover:hover)_and_(pointer:fine)]:md:group-hover:opacity-100",
    "[@media(hover:hover)_and_(pointer:fine)]:md:group-focus-within:opacity-100",
    "[@media(hover:none)]:flex [@media(pointer:coarse)]:flex",
    isActive && "opacity-100"
  )
}

export function flipCardMobilePanelClassName() {
  return cn(
    "border-t border-border/70 px-5 py-4 md:hidden",
    "[@media(hover:none)]:hidden",
    "[@media(pointer:coarse)]:hidden"
  )
}

export function flipCardLogoClassName() {
  return "flex h-24 w-full items-center justify-center transition-transform duration-300 [@media(hover:hover)_and_(pointer:fine)]:group-hover:scale-[1.02]"
}
