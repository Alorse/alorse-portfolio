import { NextResponse } from 'next/server'

export const dynamic = 'force-static'
export const revalidate = 43200 // 12 hours

interface GitHubRepo {
  name: string
  description: string | null
  stargazers_count: number
  language: string
  html_url: string
}

interface GitHubUserStats {
  totalRepos: number
  totalStars: number
  topRepos: GitHubRepo[]
}

export async function GET() {
  // For static export, return mock data
  if (process.env.NEXT_PHASE === 'phase-production-build') {
    return NextResponse.json({
      totalRepos: 42,
      totalStars: 1000,
      topRepos: []
    })
  }
  try {
    const [userRes, reposRes] = await Promise.all([
      fetch('https://api.github.com/users/alorse', {
        headers: {
          'Accept': 'application/vnd.github.v3+json',
          'User-Agent': 'alorse.net'
        }
      }),
      fetch('https://api.github.com/users/alorse/repos?sort=updated&per_page=20', {
        headers: {
          'Accept': 'application/vnd.github.v3+json',
          'User-Agent': 'alorse.net'
        }
      })
    ])

    if (!userRes.ok || !reposRes.ok) {
      throw new Error('Failed to fetch GitHub stats')
    }

    const user = await userRes.json()
    const repos: GitHubRepo[] = await reposRes.json()

    // Sort repos by stars desc and take top 3
    const sortedRepos = [...repos].sort((a, b) => b.stargazers_count - a.stargazers_count).slice(0, 3);
    
    const stats: GitHubUserStats = {
      totalRepos: user.public_repos,
      totalStars: repos.reduce((acc, repo) => acc + repo.stargazers_count, 0),
      topRepos: sortedRepos.map(repo => ({
        name: repo.name,
        description: repo.description,
        stargazers_count: repo.stargazers_count,
        language: repo.language,
        html_url: repo.html_url
      }))
    }

    return NextResponse.json(stats, {
      headers: {
        'Cache-Control': 'public, s-maxage=43200'
      }
    })
  } catch (error: unknown) {
    console.error('GitHub stats fetch error:', error)
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Failed to fetch GitHub stats' },
      { status: 500 }
    )
  }
}