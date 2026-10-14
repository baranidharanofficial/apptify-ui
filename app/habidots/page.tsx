import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import { StoreButtons } from "../_components/store-buttons";
import { AppStats } from "../_components/app-stats";
import { APP_STATS } from "@/lib/apps";
import { HABIT_COLORS, Scene } from "./scene";
import "./styles.css";

// Geometric and round, to sit with the icon's grid of circles. latin-ext
// carries the dotless "ı" the title's coloured dot sits on.
const outfit = Outfit({
    subsets: ["latin", "latin-ext"],
    weight: ["500", "600", "700"],
    variable: "--font-outfit",
});

const description =
    "A daily habit tracker: one dot a day, and watch your habits fill in. Available on the App Store and Google Play.";

export const metadata: Metadata = {
    title: "Habidots — Daily Habit Tracker",
    description,
    icons: {
        icon: "/habidots/icon.png",
        apple: "/habidots/icon.png",
    },
    openGraph: {
        type: "website",
        url: "https://www.apptify.in/habidots",
        title: "Habidots — Daily Habit Tracker",
        description,
        siteName: "Apptify",
        images: ["https://www.apptify.in/habidots/icon.png"],
    },
};

function Dots({ className }: { className?: string }) {
    return (
        <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
            {HABIT_COLORS.map((c, i) => (
                <circle
                    key={c.lit}
                    cx={i % 2 ? 17 : 7}
                    cy={i < 2 ? 7 : 17}
                    r={4.6}
                    fill={c.lit}
                />
            ))}
        </svg>
    );
}

export default function HabidotsPage() {
    return (
        <main className={`hd ${outfit.variable}`}>
            <Scene />

            <div className="hd-content">
                <img
                    className="hd-icon"
                    src="/habidots/icon.png"
                    alt="Habidots app icon: four grids of coloured dots on black"
                    width={512}
                    height={512}
                />

                <h1 className="hd-title">
                    <span className="hd-sr">Habidots</span>
                    {/* The "i" wears a habit dot; screen readers get the
                        plain name above. */}
                    <span aria-hidden="true">
                        Hab<span className="hd-i">ı</span>dots
                    </span>
                </h1>

                <p className="hd-subtitle">Daily Habit Tracker</p>

                <p className="hd-pill">
                    <Dots className="hd-pill-dots" />
                    Small dots. Big habits.
                </p>

                <StoreButtons
                    appName="Habidots"
                    appStoreUrl="https://apps.apple.com/app/id6756837518"
                    playStoreUrl="https://play.google.com/store/apps/details?id=com.glactic.streakit"
                />

                <AppStats stats={APP_STATS.habidots} long className="hd-stats" />
            </div>

            <footer className="hd-footer">
                Made by <a href="/">Apptify</a>
            </footer>
        </main>
    );
}
