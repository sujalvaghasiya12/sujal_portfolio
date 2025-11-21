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
    <section className="py-20 bg-white border-t border-blue-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-gray-900 text-center">
            Let's{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Connect</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h3 className="text-2xl font-bold text-blue-600 mb-8">Get in Touch</h3>
              <div className="space-y-6">
                <motion.a
                  href="tel:+916352737639"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  whileHover={{ x: 10, scale: 1.05 }}
                  whileTap={{ scale: 0.95, x: 5 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-4 text-gray-600 hover:text-blue-600 transition-colors cursor-pointer"
                >
                  <motion.div whileHover={{ rotate: 15, scale: 1.2 }} className="text-blue-600">
                    <Phone size={24} />
                  </motion.div>
                  <span>+91 6352737639</span>
                </motion.a>
                <motion.a
                  href="mailto:sujalvaghasiya5@gmail.com"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  whileHover={{ x: 10, scale: 1.05 }}
                  whileTap={{ scale: 0.95, x: 5 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-4 text-gray-600 hover:text-blue-600 transition-colors cursor-pointer"
                >
                  <motion.div whileHover={{ rotate: -15, scale: 1.2 }} className="text-blue-600">
                    <Mail size={24} />
                  </motion.div>
                  <span>sujalvaghasiya5@gmail.com</span>
                </motion.a>

                <div className="flex gap-6 mt-8">
                  <motion.a
                    href="https://github.com/sujalvaghasiya12"
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    whileHover={{ y: -8, scale: 1.15 }}
                    whileTap={{ scale: 0.85 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="p-3 bg-blue-100 border-2 border-blue-300 rounded-lg hover:bg-blue-200 hover:border-blue-500 text-blue-600 transition-all shadow-md"
                  >
                    <Github size={24} />
                  </motion.a>
                  <motion.a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    whileHover={{ y: -8, scale: 1.15 }}
                    whileTap={{ scale: 0.85 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    viewport={{ once: true }}
                    className="p-3 bg-purple-100 border-2 border-purple-300 rounded-lg hover:bg-purple-200 hover:border-purple-500 text-purple-600 transition-all shadow-md"
                  >
                    <Linkedin size={24} />
                  </motion.a>
                  <motion.a
                    href="mailto:sujalvaghasiya5@gmail.com"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    whileHover={{ y: -8, scale: 1.15 }}
                    whileTap={{ scale: 0.85 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="p-3 bg-cyan-100 border-2 border-cyan-300 rounded-lg hover:bg-cyan-200 hover:border-cyan-500 text-cyan-600 transition-all shadow-md"
                  >
                    <Mail size={24} />
                  </motion.a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <motion.form
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              <div>
                <motion.input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  whileFocus={{ scale: 1.02, boxShadow: "0 0 20px rgba(37, 99, 235, 0.3)" }}
                  className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-lg text-gray-900 placeholder-gray-500 focus:border-blue-500 focus:bg-white focus:outline-none transition-all"
                />
              </div>
              <div>
                <motion.input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  whileFocus={{ scale: 1.02, boxShadow: "0 0 20px rgba(37, 99, 235, 0.3)" }}
                  className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-lg text-gray-900 placeholder-gray-500 focus:border-blue-500 focus:bg-white focus:outline-none transition-all"
                />
              </div>
              <div>
                <motion.textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  whileFocus={{ scale: 1.02, boxShadow: "0 0 20px rgba(37, 99, 235, 0.3)" }}
                  className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-lg text-gray-900 placeholder-gray-500 focus:border-blue-500 focus:bg-white focus:outline-none transition-all resize-none"
                />
              </div>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.05, boxShadow: "0 15px 40px rgba(37, 99, 235, 0.4)" }}
                whileTap={{ scale: 0.92 }}
                className="w-full px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-300 shadow-lg"
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
