import type { Metadata } from 'next'
import { Roboto, Open_Sans } from 'next/font/google'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import './globals.css'

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['300','400','700'],
  variable: '--font-roboto',
  display: 'swap',
})

const openSans = Open_Sans({
  subsets: ['latin'],
  weight: ['300','400','600','700'],
  variable: '--font-open-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'JCK LTD — Enterprise AI Advisory',
  description: 'JCK LTD is a strategic Microsoft AI advisory firm focused on AI transformation grounded in security, governance, and management.',
  openGraph: {
    title: 'JCK LTD — Enterprise AI Advisory',
    description: 'Strategic AI Transformation for the Enterprise.',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${roboto.variable} ${openSans.variable}`}>
      <body>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  )
}
