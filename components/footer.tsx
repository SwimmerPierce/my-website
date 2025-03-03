import Link from "next/link"
import { Github, Linkedin, Twitter, Instagram } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-background border-t py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <Link href="/" className="text-xl font-bold">
              Portfolio
            </Link>
            <p className="text-sm text-muted-foreground mt-2">&copy; {currentYear} Your Name. All rights reserved.</p>
          </div>

          <div className="flex space-x-4">
            <Link
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-muted p-2 rounded-full hover:text-primary transition-colors"
              aria-label="GitHub"
            >
              <Github size={20} />
            </Link>
            <Link
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-muted p-2 rounded-full hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </Link>
            <Link
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-muted p-2 rounded-full hover:text-primary transition-colors"
              aria-label="Twitter"
            >
              <Twitter size={20} />
            </Link>
            <Link
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-muted p-2 rounded-full hover:text-primary transition-colors"
              aria-label="Instagram"
            >
              <Instagram size={20} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

