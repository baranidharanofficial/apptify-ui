import type { AppStats as Stats } from '@/lib/apps'
import './app-stats.css'

function Star() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2.8l2.8 5.9 6.4.8-4.7 4.4 1.2 6.4L12 17.2l-5.7 3.1 1.2-6.4-4.7-4.4 6.4-.8z" />
    </svg>
  )
}

// "★ 3.4 · 10K+ downloads", for cards and app pages. Colour comes from the
// surrounding text; size from the font size.
export function AppStats({
  stats,
  className = '',
  long = false,
}: {
  stats: Stats
  className?: string
  // Spells out the source and review count, for the app's own page.
  long?: boolean
}) {
  return (
    <span className={`app-stats ${className}`}>
      {stats.rating !== undefined && (
        <>
          <span className="app-stats-rating">
            <Star />
            <span>
              {stats.rating.toFixed(1)}
              <span className="app-stats-sr"> out of 5</span>
            </span>
            {long && stats.reviews !== undefined && (
              <span className="app-stats-dim">
                ({stats.reviews.toLocaleString('en-US')} reviews)
              </span>
            )}
          </span>
          <span className="app-stats-sep" aria-hidden="true">
            ·
          </span>
        </>
      )}
      <span>{stats.downloads} downloads</span>
      {long && (
        <>
          <span className="app-stats-sep" aria-hidden="true">
            ·
          </span>
          <span className="app-stats-dim">on Google Play</span>
        </>
      )}
    </span>
  )
}
