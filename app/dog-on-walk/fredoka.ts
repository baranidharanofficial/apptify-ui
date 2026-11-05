import localFont from "next/font/local";

// Fredoka, rounded and friendly like the app icon's lettering, for every Dog
// on Walk page. Self-hosted (SIL OFL 1.1, see app/fonts/Fredoka-OFL.txt)
// rather than next/font/google: Next 14.0's Google loader crashed on Vercel
// when Google Fonts sent a font URL without a file extension. One variable
// file (latin subset) covers weights 300 to 700.
export const fredoka = localFont({
  src: "../fonts/Fredoka-latin.woff2",
  weight: "300 700",
  style: "normal",
  display: "swap",
  variable: "--font-fredoka",
});
