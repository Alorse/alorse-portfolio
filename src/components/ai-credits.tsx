"use client"

import { motion } from "framer-motion"

export function AICredits() {
  return (
    <motion.div 
      className="mt-12 p-6 bg-gray-50 dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
    >
      <h3 className="text-xl font-semibold mb-4 text-center">Made with 🤖 AI Magic</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
        <div className="text-center p-3 bg-white dark:bg-gray-700 rounded-lg">
          <div className="font-medium">Developer</div>
          <div className="text-gray-500 dark:text-gray-400">AI Assistant</div>
        </div>
        <div className="text-center p-3 bg-white dark:bg-gray-700 rounded-lg">
          <div className="font-medium">Designer</div>
          <div className="text-gray-500 dark:text-gray-400">AI Artist</div>
        </div>
        <div className="text-center p-3 bg-white dark:bg-gray-700 rounded-lg">
          <div className="font-medium">Copywriter</div>
          <div className="text-gray-500 dark:text-gray-400">AI Wordsmith</div>
        </div>
        <div className="text-center p-3 bg-white dark:bg-gray-700 rounded-lg">
          <div className="font-medium">Prompt Engineer</div>
          <div className="text-indigo-600 dark:text-indigo-400 font-semibold">
            Alfredo Ortegón
          </div>
        </div>
      </div>
      <p className="text-center mt-4 text-gray-500 dark:text-gray-400 text-xs">
        Powered by AI, directed by human creativity
      </p>
    </motion.div>
  )
}