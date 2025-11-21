<motion.nav
  initial={{ opacity: 0, y: -20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ type: "spring", stiffness: 100, damping: 15 }}
  className={`fixed top-0 w-full z-50 transition-all duration-500 ${
    scrolled
      ? "bg-white/95 backdrop-blur-xl shadow-lg border-b border-blue-100/50"
      : "bg-white/60 backdrop-blur-md border-b border-blue-100/20"
  }`}
>
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex justify-between items-center h-16">
      {/* Logo */}
      <Link href="/" className="relative group">
        <motion.div whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.95 }} className="text-2xl font-bold bg-gradient-to-r from-[#3a7bff] to-[#c7a6ff] bg-clip-text text-transparent">
          Sujal
          <motion.span
            className="inline-block ml-1 text-[#3a7bff]"
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            ·
          </motion.span>
        </motion.div>
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-[#3a7bff] to-[#c7a6ff] rounded-lg blur-lg opacity-0 group-hover:opacity-20 transition-opacity"
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
                ? "text-white bg-gradient-to-r from-[#3a7bff] to-[#c7a6ff]"
                : "text-gray-700 hover:text-[#3a7bff]"
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

            {/* Animated Gradient Underline */}
            <motion.div
              className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-[#3a7bff] via-[#c7a6ff] to-[#3a7bff] rounded"
              initial={{ width: 0 }}
              animate={{ width: activeSection === item.toLowerCase() ? "100%" : "0%" }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            />
          </motion.button>
        ))}
      </div>

      {/* Mobile Menu Button */}
      <motion.button
        whileHover={{ scale: 1.2, rotate: 10 }}
        whileTap={{ scale: 0.85, rotate: 90 }}
        transition={{ type: "spring", stiffness: 400 }}
        className="md:hidden text-[#3a7bff] hover:text-[#c7a6ff] transition-all duration-300"
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
        className="md:hidden bg-white/98 backdrop-blur-xl border-b border-blue-100/30 py-4"
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
                  ? "text-white bg-gradient-to-r from-[#3a7bff] to-[#c7a6ff]"
                  : "text-gray-700 hover:text-[#3a7bff]"
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
