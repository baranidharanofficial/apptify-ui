import type { Metadata } from "next";
import { Fredoka } from "next/font/google";
import { Paw } from "./paw";
import { Scene } from "./scene";
import { WaitlistForm } from "../_components/waitlist-form";
import "./styles.css";

// Rounded and friendly, close to the app icon's lettering.
const fredoka = Fredoka({
    subsets: ["latin"],
    weight: ["500", "600", "700"],
    variable: "--font-fredoka",
});

const description =
    "A pet focus timer: stay on task and your dog heads out on an adventure. Get notified on launch day.";

export const metadata: Metadata = {
    title: "Dog on Walk — Pet Focus Timer",
    description,
    icons: {
        icon: "/dog-on-walk/icon.jpg",
        apple: "/dog-on-walk/icon.jpg",
    },
    openGraph: {
        type: "website",
        url: "https://www.apptify.in/dog-on-walk",
        title: "Dog on Walk — Pet Focus Timer",
        description,
        siteName: "Apptify",
        images: ["https://www.apptify.in/dog-on-walk/icon.jpg"],
    },
};

export default function DogOnWalkPage() {
    return (
        <main className={`dow ${fredoka.variable}`}>
            <Scene />

            <div className="dow-content">
                <img
                    className="dow-icon"
                    src="/dog-on-walk/icon.jpg"
                    alt="Dog on Walk app icon: a smiling golden dog against a sunny park"
                    width={390}
                    height={390}
                />

                <h1 className="dow-title">
                    Dog{" "}
                    <span className="dow-on">
                        {/* The paw stands in for the "o"; the real letter stays
                            for screen readers, search and copy-paste. */}
                        <span className="dow-o">
                            <span className="dow-sr">o</span>
                            <Paw className="dow-o-paw" />
                        </span>
                        n
                    </span>{" "}
                    Walk
                </h1>

                <p className="dow-subtitle">Pet Focus Timer</p>

                <p className="dow-pill">
                    Your focus. Their adventure.
                    <Paw className="dow-pill-paw" />
                </p>

                <WaitlistForm
                    app="dog-on-walk"
                    appName="Dog on Walk"
                    doneIcon={<Paw />}
                />
            </div>

            <footer className="dow-footer">
                Made by <a href="/">Apptify</a>
            </footer>
        </main>
    );
}
