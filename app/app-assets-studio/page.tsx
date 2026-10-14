import type { Metadata } from "next";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import "./styles.css";

const REPO = "https://github.com/baranidharanofficial/app-assets-studio";

const description =
    "A Claude Code skill that turns raw app screenshots into art-directed App Store and Google Play assets: every store size, plus the feature graphic.";

export const metadata: Metadata = {
    title: "App Assets Studio — Apptify",
    description,
    openGraph: {
        type: "website",
        url: "https://www.apptify.in/app-assets-studio",
        title: "App Assets Studio",
        description,
        siteName: "Apptify",
        images: ["https://www.apptify.in/app-assets-studio/feature-graphic.jpg"],
    },
};

// The Habidots set the skill produced, in listing order, with each slide's
// headline as its alt text.
const SLIDES = [
    "Habits you can see.",
    "See how far you've come.",
    "Keep the week steady.",
    "Today, ticked off.",
    "Let the streak lead the way.",
    "See your trends.",
    "Pick one habit. Start small.",
    "Check in from your home screen.",
    "Quiet proof of progress.",
    "Shaped around you.",
];

const SIZES = [
    { label: "iPhone 6.9″", size: "1320 × 2868", src: "/app-assets-studio/slides/01.jpg", w: 460, h: 1000 },
    { label: "iPhone 6.3″", size: "1206 × 2622", src: "/app-assets-studio/sizes/iphone-63.jpg", w: 414, h: 900 },
    { label: "iPad 13″", size: "2048 × 2732", src: "/app-assets-studio/sizes/ipad.jpg", w: 674, h: 900 },
    { label: "Android phone", size: "1080 × 1920", src: "/app-assets-studio/sizes/android-phone.jpg", w: 506, h: 900 },
    { label: "Android 7″ tablet", size: "1200 × 1920", src: "/app-assets-studio/sizes/android-tab.jpg", w: 562, h: 900 },
];

const STEPS = [
    {
        title: "Add the skill",
        body: (
            <>
                Clone it into your project&rsquo;s skills folder with the
                command above. It needs Node 20+ and Google Chrome.
            </>
        ),
    },
    {
        title: "Start it in Claude Code",
        body: (
            <>
                Run <code>/app-assets-studio</code> and share a line about your
                app, your folder of raw screenshots, and your logo and icon.
            </>
        ),
    },
    {
        title: "Approve the plan",
        body: "Check the storyboard (which screens, in what order, with what words), then pick your palettes.",
    },
    {
        title: "Pick a concept",
        body: "Choose from four different designs and refine the one you like in quick rounds.",
    },
    {
        title: "Say “generate”",
        body: "Get every store size and the Play Store feature graphic, ready to upload.",
    },
];

