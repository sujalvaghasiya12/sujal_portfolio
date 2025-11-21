"use client"

import { motion } from "framer-motion"
import { useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { Award, Zap, Code, Brain } from "lucide-react"

export default function About() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.34, 1.56, 0.64, 1] },
    },
  }

  return (
    <section ref={ref} className="py-20 bg-white border-t border-gray-200 relative overflow-hidden">
      <motion.div
        style={{ y: useTransform(scrollYProgress, [0, 1], [100, -100]) }}
        className="absolute top-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"
      />
      <motion.div
        className="absolute bottom-0 left-0 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl"
        animate={{ x: [0, 30, 0], y: [0, 20, 0] }}
        transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-4 text-gray-900"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            About{" "}
            <motion.span
              className="text-transparent bg-clip-text bg-gradient-to-r from-[#0076FF] via-[#8A2BE2] to-[#00C2CB]"
              animate={{ backgroundPosition: ["0%", "100%", "0%"] }}
              transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY }}
              style={{ backgroundSize: "200% 200%" }}
            >
              Me
            </motion.span>
          </motion.h2>
          <motion.p
            className="text-lg text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            viewport={{ once: true }}
          >
            Passionate AI & ML Developer transforming ideas into intelligent solutions
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.34, 1.56, 0.64, 1] }}
            viewport={{ once: true }}
            className="relative flex justify-center"
          >
            <motion.div
              whileHover={{ scale: 1.08, rotateZ: 2 }}
              transition={{ type: "spring", stiffness: 300, damping: 10 }}
              className="relative group"
            >
              <motion.div
                className="absolute -inset-4 bg-gradient-to-r from-[#0076FF] via-[#8A2BE2] to-[#00C2CB] rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              />
              <motion.div
                className="absolute -inset-2 bg-gradient-to-r from-blue-400/30 to-purple-400/30 rounded-3xl"
                animate={{ opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
              />
              <img
                src="/images/whatsapp-20image-202025-11-20-20at-2008.jpg"
                alt="Sujal Vaghasiya"
                className="relative w-72 h-96 object-cover rounded-3xl shadow-2xl border-4 border-white"
              />
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Who I Am</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                I'm{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0076FF] to-[#8A2BE2] font-bold">
                  Sujal Vaghasiya
                </span>
                , an AI & ML developer pursuing B Tech in Information Technology at Uka Tarsadia University with a CGPA
                of 8.46/10. Passionate about creating intelligent, data-driven solutions.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-3">What I Do</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                I specialize in Python, Machine Learning, and NLP to build practical AI projects. With expertise in data
                preprocessing, model training, and deployment using Streamlit and FastAPI.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-3">My Passion</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                At the intersection of technology and innovation, I continuously push boundaries with AI and Machine
                Learning to solve real-world problems efficiently and elegantly.
              </p>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-4 gap-6"
        >
          {[
            { icon: Code, label: "Languages", value: "5+", color: "#0076FF" },
            { icon: Brain, label: "ML Models", value: "10+", color: "#8A2BE2" },
            { icon: Award, label: "Certifications", value: "7", color: "#00C2CB" },
            { icon: Zap, label: "Projects", value: "7", color: "#0076FF" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(0, 118, 255, 0.15)" }}
              className="p-6 bg-gradient-to-br from-white to-gray-50 rounded-2xl border border-gray-200 text-center"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
                className="flex justify-center mb-4"
              >
                <stat.icon className="w-8 h-8" style={{ color: stat.color }} />
              </motion.div>
              <p className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</p>
              <p className="text-gray-600 font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
