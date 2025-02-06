import { SiteHeader } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { FeaturedCauses } from "@/components/FeaturedPetitions";
import Link from "next/link";
import FooterSection from "@/components/FooterSection";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main>
        <HeroSection />
        <FeaturedCauses />
      </main>
      <FooterSection />
    </div>
  );
}
