"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

type SocialLink = {
  href: string
  label: string
  icon: string
}

export default function Hero() {
  const socialLinks: SocialLink[] = [
    {
      href: "https://linkedin.com/in/alorse",
      label: "LinkedIn",
      icon: "linkedin"
    },
    {
      href: "mailto:alorse@gmail.com",
      label: "Email",
      icon: "mail"
    }
  ]

  return (
    <motion.section 
      className="flex flex-col md:flex-row items-center gap-8 md:gap-16 w-full"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div 
        className="w-32 h-32 rounded-full overflow-hidden border-4 border-indigo-600 dark:border-indigo-400"
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        <Image
          src="https://alorse.net/fredo_picture.jpeg"
          alt="Alfredo Ortegón"
          width={128}
          height={128}
          className="w-full h-full object-cover"
        />
      </motion.div>

      <div className="flex-1 flex flex-col gap-4 md:gap-6 text-center md:text-left">
        <motion.h1 
          className="text-3xl md:text-4xl font-bold"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1, duration: 0.5 }}
        >
          Alfredo Ortegón
        </motion.h1>
        <motion.p 
          className="text-lg md:text-xl text-gray-600 dark:text-gray-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          AI-driven Full-Stack Engineer & Freelance Consultant
        </motion.p>

        <motion.div 
          className="flex gap-4 justify-center md:justify-start"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          {socialLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 text-white rounded-lg transition-colors duration-200 flex items-center gap-2"
            >
              {link.label}
            </Link>
          ))}
        </motion.div>
      </div>
    </motion.section>
  )
}