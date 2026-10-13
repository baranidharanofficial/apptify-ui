import { FaApple, FaGooglePlay } from "react-icons/fa";
import "./store-buttons.css";

// App Store and Google Play links for a launched app. Pages theme them
// through the --sb-* custom properties (see store-buttons.css).
export function StoreButtons({
    appName,
    appStoreUrl,
    playStoreUrl,
}: {
    appName: string;
    appStoreUrl: string;
    playStoreUrl: string;
}) {
    return (
        <div className="sb">
            <a
                className="sb-button"
                href={appStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Download ${appName} on the App Store`}
            >
                <FaApple className="sb-icon" aria-hidden="true" />
                <span className="sb-text">
                    <span className="sb-small">Download on the</span>
                    <span className="sb-big">App Store</span>
                </span>
            </a>
            <a
                className="sb-button"
                href={playStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Get ${appName} on Google Play`}
            >
                <FaGooglePlay className="sb-icon sb-icon-play" aria-hidden="true" />
                <span className="sb-text">
                    <span className="sb-small">Get it on</span>
                    <span className="sb-big">Google Play</span>
                </span>
            </a>
        </div>
    );
}
