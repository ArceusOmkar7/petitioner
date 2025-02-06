import { SiteHeader } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function ProposalPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-grow container py-8">
        <Card className="max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle>Start a Petition</CardTitle>
            <CardDescription>
              Fill out the form below to create your petition
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form>
              <div className="grid w-full items-center gap-4">
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="title">Petition Title</Label>
                  <Input
                    id="title"
                    placeholder="Enter the title of your petition"
                  />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="description">Description</Label>
                  <Textarea
                    id="description"
                    placeholder="Describe your petition and its goals"
                  />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="target">Target</Label>
                  <Input id="target" placeholder="Who is this petition for?" />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="goal">Signature Goal</Label>
                  <Input
                    id="goal"
                    type="number"
                    placeholder="How many signatures do you want to collect?"
                  />
                </div>
              </div>
            </form>
          </CardContent>
          <CardFooter>
            <Button className="w-full">Create Petition</Button>
          </CardFooter>
        </Card>
      </main>
    </div>
  );
}
