import type { IdeasDigest } from '@/lib/apps'
import { getReport, listReportDates } from '@/lib/ideas'
import { HomeShowcase } from './home-showcase'

// The newest daily app-ideas report, trimmed to what the agent card shows.
async function latestIdeas(): Promise<IdeasDigest | null> {
  const [date] = await listReportDates()
  const report = date ? await getReport(date) : null
  if (!report) return null
  return {
    date: report.date,
    count: report.ideas.length,
    // The routine writes ideas best-first.
    top: report.ideas.slice(0, 3).map((idea) => ({
      id: idea.id,
      title: idea.title,
      category: idea.category,
      painScore: idea.painScore,
      sources: idea.sources.length,
    })),
  }
}

export default async function Home() {
  return (
    <main className="home">
      <HomeShowcase ideas={await latestIdeas()} />

      <footer className="home-footer">
        © {new Date().getFullYear()} Apptify
      </footer>
    </main>
  )
}
