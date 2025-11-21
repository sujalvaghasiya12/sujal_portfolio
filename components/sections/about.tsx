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
    visible: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.3 } },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.25, 1.3, 0.5, 1] } },
  }

  return (
    <section ref={ref} className="py-24 bg-gray-100 border-t border-gray-200 relative overflow-hidden">

      {/* Floating Background Gradients */}
      <motion.div
        style={{ y: useTransform(scrollYProgress, [0, 1], [120, -120]) }}
        className="absolute top-0 right-0 w-[450px] h-[450px] bg-red-400/10 rounded-full blur-3xl"
      />
      <motion.div
        animate={{ x: [0, 40, 0], y: [0, 30, 0] }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute bottom-0 left-0 w-[380px] h-[380px] bg-pink-400/10 rounded-full blur-3xl"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* HEADING */}
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="text-center mb-20">
          <motion.h2
            className="text-5xl font-extrabold mb-4 text-red-600 tracking-tight"
            initial={{ opacity: 0, y: -40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
          >
            About{" "}
            <motion.span
              className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-pink-500 to-red-400"
              animate={{ backgroundPosition: ["0%", "100%", "0%"] }}
              transition={{ duration: 7, repeat: Infinity }}
              style={{ backgroundSize: "200% 200%" }}
            >
              Me
            </motion.span>
          </motion.h2>

          <motion.p className="text-lg text-gray-700 max-w-2xl mx-auto" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.8 }}>
            Passionate AI & ML Developer turning ideas into intelligent systems.
          </motion.p>
        </motion.div>

        {/* IMAGE + TEXT */}
        <div className="grid md:grid-cols-2 gap-14 items-center mb-20">

          {/* IMAGE BLOCK */}
          <motion.div initial={{ opacity: 0, scale: 0.85 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.9 }} viewport={{ once: true }} className="relative flex justify-center">
            <motion.div whileHover={{ scale: 1.07, rotateZ: 2 }} transition={{ type: "spring", stiffness: 250, damping: 12 }} className="relative group">
              <motion.div
                className="absolute -inset-5 bg-gradient-to-r from-red-600 via-pink-500 to-red-400 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 duration-300"
                animate={{ rotate: 360 }}
                transition={{ duration: 16, repeat: Infinity, ease: "linear" }}
              />
              <img
                src="/images/whatsapp-20image-202025-11-20-20at-2008.jpg"
                alt="Sujal Vaghasiya"
                className="relative w-72 h-96 object-cover rounded-3xl shadow-2xl border-4 border-white"
              />
            </motion.div>
          </motion.div>

          {/* TEXT BLOCK */}
          <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.9 }} viewport={{ once: true }} className="space-y-7">
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-bold text-red-600 mb-2">Who I Am</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-pink-500 font-bold">Sujal Vaghasiya</span>, a passionate AI & ML Developer pursuing B.Tech in IT at Uka Tarsadia University.
              </p>
            </motion.div>
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-bold text-red-600 mb-2">What I Do</h3>
              <p className="text-lg text-gray-700 leading-relaxed">I specialize in Machine Learning, Python, NLP, and deployment using Streamlit & FastAPI.</p>
            </motion.div>
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-bold text-red-600 mb-2">My Passion</h3>
              <p className="text-lg text-gray-700 leading-relaxed">I push boundaries with intelligent automation and real-world AI solutions.</p>
            </motion.div>
          </motion.div>
        </div>

        {/* STATS BLOCK */}
        <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid md:grid-cols-4 gap-6">
          {[
            { icon: Code, label: "Languages", value: "5+", color: "#FF4C4C" },
            { icon: Brain, label: "ML Models", value: "10+", color: "#FF77AA" },
            { icon: Award, label: "Certificates", value: "7", color: "#FFB400" },
            { icon: Zap, label: "Projects", value: "7", color: "#FF4C4C" },
          ].map((stat, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              whileHover={{ y: -10, boxShadow: "0 30px 50px rgba(255,76,76,0.2)" }}
              className="p-6 bg-gradient-to-br from-white to-gray-50 rounded-2xl border border-gray-200 text-center"
            >
              <motion.div animate={{ rotate: 360 }} transition={{ duration: 5, repeat: Infinity }} className="flex justify-center mb-4">
                <stat.icon className="w-9 h-9" style={{ color: stat.color }} />
              </motion.div>
              <p className="text-3xl font-extrabold text-gray-900 mb-1">{stat.value}</p>
              <p className="text-gray-600 font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
