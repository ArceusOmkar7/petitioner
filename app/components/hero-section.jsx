import { Button } from "@/components/ui/button"
import { MapPin } from "lucide-react"

export function HeroSection() {
  return (
    <div className="relative overflow-hidden bg-primary/5">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('/dots.svg')] bg-center [mask-image:radial-gradient(white,transparent_85%)]" />
      </div>
      <div className="container relative">
        <div className="flex flex-col items-center justify-center py-20 text-center lg:py-32">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            Make your voice heard
          </h1>
          <p className="mt-6 max-w-3xl text-lg text-muted-foreground sm:text-xl">
            Join millions of people taking action and creating positive change. Start your petition today.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Start a petition
            </Button>
            <Button size="lg" variant="outline" className="gap-2">
              <MapPin className="h-4 w-4" />
              Discover local causes
            </Button>
          </div>
          <div className="mt-16 flex flex-col items-center gap-2">
            <div className="text-3xl font-bold tracking-tight sm:text-4xl">54,67,38,648</div>
            <p className="text-muted-foreground">people taking action. Victories every day.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

