import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { campaigns } from "@/lib/data"

export default function EnterpriseLeadGenCampaign() {
  const campaign = campaigns.find((c) => c.id === 1)

  if (!campaign) {
    notFound()
  }

  return (
    <main className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <Link href="/#campaigns" className="inline-flex items-center text-primary mb-8 hover:underline">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to all campaigns
        </Link>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          <div className="relative aspect-video overflow-hidden rounded-lg border">
            <Image
              src={campaign.image || "/placeholder.svg"}
              alt={campaign.title}
              fill
              className="object-cover"
              priority
            />
          </div>

          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold">{campaign.title}</h1>
              <div className="flex flex-wrap gap-2 mt-4">
                {campaign.tags.map((tag) => (
                  <Badge key={tag} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="p-4 bg-muted rounded-md">
              <h2 className="font-semibold mb-2">Results</h2>
              <p className="text-muted-foreground">{campaign.results}</p>
            </div>

            <div>
              <h2 className="font-semibold mb-2">Campaign Overview</h2>
              <p className="text-muted-foreground">{campaign.description}</p>
            </div>

            {campaign.fullDescription && (
              <div>
                <h2 className="font-semibold mb-2">Challenge</h2>
                <p className="text-muted-foreground mb-4">{campaign.fullDescription.challenge}</p>

                <h2 className="font-semibold mb-2">Strategy</h2>
                <p className="text-muted-foreground mb-4">{campaign.fullDescription.strategy}</p>

                <h2 className="font-semibold mb-2">Execution</h2>
                <p className="text-muted-foreground mb-4">{campaign.fullDescription.execution}</p>

                <h2 className="font-semibold mb-2">Results</h2>
                <p className="text-muted-foreground">{campaign.fullDescription.results}</p>
              </div>
            )}
          </div>
        </div>

        {campaign.gallery && campaign.gallery.length > 0 && (
          <div className="mt-16">
            <h2 className="text-2xl font-bold mb-6">Campaign Gallery</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {campaign.gallery.map((image, index) => (
                <div key={index} className="relative aspect-video rounded-lg overflow-hidden border">
                  <Image
                    src={image || "/placeholder.svg"}
                    alt={`Campaign image ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </main>
  )
}

