"use client"

import { motion } from "framer-motion"
import { Github, Zap } from "lucide-react"

const projects = [
  {
    title: "AI-Resume-Analyzer",
    description:
      "Interactive AI-powered Resume Analyzer built with Streamlit that evaluates resumes for skills, job role fit, and ATS (Applicant Tracking System) score.",
    tech: ["Python", "Streamlit", "spaCy", "TF-IDF", "Rapidfuzz"],
    github: "https://github.com/sujalvaghasiya12/AI-Resume-Analyzer",
    image: "🧠",
    color: "from-blue-500/20 to-cyan-500/20",
  },
  {
    title: "AI Financial Data Assistant",
    description:
      "Semantic financial-data assistant using sentence-transformer embeddings and FAISS for vector search with FastAPI endpoints.",
    tech: ["FastAPI", "FAISS", "Embeddings", "Vector Search", "Python"],
    github: "https://github.com/sujalvaghasiya12/AI-Powered_Financial_Data_Assistant",
    image: "📊",
    color: "from-purple-500/20 to-pink-500/20",
  },
  {
    title: "Sleep Quality Predictor",
    description:
      "Machine learning model predicting sleep quality based on lifestyle factors using Random Forest and Streamlit.",
    tech: ["Python", "Streamlit", "Random Forest", "Scikit-learn", "ML"],
    github: "https://github.com/sujalvaghasiya12/Sleep_Quality_Predictor",
    image: "😴",
    color: "from-indigo-500/20 to-blue-500/20",
  },
  {
    title: "Quantum Random Number Generator",
    description:
      "Quantum random number generator implementation using single qubit measurements and quantum computing principles.",
    tech: ["Python", "Quantum Computing", "Qiskit", "Physics"],
    github: "https://github.com/sujalvaghasiya12/Quantum-random-number-generator",
    image: "⚛️",
    color: "from-cyan-500/20 to-teal-500/20",
  },
  {
    title: "Titanic Survival Prediction",
    description:
      "Classification model trained on Titanic dataset with data preprocessing, feature engineering, and multiple ML algorithms.",
    tech: ["Python", "Pandas", "Scikit-learn", "EDA", "Classification"],
    github: "https://github.com/sujalvaghasiya12/Titanic-Survival-Prediction",
    image: "🚢",
    color: "from-blue-500/20 to-purple-500/20",
  },
  {
    title: "House Price Prediction",
    description:
      "Regression model using Linear Regression to predict house prices with data analysis and visualization.",
    tech: ["Python", "Linear Regression", "NumPy", "Pandas", "Matplotlib"],
    github: "https://github.com/sujalvaghasiya12/House-Price-Prediction-using-Linear-Regression",
    image: "🏠",
    color: "from-yellow-500/20 to-orange-500/20",
  },
  {
    title: "Indian Health & Wellness",
    description:
      "Web application focused on Indian health and wellness with psychology integration using modern technologies.",
    tech: ["TypeScript", "React", "Web Development", "Health Tech"],
    github: "https://github.com/sujalvaghasiya12/-INDIAN-HEALTH-WELLNESS-AND-PSYCHOLOGY-",
    image: "🏥",
    color: "from-red-500/20 to-pink-500/20",
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

const cardVariants = {
  hidden: { opacity: 0, y: 60, rotateX: -20 },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: {
      duration: 0.7,
      ease: [0.34, 1.56, 0.64, 1],
    },
  },
}

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-white border-t border-gray-100 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ x: [0, 100, 0], y: [0, 50, 0] }}
          transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-200/30 to-cyan-200/30 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ x: [0, -100, 0], y: [0, -50, 0] }}
          transition={{ duration: 25, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-purple-200/30 to-pink-200/30 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-5xl md:text-6xl font-bold mb-4 text-gray-900 font-display"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            Featured{" "}
            <motion.span
              className="bg-gradient-to-r from-[#0076FF] via-[#8A2BE2] to-[#00C2CB] bg-clip-text text-transparent"
              animate={{ backgroundPosition: ["0%", "100%", "0%"] }}
              transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY }}
              style={{ backgroundSize: "200% 200%" }}
            >
              Projects
            </motion.span>
          </motion.h2>
          <motion.p
            className="text-gray-600 text-lg mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            viewport={{ once: true }}
          >
            Explore my latest AI/ML and data science projects
          </motion.p>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {projects.map((project, idx) => (
              <motion.div
                key={project.title}
                variants={cardVariants}
                whileHover={{
                  y: -15,
                  boxShadow: "0 30px 80px rgba(0, 118, 255, 0.2), 0 0 40px rgba(138, 43, 226, 0.1)",
                }}
                whileTap={{ scale: 0.98 }}
                className={`group bg-gradient-to-br ${project.color} border-2 border-gray-100 rounded-2xl overflow-hidden hover:border-[#0076FF] transition-all duration-300 flex flex-col h-full relative backdrop-blur-sm`}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-30"
                  animate={{ x: ["0%", "100%"] }}
                  transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                />

                <motion.div
                  className="bg-gradient-to-br from-[#0076FF]/10 via-[#8A2BE2]/10 to-[#00C2CB]/10 h-40 flex items-center justify-center text-6xl relative overflow-hidden border-b border-gray-100"
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  transition={{ duration: 0.4 }}
                >
                  <motion.div animate={{ rotateY: 360 }} transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}>
                    {project.image}
                  </motion.div>
                </motion.div>

                <div className="p-6 flex flex-col flex-grow relative z-10">
                  <motion.h3
                    className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#0076FF] transition-colors"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: idx * 0.1 + 0.3 }}
                  >
                    {project.title}
                  </motion.h3>

                  <p className="text-gray-600 text-sm mb-4 flex-grow leading-relaxed">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((t) => (
                      <motion.span
                        key={t}
                        whileHover={{ scale: 1.15, backgroundColor: "rgba(0, 118, 255, 0.2)" }}
                        whileTap={{ scale: 0.9 }}
                        className="px-3 py-1 bg-gray-100 border border-[#0076FF]/30 text-[#0076FF] rounded-lg text-xs font-semibold transition-all cursor-pointer hover:border-[#0076FF] hover:shadow-lg"
                      >
                        {t}
                      </motion.span>
                    ))}
                  </div>

                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ x: 8, gap: "12px" }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center gap-2 text-[#0076FF] hover:text-[#8A2BE2] transition-all font-semibold group/link"
                  >
                    <Github size={20} />
                    <span>View on GitHub</span>
                    <motion.span
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
                    >
                      <Zap size={16} />
                    </motion.span>
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
