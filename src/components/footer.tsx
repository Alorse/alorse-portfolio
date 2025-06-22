import Link from "next/link"

export function Footer() {
  const techStack = [
    { name: "Next.js", href: "https://nextjs.org" },
    { name: "React", href: "https://reactjs.org" },
    { name: "Tailwind CSS", href: "https://tailwindcss.com" },
    { name: "TypeScript", href: "https://www.typescriptlang.org" },
  ]

  return (
    <footer className="border-t border-border/40 bg-background/95">
      <div className="container flex flex-col items-center gap-4 py-8 text-center">
        <div className="flex flex-wrap justify-center gap-4">
          {techStack.map((tech) => (
            <Link
              key={tech.href}
              href={tech.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-primary"
            >
              {tech.name}
            </Link>
          ))}
        </div>
        <p className="text-sm text-muted-foreground">
          © 2025 Alfredo Ortegón. All rights reserved.
        </p>
      </div>
    </footer>
  )
}