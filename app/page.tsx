"use client"

import { useState } from "react"
import Navbar from "@/components/navbar"
import Hero from "@/components/sections/hero"
import Skills from "@/components/sections/skills"
import Projects from "@/components/sections/projects"
import Resume from "@/components/sections/resume"
import About from "@/components/sections/about"
import Certificates from "@/components/sections/certificates"
import Contact from "@/components/sections/contact"
import Footer from "@/components/footer"

export default function Home() {
  const [activeSection, setActiveSection] = useState("home")

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
