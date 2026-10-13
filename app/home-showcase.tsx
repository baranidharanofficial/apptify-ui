'use client'

import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type KeyboardEvent,
  type ReactNode,
} from 'react'
import Link from 'next/link'
import {
  APPS,
  OFFERINGS,
  UPCOMING,
  type AppEntry,
  type IdeasDigest,
} from '@/lib/apps'
import { AppStats } from './_components/app-stats'

// How long each offering stays up before the highlight moves on. Apps gets
// longer: there are three cards to take in.
const DWELL_MS: Record<(typeof OFFERINGS)[number], number> = {
  Apps: 6500,
  Agents: 3500,
  Skills: 3500,
  Tools: 3500,
}

// The wordmark's offerings double as tabs: the highlight walks them on its
// own, and the shelf below shows whichever one is lit. Hovering or focusing
// the showcase holds it; picking a tab stops the walk for good.
export function HomeShowcase({ ideas }: { ideas: IdeasDigest | null }) {
  const [active, setActive] = useState(0)
  const [held, setHeld] = useState(false)
  const [manual, setManual] = useState(false)
  const [reducedMotion, setReducedMotion] = useState(false)
  // The first render keeps the slow page-load entrance; later switches get
  // a quicker one.
  const [switched, setSwitched] = useState(false)
  const tabs = useRef<(HTMLButtonElement | null)[]>([])

  useEffect(() => {
    const query = window.matchMedia('(prefers-reduced-motion: reduce)')
    const update = () => setReducedMotion(query.matches)
    update()
    query.addEventListener('change', update)
    return () => query.removeEventListener('change', update)
  }, [])

  const auto = !manual && !reducedMotion
  const current = OFFERINGS[active]

  useEffect(() => {
    if (!auto || held) return
    const timer = window.setTimeout(() => {
      setActive((i) => (i + 1) % OFFERINGS.length)
      setSwitched(true)
    }, DWELL_MS[current])
    return () => window.clearTimeout(timer)
  }, [auto, held, current])

  const select = (i: number) => {
    setActive(i)
    setManual(true)
    setSwitched(true)
  }

  const onTabKey = (event: KeyboardEvent<HTMLButtonElement>, i: number) => {
    const step = { ArrowRight: 1, ArrowLeft: -1 }[event.key]
    if (!step) return
    event.preventDefault()
    const next = (i + step + OFFERINGS.length) % OFFERINGS.length
    select(next)
    tabs.current[next]?.focus()
  }

  const hold = {
    onPointerEnter: () => setHeld(true),
    onPointerLeave: () => setHeld(false),
    onFocus: () => setHeld(true),
    onBlur: () => setHeld(false),
  }

  return (
    <>
      <section className="lockup">
        <h1 className="wordmark">Apptify</h1>
        <ul
          className={`offerings${auto ? ' offerings--auto' : ''}${held ? ' offerings--held' : ''}`}
          role="tablist"
          aria-label="What we build"
          {...hold}
        >
          {OFFERINGS.map((name, i) => (
            <li key={name} className="offering" role="presentation">
              <button
                ref={(el) => {
                  tabs.current[i] = el
                }}
                type="button"
                role="tab"
                id={`tab-${name}`}
                aria-selected={i === active}
                aria-controls="showcase-panel"
                tabIndex={i === active ? 0 : -1}
                onClick={() => select(i)}
                onKeyDown={(e) => onTabKey(e, i)}
                // Keyed on the active tab so the progress bar restarts each
                // time this one lights up.
                key={i === active ? `on-${active}` : 'off'}
                style={{ '--dwell': `${DWELL_MS[name]}ms` } as CSSProperties}
              >
                {name}
              </button>
            </li>
          ))}
        </ul>
      </section>

      <section
        className={`shelf${switched ? ' shelf--switched' : ''}`}
        id="showcase-panel"
        role="tabpanel"
        aria-labelledby={`tab-${current}`}
        {...hold}
      >
        <h2 className="shelf-title" key={`title-${current}`}>
          {current === 'Tools' ? current : `Our ${current.toLowerCase()}`}
        </h2>
        <ul key={current} className="shelf-grid">
          {current === 'Apps' ? (
            APPS.map((app, i) => <AppCard key={app.name} app={app} i={i} />)
          ) : current === 'Agents' ? (
            <IdeasAgentCard digest={ideas} />
          ) : current === 'Skills' ? (
            <AssetsSkillCard />
          ) : (
            <SoonCard name={current} blurb={UPCOMING[current]} />
          )}
        </ul>
      </section>
    </>
  )
}

