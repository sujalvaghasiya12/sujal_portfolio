"use client"

import React, { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Download, X, Check } from "lucide-react"

const certificates = [
  { title: "Machine Learning Using Python", issuer: "SimpliLearn", icon: "🐍", imageUrl: "/images/1.jpg", downloadLink: "/images/1.jpg" },
  { title: "Gemini API by Google", issuer: "Udacity", icon: "🤖", imageUrl: "/images/2.jpg", downloadLink: "/images/2.jpg" },
  { title: "Fundamentals of AI & ML", issuer: "AWS", icon: "🤖", imageUrl: "/images/fundamental-20of-20machine-20learning-20and-20artificial-20intelligence.jpg", downloadLink: "/images/fundamental-20of-20machine-20learning-20and-20artificial-20intelligence.jpg" },
  { title: "Foundation of Prompt Engineering", issuer: "AWS", icon: "🎯", imageUrl: "/images/foundations-20of-20prompt-20engineering.jpg", downloadLink: "/images/foundations-20of-20prompt-20engineering.jpg" },
  { title: "Introduction to Generative AI Studio", issuer: "Google Cloud & SimpliLearn", icon: "🌐", imageUrl: "/images/introduction-20to-20generative-20ai-20studio.jpg", downloadLink: "/images/introduction-20to-20generative-20ai-20studio.jpg" },
  { title: "Observing LLM Agents", issuer: "ACM India Council", icon: "🧠", imageUrl: "/images/observing-20llm-20agents.jpg", downloadLink: "/images/observing-20llm-20agents.jpg" },
  { title: "Python for Beginners", issuer: "SimpliLearn", icon: "🐍", imageUrl: "/images/python-20for-20beginners.jpg", downloadLink: "/images/python-20for-20beginners.jpg" },
]

