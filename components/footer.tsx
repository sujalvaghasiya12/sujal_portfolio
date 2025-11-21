'use client'

import { Github, Linkedin, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-whiite border-t border-cyan-500/20 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <p className="text-gray-400 text-sm">© 2025 Sujal Vaghasiya. All rights reserved.</p>
          <div className="flex gap-6">
            <a
              href="https://github.com/sujalvaghasiya12"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-cyan-400 transition-colors"
            >
              <Github size={20} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-cyan-400 transition-colors"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="mailto:sujalvaghasiya5@gmail.com"
              className="text-gray-400 hover:text-cyan-400 transition-colors"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
