import type { CSSProperties } from 'react'

const OFFERINGS = ['Apps', 'Agents', 'Skills', 'Tools', '& more']

export default function Home() {
  return (
    <main className="wordmark-stage">
      <div className="lockup">
        <h1 className="wordmark">Apptify</h1>
        <ul className="offerings" aria-label="What we build">
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
      </div>
    </main>
  )
}
