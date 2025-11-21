"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

const sectionColors: Record<string, string> = {
  home: "bg-gray-900/60 backdrop-blur-md border-b border-gray-700/20",
  about: "bg-gray-800/90 backdrop-blur-xl border-b border-gray-600/30",
  skills: "bg-gray-800/90 backdrop-blur-xl border-b border-gray-600/30",
  projects: "bg-gray-800/90 backdrop-blur-xl border-b border-gray-600/30",
  resume: "bg-gray-800/90 backdrop-blur-xl border-b border-gray-600/30",
  certificate: "bg-gray-800/90 backdrop-blur-xl border-b border-gray-600/30",
  connect: "bg-gray-800/90 backdrop-blur-xl border-b border-gray-600/30",
}

const Navbar = ({
  activeSection,
  setActiveSection,
}: { activeSection: string; setActiveSection: (section: string) => void }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = ["Home", "About", "Skills", "Projects", "Resume", "Certificate", "Connect"]

  const handleNavClick = (item: string) => {
    setActiveSection(item.toLowerCase())
    setIsOpen(false)
    const element = document.getElementById(item.toLowerCase())
    element?.scrollIntoView({ behavior: "smooth" })
  }

  // Dynamic background based on activeSection
  const navbarClass = sectionColors[activeSection] || "bg-gray-900/60 backdrop-blur-md border-b border-gray-700/20"

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 15 }}
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${navbarClass}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="relative group">
            <motion.div whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.95 }} className="text-2xl font-bold bg-gradient-to-r from-gray-100 to-gray-200 bg-clip-text text-transparent">
              Sujal 
              <motion.span
                className="inline-block ml-1 text-gray-400"
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
              >
                ·
              </motion.span>
            </motion.div>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-gray-600 to-gray-400 rounded-lg blur-lg opacity-0 group-hover:opacity-20 transition-opacity"
              layoutId="navLogoGlow"
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-1">
            {navItems.map((item, idx) => (
              <motion.button
                key={item}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.08, type: "spring", stiffness: 100 }}
                onClick={() => handleNavClick(item)}
                className={`relative px-3 py-2 text-sm font-medium rounded-lg transition-all duration-300 group overflow-hidden ${
                  activeSection === item.toLowerCase()
                    ? "text-white bg-gradient-to-r from-gray-700 to-gray-500"
                    : "text-gray-300 hover:text-gray-100"
                }`}
              >
                <motion.span
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400 }}
                  className="relative z-10 block"
                >
                  {item}
                </motion.span>
              </motion.button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileHover={{ scale: 1.2, rotate: 10 }}
            whileTap={{ scale: 0.85, rotate: 90 }}
            transition={{ type: "spring", stiffness: 400 }}
            className="md:hidden text-gray-300 hover:text-gray-100 transition-all duration-300"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="md:hidden bg-gray-800/98 backdrop-blur-xl border-b border-gray-700/30 py-4"
          >
            <div className="flex flex-col gap-2 px-4">
              {navItems.map((item, idx) => (
                <motion.button
                  key={item}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05, type: "spring" }}
                  whileHover={{ x: 10, scale: 1.05 }}
                  whileTap={{ x: 5, scale: 0.95 }}
                  onClick={() => handleNavClick(item)}
                  className={`text-left px-3 py-2 text-sm font-medium rounded-lg transition-all ${
                    activeSection === item.toLowerCase()
                      ? "text-white bg-gradient-to-r from-gray-700 to-gray-500"
                      : "text-gray-300 hover:text-gray-100"
                  }`}
                >
                  {item}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  )
}

export default Navbar