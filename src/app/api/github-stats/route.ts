import { NextResponse } from 'next/server'

interface GitHubRepo {
  name: string
  description: string | null
  stargazers_count: number
  languages_url: string
  html_url: string
}

interface GitHubUserStats {
  totalRepos: number
  totalStars: number
  topRepos: Array<{
    name: string
    description: string
    stars: number
    languages_url: string
    html_url: string
  }>
}

export async function GET() {
  try {
    const [userRes, reposRes] = await Promise.all([
      fetch('https://api.github.com/users/alorse', {
        headers: {
          'Accept': 'application/vnd.github.v3+json',
          'User-Agent': 'alorse.net'
        }
      }),
      fetch('https://api.github.com/users/alorse/repos?sort=stars&per_page=3', {
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

    const stats: GitHubUserStats = {
      totalRepos: user.public_repos,
      totalStars: repos.reduce((acc, repo) => acc + repo.stargazers_count, 0),
      topRepos: repos.map(repo => ({
        name: repo.name,
        description: repo.description || '',
        stars: repo.stargazers_count,
        languages_url: repo.languages_url,
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