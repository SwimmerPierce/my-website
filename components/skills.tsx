"use client"

import { useState } from "react"
import Image from "next/image"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

// Updated skills with logo information and new AI category
const skillCategories = [
  {
    id: "marketing-tech",
    name: "Marketing Technology",
    skills: [
      { name: "HubSpot Marketing Hub", logo: "/placeholder.svg?height=24&width=24" },
      { name: "Salesforce CRM", logo: "/placeholder.svg?height=24&width=24" },
      { name: "Marketo", logo: "/placeholder.svg?height=24&width=24" },
      { name: "Google Analytics", logo: "/placeholder.svg?height=24&width=24" },
      { name: "SEMrush", logo: "/placeholder.svg?height=24&width=24" },
      { name: "Hootsuite", logo: "/placeholder.svg?height=24&width=24" },
      { name: "Mailchimp", logo: "/placeholder.svg?height=24&width=24" },
      { name: "Adobe Creative Suite", logo: "/placeholder.svg?height=24&width=24" },
    ],
  },
  {
    id: "ai-tools",
    name: "AI & ML",
    skills: [
      { name: "ChatGPT", logo: "/placeholder.svg?height=24&width=24" },
      { name: "Vercell V0", logo: "/placeholder.svg?height=24&width=24" },
      { name: "TensorFlow", logo: "/placeholder.svg?height=24&width=24" },
      { name: "Cursor.ai", logo: "/placeholder.svg?height=24&width=24" },
      { name: "Hugging Face", logo: "/placeholder.svg?height=24&width=24" },
      { name: "Persado", logo: "/placeholder.svg?height=24&width=24" },
      { name: "Albert.ai", logo: "/placeholder.svg?height=24&width=24" },
      { name: "Crayon", logo: "/placeholder.svg?height=24&width=24" },
    ],
  },
  {
    id: "analytics",
    name: "Analytics & Data",
    skills: [
      { name: "Google Data Studio", logo: "/placeholder.svg?height=24&width=24" },
      { name: "Tableau", logo: "/placeholder.svg?height=24&width=24" },
      { name: "Microsoft Power BI", logo: "/placeholder.svg?height=24&width=24" },
      { name: "SQL", logo: "/placeholder.svg?height=24&width=24" },
      { name: "Excel (Advanced)", logo: "/placeholder.svg?height=24&width=24" },
      { name: "Mixpanel", logo: "/placeholder.svg?height=24&width=24" },
      { name: "Amplitude", logo: "/placeholder.svg?height=24&width=24" },
    ],
  },
  {
    id: "project-management",
    name: "Project Management",
    skills: [
      { name: "Asana", logo: "/placeholder.svg?height=24&width=24" },
      { name: "Trello", logo: "/placeholder.svg?height=24&width=24" },
      { name: "Microsoft Project", logo: "/placeholder.svg?height=24&width=24" },
      { name: "Jira", logo: "/placeholder.svg?height=24&width=24" },
      { name: "Slack", logo: "/placeholder.svg?height=24&width=24" },
      { name: "Zoom", logo: "/placeholder.svg?height=24&width=24" },
      { name: "Microsoft Teams", logo: "/placeholder.svg?height=24&width=24" },
    ],
  },
  {
    id: "content-creation",
    name: "Content Creation",
    skills: [
      { name: "WordPress", logo: "/placeholder.svg?height=24&width=24" },
      { name: "Canva", logo: "/placeholder.svg?height=24&width=24" },
      { name: "Loom", logo: "/placeholder.svg?height=24&width=24" },
      { name: "Grammarly", logo: "/placeholder.svg?height=24&width=24" },
      { name: "Hemingway Editor", logo: "/placeholder.svg?height=24&width=24" },
      { name: "Vidyard", logo: "/placeholder.svg?height=24&width=24" },
      { name: "Prezi", logo: "/placeholder.svg?height=24&width=24" },
    ],
  },
]

export default function Skills() {
  const [activeTab, setActiveTab] = useState("marketing-tech")

  return (
    <section id="skills" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-16">Technologies & Tools</h2>

        <Tabs defaultValue="marketing-tech" className="max-w-3xl mx-auto" onValueChange={setActiveTab}>
          <TabsList className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 mb-8">
            {skillCategories.map((category) => (
              <TabsTrigger key={category.id} value={category.id} className="text-sm">
                {category.name}
              </TabsTrigger>
            ))}
          </TabsList>

          {skillCategories.map((category) => (
            <TabsContent key={category.id} value={category.id} className="space-y-8">
              <div className="bg-card rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-semibold mb-6">{category.name}</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="flex items-center gap-3 p-3 rounded-md bg-background border hover:border-primary transition-colors"
                    >
                      <div className="flex-shrink-0 w-8 h-8 relative">
                        <Image
                          src={skill.logo || "/placeholder.svg"}
                          alt={`${skill.name} logo`}
                          fill
                          className="object-contain"
                        />
                      </div>
                      <span className="text-sm font-medium">{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>
              <p className="text-muted-foreground text-center">
                These are some of the key {category.name.toLowerCase()} I use regularly in my B2B marketing role.
              </p>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  )
}

