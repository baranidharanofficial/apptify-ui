import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import localFont from 'next/font/local'
import './globals.css'

// Cal Sans (SIL Open Font License 1.1 — see app/fonts/OFL.txt). Exposed as a
// variable rather than set on the body, so the policy pages under this layout
// keep Montserrat for their long-form legal text.
const calSans = localFont({
  src: './fonts/CalSans-Regular.ttf',
  weight: '400',
  style: 'normal',
  display: 'swap',
  variable: '--font-cal-sans',
})

const montserrat = Montserrat({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Apptify',
  description: 'Your Ideas, Our Code',
  openGraph: {
    type: "website",
    url: "https://www.apptify.in/",
    title: "Apptify",
    description: "Your Ideas, Our Code",
    siteName: "Apptify",
    images: [
      "https://www.apptify.in/logo.png"
    ]
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} ${calSans.variable}`}>
        {children}
      </body>
    </html>
  )
}
