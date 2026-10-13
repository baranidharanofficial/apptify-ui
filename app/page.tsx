import { Fragment, type CSSProperties } from 'react'

const TAGLINE = ['Build.', 'Launch.', 'Monetize.', 'Repeat.']
const OFFERINGS = ['Apps', 'Agents', 'Skills', 'Tools', '& more']

export default function Home() {
  return (
    <main className="wordmark-stage">
      <div className="lockup">
        <h1 className="wordmark">Apptify</h1>
        <p className="tagline">
          {TAGLINE.map((word, i) => (
            <Fragment key={word}>
              {/* A real space between the spans, so the line still wraps,
                  copies and reads aloud as one sentence. */}
              {i > 0 && ' '}
              <span
                className="tagline-word"
                // The word's position drives both its entrance delay and its
                // turn in the highlight cycle; the timing lives in globals.css.
                style={{ '--i': i } as CSSProperties}
              >
                {word}
              </span>
            </Fragment>
          ))}
        </p>
        <ul className="offerings" aria-label="What we build">
          {OFFERINGS.map((item, i) => (
            <li
              key={item}
              className="offering"
              // Each pass of the tagline cycle lights the next offering.
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
