"use client"

import { motion } from "framer-motion"
import TechStack from "./tech-stack"

export default function AboutSection() {
  return (
    <motion.section
      className="w-full max-w-2xl py-8 mx-auto"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
    >
      <motion.h2 
        className="text-xl font-semibold mb-4 text-gray-900 dark:text-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        About Me
      </motion.h2>
      <motion.p
        className="text-gray-600 dark:text-gray-300 mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.5 }}
      >
        Experienced full-stack engineer specializing in AI-driven solutions. 
        I build scalable applications with JavaScript/TypeScript, Node.js 
        and React, while also leveraging Python for machine learning 
        and data analysis. Passionate about creating seamless user 
        experiences and robust backend architectures.
      </motion.p>
      <TechStack />
    </motion.section>
  )
}