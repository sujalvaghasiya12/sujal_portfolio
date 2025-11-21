"use client"

import React, { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Download, X } from "lucide-react"

const certificates = [
  {
    title: "Machine Learning Using Python",
    issuer: "SimpliLearn",
    icon: "🐍",
    imageUrl: "/images/1.jpg",
    downloadLink: "/images/1.jpg",
  },
  {
    title: "Gemini API by Google",
    issuer: "Udacity",
    icon: "🤖",
    imageUrl: "/images/2.jpg",
    downloadLink: "/images/2.jpg",
  },
  {
    title: "Fundamentals of Artificial Intelligence and Machine Learning",
    issuer: "Amazon Web Services",
    icon: "🤖",
    imageUrl:
      "/images/fundamental-20of-20machine-20learning-20and-20artificial-20intelligence.jpg",
    downloadLink:
      "/images/fundamental-20of-20machine-20learning-20and-20artificial-20intelligence.jpg",
  },
  {
    // <-- this is index 3 (user picked "4")
    title: "Foundation of Prompt Engineering",
    issuer: "Amazon Web Services",
    icon: "🎯",
    imageUrl: "/images/foundations-20of-20prompt-20engineering.jpg",
    downloadLink: "/images/foundations-20of-20prompt-20engineering.jpg",
  },
  {
    title: "Introduction to Generative AI Studio",
    issuer: "Google Cloud & SimpliLearn",
    icon: "🌐",
    imageUrl: "/images/introduction-20to-20generative-20ai-20studio.jpg",
    downloadLink: "/images/introduction-20to-20generative-20ai-20studio.jpg",
  },
  {
    title: "Observing LLM Agents and their Tool Calls",
    issuer: "ACM India Council",
    icon: "🧠",
    imageUrl: "/images/observing-20llm-20agents.jpg",
    downloadLink: "/images/observing-20llm-20agents.jpg",
  },
  {
    title: "Python for Beginners",
    issuer: "SimpliLearn",
    icon: "🐍",
    imageUrl: "/images/python-20for-20beginners.jpg",
    downloadLink: "/images/python-20for-20beginners.jpg",
  },
]

