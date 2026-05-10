import Link from "next/link";
import { ArrowRight, BookOpen, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { IlluminatorQuiz } from "@/components/quiz";
import { ProgressDashboard } from "@/components/progress-dashboard";

export default function HomePage() {
  return (
    <div>
      <section className="container py-8">
        <div className="grid gap-4 md:grid-cols-4">
          <div className="dashboard-panel md:col-span-2">
            <div className="panel-label">Mission</div>
            <h1 className="mt-3 font-serif text-5xl font-semibold leading-tight md:text-6xl">
              Illuminators&apos; Path
            </h1>
            <p className="mt-4 max-w-3xl text-lg leading-8 text-muted-foreground">
              From the life of the mind to the craft of seeing others deeply. A guided path to becoming an Illuminator - curious, present, and life-giving in every conversation.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg" className="animate-glow">
                <Link href="/path">
                  Start the Path <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/library">
                  Explore Library <BookOpen className="h-4 w-4" aria-hidden="true" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/videos">
                  Watch Videos <Sparkles className="h-4 w-4" aria-hidden="true" />
                </Link>
              </Button>
            </div>
          </div>
          <div className="dashboard-panel">
            <div className="panel-label">Current focus</div>
            <div className="panel-value mt-3">Presence</div>
            <p className="mt-3 text-sm text-muted-foreground">10-minute daily practice and one mindful conversation.</p>
          </div>
          <div className="dashboard-panel">
            <div className="panel-label">Path</div>
            <div className="panel-value mt-3">5<span className="ml-1 text-base font-normal text-muted-foreground">stages</span></div>
            <p className="mt-3 text-sm text-muted-foreground">Readings, practices, milestones, and capstone.</p>
          </div>
          <div className="dashboard-panel md:col-span-4">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <div className="panel-label">New video hub</div>
                <p className="mt-2 text-sm text-muted-foreground">
                  YouTube-centered playlists for Brooks interviews, presence practices, and deep-listening teachings.
                </p>
              </div>
              <Button asChild variant="secondary">
                <Link href="/videos">Open Videos</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      <section className="container grid gap-4 pb-8 lg:grid-cols-[1fr_380px]">
        <div className="space-y-4">
          <div className="now-panel">
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.1em] text-[#aebf93]">Brooks-inspired quote</p>
                <blockquote className="mt-4 max-w-3xl font-serif text-3xl leading-tight">
                  From Intellectuals to Active Listening and Presence.
                </blockquote>
              </div>
              <Sparkles className="h-7 w-7 animate-floatLight text-[#d7e5b6]" aria-hidden="true" />
            </div>
            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              <div className="rounded-lg bg-[#26351a] p-4">
                <p className="text-xs uppercase tracking-wide text-[#aebf93]">Shift</p>
                <p className="mt-1 font-semibold">Head to heart</p>
              </div>
              <div className="rounded-lg bg-[#26351a] p-4">
                <p className="text-xs uppercase tracking-wide text-[#aebf93]">Practice</p>
                <p className="mt-1 font-semibold">Active listening</p>
              </div>
              <div className="rounded-lg bg-[#26351a] p-4">
                <p className="text-xs uppercase tracking-wide text-[#aebf93]">Aim</p>
                <p className="mt-1 font-semibold">Illuminate others</p>
              </div>
            </div>
          </div>
          <ProgressDashboard />
        </div>
        <IlluminatorQuiz />
      </section>
      <section className="container grid gap-4 pb-16 lg:grid-cols-[0.85fr_1.15fr]">
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
      </section>
    </div>
  );
}
