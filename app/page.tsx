import { SiteHeader } from "@/components/site-header"
import { HeroSection } from "@/components/hero-section"
import { FeaturedCauses } from "@/components/featured-causes"
import Link from "next/link"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main>
        <HeroSection />
        <FeaturedCauses />
      </main>
      <footer className="mt-auto py-6 bg-primary text-white">
        <div className="container text-center">
          <p>© 2024 PetitionPro. Making change happen.</p>
          <div className="mt-4 space-x-4">
            <Link href="/about" className="hover:underline">
              About
            </Link>
            <Link href="/privacy" className="hover:underline">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:underline">
              Terms of Service
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