export default function Certificates() {
  const [preview, setPreview] = useState<{ url: string; title: string } | null>(null)
  const [downloadingIndex, setDownloadingIndex] = useState<number | null>(null)
  const [confetti, setConfetti] = useState<Array<{ id: number; left: number; emoji: string; delay: number; size: number }>>([])

  const spawnConfetti = () => {
    const emojis = ["✨", "🎉", "❤️", "💫", "🎯", "🔥", "👏"]
    const pieces = Array.from({ length: 18 }).map((_, i) => ({
      id: Date.now() + i,
      left: Math.random() * 80 + 8,
      emoji: emojis[Math.floor(Math.random() * emojis.length)],
      delay: Math.random() * 0.12,
      size: Math.floor(12 + Math.random() * 18),
    }))
    setConfetti(pieces)
    setTimeout(() => setConfetti([]), 1800)
  }

  const handleDownload = (url: string, title: string, idx: number) => {
    try {
      setDownloadingIndex(idx)
      spawnConfetti()
      const link = document.createElement("a")
      link.href = url
      link.download = `${title.replace(/\s+/g, "_")}_Certificate.jpg`
      link.target = "_blank"
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
      setTimeout(() => setDownloadingIndex(null), 2200)
    } catch (err) {
      console.error("Download failed", err)
      setDownloadingIndex(null)
    }
  }

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setPreview(null) }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [])

  const cardEntrance = { opacity: 0, y: 20 }
  const cardVisible = { opacity: 1, y: 0 }

  return (
    <section className="py-24 bg-gray-900 border-t border-gray-800 relative overflow-hidden">

      {/* Floating lights */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -top-28 -right-28 w-96 h-96 rounded-full bg-gradient-to-br from-gray-700/30 to-gray-600/30 blur-3xl"
        animate={{ x: [0, 28, 0], y: [0, -18, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -left-28 -bottom-28 w-80 h-80 rounded-full bg-gradient-to-tr from-gray-600/30 to-gray-700/30 blur-3xl"
        animate={{ x: [0, -26, 0], y: [0, 20, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-12 text-center text-gray-100"
        >
          Certifications <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-300 via-gray-400 to-gray-300">Gallery</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert, idx) => (
            <motion.article
              key={cert.title}
              initial={cardEntrance}
              whileInView={cardVisible}
              transition={{ duration: 0.6, delay: idx * 0.06, ease: [0.2, 0.8, 0.2, 1] }}
              whileHover={{ scale: 1.03 }}
              viewport={{ once: true }}
              className="relative rounded-3xl overflow-hidden transform-gpu"
              aria-label={`${cert.title} certificate card`}
            >
              <div className="relative bg-gray-800/60 backdrop-blur-sm border border-gray-600 rounded-3xl shadow-md hover:shadow-2xl transition-all">
                <motion.div
                  aria-hidden
                  className="absolute -left-10 -top-10 w-[140%] h-20 rounded-full blur-2xl opacity-60"
                  style={{ background: "linear-gradient(90deg, rgba(100,100,100,0.12), rgba(150,150,150,0.12))" }}
                  animate={{ rotate: [0, 6, -6, 0] }}
                  transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                />

                <motion.div className="h-56 bg-gray-700 overflow-hidden relative" whileHover={{ scale: 1.02 }}>
                  <motion.img
                    src={cert.imageUrl}
                    alt={cert.title}
                    loading="lazy"
                    className="w-full h-full object-cover cursor-zoom-in"
                    whileHover={{ scale: 1.06 }}
                    transition={{ type: "spring", stiffness: 160, damping: 18 }}
                    onClick={() => setPreview({ url: cert.imageUrl, title: cert.title })}
                    aria-label={`Open preview for ${cert.title}`}
                  />
                  <motion.div
                    aria-hidden
                    className="absolute inset-0 pointer-events-none"
                    animate={{ opacity: [0, 0.12, 0] }}
                    transition={{ duration: 6, repeat: Infinity }}
                    style={{ background: "linear-gradient(180deg, rgba(255,255,255,0.02), rgba(0,0,0,0.03) 60%, rgba(0,0,0,0))" }}
                  />
                </motion.div>

                <div className="p-6">
                  <div className="flex items-start gap-4">
                    <motion.div
                      className="text-4xl leading-none select-none"
                      aria-hidden
                      animate={{ rotate: [0, 4, -4, 0] }}
                      transition={{ duration: 5, repeat: Infinity }}
                    >
                      {cert.icon}
                    </motion.div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-100">{cert.title}</h3>
                      <p className="text-sm font-bold text-gray-300">{cert.issuer}</p>
                    </div>
                  </div>

                  <div className="mt-6 flex items-center justify-between gap-3">
                    <motion.button
                      onClick={() => setPreview({ url: cert.imageUrl, title: cert.title })}
                      whileHover={{ y: -6 }}
                      whileTap={{ scale: 0.96 }}
                      className="px-3 py-2 rounded-md border border-gray-600 bg-gray-700/40 text-sm font-medium text-gray-300 hover:shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-500"
                      aria-label={`Preview ${cert.title}`}
                    >
                      Preview
                    </motion.button>

                    <motion.button
                      onClick={() => handleDownload(cert.downloadLink, cert.title, idx)}
                      whileHover={{ scale: 1.04 }}
                      whileTap={{ scale: 0.96 }}
                      className="inline-flex items-center gap-2 px-3 py-2 rounded-md text-sm font-semibold text-white bg-gradient-to-r from-gray-700 to-gray-500 shadow"
                      aria-label={`Download ${cert.title}`}
                    >
                      <motion.span
                        animate={downloadingIndex === idx ? { y: [0, -4, 0] } : { y: 0 }}
                        transition={{ repeat: downloadingIndex === idx ? Infinity : 0, duration: 0.9 }}
                      >
                        {downloadingIndex === idx ? <Check size={16} /> : <Download size={16} />}
                      </motion.span>
                      <span>{downloadingIndex === idx ? "Saved" : "Download"}</span>
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      {/* Confetti */}
      <div className="pointer-events-none fixed inset-0 z-50">
        <AnimatePresence>
          {confetti.map((c) => (
            <motion.span
              key={c.id}
              initial={{ opacity: 0, y: -20, scale: 0.7 }}
              animate={{ opacity: 1, y: 800 + Math.random() * 200, rotate: Math.random() * 720 }}
              exit={{ opacity: 0 }}
              transition={{ delay: c.delay, duration: 1.3, ease: "easeOut" }}
              style={{ left: `${c.left}%`, position: "absolute", top: "6%", fontSize: c.size, textShadow: "0 2px 6px rgba(0,0,0,0.12)" }}
            >
              {c.emoji}
            </motion.span>
          ))}
        </AnimatePresence>
      </div>

      {/* Preview Modal */}
      <AnimatePresence>
        {preview && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 flex items-center justify-center bg-black/80 p-6"
            onClick={() => setPreview(null)}
            aria-modal="true"
            role="dialog"
            aria-label="Certificate preview"
          >
            <motion.div
              initial={{ y: 40, scale: 0.96 }}
              animate={{ y: 0, scale: 1 }}
              exit={{ y: 20, scale: 0.96 }}
              transition={{ duration: 0.35 }}
              className="relative bg-gray-800 rounded-2xl max-w-4xl w-full overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="absolute top-3 right-3 z-50">
                <button
                  onClick={() => setPreview(null)}
                  className="p-2 bg-gray-700 rounded-full shadow hover:scale-105 transition focus:outline-none focus:ring-2 focus:ring-gray-500"
                  aria-label="Close preview"
                >
                  <X size={18} className="text-gray-300" />
                </button>
              </div>

              <div className="p-6">
                <h3 className="text-lg font-bold mb-4 text-gray-100">{preview.title}</h3>
                <div className="h-[60vh] w-full bg-gray-700 rounded-lg overflow-hidden flex items-center justify-center">
                  <img src={preview.url} alt={preview.title} className="object-contain max-h-full max-w-full" loading="lazy" />
                </div>

                <div className="mt-4 flex justify-end gap-3">
                  <a
                    href={preview.url}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-gradient-to-r from-gray-700 to-gray-500 text-white font-semibold shadow"
                  >
                    Open in new tab
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}