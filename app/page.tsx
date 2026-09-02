import { Fragment } from 'react'

const TAGLINE = ['Build.', 'Launch.', 'Monetize.', 'Repeat.']

// The wordmark settles first, then the words arrive one beat apart.
const FIRST_WORD_DELAY = 0.6
const WORD_STAGGER = 0.16

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
                style={{
                  animationDelay: `${(
                    FIRST_WORD_DELAY +
                    i * WORD_STAGGER
                  ).toFixed(2)}s`,
                }}
              >
                {word}
              </span>
            </Fragment>
          ))}
        </p>
      </div>
    </main>
  )
}
