import Image from "next/image"
import { Button } from "@/components/ui/button"
import { FileText } from "lucide-react"

export default function About() {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-16">About Me</h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative aspect-square max-w-md mx-auto">
            <div className="absolute inset-0 border-2 border-primary rounded-lg transform translate-x-4 translate-y-4"></div>
            <div className="relative h-full w-full overflow-hidden rounded-lg">
              <Image
                src="/placeholder.svg?height=400&width=400"
                alt="Profile"
                width={400}
                height={400}
                className="object-cover h-full w-full"
              />
            </div>
          </div>
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              I'm <span className="text-primary">Chase</span>, a strategic B2B marketing manager
            </h3>
            <p className="text-muted-foreground">
              With over 7 years of experience in B2B marketing, I specialize in developing comprehensive marketing
              strategies that align with business objectives and drive measurable results.
            </p>
            <p className="text-muted-foreground">
              My expertise spans across content marketing, lead generation, marketing automation, account-based
              marketing, and building strong relationships with stakeholders and clients.
            </p>
            <p className="text-muted-foreground">
              I'm passionate about leveraging data-driven insights to optimize marketing campaigns and create compelling
              narratives that resonate with B2B audiences.
            </p>
            <div className="pt-4">
              <Button variant="outline" className="gap-2">
                <FileText size={16} />
                Download Resume
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

