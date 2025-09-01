"use client"

import { motion, type MotionProps } from "framer-motion"
import { ComponentProps, ReactNode } from "react"

type RevealProps = {
  children: ReactNode
} & MotionProps & ComponentProps<typeof motion.div>

export function Reveal({ children, ...rest }: RevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      {...rest}
    >
      {children}
    </motion.div>
  )
}



