import type { CSSProperties } from 'react'
import Link from 'next/link'

const OFFERINGS = ['Apps', 'Agents', 'Skills', 'Tools']

const APPS = [
  {
    name: 'Readio',
    blurb: 'PDFs, websites & more, as audiobooks',
    href: '/readio',
    icon: '/readio/icon.jpg',
    live: true,
  },
  {
    name: 'Habidots',
    blurb: 'Daily habit tracker, one dot at a time',
    href: '/habidots',
    icon: '/habidots/icon.png',
    live: true,
  },
  {
    name: 'Dog on Walk',
    blurb: 'Pet focus timer: your focus, their adventure',
    href: '/dog-on-walk',
    icon: '/dog-on-walk/icon.jpg',
    live: false,
  },
]

export default function Home() {
  return (
    <main className="home">
      <section className="lockup">
        <h1 className="wordmark">Apptify</h1>
        <ul
          className="offerings"
          aria-label="What we build"
          style={{ '--count': OFFERINGS.length } as CSSProperties}
        >
          {OFFERINGS.map((item, i) => (
            <li
              key={item}
              className="offering"
              // Its position sets its turn in the highlight cycle in globals.css.
              style={{ '--i': i } as CSSProperties}
            >
              {item}
            </li>
          ))}
        </ul>
      </section>

      <section className="shelf" aria-labelledby="shelf-title">
        <h2 id="shelf-title" className="shelf-title">
          Our apps
        </h2>
        <ul className="shelf-grid">
          {APPS.map((app, i) => (
            <li
              key={app.name}
              className="shelf-item"
              style={{ '--i': i } as CSSProperties}
            >
              <Link href={app.href} className="app-card">
                <img
                  className="app-icon"
                  src={app.icon}
                  alt=""
                  width={64}
                  height={64}
                />
                <span className="app-text">
                  <span className="app-name">{app.name}</span>
                  <span className="app-blurb">{app.blurb}</span>
                </span>
                <span
                  className={`app-status${app.live ? ' app-status-live' : ''}`}
                >
                  {app.live ? 'Live' : 'Coming soon'}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <footer className="home-footer">
        © {new Date().getFullYear()} Apptify
      </footer>
    </main>
  )
}
