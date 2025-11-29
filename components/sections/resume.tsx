"use client"

import { motion, AnimatePresence } from "framer-motion"
import { Download, X } from "lucide-react"
import { useState } from "react"

const experience = [
  {
    role: "Python Developer (Data Analytics)",
    company: "Sahil Infotech",
    period: "January 2025 - July 2025",
    description:
      "Developed data analytics pipelines and machine learning models. Implemented dashboards and conducted exploratory analysis using Python, Pandas, and visualization libraries.",
  },
  {
    role: "Junior Web Developer",
    company: "Success Innovative Technologies Pvt. Ltd.",
    period: "January 2024 - April 2024",
    description: "Worked on high-performance web applications using clean, scalable code.",
  },
]

const education = [
  {
    degree: "B Tech in Information Technology (in progress)",
    institution: "Uka Tarsadia University | Bardoli",
    period: "2022 - 2026",
    detail: "CGPA: 8.46 / 10",
  },
  {
    degree: "Higher Secondary (12th)",
    institution: "Government Higher Secondary School | Lilya",
    period: "2021 - 2022",
  },
  {
    degree: "Secondary (10th)",
    institution: "Ashadeep Vidhyalay | Surat",
    period: "2019 - 2020",
  },
]

// Animation variants
const sectionVariants = {
  hidden: { opacity: 0, y: -80 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: "easeOut"
    }
  }
}

const containerVariants = {
  hidden: { opacity: 0, y: -50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { 
      duration: 0.8,
      staggerChildren: 0.1,
      delayChildren: 0.2
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: -30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
      duration: 0.6,
    },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 80,
      damping: 15
    }
  }
}

const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 }
}

const modalVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 30
    }
  },
  exit: {
    opacity: 0,
    scale: 0.8,
    transition: {
      duration: 0.2
    }
  }
}

