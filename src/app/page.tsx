import Hero from "@/components/hero"
import AboutSection from "@/components/about-section"
import GitHubHighlights from "@/components/github-highlights"
import { AIIntegrations } from "@/components/ai-integrations"

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="row-start-2 w-full max-w-4xl">
        <Hero />
        <AboutSection />
        <AIIntegrations />
        <GitHubHighlights />
      </main>
      <footer className="row-start-3">
        {/* Footer content will be added later */}
      </footer>
    </div>
  )
}
