"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import type { ReactNode } from "react"

interface ScrollRevealProps {
  children: ReactNode
  delay?: number
  duration?: number
  variant?: "slideIn" | "fadeIn" | "scaleIn" | "slideUp" | "slideLeft" | "slideRight"
  threshold?: number
  triggerOnce?: boolean
}

export const ScrollReveal = ({ 
  children, 
  delay = 0, 
  duration = 0.8,
  variant = "slideIn", 
  threshold = 0.2,
  triggerOnce = true 
}: ScrollRevealProps) => {
  const { ref, inView } = useInView({
    triggerOnce,
    threshold,
  })

  const variants = {
    slideIn: {
      hidden: { opacity: 0, y: 40 },
      visible: { opacity: 1, y: 0 },
    },
    fadeIn: {
      hidden: { opacity: 0 },
      visible: { opacity: 1 },
    },
    scaleIn: {
      hidden: { opacity: 0, scale: 0.95 },
      visible: { opacity: 1, scale: 1 },
    },
    slideUp: {
      hidden: { opacity: 0, y: 60 },
      visible: { opacity: 1, y: 0 },
    },
    slideLeft: {
      hidden: { opacity: 0, x: 60 },
      visible: { opacity: 1, x: 0 },
    },
    slideRight: {
      hidden: { opacity: 0, x: -60 },
      visible: { opacity: 1, x: 0 },
    },
  }

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={variants[variant]}
      transition={{
        delay,
        duration,
        ease: [0.34, 1.56, 0.64, 1],
      }}
    >
      {children}
    </motion.div>
  )
}