# Project Name

A modern Next.js application with responsive design, theme switching, and accessible components.

## Project Overview

- **Framework**: Next.js App Router
- **Styling**: Tailwind CSS with custom theme
- **State Management**: React hooks
- **Theming**: Next-Themes for dark/light mode
- **Components**: Radix UI primitives with custom styling
- **Form Handling**: React Hook Form

## Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/project-name.git
```

2. Install dependencies (using pnpm):
```bash
pnpm install
```

3. Create environment configuration:
```bash
cp .env.example .env.local
```

4. Start development server:
```bash
pnpm dev
```

## Environment Variables

The following environment variables are required:

- `NEXT_PUBLIC_SITE_URL`: Your site's base URL (e.g. `https://example.com`)
- `RESEND_API_KEY`: API key for Resend email service
- `GITHUB_TOKEN`: Personal access token for GitHub API

Save these in `.env.local` which is excluded from version control.

## Deployment

### Vercel

1. Push your code to a GitHub repository
2. Create a new project in Vercel dashboard
3. Import your GitHub repository
4. Add environment variables in Vercel project settings
5. Deploy

Vercel will automatically:
- Detect Next.js framework
- Enable optimized builds
- Set up preview deployments for branches
- Configure SSL certificates

### Additional Deployment Options

For self-hosting or other platforms, ensure you:
- Set up proper environment variables
- Configure build command: `pnpm build`
- Set start command: `pnpm start`

## Development

### Scripts

- `dev`: Start development server
- `build`: Create production build
- `start`: Start production server
- `lint`: Run ESLint

### Tech Stack Credits

- [Next.js](https://nextjs.org)
- [React](https://reactjs.org)
- [Tailwind CSS](https://tailwindcss.com)
- [Radix UI](https://www.radix-ui.com)
- [Next-Themes](https://github.com/pacocoursey/next-themes)
