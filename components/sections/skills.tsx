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
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

const categoryVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.34, 1.56, 0.64, 1],
    },
  },
}

export default function Skills() {
  return (
    <section className="py-20 bg-white border-t border-gray-200 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ y: [0, 40, 0], x: [0, 20, 0] }}
          transition={{ duration: 12, repeat: Number.POSITIVE_INFINITY }}
          className="absolute -right-40 top-20 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ y: [0, -30, 0], x: [0, -15, 0] }}
          transition={{ duration: 15, repeat: Number.POSITIVE_INFINITY, delay: 2 }}
          className="absolute -left-32 bottom-10 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-12 text-gray-900"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Skills &{" "}
            <motion.span
              className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600"
              animate={{ backgroundPosition: ["0%", "100%", "0%"] }}
              transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY }}
            >
              Expertise
            </motion.span>
          </motion.h2>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
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
                  y: -8,
                  boxShadow: "0 30px 60px rgba(37, 99, 235, 0.15)",
                }}
                whileTap={{ scale: 0.98 }}
                className="bg-gradient-to-br from-blue-50 to-purple-50 border-2 border-blue-200 rounded-2xl p-8 hover:border-blue-400 transition-all duration-300 relative group overflow-hidden cursor-pointer"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-blue-400/0 to-purple-400/0 group-hover:from-blue-400/5 group-hover:to-purple-400/5"
                  transition={{ duration: 0.3 }}
                />

                <h3 className="text-2xl font-bold text-blue-600 mb-6 relative z-10">{category.category}</h3>

                <div className="flex flex-wrap gap-3 relative z-10">
                  {category.skills.map((skill, skillIdx) => (
                    <motion.span
                      key={skill}
                      whileHover={{
                        scale: 1.2,
                        y: -8,
                        boxShadow: "0 15px 40px rgba(37, 99, 235, 0.3)",
                        backgroundColor: "rgba(37, 99, 235, 0.15)",
                        borderColor: "rgba(37, 99, 235, 1)",
                      }}
                      whileTap={{ scale: 0.95 }}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{
                        delay: skillIdx * 0.05,
                        duration: 0.4,
                        type: "spring",
                        stiffness: 300,
                        damping: 20,
                      }}
                      viewport={{ once: true }}
                      className="px-4 py-2 bg-blue-100 border-2 border-blue-300 text-blue-700 rounded-lg text-sm font-bold transition-all cursor-pointer hover:shadow-lg"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
