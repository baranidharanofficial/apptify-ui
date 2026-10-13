// The park backdrop: sky, drifting clouds, hazy hills with a far-off city,
// a path winding into the distance, trees, a fence and a few flowers.
// Drawn on a 1600×900 canvas that slices to fill any viewport, anchored to
// the bottom so the path always meets the screen edge.

function Cloud({ x, y, s = 1 }: { x: number; y: number; s?: number }) {
    return (
        <g transform={`translate(${x} ${y}) scale(${s})`}>
            <ellipse cx="0" cy="20" rx="120" ry="26" />
            <circle cx="-50" cy="6" r="34" />
            <circle cx="0" cy="-12" r="48" />
            <circle cx="55" cy="4" r="36" />
        </g>
    );
}

function Tree({ x, y, s = 1 }: { x: number; y: number; s?: number }) {
    return (
        <g transform={`translate(${x} ${y}) scale(${s})`}>
            <path
                d="M-9 0 L-6 -150 L6 -150 L9 0 Z M-4 -110 L-46 -160 M4 -95 L40 -150"
                fill="#7b5a3c"
                stroke="#7b5a3c"
                strokeWidth="7"
                strokeLinecap="round"
            />
            <circle cx="-55" cy="-170" r="58" fill="#4f9d3a" />
            <circle cx="50" cy="-175" r="62" fill="#4f9d3a" />
            <circle cx="0" cy="-230" r="70" fill="#5cae45" />
            <circle cx="-30" cy="-190" r="52" fill="#5cae45" />
            <circle cx="28" cy="-205" r="50" fill="#6cbf53" />
        </g>
    );
}

function Flower({ x, y }: { x: number; y: number }) {
    return (
        <g transform={`translate(${x} ${y})`}>
            <path d="M0 0 L0 30" stroke="#3f8a2e" strokeWidth="3" />
            {[0, 72, 144, 216, 288].map((a) => (
                <ellipse
                    key={a}
                    cx="0"
                    cy="-9"
                    rx="6"
                    ry="9"
                    fill="#fff"
                    transform={`rotate(${a})`}
                />
            ))}
            <circle r="5" fill="#f6c443" />
        </g>
    );
}

const CITY = [
    [1190, 470, 34],
    [1228, 430, 40],
    [1272, 490, 30],
    [1306, 400, 46],
    [1356, 455, 32],
    [1392, 420, 38],
    [1434, 480, 30],
] as const;

export function Scene() {
    return (
        <svg
            className="dow-scene"
            viewBox="0 0 1600 900"
            preserveAspectRatio="xMidYMax slice"
            aria-hidden="true"
        >
            <defs>
                <linearGradient id="dow-sky" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0" stopColor="#5bbcf2" />
                    <stop offset="0.55" stopColor="#bfe5fb" />
                    <stop offset="1" stopColor="#eaf7fe" />
                </linearGradient>
                <linearGradient id="dow-path" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0" stopColor="#e6d3ad" />
                    <stop offset="1" stopColor="#f2e2c0" />
                </linearGradient>
            </defs>

            <rect width="1600" height="900" fill="url(#dow-sky)" />

            <g fill="#fff">
                <g className="dow-drift dow-drift-a">
                    <Cloud x={180} y={190} s={1.1} />
                    <Cloud x={1080} y={330} s={0.6} />
                </g>
                <g className="dow-drift dow-drift-b">
                    <Cloud x={1380} y={210} s={1} />
                    <Cloud x={470} y={360} s={0.55} />
                </g>
            </g>

            {/* Far hills and the city, washed out by distance. */}
            <path
                d="M0 590 C200 480 380 490 560 560 C700 505 860 480 1050 545 C1200 490 1400 480 1600 560 V900 H0 Z"
                fill="#b8d8ee"
            />
            <g fill="#a3c6ea">
                {CITY.map(([x, top, w]) => (
                    <rect key={x} x={x} y={top} width={w} height={600 - top} />
                ))}
            </g>

            <path
                d="M0 640 C250 565 520 585 760 640 C1000 600 1300 565 1600 620 V900 H0 Z"
                fill="#a6da82"
            />
            <path
                d="M0 720 C300 650 600 690 820 735 C1050 690 1350 650 1600 700 V900 H0 Z"
                fill="#82c75e"
            />

            {/* The path, narrowing as it winds over the hill. */}
            <path
                d="M620 900 C700 830 860 800 815 752 C795 730 830 712 872 702 L888 704 C866 716 852 732 878 756 C940 810 1030 855 1110 900 Z"
                fill="url(#dow-path)"
            />

            <Tree x={130} y={700} s={1} />
            <Tree x={1480} y={690} s={1.05} />

            {/* Fence along the left hill. */}
            <g fill="#9a693d">
                <path
                    d="M-10 700 L430 760 L430 772 L-10 712 Z M-10 736 L430 796 L430 808 L-10 748 Z"
                />
                {[20, 140, 260, 380].map((x) => (
                    <rect
                        key={x}
                        x={x}
                        y={680 + x * 0.136}
                        width="18"
                        height="110"
                        rx="4"
                    />
                ))}
            </g>

            {/* Foreground grass. */}
            <path
                d="M0 810 C200 780 420 800 610 850 L640 900 H0 Z"
                fill="#5aa83f"
            />
            <path
                d="M1080 900 C1240 830 1420 800 1600 805 V900 Z"
                fill="#5aa83f"
            />
            <g fill="#3f8f2f">
                <path d="M60 900 C70 820 110 780 150 760 C120 800 110 850 120 900 Z" />
                <path d="M150 900 C170 840 220 800 270 790 C230 830 210 860 210 900 Z" />
                <path d="M1440 900 C1460 840 1510 800 1560 790 C1520 830 1500 860 1500 900 Z" />
            </g>

            <Flower x={250} y={845} />
            <Flower x={430} y={875} />
            <Flower x={1300} y={870} />
            <Flower x={1520} y={840} />
        </svg>
    );
}
