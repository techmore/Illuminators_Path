import type { Metadata } from "next";
import { Download } from "lucide-react";
import { audioGuides, practiceDownloads } from "@/data/content";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Practices",
  description: "Downloadable exercises and guided presence audio."
};

export default function PracticesPage() {
  return (
    <div className="container py-12">
      <p className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">Practices</p>
      <h1 className="mt-3 font-serif text-4xl font-semibold md:text-5xl">
        Listening and presence exercises
      </h1>
      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {practiceDownloads.map((practice) => (
          <Card key={practice.title}>
            <CardHeader>
              <CardTitle>{practice.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm leading-6 text-muted-foreground">{practice.description}</p>
              <Button asChild className="mt-5" variant="outline">
                <a href={practice.href} aria-label={`Download ${practice.title} PDF placeholder`}>
                  <Download className="h-4 w-4" aria-hidden="true" />
                  PDF placeholder
                </a>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
      <section className="mt-12">
        <h2 className="font-serif text-3xl font-semibold">Guided audio</h2>
        <div className="mt-6 grid gap-5 lg:grid-cols-3">
          {audioGuides.map((guide) => (
            <Card key={guide.title}>
              <CardHeader>
                <CardTitle className="text-xl">{guide.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <audio controls className="w-full" src={guide.src}>
                  <a href={guide.src}>Listen to {guide.title}</a>
                </audio>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
