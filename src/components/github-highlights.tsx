'use client'
import { motion } from 'framer-motion'
import GithubCalendar from 'react-github-calendar'
import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import { Skeleton } from './ui/skeleton'

export default function GitHubHighlights() {
  const [stats, setStats] = useState<GitHubUserStats | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const { theme } = useTheme()

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await fetch('/api/github-stats')
        if (!response.ok) throw new Error('Failed to fetch stats')
        const data = await response.json()
        setStats(data)
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Unknown error')
      } finally {
        setLoading(false)
      }
    }

    fetchStats()
  }, [])

  if (loading) return (
    <div className="space-y-4">
      <Skeleton className="h-6 w-64" />
      <Skeleton className="h-24 w-full" />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {[...Array(3)].map((_, i) => (
          <Skeleton key={i} className="h-48 w-full" />
        ))}
      </div>
    </div>
  )

  if (error) return (
    <div className="text-red-500">
      Failed to load GitHub stats: {error}
    </div>
  )

  if (!stats) return null

  return (
    <motion.section 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-8"
    >
      <div className="space-y-2">
        <h2 className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">
          GitHub Activity
        </h2>
        <div className="flex justify-center">
          <GithubCalendar 
            username="alorse"
            blockSize={9}
            colorScheme={theme === "dark" ? "dark" : theme === "light" ? "light" : undefined}
          />
        </div>
      </div>

      <div className="flex gap-4 text-gray-700 dark:text-gray-300">
        <div className="flex items-center gap-2">
          <span className="text-indigo-600 dark:text-indigo-400 font-semibold">
            {stats.totalRepos}
          </span>
          <span>Repositories</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-indigo-600 dark:text-indigo-400 font-semibold">
            {stats.totalStars}
          </span>
          <span>Stars</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.topRepos.map((repo) => (
          <motion.div
            key={repo.name}
            whileHover={{ y: -4 }}
            className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow"
          >
            <h3 className="text-lg font-medium text-indigo-600 dark:text-indigo-400 mb-2">
              {repo.name}
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              {repo.description}
            </p>
            <div className="flex items-center justify-between">
              <span className="inline-flex items-center gap-1 px-2 py-1 text-xs rounded-full bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200">
                {repo.language || 'Unknown'}
              </span>
              <span className="flex items-center gap-1 text-gray-500 dark:text-gray-400">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                </svg>
                {repo.stars}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  )
}

type GitHubUserStats = {
  totalRepos: number
  totalStars: number
  topRepos: Array<{
    name: string
    description: string
    stars: number
    language: string
  }>
}