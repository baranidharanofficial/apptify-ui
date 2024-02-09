import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
// import MonaSans from 'next/font/local'
import './globals.css'

// const monasans = MonaSans({ src: './Mona-Sans.woff2' })

const montserrat = Montserrat({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Apptify',
  description: 'Your Ideas, Our Code',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={montserrat.className}>{children}</body>
    </html>
  )
}