export default function Resume() {
  const [isImageOpen, setIsImageOpen] = useState(false)

  const handleDownloadResume = () => {
    const link = document.createElement("a")
    link.href = "/images/resume.jpg"
    link.download = "resume.jpg"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const handleImageClick = () => {
    setIsImageOpen(true)
  }

  const handleCloseImage = () => {
    setIsImageOpen(false)
  }

  // Close modal on Escape key
  if (typeof window !== 'undefined') {
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        setIsImageOpen(false)
      }
    })
  }

  return (
    <motion.section 
      className="py-20 bg-gray-900 relative overflow-hidden border-t border-gray-800"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={sectionVariants}
    >
      
      {/* ANIMATED BACKGROUND ORBS */}
      <motion.div
        className="absolute top-10 right-10 w-96 h-96 bg-gradient-to-br from-gray-700/30 via-gray-600/30 to-gray-800/30 rounded-full blur-3xl opacity-40"
        animate={{ x: [0, 40, 0], y: [0, -40, 0] }}
        transition={{ duration: 12, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-10 left-10 w-80 h-80 bg-gradient-to-br from-gray-800/30 via-gray-600/30 to-gray-700/30 rounded-full blur-2xl opacity-40"
        animate={{ x: [0, -40, 0], y: [0, 40, 0] }}
        transition={{ duration: 14, repeat: Infinity }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* HEADER + IMAGE */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col lg:flex-row gap-12 mb-16 items-center"
        >
          
          {/* Resume Image */}
          <motion.div
            variants={itemVariants}
            className="lg:w-1/3"
          >
            <div className="relative w-80 h-96 group cursor-pointer" onClick={handleImageClick}>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-gray-600 via-gray-500 to-gray-400 rounded-2xl blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-500"
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              />
              <motion.img
                src="/images/resume.jpg"
                alt="Resume"
                className="relative w-full h-full object-cover rounded-2xl border-4 border-gray-700 shadow-xl drop-shadow-lg cursor-zoom-in"
                whileHover={{ scale: 1.08, rotateZ: 1 }}
                transition={{ type: "spring", stiffness: 250 }}
              />
              {/* Click hint overlay */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <div className="bg-black/60 rounded-xl p-4 backdrop-blur-sm border border-gray-500">
                  <span className="text-white text-sm font-semibold">Click to view full size</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Resume Information */}
          <motion.div
            variants={itemVariants}
            className="lg:w-2/3"
          >
            <motion.h2 
              className="text-4xl md:text-5xl font-bold mb-6 text-gray-100"
              variants={itemVariants}
            >
              Professional{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-300 via-gray-400 to-gray-500">
                Resume
              </span>
            </motion.h2>

            <motion.p 
              className="text-gray-300 text-lg mb-8 leading-relaxed font-medium"
              variants={itemVariants}
            >
              AI/ML Developer with strong skills in Machine Learning, Python, and Data Analytics. Experienced in building intelligent and efficient solutions using modern tools and frameworks.
            </motion.p>

            {/* Download Button */}
            <motion.button
              onClick={handleDownloadResume}
              variants={itemVariants}
              whileHover={{ scale: 1.07, boxShadow: "0 25px 50px rgba(100, 100, 100, 0.45)" }}
              whileTap={{ scale: 0.94 }}
              className="flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-gray-700 via-gray-600 to-gray-500 text-white font-bold text-lg rounded-xl shadow-lg"
            >
              <motion.span animate={{ y: [0, -3, 0] }} transition={{ duration: 2, repeat: Infinity }}>
                <Download size={22} />
              </motion.span>
              Download Resume
            </motion.button>
          </motion.div>
        </motion.div>

        {/* EXPERIENCE + EDUCATION */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-12 text-gray-100"
            variants={itemVariants}
          >
            Experience &{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-300 to-gray-500">
              Education
            </span>
          </motion.h2>

          <motion.div 
            className="grid md:grid-cols-2 gap-12"
            variants={containerVariants}
          >

            {/* Experience Section */}
            <motion.div variants={containerVariants}>
              <motion.h3 
                className="text-2xl font-bold text-gray-300 mb-8"
                variants={itemVariants}
              >
                Work Experience
              </motion.h3>
              
              <div className="space-y-8">
                {experience.map((job, idx) => (
                  <motion.div
                    key={job.role}
                    variants={cardVariants}
                    whileHover={{ scale: 1.05, x: 10 }}
                    className="bg-gradient-to-br from-gray-800/50 to-gray-700/50 border border-gray-600 rounded-xl p-6 shadow-md hover:shadow-xl"
                  >
                    <h4 className="text-lg font-bold text-gray-100">{job.role}</h4>
                    <p className="text-gray-300 text-sm font-semibold">{job.company}</p>
                    <p className="text-gray-400 text-sm mb-3">{job.period}</p>
                    <p className="text-gray-300 text-sm leading-relaxed">{job.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Education Section */}
            <motion.div variants={containerVariants}>
              <motion.h3 
                className="text-2xl font-bold text-gray-300 mb-8"
                variants={itemVariants}
              >
                Education
              </motion.h3>
              
              <div className="space-y-8">
                {education.map((edu, idx) => (
                  <motion.div
                    key={edu.degree}
                    variants={cardVariants}
                    whileHover={{ scale: 1.05, x: -10 }}
                    className="bg-gradient-to-br from-gray-800/50 to-gray-700/50 border border-gray-600 rounded-xl p-6 shadow-md hover:shadow-xl"
                  >
                    <h4 className="text-lg font-bold text-gray-100">{edu.degree}</h4>
                    <p className="text-gray-300 text-sm font-semibold">{edu.institution}</p>
                    <p className="text-gray-400 text-sm mb-3">{edu.period}</p>
                    {edu.detail && <p className="text-gray-300 text-sm">{edu.detail}</p>}
                  </motion.div>
                ))}
              </div>
            </motion.div>

          </motion.div>
        </motion.div>
      </div>

      {/* Image Preview Modal */}
      <AnimatePresence>
        {isImageOpen && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            variants={backdropVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={handleCloseImage}
          >
            {/* Backdrop */}
            <motion.div
              className="absolute inset-0 bg-black/90 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />
            
            {/* Modal Content */}
            <motion.div
              className="relative max-w-4xl max-h-[90vh] w-full z-10"
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <motion.button
                onClick={handleCloseImage}
                className="absolute -top-12 right-0 z-20 p-3 bg-gray-800 hover:bg-gray-700 rounded-full transition-colors shadow-lg"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <X size={24} className="text-gray-300" />
              </motion.button>

              {/* Image Container */}
              <div className="bg-gray-800 rounded-2xl p-4 shadow-2xl">
                <motion.img
                  src="/images/resume.jpg"
                  alt="Resume Preview"
                  className="w-full h-full object-contain max-h-[70vh] rounded-lg"
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.1, duration: 0.3 }}
                />
              </div>

              {/* Download Button in Modal */}
              <motion.button
                onClick={handleDownloadResume}
                className="absolute bottom-4 right-4 flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-gray-700 to-gray-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <Download size={18} />
                Download Resume
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  )
}