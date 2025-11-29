import { motion } from "framer-motion";

const allSkills = [
  // Languages
  { name: "HTML", icon: "/images/html-icon.png", category: "Languages" },
  { name: "CSS", icon: "/images/css-icon.png", category: "Languages" },
  { name: "JavaScript", icon: "/images/js-icon.png", category: "Languages" },
  { name: "Python", icon: "/images/python-icon.png", category: "Languages" },
  { name: "SQL", icon: "/images/sql-icon.png", category: "Languages" },
  // Frameworks & Libraries
  { name: "Pandas", icon: "/images/pandas-icon.png", category: "Framework & Libraries" },
  { name: "NumPy", icon: "/images/numpy-icon.png", category: "Framework & Libraries" },
  { name: "Matplotlib", icon: "/images/matplotlib-icon.png", category: "Framework & Libraries" },
  { name: "Seaborn", icon: "/images/seaborn-icon.png", category: "Framework & Libraries" },
  { name: "Scikit Learn", icon: "/images/sklearn-icon.png", category: "Framework & Libraries" },
  { name: "TensorFlow", icon: "/images/tensorflow-icon.png", category: "Framework & Libraries" },
  // Platform
  { name: "VS Code", icon: "/images/vscode-icon.png", category: "Platform" },
  { name: "PyCharm", icon: "/images/pycharm-icon.png", category: "Platform" },
  { name: "Jupyter Notebook", icon: "/images/jupyter-icon.png", category: "Platform" },
  // Tools
  { name: "Power BI", icon: "/images/powerbi-icon.png", category: "Tools" },
  { name: "Excel", icon: "/images/excel-icon.png", category: "Tools" },
  { name: "PowerPoint", icon: "/images/powerpoint-icon.png", category: "Tools" },
  { name: "Tableau", icon: "/images/tableau-icon.png", category: "Tools" },
  { name: "ChatGPT", icon: "/images/chatgpt-icon.png", category: "Tools" },
  { name: "Cursor AI", icon: "/images/cursor-icon.png", category: "Tools" },
  { name: "LovableAI", icon: "/images/lovableai-icon.png", category: "Tools" },
];

// Updated variants for top-to-bottom animation
const containerVariants = {
  hidden: { opacity: 0, y: -50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { 
      duration: 0.8,
      staggerChildren: 0.08, 
      delayChildren: 0.3 
    },
  },
};

const skillVariants = {
  hidden: { opacity: 0, y: -30, scale: 0.8 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring" as const,
      stiffness: 100,
      damping: 15,
      duration: 0.6,
    },
  },
};

// Section variants for the main container
const sectionVariants = {
  hidden: { opacity: 0, y: -80 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: "easeOut"
    }
  }
};

export default function Skills() {
  return (
    <motion.section 
      className="py-20 bg-gray-900 border-t border-gray-800 relative overflow-hidden font-sans min-h-screen flex items-center"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={sectionVariants}
    >
      {/* Background Animated Gray Glows */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ 
            y: [0, 60, -40, 0], 
            x: [0, 40, -30, 0],
            scale: [1, 1.4, 0.8, 1],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -right-40 top-20 w-[500px] h-[500px] bg-gray-700/40 rounded-full blur-3xl"
        />

        <motion.div
          animate={{ 
            y: [0, -50, 40, 0], 
            x: [0, -35, 25, 0],
            scale: [1, 0.8, 1.5, 1],
          }}
          transition={{ duration: 12, repeat: Infinity, delay: 1, ease: "easeInOut" }}
          className="absolute -left-32 bottom-10 w-[450px] h-[450px] bg-gray-600/40 rounded-full blur-3xl"
        />
        
        <motion.div
          animate={{ 
            y: [0, 30, -30, 0], 
            x: [0, -20, 20, 0],
            scale: [1, 1.3, 0.9, 1],
            rotate: [0, 180, 360],
          }}
          transition={{ duration: 15, repeat: Infinity, delay: 3, ease: "easeInOut" }}
          className="absolute left-1/2 top-1/2 w-96 h-96 bg-gray-500/30 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        {/* Section Header */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.h2
            className="text-5xl font-extrabold mb-4 text-gray-100 tracking-tight"
            variants={skillVariants}
          >
            Skills &{" "}
            <motion.span
              className="text-transparent bg-clip-text bg-gradient-to-r from-gray-300 via-gray-400 to-gray-300 animate-text"
              animate={{ backgroundPosition: ["0%", "100%", "0%"] }}
              transition={{ duration: 7, repeat: Infinity }}
              style={{ backgroundSize: "200% 200%" }}
            >
              Expertise
            </motion.span>
          </motion.h2>

          <motion.p 
            className="text-lg text-gray-300 max-w-2xl mx-auto" 
            variants={skillVariants}
          >
            My technical toolkit and areas of expertise
          </motion.p>
        </motion.div>

        {/* Single Unified Box with All Skills */}
        <motion.div
          className="bg-gradient-to-br from-gray-800 to-gray-700 border-2 border-gray-600 rounded-3xl p-12 relative overflow-hidden"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          whileHover={{
            scale: 1.01,
            boxShadow: "0 50px 100px rgba(100, 100, 100, 0.6)",
            borderColor: "rgb(107, 114, 128)",
          }}
        >
          {/* Animated background gradient */}
          <motion.div 
            className="absolute inset-0 bg-gradient-to-br from-gray-700/50 to-gray-600/50 opacity-0 group-hover:opacity-100"
            animate={{
              backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
            }}
            transition={{ duration: 5, repeat: Infinity }}
          />
          
          {/* Skills Grid */}
          <motion.div
            className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-8 relative z-10"
            variants={containerVariants}
          >
            {allSkills.map((skill, idx) => (
              <motion.div
                key={`${skill.name}-${idx}`}
                className="flex flex-col items-center gap-3 group cursor-pointer"
                variants={skillVariants}
                whileHover={{ 
                  scale: 1.2, 
                  y: -15,
                  zIndex: 50,
                }}
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  y: {
                    duration: 3,
                    repeat: Infinity,
                    delay: idx * 0.1,
                    ease: "easeInOut"
                  }
                }}
              >
                {/* Icon Container */}
                <motion.div
                  className="w-16 h-16 bg-gray-700 border-2 border-gray-500 rounded-xl flex items-center justify-center p-3 relative group-hover:border-gray-300 transition-all duration-300"
                  whileHover={{
                    rotate: 360,
                    scale: 1.3,
                    boxShadow: "0 20px 60px rgba(150, 150, 150, 0.8)",
                    backgroundColor: "rgba(75, 85, 99, 0.5)",
                  }}
                  whileTap={{ scale: 0.9, rotate: -180 }}
                >
                  {/* Glow effect on hover */}
                  <motion.div
                    className="absolute inset-0 rounded-xl bg-gray-400/0 blur-xl"
                    whileHover={{
                      backgroundColor: "rgba(156, 163, 175, 0.5)",
                      scale: 1.5,
                    }}
                  />
                  
                  <motion.img
                    src={skill.icon}
                    alt={skill.name}
                    className="w-full h-full object-contain relative z-10"
                    whileHover={{ 
                      rotate: 180,
                    }}
                    transition={{
                      rotate: { duration: 0.8, ease: "easeInOut" }
                    }}
                  />
                </motion.div>

                {/* Skill Name */}
                <motion.span
                  className="text-xs font-bold text-gray-300 text-center leading-tight max-w-[80px] group-hover:text-gray-100 transition-colors duration-300"
                  whileHover={{ 
                    scale: 1.1,
                    y: -5,
                  }}
                >
                  {skill.name}
                </motion.span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}