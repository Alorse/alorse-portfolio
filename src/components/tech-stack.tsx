"use client"

import { motion } from "framer-motion"

const technologies = [
  { name: "JavaScript", color: "#F7DF1E", icon: "JS" },
  { name: "TypeScript", color: "#3178C6", icon: "TS" },
  { name: "Node.js", color: "#339933", icon: "Node" },
  { name: "React", color: "#61DAFB", icon: "React" },
  { name: "Next.js", color: "#000000", icon: "Next" },
  { name: "Python", color: "#3776AB", icon: "Py" },
  { name: "AI APIs", color: "#10B981", icon: "AI" },
  { name: "Linux", color: "#FCC624", icon: "Linux" },
  { name: "macOS", color: "#000000", icon: "Mac" }
]

export default function TechStack() {
  return (
    <div className="flex flex-wrap gap-2 justify-center">
      {technologies.map((tech, index) => (
        <motion.div
          key={tech.name}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            delay: 0.1 * index,
            duration: 0.3
          }}
          className="flex items-center gap-2 px-3 py-1 rounded-full border border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
        >
          <svg 
            width="16" 
            height="16" 
            viewBox="0 0 24 24" 
            className="text-gray-500 group-hover:[tech.color] transition-colors"
            fill="currentColor"
          >
            <text 
              x="12" 
              y="16" 
              textAnchor="middle" 
              fontSize="12"
              className="font-mono font-bold"
            >
              {tech.icon}
            </text>
          </svg>
          <span className="text-sm text-gray-700 dark:text-gray-300">
            {tech.name}
          </span>
        </motion.div>
      ))}
    </div>
  )
}