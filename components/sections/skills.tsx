"use client"

import React from "react"
import { motion } from "framer-motion"

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

const categoryVariants = {
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
    <section className="py-24 relative overflow-hidden"
      style={{ 
        backgroundColor: "#REPLACE_WITH_BACKGROUND_COLOR_FROM_IMAGE" 
        // Change this to the background color from your image
      }}
    >

      {/* Floating glowing particles - UPDATE THESE COLORS */}
      <motion.div
        animate={{ y: [0, 40, 0], opacity: [0.4, 0.8, 0.4] }}
        transition={{ duration: 12, repeat: Infinity }}
        className="absolute top-10 left-10 w-64 h-64 rounded-full blur-3xl"
        style={{ backgroundColor: "#REPLACE_WITH_ACCENT_COLOR_FROM_IMAGE/20" }}
      />
      <motion.div
        animate={{ y: [0, -30, 0], opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 14, repeat: Infinity }}
        className="absolute right-20 bottom-20 w-72 h-72 rounded-full blur-3xl"
        style={{ backgroundColor: "#REPLACE_WITH_SECONDARY_COLOR_FROM_IMAGE/20" }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Section Header */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-5xl md:text-6xl font-extrabold mb-14 text-center"
          style={{ color: "#REPLACE_WITH_HEADING_COLOR_FROM_IMAGE" }}
        >
          Skills &{" "}
          <motion.span
            className="bg-clip-text text-transparent"
            animate={{ backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"] }}
            transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
            style={{ 
              backgroundSize: "200% 200%",
              backgroundImage: "linear-gradient(to right, #REPLACE_WITH_GRADIENT_START, #REPLACE_WITH_GRADIENT_MID, #REPLACE_WITH_GRADIENT_END)"
            }}
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
                boxShadow: "0 25px 80px rgba(REPLACE_RGB_VALUES, 0.25)",
              }}
              className="backdrop-blur-xl border rounded-3xl p-8 shadow-sm transition-all duration-500 relative overflow-hidden group"
              style={{ 
                backgroundColor: "rgba(REPLACE_RGB_VALUES, 0.7)",
                borderColor: "rgba(REPLACE_RGB_VALUES, 0.6)",
              }}
            >
              {/* Neon Glow on Hover */}
              <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-30 blur-2xl transition-all duration-500"
                style={{ 
                  background: "linear-gradient(to top right, #REPLACE_WITH_HOVER_GLOW_START, #REPLACE_WITH_HOVER_GLOW_END)"
                }}
              />

              <h3 
                className="text-2xl font-bold mb-6 tracking-wide drop-shadow-sm"
                style={{ color: "#REPLACE_WITH_CATEGORY_TEXT_COLOR" }}
              >
                {category.category}
              </h3>

              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIdx) => (
                  <motion.span
                    key={skill}
                    whileHover={{
                      scale: 1.12,
                      y: -4,
                      backgroundColor: "rgba(REPLACE_RGB_VALUES, 0.15)",
                      borderColor: "rgba(REPLACE_RGB_VALUES, 1)",
                      color: "#REPLACE_WITH_SKILL_HOVER_TEXT_COLOR",
                      boxShadow: "0 15px 35px rgba(REPLACE_RGB_VALUES, 0.35)",
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
                    className="px-4 py-2 border-2 rounded-xl text-sm font-semibold transition-all cursor-pointer"
                    style={{ 
                      backgroundColor: "#REPLACE_WITH_SKILL_BG_COLOR",
                      borderColor: "#REPLACE_WITH_SKILL_BORDER_COLOR", 
                      color: "#REPLACE_WITH_SKILL_TEXT_COLOR"
                    }}
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