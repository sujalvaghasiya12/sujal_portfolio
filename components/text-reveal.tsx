"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"

interface TextRevealProps {
  children: ReactNode
  delay?: number
  staggerChildren?: number
}

export default function TextReveal({ children, delay = 0, staggerChildren = 0.02 }: TextRevealProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: delay,
        staggerChildren: staggerChildren,
      },
    },
  }

  const textVariants = {
    hidden: { 
      opacity: 0, 
      clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)",
      y: 20 
    },
    visible: {
      opacity: 1,
      clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.77, 0, 0.175, 1],
      },
    },
  }

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {typeof children === "string" ? (
        <span className="inline-block">
          {children.split("").map((char, index) => (
            <motion.span
              key={index}
              variants={textVariants}
              className="inline-block"
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </span>
      ) : (
        <motion.div variants={textVariants}>
          {children}
        </motion.div>
      )}
    </motion.div>
  )
}