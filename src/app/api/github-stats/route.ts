import { NextResponse } from 'next/server'

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
      const errorText = await Promise.all([userRes.text(), reposRes.text()])
      console.error('GitHub API failed:', {
        userStatus: userRes.status,
        userError: errorText[0],
        reposStatus: reposRes.status,
        reposError: errorText[1]
      })
      throw new Error('GitHub API failed')
    }

    const [userData, reposData] = await Promise.all([
      userRes.json(),
      reposRes.json()
    ])

    const stats: GitHubUserStats = {
      totalRepos: userData.public_repos,
      totalStars: reposData.reduce((acc: number, repo: any) => acc + repo.stargazers_count, 0),
      topRepos: reposData.map((repo: any) => ({
        name: repo.name,
        description: repo.description || '',
        stars: repo.stargazers_count,
        language: repo.language || ''
      }))
    }

    return NextResponse.json(stats, {
      headers: {
        'Cache-Control': 'public, s-maxage=43200'
      }
    })
  } catch (error: unknown) {
    console.error('GitHub stats fetch error:', error)
    const errorMessage = error instanceof Error ? error.message : 'Failed to fetch GitHub stats'
    return NextResponse.json(
      { error: errorMessage },
      { status: 500 }
    )
  }
}