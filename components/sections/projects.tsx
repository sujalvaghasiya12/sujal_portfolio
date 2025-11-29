"use client"

import { motion } from "framer-motion"
import { Github, Zap } from "lucide-react"

const projects = [
  {
    title: "AI-Resume-Analyzer",
    description:
      "Interactive AI-powered Resume Analyzer built with Streamlit that evaluates resumes for skills, job role fit, and ATS score.",
    tech: ["Python", "Streamlit", "spaCy", "TF-IDF", "Rapidfuzz"],
    github: "https://github.com/sujalvaghasiya12/AI-Resume-Analyzer",
    image: "🧠",
    color: "from-gray-800/40 to-gray-700/40",
  },
  {
    title: "AI Financial Data Assistant",
    description:
      "Semantic financial-data assistant using embeddings, FAISS vector search, and FastAPI endpoints.",
    tech: ["FastAPI", "FAISS", "Embeddings", "Vector Search", "Python"],
    github:
      "https://github.com/sujalvaghasiya12/AI-Powered_Financial_Data_Assistant",
    image: "📊",
    color: "from-gray-800/50 to-gray-600/50",
  },
  {
    title: "Sleep Quality Predictor",
    description:
      "Machine learning model predicting sleep quality based on lifestyle factors.",
    tech: ["Python", "Streamlit", "Random Forest", "Scikit-learn", "ML"],
    github: "https://github.com/sujalvaghasiya12/Sleep_Quality_Predictor",
    image: "😴",
    color: "from-gray-800/40 to-gray-700/40",
  },
  {
    title: "Quantum Random Number Generator",
    description:
      "Quantum random number generator using qubit measurements.",
    tech: ["Python", "Quantum Computing", "Qiskit", "Physics"],
    github:
      "https://github.com/sujalvaghasiya12/Quantum-random-number-generator",
    image: "⚛️",
    color: "from-gray-800/50 to-gray-600/50",
  },
  {
    title: "Titanic Survival Prediction",
    description:
      "Classification model trained on Titanic dataset.",
    tech: ["Python", "Pandas", "Scikit-learn", "EDA", "Classification"],
    github:
      "https://github.com/sujalvaghasiya12/Titanic-Survival-Prediction",
    image: "🚢",
    color: "from-gray-800/50 to-gray-600/50",
  },
  {
    title: "House Price Prediction",
    description:
      "Regression model using Linear Regression to predict house prices.",
    tech: ["Python", "Linear Regression", "NumPy", "Pandas", "Matplotlib"],
    github:
      "https://github.com/sujalvaghasiya12/House-Price-Prediction-using-Linear-Regression",
    image: "🏠",
    color: "from-gray-800/40 to-gray-700/40",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { 
      staggerChildren: 0.15, 
      delayChildren: 0.3,
      duration: 0.8 
    },
  },
}

const cardVariants = {
  hidden: { 
    opacity: 0, 
    y: 80, 
    scale: 0.9,
    rotateY: 15 
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    rotateY: 0,
    transition: { 
      duration: 0.8, 
      ease: [0.25, 0.46, 0.45, 0.94],
      type: "spring",
      stiffness: 100
    },
  },
}

const imageVariants = {
  hover: {
    rotateY: 360,
    scale: 1.2,
    transition: {
      duration: 1.2,
      ease: "easeInOut"
    }
  }
}

