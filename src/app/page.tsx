import Hero from "@/components/hero"
import AboutSection from "@/components/about-section"
import GitHubHighlights from "@/components/github-highlights"
import { AIIntegrations } from "@/components/ai-integrations"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="w-full max-w-screen-md mx-auto px-6 py-8 space-y-16">
        <Hero />
        <AboutSection />
        <AIIntegrations />
        <GitHubHighlights />
      </main>
    </div>
  )
}
