"use client"

import type React from "react"
import { motion } from "framer-motion"
import { useState } from "react"
import { Github, Linkedin, Mail, Phone } from "lucide-react"

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
    setFormData({ name: "", email: "", message: "" })
  }

  return (
    <section className="py-20 bg-gray-900 relative overflow-hidden">

      {/* Floating Background Animation */}
      <motion.div
        animate={{ x: [0, 60, 0], y: [0, -30, 0] }}
        transition={{ duration: 12, repeat: Infinity }}
        className="absolute top-20 -left-20 w-96 h-96 bg-gray-700/30 blur-3xl rounded-full"
      />
      <motion.div
        animate={{ x: [0, -50, 0], y: [0, 40, 0] }}
        transition={{ duration: 14, repeat: Infinity }}
        className="absolute bottom-20 -right-20 w-96 h-96 bg-gray-600/30 blur-3xl rounded-full"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-gray-100">
            Let's{" "}
            <span className="bg-gradient-to-r from-gray-300 to-gray-500 bg-clip-text text-transparent animate-pulse">
              Connect
            </span>
          </h2>

          <div className="grid md:grid-cols-2 gap-12">

            {/* LEFT SIDE — CONTACT INFO */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <h3 className="text-3xl font-bold text-gray-100">Get in Touch</h3>

              {/* Phone */}
              <motion.a
                href="tel:+916352737639"
                whileHover={{ x: 12, scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-4 text-gray-300 hover:text-gray-100 text-lg"
              >
                <motion.div whileHover={{ rotate: 20, scale: 1.3 }} className="text-gray-400">
                  <Phone size={28} />
                </motion.div>
                <span>+91 6352737639</span>
              </motion.a>

              {/* Email */}
              <motion.a
                href="mailto:sujalvaghasiya5@gmail.com"
                whileHover={{ x: 12, scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-4 text-gray-300 hover:text-gray-100 text-lg"
              >
                <motion.div whileHover={{ rotate: -20, scale: 1.3 }} className="text-gray-400">
                  <Mail size={28} />
                </motion.div>
                <span>sujalvaghasiya5@gmail.com</span>
              </motion.a>

              {/* Social Icons */}
              <div className="flex gap-6 pt-4">
                <motion.a
                  href="https://github.com/sujalvaghasiya12"
                  target="_blank"
                  whileHover={{ y: -8, scale: 1.15 }}
                  className="p-4 bg-gray-800/40 border-2 border-gray-600 rounded-xl shadow-md hover:bg-gray-700 text-gray-300"
                >
                  <Github size={28} />
                </motion.a>

                <motion.a
                  href="https://linkedin.com"
                  target="_blank"
                  whileHover={{ y: -8, scale: 1.15 }}
                  className="p-4 bg-gray-800/40 border-2 border-gray-600 rounded-xl shadow-md hover:bg-gray-700 text-gray-300"
                >
                  <Linkedin size={28} />
                </motion.a>

                <motion.a
                  href="mailto:sujalvaghasiya5@gmail.com"
                  whileHover={{ y: -8, scale: 1.15 }}
                  className="p-4 bg-gray-800/40 border-2 border-gray-600 rounded-xl shadow-md hover:bg-gray-700 text-gray-300"
                >
                  <Mail size={28} />
                </motion.a>
              </div>
            </motion.div>

            {/* RIGHT SIDE — FORM */}
            <motion.form
              onSubmit={handleSubmit}
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6 p-6 bg-gray-800/60 backdrop-blur-xl border border-gray-600 rounded-2xl shadow-lg"
            >
              <motion.input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                whileFocus={{ scale: 1.03, boxShadow: "0 0 25px rgba(100, 100, 100, 0.4)" }}
                className="w-full px-4 py-3 rounded-lg border-2 border-gray-600 bg-gray-700/40 focus:border-gray-400 outline-none transition-all text-gray-100 placeholder-gray-400"
              />

              <motion.input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                whileFocus={{ scale: 1.03, boxShadow: "0 0 25px rgba(100, 100, 100, 0.4)" }}
                className="w-full px-4 py-3 rounded-lg border-2 border-gray-600 bg-gray-700/40 focus:border-gray-400 outline-none transition-all text-gray-100 placeholder-gray-400"
              />

              <motion.textarea
                name="message"
                placeholder="Your Message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                whileFocus={{ scale: 1.03, boxShadow: "0 0 25px rgba(100, 100, 100, 0.4)" }}
                className="w-full px-4 py-3 rounded-lg border-2 border-gray-600 bg-gray-700/40 focus:border-gray-400 outline-none transition-all text-gray-100 placeholder-gray-400"
              />

              <motion.button
                type="submit"
                whileHover={{ scale: 1.08, boxShadow: "0 15px 40px rgba(100, 100, 100, 0.4)" }}
                whileTap={{ scale: 0.9 }}
                className="w-full py-3 text-lg font-semibold rounded-xl text-white bg-gradient-to-r from-gray-700 to-gray-500 shadow-lg"
              >
                {submitted ? "Message Sent! 🎉" : "Send Message"}
              </motion.button>
            </motion.form>
          </div>
        </motion.div>
      </div>
    </section>
  )
}