const techVariants = {
  hover: {
    scale: 1.15,
    y: -2,
    backgroundColor: "rgba(55, 65, 81, 0.8)",
    borderColor: "rgba(107, 114, 128, 0.8)",
    transition: {
      duration: 0.2,
      ease: "easeOut"
    }
  }
}

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-28 bg-gray-900 relative overflow-hidden border-t border-gray-800"
    >
      {/* Enhanced floating background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-10 right-10 w-[500px] h-[500px] rounded-full bg-gray-700/20 blur-3xl"
          animate={{ 
            x: [0, 100, 0], 
            y: [0, 60, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            duration: 18, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
        />

        <motion.div
          className="absolute bottom-10 left-10 w-[500px] h-[500px] rounded-full bg-gray-600/25 blur-3xl"
          animate={{ 
            x: [0, -80, 0], 
            y: [0, -40, 0],
            scale: [1, 1.05, 1]
          }}
          transition={{ 
            duration: 20, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
        />

        {/* New background elements */}
        <motion.div
          className="absolute top-1/2 left-1/4 w-[300px] h-[300px] rounded-full bg-gray-800/15 blur-2xl"
          animate={{ 
            x: [0, 50, 0], 
            y: [0, -30, 0] 
          }}
          transition={{ 
            duration: 15, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Enhanced Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-6 text-gray-100"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true }}
        >
          Featured <span className="text-gray-300">Projects</span>
        </motion.h2>

          <motion.p
            className="text-gray-300 text-xl max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
          >
            Explore my latest AI/ML and data science projects built with cutting-edge technologies
          </motion.p>
        </motion.div>

        {/* Enhanced Projects Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={cardVariants}
              className={`group bg-gradient-to-br ${project.color} border border-gray-700 rounded-3xl backdrop-blur-xl p-6 shadow-lg transition-all duration-500 hover:shadow-2xl hover:border-gray-500 relative overflow-hidden`}
              whileHover={{
                y: -15,
                scale: 1.02,
                rotateY: 5,
                boxShadow: "0 35px 80px rgba(0, 0, 0, 0.4), 0 0 60px rgba(100, 100, 100, 0.3)",
              }}
              custom={index}
            >
              {/* Shimmer effect on hover */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-400/5 to-transparent opacity-0 group-hover:opacity-100"
                animate={{ x: ["-100%", "200%"] }}
                transition={{ 
                  duration: 1.5, 
                  repeat: Infinity,
                  delay: 0.5 
                }}
              />

              {/* Project Icon with enhanced animation */}
              <div className="h-40 flex items-center justify-center relative mb-6">
                <motion.div
                  className="text-7xl"
                  whileHover="hover"
                  variants={imageVariants}
                >
                  {project.image}
                </motion.div>
                
                {/* Floating particles */}
                <motion.div
                  className="absolute w-2 h-2 bg-gray-400 rounded-full opacity-60"
                  animate={{
                    y: [0, -20, 0],
                    opacity: [0.6, 0.2, 0.6],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: Math.random() * 2
                  }}
                />
              </div>

              {/* Project Content */}
              <div className="relative z-10">
                <motion.h3 
                  className="text-2xl font-bold text-gray-100 mb-4 group-hover:text-gray-50 transition-colors duration-300"
                  whileHover={{ x: 5 }}
                >
                  {project.title}
                </motion.h3>

                <motion.p 
                  className="text-gray-300 text-base mb-6 leading-relaxed"
                  whileHover={{ scale: 1.01 }}
                >
                  {project.description}
                </motion.p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <motion.span
                      key={tech}
                      variants={techVariants}
                      whileHover="hover"
                      className="px-3 py-2 text-sm font-medium bg-gray-800 border border-gray-600 text-gray-200 rounded-xl shadow-md cursor-default"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>

                {/* GitHub Link */}
                <motion.a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 font-semibold text-gray-300 hover:text-gray-100 group/link relative overflow-hidden py-2 px-4 rounded-lg bg-gray-800/50 border border-gray-700"
                  whileHover={{ 
                    x: 8,
                    backgroundColor: "rgba(55, 65, 81, 0.8)",
                    borderColor: "rgba(107, 114, 128, 0.8)"
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Github size={20} />
                  </motion.div>
                  View on GitHub
                  <motion.span
                    animate={{ x: [0, 4, 0] }}
                    transition={{ 
                      duration: 1.5, 
                      repeat: Infinity,
                      ease: "easeInOut" 
                    }}
                    className="text-yellow-400"
                  >
                    <Zap size={16} />
                  </motion.span>
                </motion.a>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Footer CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <motion.p
            className="text-gray-400 text-lg"
            animate={{ opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            More projects coming soon...
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}