export default function Certificates() {
  const [preview, setPreview] = useState<{ url: string; title: string } | null>(null)
  const [downloadedIndex, setDownloadedIndex] = useState<number | null>(null)
  const [confetti, setConfetti] = useState<Array<{ id: number; left: number; delay: number }>>([])

  // create a quick confetti burst
  const spawnConfetti = () => {
    const pieces = Array.from({ length: 18 }).map((_, i) => ({
      id: Date.now() + i,
      left: Math.random() * 80 + 10,
      delay: Math.random() * 0.12,
    }))
    setConfetti(pieces)
    setTimeout(() => setConfetti([]), 1600)
  }

  const handleDownloadCertificate = (url: string, title: string, idx: number) => {
    // highlight the item
    setDownloadedIndex(idx)
    // special effect for index 3 (4th certificate) — supercharged confetti
    if (idx === 3) spawnConfetti()

    // download link
    const link = document.createElement("a")
    link.href = url
    link.download = `${title.replace(/\s+/g, "_")}_Certificate.jpg`
    link.target = "_blank"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)

    // reset highlight after a bit
    setTimeout(() => setDownloadedIndex(null), 2000)
  }

  // keyboard escape to close preview
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setPreview(null)
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [])

  return (
    <section className="py-24 bg-white border-t border-gray-200 relative overflow-hidden">
      {/* moving background lights */}
      <motion.div
        className="pointer-events-none absolute -top-16 -right-16 w-96 h-96 rounded-full bg-gradient-to-br from-blue-400/20 to-purple-400/20 blur-3xl"
        animate={{ x: [0, 40, 0], y: [0, -40, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="pointer-events-none absolute -left-16 -bottom-16 w-80 h-80 rounded-full bg-gradient-to-tr from-purple-400/20 to-cyan-400/20 blur-3xl"
        animate={{ x: [0, -40, 0], y: [0, 40, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold mb-8 text-gray-900 tracking-tight">
            Certifications &{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0076FF] via-[#8A2BE2] to-[#00C2CB]">
              Achievements
            </span>
          </h2>

          <p className="text-gray-600 mb-10 max-w-2xl">
            Selected professional certificates — click to preview, hover for movement, and download to add to your
            portfolio. The 4th certificate (Prompt Engineering) has an extra celebration ✨
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certificates.map((cert, idx) => {
              const isFeatured = idx === 3 // user selected 4 => index 3
              return (
                <motion.article
                  key={cert.title}
                  initial={{ opacity: 0, y: 30, scale: 0.96 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.6, delay: idx * 0.06 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -14, scale: 1.02 }}
                  className={`relative group rounded-2xl overflow-hidden border-2 ${
                    isFeatured ? "border-[#8A2BE2]" : "border-gray-100"
                  } bg-gradient-to-br from-white to-gray-50 shadow-md hover:shadow-2xl transform-gpu`}
                  aria-label={`${cert.title} certificate`}
                >
                  {/* animated ribbon / neon strip */}
                  <motion.div
                    className={`absolute -top-8 -left-20 w-[180%] h-20 rounded-full blur-2xl opacity-60 pointer-events-none ${
                      isFeatured ? "bg-gradient-to-r from-[#8A2BE2] via-[#0076FF] to-[#00C2CB]" : "bg-gradient-to-r from-blue-200 to-purple-200"
                    }`}
                    animate={{ rotate: [0, 8, -8, 0] }}
                    transition={{ duration: isFeatured ? 6 : 10, repeat: Infinity, ease: "linear" }}
                    aria-hidden
                  />

                  <div className="relative">
                    <div className="h-56 bg-gray-100 overflow-hidden">
                      <motion.img
                        src={cert.imageUrl || "/placeholder.svg"}
                        alt={cert.title}
                        onClick={() => setPreview({ url: cert.imageUrl, title: cert.title })}
                        className="w-full h-full object-cover cursor-zoom-in"
                        whileHover={{ scale: 1.08, rotate: isFeatured ? 1.5 : 0.8 }}
                        transition={{ type: "spring", stiffness: 220, damping: 18 }}
                      />
                      {/* subtle overlay that rises when hover */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
                        animate={{ opacity: [0, 0.16, 0] }}
                        transition={{ duration: 3, repeat: Infinity }}
                      />
                    </div>

                    <div className="p-6">
                      <div className="flex items-start gap-4">
                        <motion.div
                          className={`text-4xl leading-none ${isFeatured ? "text-[#8A2BE2]" : "text-blue-600"}`}
                          animate={isFeatured ? { rotate: [0, 6, -6, 0] } : { rotate: [0, 2, -2, 0] }}
                          transition={{ duration: 3, repeat: Infinity }}
                        >
                          {cert.icon}
                        </motion.div>

                        <div className="flex-1">
                          <h3
                            className={`text-lg font-semibold ${
                              isFeatured ? "text-gray-900" : "text-gray-800"
                            } mb-1`}
                          >
                            {cert.title}
                          </h3>
                          <p className={`text-sm font-bold ${isFeatured ? "text-[#0076FF]" : "text-blue-600"}`}>
                            {cert.issuer}
                          </p>
                        </div>

                        {/* special featured badge */}
                        {isFeatured && (
                          <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.5 }}
                            className="self-start ml-2 px-2 py-1 bg-gradient-to-r from-[#FFC857] to-[#FF6B6B] text-xs font-semibold rounded-full text-white"
                          >
                            Featured
                          </motion.div>
                        )}
                      </div>

                      <div className="mt-6 flex items-center justify-between gap-4">
                        <motion.button
                          onClick={() => setPreview({ url: cert.imageUrl, title: cert.title })}
                          whileHover={{ y: -6 }}
                          whileTap={{ scale: 0.96 }}
                          className="inline-flex items-center gap-3 px-3 py-2 rounded-md border border-gray-200 bg-white shadow-sm text-sm font-medium hover:shadow-md"
                        >
                          Preview
                        </motion.button>

                        <motion.button
                          onClick={() => handleDownloadCertificate(cert.downloadLink, cert.title, idx)}
                          whileHover={{ scale: 1.06 }}
                          whileTap={{ scale: 0.94 }}
                          className={`inline-flex items-center gap-2 px-3 py-2 rounded-md text-sm font-semibold text-white shadow ${
                            isFeatured ? "bg-gradient-to-r from-[#8A2BE2] to-[#0076FF]" : "bg-gradient-to-r from-blue-500 to-purple-600"
                          }`}
                        >
                          <motion.span animate={{ y: [0, -3, 0] }} transition={{ repeat: Infinity, duration: 1.6 }}>
                            <Download size={16} />
                          </motion.span>
                          Download
                        </motion.button>
                      </div>
                    </div>
                  </div>

                  {/* download highlight pulse */}
                  <AnimatePresence>
                    {downloadedIndex === idx && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1.02 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.35 }}
                        className="pointer-events-none absolute inset-0 rounded-2xl ring-2 ring-[#0076FF]/30"
                        aria-hidden
                      />
                    )}
                  </AnimatePresence>
                </motion.article>
              )
            })}
          </div>
        </motion.div>
      </div>

      {/* Confetti (for the 4th certificate explosion) */}
      <div className="pointer-events-none fixed inset-0 z-50">
        {confetti.map((c) => (
          <motion.span
            key={c.id}
            initial={{ opacity: 0, y: -10, scale: 0.8 }}
            animate={{ opacity: 1, y: 700, rotate: Math.random() * 720 }}
            transition={{ delay: c.delay, duration: 1.2, ease: "easeOut" }}
            style={{
              left: `${c.left}%`,
              position: "absolute",
              top: "10%",
              fontSize: 14 + Math.random() * 12,
            }}
          >
            {["✨", "🎉", "💜", "💫", "🎯", "🔥"][Math.floor(Math.random() * 6)]}
          </motion.span>
        ))}
      </div>

      {/* Image Preview Modal */}
      <AnimatePresence>
        {preview && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 flex items-center justify-center bg-black/60 p-6"
            onClick={() => setPreview(null)}
          >
            <motion.div
              initial={{ y: 40, scale: 0.96 }}
              animate={{ y: 0, scale: 1 }}
              exit={{ y: 20, scale: 0.96 }}
              transition={{ duration: 0.35 }}
              className="relative bg-white rounded-2xl max-w-4xl w-full overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="absolute top-3 right-3 z-50">
                <button
                  onClick={() => setPreview(null)}
                  className="p-2 bg-white rounded-full shadow hover:scale-105 transition"
                  aria-label="Close preview"
                >
                  <X size={18} />
                </button>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold mb-4">{preview.title}</h3>
                <div className="h-[60vh] w-full bg-gray-100 rounded-lg overflow-hidden">
                  <img src={preview.url} alt={preview.title} className="w-full h-full object-contain" />
                </div>
                <div className="mt-4 flex justify-end gap-3">
                  <a
                    href={preview.url}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold"
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
