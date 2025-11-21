"use client"

import React, { useRef } from "react"
import { motion, useMotionValue, useTransform } from "framer-motion"

const skillCategories = [
  {
    category: "Languages",
    skills: ["HTML", "CSS", "JavaScript", "Python", "SQL"],
  },
  {
    category: "Framework",
    skills: ["Pandas", "NumPy", "Matplotlib", "Seaborn", "Scikit Learn", "TensorFlow"],
  },
  {
    category: "Platform",
    skills: ["VS Code", "PyCharm", "Jupyter Notebook"],
  },
  {
    category: "Tools",
    skills: ["Power BI", "Excel", "PowerPoint", "Tableau", "ChatGPT", "Cursor AI", "LovableAI"],
  },
  {
    category: "Soft Skills",
    skills: ["Communication", "Adaptive", "Self Taught", "Team Oriented"],
  },
]

const containerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.15,
    },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
}

export default function Skills() {
  return (
    <section className="py-24 bg-white border-t border-gray-200 relative overflow-hidden">

      {/* Floating glowing particles */}
      <motion.div
        animate={{ y: [0, 40, 0], opacity: [0.4, 0.8, 0.4] }}
        transition={{ duration: 12, repeat: Infinity }}
        className="absolute top-10 left-10 w-64 h-64 rounded-full bg-blue-500/20 blur-3xl"
      />
      <motion.div
        animate={{ y: [0, -30, 0], opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 14, repeat: Infinity }}
        className="absolute right-20 bottom-20 w-72 h-72 rounded-full bg-purple-500/20 blur-3xl"
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Section Header with smooth neon gradient animation */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-5xl md:text-6xl font-extrabold mb-14 text-gray-900 text-center"
        >
          Skills &{" "}
          <motion.span
            className="bg-gradient-to-r from-blue-500 via-purple-500 to-blue-700 bg-clip-text text-transparent"
            animate={{ backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"] }}
            transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
            style={{ backgroundSize: "200% 200%" }}
          >
            Expertise
          </motion.span>
        </motion.h2>

        {/* Skill Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skillCategories.map((category) => (
            <motion.div
              key={category.category}
              variants={categoryVariants}
              whileHover={{
                y: -12,
                scale: 1.05,
                boxShadow: "0 25px 80px rgba(59,130,246,0.25)",
              }}
              className="bg-white bg-opacity-70 backdrop-blur-xl border border-blue-200/60 rounded-3xl p-8 shadow-sm transition-all duration-500 hover:border-blue-400 hover:shadow-blue-200/50 relative overflow-hidden group"
            >
              {/* Neon Glow on Hover */}
              <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-30 bg-gradient-to-tr from-blue-400 to-purple-400 blur-2xl transition-all duration-500"
              />

              <h3 className="text-2xl font-bold text-blue-700 mb-6 tracking-wide drop-shadow-sm">
                {category.category}
              </h3>

              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIdx) => (
                  <motion.span
                    key={skill}
                    whileHover={{
                      scale: 1.12,
                      y: -4,
                      backgroundColor: "rgba(59,130,246,0.15)",
                      borderColor: "rgba(59,130,246,1)",
                      color: "#1d4ed8",
                      boxShadow: "0 15px 35px rgba(59,130,246,0.35)",
                    }}
                    initial={{ opacity: 0, scale: 0.85 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{
                      delay: skillIdx * 0.05,
                      duration: 0.4,
                      type: "spring",
                      stiffness: 260,
                      damping: 20,
                    }}
                    viewport={{ once: true }}
                    className="px-4 py-2 bg-blue-50 border-2 border-blue-200 text-blue-700 rounded-xl text-sm font-semibold transition-all cursor-pointer hover:shadow-lg"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