export default function AppAssetsStudioPage() {
    return (
        <main className="aas">
            <header className="aas-hero">
                <p className="aas-eyebrow">Claude Code skill</p>
                <h1 className="aas-title">App Assets Studio</h1>
                <p className="aas-lede">
                    Turns raw app screenshots into art-directed App Store and
                    Google Play assets: every store size, plus the feature
                    graphic.
                </p>
                <div className="aas-actions">
                    <a className="aas-github" href={REPO} target="_blank" rel="noopener noreferrer">
                        <FaGithub aria-hidden="true" />
                        View on GitHub
                    </a>
                    <code className="aas-command">/app-assets-studio</code>
                </div>

                <img
                    className="aas-feature"
                    src="/app-assets-studio/feature-graphic.jpg"
                    alt="Habidots feature graphic: “Habits you can see.” beside two phones showing the app's dot grids"
                    width={1024}
                    height={500}
                />
            </header>

            <section className="aas-section aas-strip-section" aria-labelledby="aas-made">
                <div className="aas-section-head">
                    <h2 id="aas-made" className="aas-h2">Made for Habidots</h2>
                    <p className="aas-sub">
                        The full App Store set, from the app&rsquo;s own screens.
                    </p>
                </div>
                {/* A slow marquee: the set twice over, so the loop is seamless.
                    The second copy is decoration, hidden from screen readers. */}
                <div className="aas-strip">
                    <div className="aas-strip-track">
                        {[0, 1].map((copy) => (
                            <ul key={copy} className="aas-strip-set" aria-hidden={copy === 1 || undefined}>
                                {SLIDES.map((headline, i) => (
                                    <li key={headline}>
                                        <img
                                            src={`/app-assets-studio/slides/${String(i + 1).padStart(2, "0")}.jpg`}
                                            alt={copy === 0 ? `Slide ${i + 1}: ${headline}` : ""}
                                            width={460}
                                            height={1000}
                                            loading={i < 4 && copy === 0 ? "eager" : "lazy"}
                                        />
                                    </li>
                                ))}
                            </ul>
                        ))}
                    </div>
                </div>
            </section>

            <section className="aas-section" aria-labelledby="aas-before">
                <div className="aas-section-head">
                    <h2 id="aas-before" className="aas-h2">From capture to listing</h2>
                    <p className="aas-sub">
                        A plain screenshot in, a slide with a story out.
                    </p>
                </div>
                <div className="aas-compare">
                    <figure>
                        <img
                            className="aas-raw"
                            src="/app-assets-studio/raw.jpg"
                            alt="The raw Habidots home screen capture"
                            width={462}
                            height={1000}
                            loading="lazy"
                        />
                        <figcaption>Raw capture</figcaption>
                    </figure>
                    <span className="aas-compare-arrow" aria-hidden="true">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M5 12h14M13 6l6 6-6 6" />
                        </svg>
                    </span>
                    <figure>
                        <img
                            className="aas-final"
                            src="/app-assets-studio/slides/01.jpg"
                            alt="The finished slide: “Habits you can see.” over a 3D phone on purple"
                            width={460}
                            height={1000}
                            loading="lazy"
                        />
                        <figcaption>Store slide</figcaption>
                    </figure>
                </div>
            </section>

            <section className="aas-section" aria-labelledby="aas-concepts">
                <div className="aas-section-head">
                    <h2 id="aas-concepts" className="aas-h2">Four directions first</h2>
                    <p className="aas-sub">
                        Round one is four different looks, each with its own
                        idea, type and palette. You pick, then refine.
                    </p>
                </div>
                <img
                    className="aas-concepts"
                    src="/app-assets-studio/round-1.jpg"
                    alt="Round one: four Habidots concepts, Dot Journal, Dot Matrix, Sunrise and Quad Gallery, each a row of slides"
                    width={1601}
                    height={1800}
                    loading="lazy"
                />
            </section>

            <section className="aas-section" aria-labelledby="aas-sizes">
                <div className="aas-section-head">
                    <h2 id="aas-sizes" className="aas-h2">Every store size, at once</h2>
                    <p className="aas-sub">
                        Lock the design and it renders the lot, plus the
                        1024 × 500 Play Store feature graphic.
                    </p>
                </div>
                <ul className="aas-sizes">
                    {SIZES.map((s) => (
                        <li key={s.label}>
                            <img src={s.src} alt="" width={s.w} height={s.h} loading="lazy" />
                            <span className="aas-size-label">{s.label}</span>
                            <span className="aas-size-px">{s.size}</span>
                        </li>
                    ))}
                </ul>
            </section>

            <section className="aas-section" aria-labelledby="aas-steps">
                <div className="aas-section-head">
                    <h2 id="aas-steps" className="aas-h2">How to use it</h2>
                </div>
                <pre className="aas-install">
                    <code>
                        git clone {REPO}.git .claude/skills/app-assets-studio
                    </code>
                </pre>
                <ol className="aas-steps">
                    {STEPS.map((step) => (
                        <li key={step.title}>
                            <h3>{step.title}</h3>
                            <p>{step.body}</p>
                        </li>
                    ))}
                </ol>
            </section>

            <footer className="aas-footer">
                Open source under MIT on{" "}
                <a href={REPO} target="_blank" rel="noopener noreferrer">GitHub</a>
                {" "}· Made by <Link href="/">Apptify</Link>
            </footer>
        </main>
    );
}
