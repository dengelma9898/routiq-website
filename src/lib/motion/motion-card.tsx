"use client"

import { motion, type HTMLMotionProps } from "framer-motion"
import { forwardRef } from "react"

type MotionCardProps = HTMLMotionProps<"div">

export const MotionCard = forwardRef<HTMLDivElement, MotionCardProps>(function MotionCard(
  { className, children, ...rest },
  ref
) {
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className={className}
      {...rest}
    >
      {children}
    </motion.div>
  )
})



