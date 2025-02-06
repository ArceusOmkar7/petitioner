"use client";

import { useState } from "react";
import { SiteHeader } from "@/components/Navbar";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function SearchPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (e) => {
    e.preventDefault();
    // Simulated search results
    const results = [
      {
        id: 1,
        title: "Save Local Wildlife",
        description: "Help protect endangered species in our local ecosystem",
      },
      {
        id: 2,
        title: "Clean Energy Initiative",
        description: "Push for 100% renewable energy in our city by 2030",
      },
      {
        id: 3,
        title: "Education for All",
        description:
          "Ensure equal access to quality education for underprivileged children",
      },
    ];
    setSearchResults(results);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-grow container py-8">
        <h1 className="text-3xl font-bold mb-8">Search Petitions</h1>
        <form onSubmit={handleSearch} className="flex gap-4 mb-8">
          <Input
            type="search"
            placeholder="Search for petitions..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="flex-grow"
          />
          <Button type="submit">Search</Button>
        </form>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {searchResults.map((result) => (
            <Card key={result.id}>
              <CardHeader>
                <CardTitle>{result.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{result.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
}
