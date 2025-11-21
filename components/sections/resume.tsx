// Updated Resume component with gray background and red/white themed text

"use client"

import { motion } from "framer-motion"
import { Download } from "lucide-react"

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

export default function Resume() {
  const handleDownloadResume = () => {
    const link = document.createElement("a")
    link.href = "/images/resume.jpg"
    link.download = "resume.jpg"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <section className="py-20 bg-gray-100 relative overflow-hidden border-t border-gray-300">
      {/* Animated Background */}
      <motion.div
        className="absolute top-10 right-10 w-96 h-96 bg-red-500/10 rounded-full blur-3xl opacity-50"
        animate={{ x: [0, 40, 0], y: [0, -40, 0] }}
        transition={{ duration: 12, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-10 left-10 w-80 h-80 bg-white/10 rounded-full blur-2xl opacity-40"
        animate={{ x: [0, -40, 0], y: [0, 40, 0] }}
        transition={{ duration: 14, repeat: Infinity }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* HEADER + IMAGE */}
        <div className="flex flex-col lg:flex-row gap-12 mb-16 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="lg:w-1/3"
          >
            <div className="relative w-80 h-96 group cursor-pointer">
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-red-600 via-red-400 to-white rounded-2xl blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-500"
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              />

              <motion.img
                src="/images/resume.jpg"
                alt="Resume"
                className="relative w-full h-full object-cover rounded-2xl border-4 border-white shadow-xl drop-shadow-lg"
                whileHover={{ scale: 1.08, rotateZ: 1 }}
                transition={{ type: "spring", stiffness: 250 }}
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="lg:w-2/3"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-red-700">
              Professional <span className="text-white bg-red-600 px-2 rounded-lg">Resume</span>
            </h2>

            <p className="text-gray-800 text-lg mb-8 leading-relaxed font-medium">
              AI/ML Developer with strong skills in Machine Learning, Python, and Data Analytics.
            </p>

            {/* Download Button */}
            <motion.button
              onClick={handleDownloadResume}
              whileHover={{ scale: 1.07, boxShadow: "0 25px 50px rgba(255,0,0,0.45)" }}
              whileTap={{ scale: 0.94 }}
              className="flex items-center gap-3 px-8 py-4 bg-red-600 text-white font-bold text-lg rounded-xl shadow-lg"
            >
              <motion.span animate={{ y: [0, -3, 0] }} transition={{ duration: 2, repeat: Infinity }}>
                <Download size={22} />
              </motion.span>
              Download Resume
            </motion.button>
          </motion.div>
        </div>

        {/* EXPERIENCE + EDUCATION */}
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-red-700">
          Experience & <span className="text-white bg-red-600 px-2 rounded-lg">Education</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Experience */}
          <div>
            <h3 className="text-2xl font-bold text-red-600 mb-8">Work Experience</h3>

            <div className="space-y-8">
              {experience.map((job) => (
                <motion.div
                  key={job.role}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  whileHover={{ scale: 1.05, x: 10 }}
                  transition={{ duration: 0.7 }}
                  className="bg-gray-200 border border-red-400 rounded-xl p-6 shadow-md hover:shadow-xl"
                >
                  <h4 className="text-lg font-bold text-red-700">{job.role}</h4>
                  <p className="text-red-600 text-sm font-semibold">{job.company}</p>
                  <p className="text-gray-700 text-sm mb-3">{job.period}</p>
                  <p className="text-gray-800 text-sm leading-relaxed">{job.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <h3 className="text-2xl font-bold text-red-600 mb-8">Education</h3>

            <div className="space-y-8">
              {education.map((edu) => (
                <motion.div
                  key={edu.degree}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  whileHover={{ scale: 1.05, x: -10 }}
                  transition={{ duration: 0.7 }}
                  className="bg-gray-200 border border-red-400 rounded-xl p-6 shadow-md hover:shadow-xl"
                >
                  <h4 className="text-lg font-bold text-red-700">{edu.degree}</h4>
                  <p className="text-red-600 text-sm font-semibold">{edu.institution}</p>
                  <p className="text-gray-700 text-sm mb-3">{edu.period}</p>
                  {edu.detail && <p className="text-gray-800 text-sm">{edu.detail}</p>}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}