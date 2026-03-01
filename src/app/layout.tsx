import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'JCK LTD — Enterprise AI Advisory',
  description: 'Enterprise AI expertise meets builder credibility. Jim Koniecki — Global Director at Kyndryl — advises organizations on AI strategy, Microsoft implementation, and digital workplace transformation.',
  openGraph: {
    title: 'JCK LTD — Enterprise AI Advisory',
    description: 'Two speeds. One advisor. Enterprise scale + builder velocity.',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body>{children}</body>
    </html>
  )
}
