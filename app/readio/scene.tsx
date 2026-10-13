import type { CSSProperties } from "react";

// The things Readio turns into audio, floating around the edges as white
// cards with the icon's hard black shadow, over an equaliser that runs
// along the bottom of the screen.

const SOURCES = [
    { label: "PDF", x: "7%", y: "16%", r: -8, d: 0 },
    { label: "Web page", x: "78%", y: "12%", r: 6, d: 1.2 },
    { label: "EPUB", x: "4%", y: "58%", r: 5, d: 2.1 },
    { label: "Article", x: "84%", y: "52%", r: -6, d: 0.6 },
    { label: "Notes", x: "18%", y: "36%", r: 3, d: 2.8, wide: true },
    { label: "Docs", x: "70%", y: "33%", r: -3, d: 1.7, wide: true },
];

const BARS = 56;

// Deterministic, so server and client render the same bars.
const barHeight = (i: number) =>
    0.25 + 0.75 * Math.abs(Math.sin(i * 1.7) * Math.cos(i * 0.45));

export function Scene() {
    return (
        <div className="rd-scene" aria-hidden="true">
            {SOURCES.map((s) => (
                <div
                    key={s.label}
                    className={`rd-doc${s.wide ? " rd-doc-wide" : ""}`}
                    style={
                        {
                            left: s.x,
                            top: s.y,
                            "--r": `${s.r}deg`,
                            "--d": `${s.d}s`,
                        } as CSSProperties
                    }
                >
                    <span className="rd-doc-label">{s.label}</span>
                    <span className="rd-doc-line" />
                    <span className="rd-doc-line" />
                    <span className="rd-doc-line rd-doc-line-short" />
                </div>
            ))}

            <div className="rd-eq">
                {Array.from({ length: BARS }, (_, i) => (
                    <span
                        key={i}
                        style={
                            {
                                "--h": barHeight(i).toFixed(3),
                                "--d": `${((i * 0.137) % 1.6).toFixed(2)}s`,
                            } as CSSProperties
                        }
                    />
                ))}
            </div>
        </div>
    );
}