function AppCard({ app, i }: { app: AppEntry; i: number }) {
  return (
    <li className="shelf-item" style={{ '--i': i } as CSSProperties}>
      <Link href={app.href} className={`app-card app-card--${app.theme}`}>
        <span className="app-card-top">
          <img
            className="app-icon"
            src={app.icon}
            alt=""
            width={72}
            height={72}
          />
          <span className={`app-status${app.live ? ' app-status-live' : ''}`}>
            {app.live ? 'Live' : 'Coming soon'}
          </span>
        </span>
        <span className="app-card-bottom">
          <span className="app-text">
            <span className="app-name">{app.name}</span>
            <span className="app-blurb">{app.blurb}</span>
            {app.stats && (
              <AppStats stats={app.stats} className="app-card-stats" />
            )}
          </span>
          <span className="app-go" aria-hidden="true">
            <Arrow />
          </span>
        </span>
      </Link>
    </li>
  )
}

const shortDate = (date: string) =>
  new Date(`${date}T00:00:00`).toLocaleDateString('en-IN', {
    day: 'numeric',
    month: 'short',
  })

// The daily app-ideas agent, as a card the size of an app's: what it is
// and how many ideas today's report has, linking through to the reports.
function IdeasAgentCard({ digest }: { digest: IdeasDigest | null }) {
  return (
    <li className="shelf-item shelf-item--solo" style={{ '--i': 0 } as CSSProperties}>
      <Link href="/ideas" className="app-card app-card--agent">
        <span className="app-card-top">
          <span className="agent-icon">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              {/* A light bulb with a tick: an idea, checked. */}
              <path d="M9 18h6M10 21h4M12 3a6 6 0 0 0-3.6 10.8c.7.5 1.1 1.3 1.1 2.2h5c0-.9.4-1.7 1.1-2.2A6 6 0 0 0 12 3z" />
              <path d="M9.6 9.6l1.7 1.7 3.1-3.2" />
            </svg>
          </span>
          <span className="app-status app-status-live">Runs daily</span>
        </span>
        <span className="app-card-bottom">
          <span className="app-text">
            <span className="app-name">Daily App Ideas</span>
            <span className="app-blurb">
              Verified ideas from real user pain, every morning
            </span>
            {digest && (
              <span className="app-stats app-card-stats">
                {digest.count} verified {digest.count === 1 ? 'idea' : 'ideas'} ·{' '}
                {shortDate(digest.date)}
              </span>
            )}
          </span>
          <span className="app-go" aria-hidden="true">
            <Arrow />
          </span>
        </span>
      </Link>
    </li>
  )
}

// The App Assets Studio skill, in the violet and dots of the Habidots set
// it made.
function AssetsSkillCard() {
  return (
    <li className="shelf-item shelf-item--solo" style={{ '--i': 0 } as CSSProperties}>
      <Link href="/app-assets-studio" className="app-card app-card--skill">
        <span className="app-card-top">
          <span className="skill-icon">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              {/* A phone with a spark: a screen, art-directed. */}
              <rect x="6" y="2.5" width="11" height="19" rx="2.5" />
              <path d="M10.5 18.5h2" />
              <path d="M19.5 3.5v3M18 5h3" />
            </svg>
          </span>
          <span className="app-status">Claude Code skill</span>
        </span>
        <span className="app-card-bottom">
          <span className="app-text">
            <span className="app-name">App Assets Studio</span>
            <span className="app-blurb">
              Store screenshots and feature graphics, from your raw captures
            </span>
            <span className="app-stats app-card-stats">
              Made the Habidots listing
            </span>
          </span>
          <span className="app-go" aria-hidden="true">
            <Arrow />
          </span>
        </span>
      </Link>
    </li>
  )
}

const GLYPHS: Record<keyof typeof UPCOMING, ReactNode> = {
  // A wrench.
  Tools: (
    <path d="M14.5 5.5a4 4 0 0 0-5 5L4 16l4 4 5.5-5.5a4 4 0 0 0 5-5l-2.5 2.5-2.5-.5-.5-2.5z" />
  ),
}

function SoonCard({
  name,
  blurb,
}: {
  name: keyof typeof UPCOMING
  blurb: string
}) {
  return (
    <li className="shelf-item shelf-item--wide" style={{ '--i': 0 } as CSSProperties}>
      <div className="soon-card">
        <svg
          className="soon-art"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.6"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          {GLYPHS[name]}
        </svg>
        <span className="app-card-top">
          <span className="soon-glyph">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              {GLYPHS[name]}
            </svg>
          </span>
          <span className="app-status">In the works</span>
        </span>
        <span className="app-text">
          <span className="app-name">{name}</span>
          <span className="app-blurb">{blurb}</span>
        </span>
      </div>
    </li>
  )
}

function Arrow() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  )
}
