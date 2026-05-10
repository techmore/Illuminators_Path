import type { Metadata } from "next";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "About",
  description: "About Illuminators' Path and related resources."
};

export default function AboutPage() {
  return (
    <div className="container py-12">
      <p className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">About & Resources</p>
      <h1 className="mt-3 font-serif text-4xl font-semibold md:text-5xl">
        A Brooks-inspired digital sanctuary
      </h1>
      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Core mission</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-muted-foreground">
            <p>
              Path to Illuminators: From Intellectuals to Active Listening and Presence is a Brooks-inspired concept.
            </p>
            <p>
              It captures the shift from resume virtues and intellectual achievement to character, relational depth, presence, and becoming someone who truly sees and elevates others.
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Resources</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="grid gap-3 text-sm text-muted-foreground">
              <li>Brooks bio placeholder</li>
              <li>External links placeholder</li>
              <li>Newsletter signup in the footer</li>
              <li>Free tier + optional paid Illuminator Circle placeholder</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
