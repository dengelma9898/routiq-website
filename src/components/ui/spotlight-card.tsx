"use client"

import { useRef, useState, MouseEvent, ComponentPropsWithoutRef } from "react"
import { cn } from "@/lib/utils"

type SpotlightCardProps = ComponentPropsWithoutRef<"div">

export function SpotlightCard({ className, children, ...props }: SpotlightCardProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [pos, setPos] = useState<{ x: number; y: number } | null>(null)

  function handleMove(e: MouseEvent<HTMLDivElement>) {
    const rect = ref.current?.getBoundingClientRect()
    if (!rect) return
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    setPos({ x, y })
  }

  function handleLeave() {
    setPos(null)
  }

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className={cn(
        "relative rounded-lg border border-border/70 bg-card/90 backdrop-blur transition-transform will-change-transform",
        "hover:-translate-y-0.5",
        className
      )}
      {...props}
    >
      <div
        className="pointer-events-none absolute inset-0 rounded-lg"
        style={{
          background:
            pos
              ? `radial-gradient(200px 200px at ${pos.x}px ${pos.y}px, var(--spotlight), transparent 65%)`
              : `radial-gradient(200px 200px at -9999px -9999px, oklch(1 0 0 / 0), transparent 65%)`,
          transition: pos ? undefined : "background 600ms ease",
        }}
      />
      <div className="pointer-events-none absolute inset-0 rounded-lg shadow-[0_0_0_1px_oklch(0.80_0.20_300_/_0.35)]" />
      {children}
    </div>
  )
}


