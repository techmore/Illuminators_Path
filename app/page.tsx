import Link from "next/link";
import { ArrowRight, BookOpen, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { IlluminatorQuiz } from "@/components/quiz";
import { ProgressDashboard } from "@/components/progress-dashboard";

export default function HomePage() {
  return (
    <div>
      <section className="container grid min-h-[calc(100vh-4rem)] items-center gap-10 py-16 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border bg-card/70 px-4 py-2 text-sm text-muted-foreground">
            <Sparkles className="h-4 w-4 text-accent" aria-hidden="true" />
            Inspired by David Brooks
          </div>
          <h1 className="max-w-4xl font-serif text-5xl font-semibold leading-tight md:text-7xl">
            Illuminators&apos; Path
          </h1>
          <p className="mt-5 max-w-2xl text-xl leading-8 text-muted-foreground">
            From the life of the mind to the craft of seeing others deeply. A guided path to becoming an Illuminator - curious, present, and life-giving in every conversation.
          </p>
          <blockquote className="mt-8 border-l-4 border-accent pl-5 font-serif text-2xl leading-9">
            From Intellectuals to Active Listening and Presence.
          </blockquote>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg" className="animate-glow">
              <Link href="/path">
                Start the Path <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/library">
                Explore the Library <BookOpen className="h-4 w-4" aria-hidden="true" />
              </Link>
            </Button>
          </div>
        </div>
        <div className="space-y-5">
          <ProgressDashboard />
          <Card>
            <CardHeader>
              <CardTitle>Brooks Video Placeholder</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex aspect-video items-center justify-center rounded-lg border bg-muted text-center text-sm text-muted-foreground">
                Short video embed placeholder
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
      <section className="container grid gap-8 pb-16 lg:grid-cols-[0.85fr_1.15fr]">
        <Card>
          <CardHeader>
            <CardTitle>A free digital sanctuary</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-muted-foreground">
            <p>
              Part curriculum, part library, part practice space, and part community for people moving from head-knowledge to heart-wisdom.
            </p>
            <p>
              No fluff, just transformative resources in the spirit of Brooks&apos; thoughtful, morally serious style.
            </p>
          </CardContent>
        </Card>
        <IlluminatorQuiz />
      </section>
    </div>
  );
}
