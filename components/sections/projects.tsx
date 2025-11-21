// Updated Projects Component with gray background and red/white theme
"use client"

import { motion } from "framer-motion"
import { Github, Zap } from "lucide-react"

// NOTE: Colors converted to red/white theme

const projects = [
  {
    title: "AI-Resume-Analyzer",
    description:
      "Interactive AI-powered Resume Analyzer built with Streamlit that evaluates resumes for skills, job role fit, and ATS score.",
    tech: ["Python", "Streamlit", "spaCy", "TF-IDF", "Rapidfuzz"],
    github: "https://github.com/sujalvaghasiya12/AI-Resume-Analyzer",
    image: "🧠",
    color: "from-red-200/20 to-red-400/20",
  },
  {
    title: "AI Financial Data Assistant",
    description:
      "Semantic financial-data assistant using embeddings, FAISS vector search, and FastAPI endpoints.",
    tech: ["FastAPI", "FAISS", "Embeddings", "Vector Search", "Python"],
    github:
      "https://github.com/sujalvaghasiya12/AI-Powered_Financial_Data_Assistant",
    image: "📊",
    color: "from-red-300/20 to-red-500/20",
  },
  {
    title: "Sleep Quality Predictor",
    description:
      "Machine learning model predicting sleep quality based on lifestyle factors.",
    tech: ["Python", "Streamlit", "Random Forest", "Scikit-learn", "ML"],
    github: "https://github.com/sujalvaghasiya12/Sleep_Quality_Predictor",
    image: "😴",
    color: "from-red-200/20 to-red-300/20",
  },
  {
    title: "Quantum Random Number Generator",
    description:
      "Quantum random number generator using qubit measurements.",
    tech: ["Python", "Quantum Computing", "Qiskit", "Physics"],
    github:
      "https://github.com/sujalvaghasiya12/Quantum-random-number-generator",
    image: "⚛️",
    color: "from-red-300/20 to-red-400/20",
  },
  {
    title: "Titanic Survival Prediction",
    description:
      "Classification model trained on Titanic dataset.",
    tech: ["Python", "Pandas", "Scikit-learn", "EDA", "Classification"],
    github:
      "https://github.com/sujalvaghasiya12/Titanic-Survival-Prediction",
    image: "🚢",
    color: "from-red-300/20 to-red-500/20",
  },
  {
    title: "House Price Prediction",
    description:
      "Regression model using Linear Regression to predict house prices.",
    tech: ["Python", "Linear Regression", "NumPy", "Pandas", "Matplotlib"],
    github:
      "https://github.com/sujalvaghasiya12/House-Price-Prediction-using-Linear-Regression",
    image: "🏠",
    color: "from-red-200/20 to-red-400/20",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 60, rotateX: -20 },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: { duration: 0.7, ease: [0.34, 1.56, 0.64, 1] },
  },
}

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-28 bg-gray-100 relative overflow-hidden border-t border-gray-300"
    >
      {/* floating background */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-red-300/20 blur-3xl"
          animate={{ x: [0, 150, 0], y: [0, 80, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />

        <motion.div
          className="absolute bottom-0 left-0 w-[600px] h-[600px] rounded-full bg-red-400/20 blur-3xl"
          animate={{ x: [0, -150, 0], y: [0, -80, 0] }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.h2
          className="text-5xl md:text-6xl font-bold mb-4 text-red-700"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          Featured <span className="text-red-500">Projects</span>
        </motion.h2>

        <motion.p
          className="text-gray-700 text-lg mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
        >
          Explore my latest AI/ML and data science projects
        </motion.p>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.map((project) => (
            <motion.div
              key={project.title}
              variants={cardVariants}
              className={`group bg-gradient-to-br ${project.color} border border-red-300 rounded-2xl backdrop-blur-xl p-4 shadow-md transition-all duration-300 hover:shadow-2xl hover:border-red-500 relative overflow-hidden`}
              whileHover={{
                y: -12,
                scale: 1.03,
                rotateX: 3,
                boxShadow:
                  "0 25px 60px rgba(255, 0, 0, 0.25), 0 0 40px rgba(255, 50, 50, 0.15)",
              }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100"
                animate={{ x: ["-100%", "100%"] }}
                transition={{ duration: 2.8, repeat: Infinity }}
              />

              <div className="h-36 flex items-center justify-center text-6xl relative">
                <motion.div
                  animate={{ rotateY: 360 }}
                  transition={{ duration: 5, repeat: Infinity }}
                >
                  {project.image}
                </motion.div>
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-red-600">
                {project.title}
              </h3>

              <p className="text-gray-700 text-sm mb-4">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-5">
                {project.tech.map((t) => (
                  <motion.span
                    key={t}
                    whileHover={{ scale: 1.12 }}
                    className="px-3 py-1 text-xs font-semibold bg-white border border-red-300 text-red-600 rounded-lg shadow-sm hover:shadow-md"
                  >
                    {t}
                  </motion.span>
                ))}
              </div>

              <motion.a
                href={project.github}
                target="_blank"
                className="inline-flex items-center gap-2 font-semibold text-red-600 hover:text-red-800"
                whileHover={{ x: 8 }}
              >
                <Github size={20} />
                View on GitHub
                <motion.span
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <Zap size={16} />
                </motion.span>
              </motion.a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}