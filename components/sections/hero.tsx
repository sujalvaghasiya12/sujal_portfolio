"use client"

import { motion } from "framer-motion"
import { ChevronDown } from "lucide-react"

export default function Hero({ setActiveSection }: { setActiveSection: (section: string) => void }) {
  const handleGetInTouch = () => {
    setActiveSection("connect")
    document.getElementById("connect")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="min-h-screen flex items-center justify-center pt-20 bg-gray-900 relative overflow-hidden text-white">

      {/* Floating Particles */}
      <div className="pointer-events-none absolute inset-0">
        {Array.from({ length: 25 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-red-500/40"
            initial={{ x: Math.random() * 1200, y: Math.random() * 800, opacity: 0 }}
            animate={{
              y: ["0%", "-20%", "20%", "-30%", "0%"],
              x: ["0%", "10%", "-10%", "20%", "0%"],
              opacity: [0.2, 0.7, 0.3, 0.8, 0.4],
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
          className="absolute top-10 right-10 w-[30rem] h-[30rem] bg-red-500/20 rounded-full blur-3xl"
          animate={{ x: [0, 40, 0], y: [0, -40, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-10 left-10 w-[30rem] h-[30rem] bg-white/10 rounded-full blur-3xl"
          animate={{ x: [0, -40, 0], y: [0, 40, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          {/* Welcome Tag */}
          <motion.div
            className="flex items-center justify-center gap-3 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <motion.div
              className="px-4 py-2 rounded-full border border-red-500/50 bg-red-500/10 backdrop-blur-md shadow-lg shadow-red-500/20"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2.5, repeat: Infinity }}
            >
              <span className="text-sm font-semibold text-red-300">
                ✨ Welcome to my portfolio
              </span>
            </motion.div>
          </motion.div>

          {/* Name Heading */}
          <motion.h1
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold mb-6 leading-tight font-display text-white drop-shadow-[0_4px_10px_rgba(255,0,0,0.4)]"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 1 }}
          >
            <motion.span
              className="block text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-white to-red-400"
              animate={{ backgroundPosition: ["0%", "100%", "0%"] }}
              transition={{ duration: 7, repeat: Infinity }}
              style={{ backgroundSize: "200% 200%" }}
            >
              Sujal Vaghasiya
            </motion.span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="text-xl sm:text-2xl font-semibold mb-4 text-red-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            AI/ML Developer • Data Analytics Specialist • Python Enthusiast
          </motion.p>

          {/* Description */}
          <motion.p
            className="text-base sm:text-lg text-gray-300 mb-12 max-w-2xl mx-auto"
            initial={{ opacity: 0, filter: "blur(10px)" }}
            animate={{ opacity: 1, filter: "blur(0px)" }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            I create intelligent systems powered by machine learning and data — delivering automation, accuracy, and real-world impact.
          </motion.p>

          {/* Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
          >
            {/* Get in touch */}
            <motion.button
              onClick={handleGetInTouch}
              className="relative px-8 py-4 rounded-xl font-semibold text-white bg-gradient-to-r from-red-600 to-white overflow-hidden group shadow-xl shadow-red-500/30"
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.span className="relative z-10">Get In Touch</motion.span>

              <motion.div
                className="absolute inset-0 bg-white/20"
                initial={{ scale: 0 }}
                whileHover={{ scale: 4 }}
                transition={{ duration: 0.6 }}
              />
            </motion.button>

            {/* View work */}
            <motion.button
              onClick={() => {
                setActiveSection("projects")
                document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
              }}
              className="relative px-8 py-4 rounded-xl font-semibold text-red-400 border-2 border-red-500 overflow-hidden group hover:bg-red-500/10 shadow-md"
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.span className="relative z-10">View My Work</motion.span>

              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-red-500/20 to-white/20"
                initial={{ x: "-100%" }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.4 }}
              />
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
