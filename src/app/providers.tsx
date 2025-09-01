"use client"

import { ThemeProvider } from "next-themes"
import { ReactNode } from "react"
import { SmoothScroll } from "@/lib/motion/smooth-scroll"

export function AppProviders({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <SmoothScroll />
      {children}
    </ThemeProvider>
  )
}


