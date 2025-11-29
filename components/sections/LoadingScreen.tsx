// components/sections/LoadingScreen.tsx
'use client'

import { motion, AnimatePresence } from "framer-motion"
import { useEffect, useState } from 'react'

interface LoadingScreenProps {
  primaryColor?: string
  secondaryColor?: string
  tertiaryColor?: string
}

export default function LoadingScreen({ 
  primaryColor = "#4B5563", 
  secondaryColor = "#6B7280", 
  tertiaryColor = "#9CA3AF" 
}: LoadingScreenProps) {
  const [isVisible, setIsVisible] = useState(true)
  const [currentStep, setCurrentStep] = useState(0)

  useEffect(() => {
    const steps = [1, 2, 3, 4, 5]
    steps.forEach((step, index) => {
      setTimeout(() => setCurrentStep(step), index * 1000)
    })

    const hideTimer = setTimeout(() => setIsVisible(false), 6000)
    
    return () => {
      clearTimeout(hideTimer)
    }
  }, [])

  if (!isVisible) return null

  return (
    <AnimatePresence>
      <motion.section 
        className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden text-white fixed inset-0 z-50"
        style={{ backgroundColor: "#111827" }}
        initial={{ opacity: 1 }}
        exit={{ 
          opacity: 0,
          transition: { duration: 0.8, ease: "easeInOut" }
        }}
      >

        {/* Animated Geometric Background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Floating Triangles */}
          {Array.from({ length: 8 }).map((_, i) => (
            <motion.div
              key={`triangle-${i}`}
              className="absolute"
              style={{
                width: '0',
                height: '0',
                borderLeft: '25px solid transparent',
                borderRight: '25px solid transparent',
                borderBottom: `50px solid ${primaryColor}20`,
                left: `${(i * 15) % 100}%`,
                top: `${(i * 20) % 100}%`
              }}
              animate={{
                rotate: [0, 180, 360],
                scale: [0.8, 1.2, 0.8],
                opacity: [0.3, 0.7, 0.3]
              }}
              transition={{
                duration: 8 + i * 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.5
              }}
            />
          ))}

          {/* Pulse Rings */}
          {Array.from({ length: 4 }).map((_, i) => (
            <motion.div
              key={`ring-${i}`}
              className="absolute border rounded-full"
              style={{
                borderColor: `${secondaryColor}40`,
                width: 200 + i * 300,
                height: 200 + i * 300,
                left: '50%',
                top: '50%',
                x: '-50%',
                y: '-50%'
              }}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ 
                scale: [0, 1.5],
                opacity: [0.6, 0]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                delay: i * 0.8,
                ease: "easeOut"
              }}
            />
          ))}
        </div>

        {/* DNA Helix Animation */}
        <div className="absolute left-10 top-1/2 transform -translate-y-1/2 opacity-20">
          {Array.from({ length: 20 }).map((_, i) => (
            <motion.div
              key={`dna-${i}`}
              className="absolute flex space-x-4"
              style={{ top: `${i * 40}px` }}
              initial={{ opacity: 0, x: -20 }}
              animate={{ 
                opacity: [0, 1, 0],
                x: [-20, 0, 20]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: i * 0.2,
                ease: "easeInOut"
              }}
            >
              <div 
                className="w-2 h-2 rounded-full"
                style={{ backgroundColor: primaryColor }}
              />
              <div 
                className="w-2 h-2 rounded-full"
                style={{ backgroundColor: secondaryColor }}
              />
            </motion.div>
          ))}
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 z-10 text-center">
          
          {/* Professional Welcome Animation */}
          <AnimatePresence>
            {currentStep >= 1 && (
              <motion.div 
                className="mb-12"
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ 
                  duration: 0.8,
                  ease: "easeOut"
                }}
              >
                <motion.div className="flex flex-col items-center space-y-4">
                  {/* Elegant Divider Line */}
                  <motion.div
                    className="w-24 h-px bg-gradient-to-r from-transparent via-gray-500 to-transparent"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                  />
                  
                  {/* Professional Welcome Text */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.6 }}
                  >
                    <motion.p 
                      className="text-sm uppercase tracking-[0.3em] font-light text-gray-400"
                      animate={{
                        letterSpacing: ['0.3em', '0.4em', '0.3em'],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    >
                      Portfolio Loading
                    </motion.p>
                  </motion.div>

                  {/* Subtle Loading Dots */}
                  <motion.div className="flex space-x-1">
                    {[0, 1, 2].map((index) => (
                      <motion.div
                        key={index}
                        className="w-1 h-1 rounded-full bg-gray-500"
                        animate={{
                          scale: [1, 1.5, 1],
                          opacity: [0.5, 1, 0.5],
                        }}
                        transition={{
                          duration: 1.5,
                          repeat: Infinity,
                          delay: index * 0.2,
                          ease: "easeInOut"
                        }}
                      />
                    ))}
                  </motion.div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Name with Wave Animation */}
          <AnimatePresence>
            {currentStep >= 2 && (
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ 
                  type: "spring",
                  stiffness: 100,
                  damping: 20,
                  duration: 1.2
                }}
                className="mb-8"
              >
                <motion.h1 
                  className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold mb-6 leading-tight font-display"
                  style={{ 
                    textShadow: '0 4px 20px rgba(0,0,0,0.5)'
                  }}
                >
                  {"Sujal Vaghasiya".split('').map((char, index) => (
                    <motion.span
                      key={index}
                      className="inline-block"
                      initial={{ opacity: 0, y: 50, scale: 0.8 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 20,
                        delay: index * 0.05
                      }}
                      style={{
                        backgroundImage: `linear-gradient(135deg, ${primaryColor}, ${secondaryColor}, ${tertiaryColor})`,
                        backgroundSize: '200% 200%',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text'
                      }}
                      animate={{
                        backgroundPosition: ['0% 0%', '100% 100%', '0% 0%']
                      }}
                      transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: index * 0.1
                      }}
                    >
                      {char === ' ' ? '\u00A0' : char}
                    </motion.span>
                  ))}
                </motion.h1>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Title with Typewriter Effect */}
          <AnimatePresence>
            {currentStep >= 3 && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="mb-12"
              >
                <motion.p 
                  className="text-xl sm:text-2xl font-medium tracking-wide"
                  style={{ color: tertiaryColor }}
                >
                  {"AI/ML Developer • Data Analytics Specialist • Python Enthusiast".split('').map((char, index) => (
                    <motion.span
                      key={index}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{
                        duration: 0.05,
                        delay: index * 0.03 + 0.5
                      }}
                      style={{ display: 'inline-block' }}
                    >
                      {char}
                    </motion.span>
                  ))}
                </motion.p>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Unique Loading Animation */}
          <AnimatePresence>
            {currentStep >= 4 && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8 }}
                className="max-w-2xl mx-auto"
              >
                {/* Orbital Loader */}
                <div className="relative h-32 mb-8">
                  <motion.div
                    className="absolute inset-0 flex items-center justify-center"
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 6,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  >
                    {[0, 1, 2].map((index) => (
                      <motion.div
                        key={index}
                        className="absolute w-4 h-4 rounded-full"
                        style={{ 
                          backgroundColor: [primaryColor, secondaryColor, tertiaryColor][index],
                          left: '50%',
                          top: '50%'
                        }}
                        animate={{
                          x: [0, Math.cos((index / 3) * Math.PI * 2) * 60, 0],
                          y: [0, Math.sin((index / 3) * Math.PI * 2) * 60, 0],
                          scale: [1, 1.5, 1]
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: index * 0.3,
                          ease: "easeInOut"
                        }}
                      />
                    ))}
                  </motion.div>
                  
                  {/* Central Dot */}
                  <motion.div
                    className="absolute top-1/2 left-1/2 w-6 h-6 rounded-full -translate-x-1/2 -translate-y-1/2"
                    style={{ backgroundColor: primaryColor }}
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.7, 1, 0.7]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                </div>

                {/* Progress Text */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                >
                  <motion.p 
                    className="text-lg font-mono tracking-wider mb-4"
                    style={{ color: secondaryColor }}
                    animate={{
                      opacity: [0.7, 1, 0.7]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    INITIALIZING CREATIVE SPACE
                  </motion.p>
                  
                  {/* Progress Bar */}
                  <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
                    <motion.div
                      className="h-full rounded-full"
                      style={{ 
                        background: `linear-gradient(90deg, ${primaryColor}, ${secondaryColor}, ${tertiaryColor})`
                      }}
                      initial={{ width: "0%" }}
                      animate={{ width: "100%" }}
                      transition={{ 
                        duration: 3, 
                        ease: "easeInOut",
                        delay: 0.2
                      }}
                    />
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Final Ready State */}
          <AnimatePresence>
            {currentStep >= 5 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6 }}
                className="mt-8"
              >
                <motion.p
                  className="text-gray-400 font-light tracking-wide"
                  animate={{
                    scale: [1, 1.05, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  Ready to explore amazing content...
                </motion.p>
              </motion.div>
            )}
          </AnimatePresence>

        </div>
      </motion.section>
    </AnimatePresence>
  )
}