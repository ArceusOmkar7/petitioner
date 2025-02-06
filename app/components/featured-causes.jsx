import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

export function FeaturedCauses() {
  return (
    <section className="py-16 bg-secondary/20">
      <div className="container">
        <h2 className="text-3xl font-bold tracking-tight mb-8">Featured Causes</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3].map((i) => (
            <Card key={i}>
              <CardHeader className="p-0">
                <Image
                  src="/placeholder.svg"
                  alt="Cause image"
                  width={400}
                  height={200}
                  className="object-cover rounded-t-lg h-48"
                />
              </CardHeader>
              <CardContent className="p-6">
                <CardTitle className="mb-2">Save Local Wildlife</CardTitle>
                <CardDescription className="mb-4">
                  Help protect endangered species in our local ecosystem
                </CardDescription>
                <Progress value={65} className="mb-2" />
                <div className="flex justify-between text-sm text-muted-foreground">
                  <span>15,234 supporters</span>
                  <span>Goal: 20,000</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

