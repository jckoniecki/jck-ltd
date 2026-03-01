import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import Credibility from '@/components/Credibility'
import Services from '@/components/Services'
import About from '@/components/About'
import Differentiators from '@/components/Differentiators'
import Process from '@/components/Process'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Navigation />
      <Hero />
      <Credibility />
      <Services />
      <About />
      <Differentiators />
      <Process />
      <Contact />
      <Footer />
    </>
  )
}
