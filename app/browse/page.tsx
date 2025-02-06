import { SiteHeader } from "@/components/site-header"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import Image from "next/image"

export default function BrowsePage() {
  const petitions = [
    {
      id: 1,
      title: "Save Local Wildlife",
      description: "Help protect endangered species in our local ecosystem",
      supporters: 15234,
      goal: 20000,
    },
    {
      id: 2,
      title: "Clean Energy Initiative",
      description: "Push for 100% renewable energy in our city by 2030",
      supporters: 8765,
      goal: 10000,
    },
    {
      id: 3,
      title: "Education for All",
      description: "Ensure equal access to quality education for underprivileged children",
      supporters: 12543,
      goal: 15000,
    },
    {
      id: 4,
      title: "Mental Health Awareness",
      description: "Promote understanding and support for mental health issues",
      supporters: 9876,
      goal: 12000,
    },
    {
      id: 5,
      title: "Reduce Plastic Waste",
      description: "Ban single-use plastics in our community",
      supporters: 7654,
      goal: 10000,
    },
    {
      id: 6,
      title: "Affordable Housing",
      description: "Advocate for more affordable housing options in urban areas",
      supporters: 11234,
      goal: 15000,
    },
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-grow container py-8">
        <h1 className="text-3xl font-bold mb-8">Browse Petitions</h1>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {petitions.map((petition) => (
            <Card key={petition.id}>
              <CardHeader className="p-0">
                <Image
                  src={`/placeholder.svg?height=200&width=400&text=${encodeURIComponent(petition.title)}`}
                  alt={petition.title}
                  width={400}
                  height={200}
                  className="object-cover rounded-t-lg h-48"
                />
              </CardHeader>
              <CardContent className="p-6">
                <CardTitle className="mb-2">{petition.title}</CardTitle>
                <CardDescription className="mb-4">{petition.description}</CardDescription>
                <Progress value={(petition.supporters / petition.goal) * 100} className="mb-2" />
                <div className="flex justify-between text-sm text-muted-foreground">
                  <span>{petition.supporters.toLocaleString()} supporters</span>
                  <span>Goal: {petition.goal.toLocaleString()}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </div>
  )
}

