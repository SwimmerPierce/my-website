"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { campaigns } from "@/lib/data"

export default function Campaigns() {
  const [activeCategory, setActiveCategory] = useState("all")

  const categories = [
    { id: "all", name: "All Campaigns" },
    { id: "lead-gen", name: "Lead Generation" },
    { id: "abm", name: "ABM" },
    { id: "event", name: "Events" },
    { id: "product", name: "Product Marketing" },
  ]

  const filteredCampaigns =
    activeCategory === "all" ? campaigns : campaigns.filter((campaign) => campaign.category === activeCategory)

  return (
    <section id="campaigns" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-16">Marketing Campaigns</h2>

        <div className="flex justify-center mb-8 overflow-x-auto pb-4">
          <div className="flex space-x-2">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={activeCategory === category.id ? "default" : "outline"}
                onClick={() => setActiveCategory(category.id)}
                className="whitespace-nowrap"
              >
                {category.name}
              </Button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {filteredCampaigns.map((campaign) => (
            <motion.div
              key={campaign.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="group bg-card rounded-lg overflow-hidden border shadow-sm hover:shadow-md transition-all"
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={campaign.image || "/placeholder.svg"}
                  alt={campaign.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{campaign.title}</h3>
                <p className="text-muted-foreground mb-4">{campaign.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {campaign.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <div className="mb-4 p-3 bg-muted rounded-md">
                  <p className="font-medium text-sm">Results:</p>
                  <p className="text-muted-foreground">{campaign.results}</p>
                </div>
                <Button size="sm" className="w-full" asChild>
                  <Link href={`/campaigns/${campaign.id}`}>View Campaign Details</Link>
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

