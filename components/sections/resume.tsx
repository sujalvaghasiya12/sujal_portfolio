"use client"

import { motion } from "framer-motion"
import { Download } from "lucide-react"

const experience = [
  {
    role: "Python Developer (Data Analytics)",
    company: "Sahil Infotech",
    period: "January 2025 - July 2025",
    description:
      "Developed data analytics pipelines and machine learning models. Implemented data visualization dashboards and conducted exploratory data analysis using Python, Pandas, and visualization libraries.",
  },
  {
    role: "Junior Web Developer",
    company: "Success Innovative Technologies Pvt. Ltd.",
    period: "January 2024 - April 2024",
    description: "Contributed to high-performance web applications with clean code and collaborative development.",
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
    detail: "",
  },
  {
    degree: "Secondary (10th)",
    institution: "Ashadeep Vidhyalay | Surat",
    period: "2019 - 2020",
    detail: "",
  },
]

export default function Resume() {
  const handleDownloadResume = () => {
    const link = document.createElement("a")
    link.href = "/images/resume.jpg"
    link.download = "/images/resume.jpg"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <section className="py-20 bg-white border-t border-gray-200 relative overflow-hidden">
      <motion.div
        className="absolute top-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"
        animate={{ y: [0, 30, 0] }}
        transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY }}
      />
      <motion.div
        className="absolute bottom-0 left-0 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl"
        animate={{ x: [0, 40, 0] }}
        transition={{ duration: 12, repeat: Number.POSITIVE_INFINITY, delay: 1 }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col lg:flex-row gap-12 mb-16 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="lg:w-1/3 flex-shrink-0"
            >
              <div className="relative w-80 h-96 group cursor-pointer">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 rounded-2xl blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-300"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 25, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                />
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-blue-300/40 to-purple-300/40 rounded-2xl"
                  animate={{ opacity: [0.3, 0.6, 0.3] }}
                  transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                />
                <motion.img
                  whileHover={{ scale: 1.08, rotateZ: 1 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  src="/images/resume.jpg"
                  alt="Sujal Vaghasiya Resume"
                  className="relative w-full h-full object-cover rounded-2xl border-4 border-white shadow-2xl shadow-blue-500/20 group-hover:border-blue-300 transition-all"
                />
              </div>
            </motion.div>

            {/* Resume Download Section */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="lg:w-2/3"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
                Professional{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                  Resume
                </span>
              </h2>
              <p className="text-gray-700 text-lg mb-8 leading-relaxed font-medium">
                Passionate AI & ML Developer with hands-on experience in Python, Machine Learning, and NLP. Skilled in
                developing practical AI projects and building intelligent, data-driven solutions that solve real-world
                problems efficiently.
              </p>
              <motion.button
                onClick={handleDownloadResume}
                whileHover={{ scale: 1.08, boxShadow: "0 25px 50px rgba(37, 99, 235, 0.4)" }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold text-lg rounded-xl hover:shadow-xl transition-all duration-300 cursor-pointer group"
              >
                <motion.span animate={{ y: [0, -3, 0] }} transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}>
                  <Download size={22} />
                </motion.span>
                Download Resume
              </motion.button>
            </motion.div>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-gray-900">
            Experience &{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600">
              Education
            </span>
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Experience */}
            <div>
              <h3 className="text-2xl font-bold text-blue-600 mb-8">Work Experience</h3>
              <div className="space-y-8">
                {experience.map((job, idx) => (
                  <motion.div
                    key={job.role}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: idx * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.03, x: 8 }}
                    whileTap={{ scale: 0.98 }}
                    className="bg-gradient-to-br from-blue-50 to-purple-50 border-2 border-blue-200 rounded-xl p-6 hover:border-blue-400 transition-all cursor-pointer shadow-sm hover:shadow-lg"
                  >
                    <h4 className="text-lg font-bold text-gray-900 mb-1">{job.role}</h4>
                    <p className="text-blue-600 text-sm font-bold mb-2">{job.company}</p>
                    <p className="text-gray-600 text-sm mb-3 font-medium">{job.period}</p>
                    <p className="text-gray-700 text-sm leading-relaxed">{job.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Education */}
            <div>
              <h3 className="text-2xl font-bold text-purple-600 mb-8">Education</h3>
              <div className="space-y-8">
                {education.map((edu, idx) => (
                  <motion.div
                    key={edu.degree}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: idx * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.03, x: -8 }}
                    whileTap={{ scale: 0.98 }}
                    className="bg-gradient-to-br from-purple-50 to-cyan-50 border-2 border-purple-200 rounded-xl p-6 hover:border-purple-400 transition-all cursor-pointer shadow-sm hover:shadow-lg"
                  >
                    <h4 className="text-lg font-bold text-gray-900 mb-1">{edu.degree}</h4>
                    <p className="text-purple-600 text-sm font-bold mb-2">{edu.institution}</p>
                    <p className="text-gray-600 text-sm mb-3 font-medium">{edu.period}</p>
                    {edu.detail && <p className="text-gray-700 text-sm font-medium">{edu.detail}</p>}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
