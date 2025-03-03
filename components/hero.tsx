"use client"

import { useEffect, useState } from "react"
import { ArrowDown, Download } from "lucide-react"
import Header from "@/components/header"
import { Button } from "@/components/ui/button"

export default function Hero() {
  const [typedText, setTypedText] = useState("")
  const fullText = "Strategist. Communicator. Results-Driven."

  useEffect(() => {
    let currentIndex = 0
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setTypedText(fullText.slice(0, currentIndex))
        currentIndex++
      } else {
        clearInterval(typingInterval)
      }
    }, 100)

    return () => clearInterval(typingInterval)
  }, [])

  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about")
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="relative h-screen flex flex-col items-center justify-center bg-gradient-to-b from-background to-muted">
      <Header />
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">
          Hello, I'm <span className="text-primary">Chase Addison</span>
        </h1>
        <h2 className="text-xl md:text-2xl font-medium text-muted-foreground mb-8 h-8">
          B2B Marketing Manager
          <span className="animate-pulse ml-1">|</span>
        </h2>
        <p className="max-w-xl mx-auto text-muted-foreground mb-8">
          I develop and execute strategic marketing initiatives that drive business growth and establish meaningful B2B
          relationships.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" asChild>
            <a href="#campaigns">View My Work</a>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <a href="#contact">Get In Touch</a>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <a href="/resume.pdf" download className="flex items-center gap-2">
              <Download size={16} />
              Download Resume
            </a>
          </Button>
        </div>
      </div>
      <div className="absolute bottom-8 animate-bounce">
        <Button variant="ghost" size="icon" onClick={scrollToAbout} aria-label="Scroll down">
          <ArrowDown />
        </Button>
      </div>
    </section>
  )
}

