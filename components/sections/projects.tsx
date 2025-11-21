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
    color: "from-[#3a7bff2a] to-[#00eaff2a]",
  },
  {
    title: "AI Financial Data Assistant",
    description:
      "Semantic financial-data assistant using sentence-transformer embeddings and FAISS for vector search with FastAPI endpoints.",
    tech: ["FastAPI", "FAISS", "Embeddings", "Vector Search", "Python"],
    github: "https://github.com/sujalvaghasiya12/AI-Powered_Financial_Data_Assistant",
    image: "📊",
    color: "from-[#8A2BE22a] to-[#ff00d42a]",
  },
  {
    title: "Sleep Quality Predictor",
    description:
      "Machine learning model predicting sleep quality based on lifestyle factors using Random Forest and Streamlit.",
    tech: ["Python", "Streamlit", "Random Forest", "Scikit-learn", "ML"],
    github: "https://github.com/sujalvaghasiya12/Sleep_Quality_Predictor",
    image: "😴",
    color: "from-[#5a4fff2a] to-[#3a7bff2a]",
  },
  {
    title: "Quantum Random Number Generator",
    description:
      "Quantum random number generator implementation using single qubit measurements and quantum computing principles.",
    tech: ["Python", "Quantum Computing", "Qiskit", "Physics"],
    github: "https://github.com/sujalvaghasiya12/Quantum-random-number-generator",
    image: "⚛️",
    color: "from-[#00c2cb2a] to-[#00ffa02a]",
  },
  {
    title: "Titanic Survival Prediction",
    description:
      "Classification model trained on Titanic dataset with data preprocessing, feature engineering, and multiple ML algorithms.",
    tech: ["Python", "Pandas", "Scikit-learn", "EDA", "Classification"],
    github: "https://github.com/sujalvaghasiya12/Titanic-Survival-Prediction",
    image: "🚢",
    color: "from-[#3a7bff2a] to-[#8A2BE22a]",
  },
  {
    title: "House Price Prediction",
    description:
      "Regression model using Linear Regression to predict house prices with data analysis and visualization.",
    tech: ["Python", "Linear Regression", "NumPy", "Pandas", "Matplotlib"],
    github: "https://github.com/sujalvaghasiya12/House-Price-Prediction-using-Linear-Regression",
    image: "🏠",
    color: "from-[#ffcc002a] to-[#ff77002a]",
  },
  {
    title: "Indian Health & Wellness",
    description:
      "Web application focused on Indian health and wellness with psychology integration using modern technologies.",
    tech: ["TypeScript", "React", "Web Development", "Health Tech"],
    github: "https://github.com/sujalvaghasiya12/-INDIAN-HEALTH-WELLNESS-AND-PSYCHOLOGY-",
    image: "🏥",
    color: "from-[#ff33332a] to-[#ff77a92a]",
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
      className="py-28 bg-white relative overflow-hidden border-t border-gray-100"
    >
      {/* floating background animation */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-[#3a7bff33] to-[#00eaff33] blur-3xl"
          animate={{ x: [0, 150, 0], y: [0, 80, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />

        <motion.div
          className="absolute bottom-0 left-0 w-[600px] h-[600px] rounded-full bg-gradient-to-tr from-[#8A2BE233] to-[#ff00d433] blur-3xl"
          animate={{ x: [0, -150, 0], y: [0, -80, 0] }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.h2
          className="text-5xl md:text-6xl font-bold mb-4 font-display"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          Featured{" "}
          <motion.span
            className="bg-gradient-to-r from-[#3A7BFF] via-[#8A2BE2] to-[#00EAFF] bg-clip-text text-transparent"
            animate={{ backgroundPosition: ["0%", "100%", "0%"] }}
            transition={{ duration: 6, repeat: Infinity }}
            style={{ backgroundSize: "200% 200%" }}
          >
            Projects
          </motion.span>
        </motion.h2>

        <motion.p
          className="text-gray-600 text-lg mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
        >
          Explore my latest AI/ML and data science projects
        </motion.p>

        {/* cards */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.map((project, idx) => (
            <motion.div
              key={project.title}
              variants={cardVariants}
              className={`group bg-gradient-to-br ${project.color} border border-gray-200 rounded-2xl backdrop-blur-xl p-4 shadow-md transition-all duration-300 hover:shadow-2xl hover:border-[#3A7BFF] relative overflow-hidden`}
              whileHover={{
                y: -12,
                scale: 1.03,
                rotateX: 3,
                boxShadow:
                  "0 25px 60px rgba(58, 123, 255, 0.25), 0 0 40px rgba(0, 234, 255, 0.15)",
              }}
            >
              {/* light sweep animation */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100"
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

              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#3A7BFF]">
                {project.title}
              </h3>

              <p className="text-gray-600 text-sm mb-4">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-5">
                {project.tech.map((t) => (
                  <motion.span
                    key={t}
                    whileHover={{ scale: 1.12 }}
                    className="px-3 py-1 text-xs font-semibold bg-white border border-[#3A7BFF40] text-[#3A7BFF] rounded-lg shadow-sm hover:shadow-md"
                  >
                    {t}
                  </motion.span>
                ))}
              </div>

              <motion.a
                href={project.github}
                target="_blank"
                className="inline-flex items-center gap-2 font-semibold text-[#3A7BFF] hover:text-[#8A2BE2]"
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
