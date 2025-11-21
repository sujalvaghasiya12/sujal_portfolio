'use client'

import { motion } from "framer-motion"
import { ChevronDown } from "lucide-react"

interface HeroProps {
  setActiveSection: (section: string) => void
  primaryColor?: string // main gradient start
  secondaryColor?: string // gradient middle
  tertiaryColor?: string // gradient end
}

export default function Hero({ setActiveSection, primaryColor = "#4B5563", secondaryColor = "#6B7280", tertiaryColor = "#9CA3AF" }: HeroProps) {
  const handleGetInTouch = () => {
    setActiveSection("connect")
    document.getElementById("connect")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden text-white" style={{ backgroundColor: "#111827" }}>

      {/* Floating Particles */}
      <div className="pointer-events-none absolute inset-0">
        {Array.from({ length: 25 }).map((_, i) => (
          <motion.div
            key={i}
            className={`absolute w-2 h-2 rounded-full`}
            style={{ backgroundColor: primaryColor + "60" }}
            initial={{ x: Math.random() * 1200, y: Math.random() * 800, opacity: 0 }}
            animate={{
              y: ["0%", "-20%", "20%", "-30%", "0%"],
              x: ["0%", "10%", "-10%", "20%", "0%"],
              opacity: [0.3, 0.8, 0.4, 0.9, 0.5],
            }}
            transition={{
              duration: 10 + Math.random() * 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Glow Lights */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-10 right-10 w-[30rem] h-[30rem] rounded-full blur-3xl"
          style={{ backgroundColor: primaryColor + "30" }}
          animate={{ x: [0, 40, 0], y: [0, -40, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-10 left-10 w-[30rem] h-[30rem] rounded-full blur-3xl"
          style={{ backgroundColor: secondaryColor + "30" }}
          animate={{ x: [0, -40, 0], y: [0, 40, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 z-10 text-center">
        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, ease: "easeOut" }}>
          {/* Welcome Tag */}
          <motion.div className="flex items-center justify-center gap-3 mb-6" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.8 }}>
            <motion.div className="px-4 py-2 rounded-full border backdrop-blur-md shadow-lg" style={{ borderColor: primaryColor + "60", backgroundColor: primaryColor + "20" }} animate={{ scale: [1, 1.05, 1] }} transition={{ duration: 2.5, repeat: Infinity }}>
              <span className="text-sm font-semibold" style={{ color: tertiaryColor }}>✨ Welcome to my portfolio</span>
            </motion.div>
          </motion.div>

          {/* Name Heading */}
          <motion.h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold mb-6 leading-tight font-display drop-shadow-[0_4px_10px_rgba(0,0,0,0.4)]" initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 1 }}>
            <motion.span
              className="block text-transparent bg-clip-text"
              style={{ backgroundImage: `linear-gradient(to right, ${primaryColor}, ${secondaryColor}, ${tertiaryColor})` }}
              animate={{ backgroundPosition: ["0%", "100%", "0%"] }}
              transition={{ duration: 7, repeat: Infinity }}
            >
              Sujal Vaghasiya
            </motion.span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p className="text-xl sm:text-2xl font-semibold mb-4" style={{ color: tertiaryColor }} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 0.8 }}>
            AI/ML Developer • Data Analytics Specialist • Python Enthusiast
          </motion.p>

          {/* Buttons */}
          <motion.div className="flex flex-col sm:flex-row gap-4 justify-center items-center" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9, duration: 0.8 }}>
            <motion.button
              onClick={handleGetInTouch}
              className="relative px-8 py-4 rounded-xl font-semibold overflow-hidden group shadow-xl"
              style={{ 
                background: `linear-gradient(to right, ${primaryColor}, ${secondaryColor})`, 
                color: "#ffffff", 
                boxShadow: `0 15px 30px ${primaryColor}60` 
              }}
              whileHover={{ 
                scale: 1.08,
                boxShadow: `0 20px 40px ${primaryColor}80`
              }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">Get In Touch</span>
            </motion.button>

            <motion.button
              onClick={() => { setActiveSection("projects"); document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" }) }}
              className="relative px-8 py-4 rounded-xl font-semibold border-2 overflow-hidden group shadow-md"
              style={{ 
                borderColor: secondaryColor, 
                color: secondaryColor,
                backgroundColor: "rgba(107, 114, 128, 0.1)"
              }}
              whileHover={{ 
                scale: 1.08, 
                backgroundColor: "rgba(107, 114, 128, 0.2)",
                borderColor: tertiaryColor
              }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">View My Work</span>
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}