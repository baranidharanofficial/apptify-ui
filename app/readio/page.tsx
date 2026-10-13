import type { Metadata } from "next";
import { Bricolage_Grotesque } from "next/font/google";
import { StoreButtons } from "../_components/store-buttons";
import { Headphones } from "./icons";
import { Scene } from "./scene";
import "./styles.css";

// Heavy and graphic, to stand up to the icon's flat red and hard shadows.
const bricolage = Bricolage_Grotesque({
    subsets: ["latin"],
    weight: ["500", "600", "800"],
    variable: "--font-bricolage",
});

const description =
    "Turn PDFs, websites and more into audiobooks. Available on the App Store and Google Play.";

export const metadata: Metadata = {
    title: "Readio — Turn anything into an audiobook",
    description,
    icons: {
        icon: "/readio/icon.jpg",
        apple: "/readio/icon.jpg",
    },
    openGraph: {
        type: "website",
        url: "https://www.apptify.in/readio",
        title: "Readio — Turn anything into an audiobook",
        description,
        siteName: "Apptify",
        images: ["https://www.apptify.in/readio/icon.jpg"],
    },
};

export default function ReadioPage() {
    return (
        <main className={`rd ${bricolage.variable}`}>
            <Scene />

            <div className="rd-content">
                <img
                    className="rd-icon"
                    src="/readio/icon.jpg"
                    alt="Readio app icon: dark headphones with cream ear pads, shaped like an open book, on red"
                    width={512}
                    height={512}
                />

                <h1 className="rd-title">Readio</h1>

                <p className="rd-subtitle">
                    PDFs, websites &amp; more, as audiobooks
                </p>

                <p className="rd-pill">
                    Read less. Listen more.
                    <Headphones className="rd-pill-icon" />
                </p>

                <StoreButtons
                    appName="Readio"
                    appStoreUrl="https://apps.apple.com/app/id6755078046"
                    playStoreUrl="https://play.google.com/store/apps/details?id=tech.glactic.readio"
                />
            </div>

            <footer className="rd-footer">
                Made by <a href="/">Apptify</a>
            </footer>
        </main>
    );
}
