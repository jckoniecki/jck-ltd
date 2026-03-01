import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: 'JCK LTD — Enterprise AI Advisory',
  description: 'Enterprise AI expertise and builder credibility. Jim Koniecki brings Fortune 500 scale experience and hands-on product velocity to your AI transformation.',
  openGraph: {
    title: 'JCK LTD — Enterprise AI Advisory',
    description: 'Enterprise AI expertise. Builder credibility.',
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
