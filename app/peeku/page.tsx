import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import { WaitlistForm } from "../_components/waitlist-form";
import "./styles.css";

// Soft and round, to match the icon's gentle, sleepy mood.
const nunito = Nunito({
    subsets: ["latin"],
    weight: ["500", "600", "700", "800"],
    variable: "--font-nunito",
});

const description =
    "Peeku asks for one slow breath before the apps you choose open, so you can decide if you really want to. Get notified on launch day.";

export const metadata: Metadata = {
    title: "Peeku — One Breath Before You Scroll",
    description,
    icons: {
        icon: "/peeku/icon.png",
        apple: "/peeku/icon.png",
    },
    openGraph: {
        type: "website",
        url: "https://www.apptify.in/peeku",
        title: "Peeku — One Breath Before You Scroll",
        description,
        siteName: "Apptify",
        images: ["https://www.apptify.in/peeku/icon.png"],
    },
};

const STEPS = [
    {
        title: "Pick your apps",
        body: "Choose the apps you open without thinking.",
    },
    {
        title: "Take one breath",
        body: "A slow breath shows up before they open.",
    },
    {
        title: "Then decide",
        body: "Open it, or walk away. Either is fine.",
    },
];

function Flower() {
    // The little flower from the icon's hair clip.
    return (
        <svg className="pk-flower" viewBox="0 0 24 24" aria-hidden="true">
            {[0, 72, 144, 216, 288].map((r) => (
                <ellipse
                    key={r}
                    cx="12"
                    cy="6.6"
                    rx="3.4"
                    ry="5"
                    transform={`rotate(${r} 12 12)`}
                />
            ))}
            <circle cx="12" cy="12" r="2.2" className="pk-flower-heart" />
        </svg>
    );
}

export default function PeekuPage() {
    return (
        <main className={`pk ${nunito.variable}`}>
            <div className="pk-glow" aria-hidden="true" />

            <div className="pk-content">
                {/* The icon sits inside a ring that breathes in and out on
                    the same slow count the app uses. */}
                <div className="pk-breath">
                    <span className="pk-ring pk-ring-a" aria-hidden="true" />
                    <span className="pk-ring pk-ring-b" aria-hidden="true" />
                    <img
                        className="pk-icon"
                        src="/peeku/icon.png"
                        alt="Peeku app icon: a smiling girl hugging her phone, eyes closed"
                        width={512}
                        height={512}
                    />
                </div>

                <p className="pk-cue" aria-hidden="true">
                    <span className="pk-cue-in">Breathe in</span>
                    <span className="pk-cue-out">Breathe out</span>
                </p>

                <h1 className="pk-title">Peeku</h1>

                <p className="pk-subtitle">One breath before you scroll</p>

                <p className="pk-pill">
                    <Flower />
                    Pause. Breathe. Then decide.
                </p>

                <ol className="pk-steps">
                    {STEPS.map((step, i) => (
                        <li key={step.title} className="pk-step">
                            <span className="pk-step-n">{i + 1}</span>
                            <span>
                                <strong>{step.title}</strong>
                                <span className="pk-step-body">{step.body}</span>
                            </span>
                        </li>
                    ))}
                </ol>

                <WaitlistForm app="peeku" appName="Peeku" doneIcon={<Flower />} />

                <p className="pk-note">
                    For iPhone and Android. No account, no tracking: your
                    pauses stay on your phone.
                </p>
            </div>

            <footer className="pk-footer">
                Made by <a href="/">Apptify</a> ·{" "}
                <a href="/peeku/privacy">Privacy</a>
            </footer>
        </main>
    );
}
