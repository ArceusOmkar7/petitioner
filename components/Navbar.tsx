import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle"; // Import the ThemeToggle component
import SearchBar from "./SearchBar";

export function SiteHeader() {
  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background text-foreground px-5">
      <div className="container flex h-16 items-center justify-between w-full">
        <Link href="/" className="text-2xl font-bold text-primary">
          Petition
        </Link>
        <div className="flex space-x-4 w-full justify-end">
          <SearchBar />
          <ThemeToggle /> {/* Add Theme Toggle Button */}
          <Link href="/login">
            <Button variant="outline">Log in</Button>
          </Link>
          <Link href="/proposals">
            <Button>Start a petition</Button>
          </Link>
        </div>
      </div>
    </nav>
  );
}
