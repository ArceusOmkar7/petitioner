import Link from "next/link";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle"; // Import the ThemeToggle component

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background text-foreground px-5">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-primary">
          Petition
        </Link>
        <nav className="hidden md:flex items-center space-x-6">
          <Link href="/browse" className="text-sm font-medium">
            Browse
          </Link>
          <Link href="/proposals" className="text-sm font-medium">
            My Petitions
          </Link>
        </nav>
        <div className="flex items-center space-x-4">
          <Link href="/search">
            <Button variant="ghost" size="icon">
              <Search className="h-5 w-5" />
              <span className="sr-only">Search</span>
            </Button>
          </Link>
          <ThemeToggle /> {/* Add Theme Toggle Button */}
          <Link href="/login">
            <Button variant="outline">Log in</Button>
          </Link>
          <Link href="/proposals">
            <Button>Start a petition</Button>
          </Link>
        </div>
      </div>
    </header>
  );
}
