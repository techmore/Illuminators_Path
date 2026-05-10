import type { Metadata } from "next";
import { MessageCircle, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export const metadata: Metadata = {
  title: "Community",
  description: "Forum mockup, book clubs, and Illuminator Circles."
};

const threads = [
  "What helped you ask a better follow-up question this week?",
  "Book club: The Second Mountain",
  "Hosting a serious conversation gathering",
  "Practicing silence without withdrawing"
];

export default function CommunityPage() {
  return (
    <div className="container py-12">
      <p className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">Community</p>
      <h1 className="mt-3 font-serif text-4xl font-semibold md:text-5xl">
        Practice with others
      </h1>
      <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_380px]">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-3">
              <MessageCircle className="h-6 w-6 text-accent" aria-hidden="true" />
              Forum mockup
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-3">
              {threads.map((thread, index) => (
                <a
                  href="#"
                  key={thread}
                  className="rounded-lg border bg-background/70 p-4 transition hover:bg-muted"
                >
                  <p className="font-medium">{thread}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{8 + index * 3} replies</p>
                </a>
              ))}
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-3">
              <Users className="h-6 w-6 text-accent" aria-hidden="true" />
              Join Illuminator Circle
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form className="space-y-4">
              <div>
                <Label htmlFor="circle-name">Name</Label>
                <Input id="circle-name" className="mt-2" required />
              </div>
              <div>
                <Label htmlFor="circle-email">Email</Label>
                <Input id="circle-email" type="email" className="mt-2" required />
              </div>
              <div>
                <Label htmlFor="circle-interest">What are you practicing?</Label>
                <textarea
                  id="circle-interest"
                  className="mt-2 min-h-28 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                />
              </div>
              <Button type="submit">Join placeholder list</Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
