"use client"

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
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2,
    },
  },
}

const categoryVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.34, 1.56, 0.64, 1] },
  },
}

export default function Skills() {
  return (
    <section className="py-24 bg-white border-t border-gray-200 relative overflow-hidden">

      {/* Floating glowing particles */}
      <motion.div
        animate={{ y: [0, 40, 0], opacity: [0.4, 0.8, 0.4] }}
        transition={{ duration: 12, repeat: Infinity }}
        className="absolute top-10 left-10 w-64 h-64 rounded-full bg-blue-500/10 blur-3xl"
      />
      <motion.div
        animate={{ y: [0, -30, 0], opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 14, repeat: Infinity }}
        className="absolute right-20 bottom-20 w-72 h-72 rounded-full bg-purple-500/10 blur-3xl"
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Section Header */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-5xl md:text-6xl font-extrabold mb-14 text-gray-900 text-center"
        >
          Skills &{" "}
          <motion.span
            className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent"
            animate={{ backgroundPosition: ["0%", "100%", "0%"] }}
            transition={{ duration: 7, repeat: Infinity }}
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
          {skillCategories.map((category, idx) => (
            <motion.div
              key={category.category}
              variants={categoryVariants}
              whileHover={{
                y: -10,
                scale: 1.03,
                boxShadow: "0 25px 60px rgba(99, 102, 241, 0.2)",
              }}
              className="bg-gradient-to-br from-blue-50 to-purple-50 border border-blue-200 rounded-2xl p-8 shadow-sm hover:border-blue-400 transition-all relative overflow-hidden"
            >
              {/* Glow hover effect */}
              <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-20 bg-gradient-to-tr from-blue-400 to-purple-400 blur-xl"
                transition={{ duration: 0.4 }}
              />

              <h3 className="text-2xl font-bold text-blue-700 mb-6">{category.category}</h3>

              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIdx) => (
                  <motion.span
                    key={skill}
                    whileHover={{
                      scale: 1.15,
                      y: -5,
                      backgroundColor: "rgba(37, 99, 235, 0.20)",
                      boxShadow: "0 15px 35px rgba(37, 99, 235, 0.25)",
                      borderColor: "rgba(37, 99, 235, 1)",
                      color: "#1e3a8a",
                    }}
                    initial={{ opacity: 0, scale: 0.85 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{
                      delay: skillIdx * 0.05,
                      duration: 0.4,
                      type: "spring",
                      stiffness: 260,
                      damping: 18,
                    }}
                    viewport={{ once: true }}
                    className="px-4 py-2 bg-blue-100/70 border-2 border-blue-300 text-blue-800 rounded-lg text-sm font-semibold transition-all cursor-pointer"
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
