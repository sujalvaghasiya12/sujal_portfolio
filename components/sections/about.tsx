"use client"

import { motion } from "framer-motion"
import { useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { Award, Zap, Code, Brain } from "lucide-react"

export default function About() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.3 } },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.25, 1.3, 0.5, 1] } },
  }

  return (
    <section ref={ref} className="py-24 bg-gray-900 border-t border-gray-800 relative overflow-hidden">

      {/* Floating Background Gradients */}
      <motion.div
        style={{ y: useTransform(scrollYProgress, [0, 1], [120, -120]) }}
        className="absolute top-0 right-0 w-[450px] h-[450px] bg-gray-700/20 rounded-full blur-3xl"
      />
      <motion.div
        animate={{ x: [0, 40, 0], y: [0, 30, 0] }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute bottom-0 left-0 w-[380px] h-[380px] bg-gray-600/20 rounded-full blur-3xl"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* HEADING */}
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="text-center mb-20">
          <motion.h2
            className="text-5xl font-extrabold mb-4 text-gray-100 tracking-tight"
            initial={{ opacity: 0, y: -40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
          >
            About{" "}
            <motion.span
              className="text-transparent bg-clip-text bg-gradient-to-r from-gray-300 via-gray-400 to-gray-300 animate-text"
              animate={{ backgroundPosition: ["0%", "100%", "0%"] }}
              transition={{ duration: 7, repeat: Infinity }}
              style={{ backgroundSize: "200% 200%" }}
            >
              Me
            </motion.span>
          </motion.h2>

          <motion.p className="text-lg text-gray-300 max-w-2xl mx-auto" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.8 }}>
            Passionate AI & ML Developer turning ideas into intelligent systems.
          </motion.p>
        </motion.div>

        {/* TEXT BLOCK ONLY - Centered without image */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.9 }} 
          viewport={{ once: true }} 
          className="max-w-3xl mx-auto mb-20"
        >
          <div className="space-y-8">
            <motion.div variants={itemVariants}>
              <motion.h3 
                className="text-transparent bg-clip-text bg-gradient-to-r from-gray-300 via-gray-400 to-gray-300 animate-text text-2xl font-bold mb-4"
                animate={{ backgroundPosition: ["0%", "100%", "0%"] }}
                transition={{ duration: 5, repeat: Infinity }}
                style={{ backgroundSize: "200% 200%" }}
              >
                Who I Am
              </motion.h3>
              <p className="text-lg text-gray-300 leading-relaxed">
                I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-300 to-gray-400 font-bold">Sujal Vaghasiya</span>, a passionate AI & ML Developer pursuing B.Tech in IT at Uka Tarsadia University.
              </p>
            </motion.div>
            
            <motion.div variants={itemVariants}>
              <motion.h3 
                className="text-transparent bg-clip-text bg-gradient-to-r from-gray-300 via-gray-400 to-gray-300 animate-text text-2xl font-bold mb-4"
                animate={{ backgroundPosition: ["0%", "100%", "0%"] }}
                transition={{ duration: 5, repeat: Infinity, delay: 0.5 }}
                style={{ backgroundSize: "200% 200%" }}
              >
                What I Do
              </motion.h3>
              <p className="text-lg text-gray-300 leading-relaxed">I specialize in Machine Learning, Python, NLP, and deployment using Streamlit & FastAPI.</p>
            </motion.div>
            
            <motion.div variants={itemVariants}>
              <motion.h3 
                className="text-transparent bg-clip-text bg-gradient-to-r from-gray-300 via-gray-400 to-gray-300 animate-text text-2xl font-bold mb-4"
                animate={{ backgroundPosition: ["0%", "100%", "0%"] }}
                transition={{ duration: 5, repeat: Infinity, delay: 1 }}
                style={{ backgroundSize: "200% 200%" }}
              >
                My Passion
              </motion.h3>
              <p className="text-lg text-gray-300 leading-relaxed">I push boundaries with intelligent automation and real-world AI solutions.</p>
            </motion.div>
          </div>
        </motion.div>

        {/* STATS BLOCK */}
        <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid md:grid-cols-4 gap-6">
          {[
            { icon: Code, label: "Languages", value: "5+", color: "#9CA3AF" },
            { icon: Brain, label: "ML Models", value: "10+", color: "#9CA3AF" },
            { icon: Award, label: "Certificates", value: "7", color: "#9CA3AF" },
            { icon: Zap, label: "Projects", value: "6", color: "#9CA3AF" },
          ].map((stat, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              whileHover={{ y: -10, boxShadow: "0 30px 50px rgba(100, 100, 100, 0.3)" }}
              className="p-6 bg-gradient-to-br from-gray-800 to-gray-700 rounded-2xl border border-gray-700 text-center"
            >
              <motion.div animate={{ rotate: 360 }} transition={{ duration: 5, repeat: Infinity }} className="flex justify-center mb-4">
                <stat.icon className="w-9 h-9" style={{ color: stat.color }} />
              </motion.div>
              <p className="text-3xl font-extrabold text-gray-100 mb-1">{stat.value}</p>
              <p className="text-gray-300 font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}