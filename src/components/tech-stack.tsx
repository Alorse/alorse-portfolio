"use client"

import { motion } from "framer-motion"
import {
  SiTypescript,
  SiNodedotjs,
  SiReact,
  SiNextdotjs,
  SiPython,
  SiLinux,
  SiApple,
  SiGoland,
  SiAndroid,
} from "react-icons/si"

const techStack = [
  { name: "Go", icon: SiGoland, color: "#F7DF1E" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "Android", icon: SiAndroid, color: "#2496ED" },
  { name: "Python", icon: SiPython, color: "#3776AB" },
  { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
  { name: "React", icon: SiReact, color: "#61DAFB" },
  { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
  { name: "Linux", icon: SiLinux, color: "#FCC624" },
  { name: "macOS", icon: SiApple, color: "#000000" },
]

export default function TechStack() {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">Tech Stack</h3>
      <div className="flex flex-wrap gap-3">
        {techStack.map((tech, index) => (
          <motion.div
            key={tech.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="group relative"
          >
            <div className="flex items-center space-x-2 rounded-lg border bg-card px-3 py-2 text-sm font-medium text-muted-foreground transition-all duration-200 hover:border-primary hover:text-primary">
              <tech.icon className="h-4 w-4 transition-colors duration-200 group-hover:text-[color:var(--hover-color)]" />
              <span>{tech.name}</span>
            </div>
            <style jsx>{`
              .group:hover .group-hover\\:text-\\[color\\:var\\(--hover-color\\)\\] {
                --hover-color: ${tech.color};
              }
            `}</style>
          </motion.div>
        ))}
      </div>
    </div>
  )
} 