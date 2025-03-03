import type { Metadata } from "next"
import Hero from "@/components/hero"
import About from "@/components/about"
import Skills from "@/components/skills"
import Campaigns from "@/components/projects"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

export const metadata: Metadata = {
  title: "B2B Marketing Manager Portfolio",
  description: "A showcase of my B2B marketing expertise, campaigns, and professional experience",
}

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <Skills />
      <Campaigns />
      <Contact />
      <Footer />
    </main>
  )
}

