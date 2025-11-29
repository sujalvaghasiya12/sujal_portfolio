"use client"

import { useState, useEffect } from "react"
import Navbar from "@/components/navbar"
import Hero from "@/components/sections/hero"
import Skills from "@/components/sections/skills"
import Projects from "@/components/sections/projects"
import Resume from "@/components/sections/resume"
import About from "@/components/sections/about"
import Certificates from "@/components/sections/certificates"
import Contact from "@/components/sections/contact"
import Footer from "@/components/footer"
import LoadingScreen from "@/components/sections/LoadingScreen"

export default function Home() {
  const [activeSection, setActiveSection] = useState("home")
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000) // Show loading screen for 2 seconds

    return () => clearTimeout(timer)
  }, [])

  // Show loading screen while isLoading is true
  if (isLoading) {
    return <LoadingScreen />
  }

  return (
    <div className="w-full overflow-hidden bg-white">
      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />
      <main>
        <section id="home">
          <Hero setActiveSection={setActiveSection} />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="skills">
          <Skills />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="resume">
          <Resume />
        </section>
        <section id="certificate">
          <Certificates />
        </section>
        <section id="connect">
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  )
}