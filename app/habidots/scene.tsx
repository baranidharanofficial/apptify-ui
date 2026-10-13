import type { CSSProperties } from "react";

// A habit grid filling the screen: most dots sit idle, and a scattering of
// them light up in the icon's four colours, hold, and fade, like days being
// checked off. Faded toward the middle so the content stays calm.

// Each habit colour as the icon draws it: bright when done, dim when not.
export const HABIT_COLORS = [
    { lit: "#b25fff", dim: "#4b3069" },
    { lit: "#61b33f", dim: "#2e4a24" },
    { lit: "#ffa200", dim: "#553a10" },
    { lit: "#ff6e2d", dim: "#7a3b20" },
] as const;

const COLS = 32;
const ROWS = 18;
const GAP = 50;

// Small deterministic hash, so server and client draw the same grid.
const rand = (n: number) => {
    const x = Math.sin(n * 127.1 + 311.7) * 43758.5453;
    return x - Math.floor(x);
};

export function Scene() {
    const dots = [];
    for (let row = 0; row < ROWS; row++) {
        for (let col = 0; col < COLS; col++) {
            const i = row * COLS + col;
            const cx = col * GAP + GAP / 2;
            const cy = row * GAP + GAP / 2;
            // Colours come in bands of four columns, like habits in the app.
            const color = HABIT_COLORS[Math.floor(col / 4) % 4];
            if (rand(i) < 0.32) {
                dots.push(
                    <circle
                        key={i}
                        className="hd-dot-live"
                        cx={cx}
                        cy={cy}
                        r={15}
                        style={
                            {
                                "--lit": color.lit,
                                "--dim": color.dim,
                                "--t": `${(7 + rand(i + 1) * 7).toFixed(1)}s`,
                                "--d": `${(rand(i + 2) * -14).toFixed(1)}s`,
                            } as CSSProperties
                        }
                    />
                );
            } else {
                dots.push(
                    <circle
                        key={i}
                        cx={cx}
                        cy={cy}
                        r={15}
                        fill={rand(i + 3) < 0.5 ? color.dim : "#1d1d1d"}
                        opacity={0.55}
                    />
                );
            }
        }
    }

    return (
        <svg
            className="hd-scene"
            viewBox={`0 0 ${COLS * GAP} ${ROWS * GAP}`}
            preserveAspectRatio="xMidYMid slice"
            aria-hidden="true"
        >
            {dots}
        </svg>
    );
}
