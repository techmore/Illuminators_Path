"use client";

import { useMemo, useState } from "react";
import { BookOpen, Headphones, Plus } from "lucide-react";
import { bridgeReferences, resources } from "@/data/content";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const filters = ["All", "Stage 1-2", "Stage 3", "Stage 4-5", "Bonus", "Addendum", "Brooks-centric", "Presence & Mindfulness", "Listening, Empathy & Relational Growth"];

export function LibraryGrid() {
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState("All");
  const [saved, setSaved] = useState<string[]>([]);

  const visible = useMemo(() => {
    return resources.filter((resource) => {
      const haystack = `${resource.title} ${resource.creator} ${resource.blurb} ${resource.themes.join(" ")}`.toLowerCase();
      const matchesQuery = haystack.includes(query.toLowerCase());
      const matchesFilter = filter === "All" || resource.stage === filter;
      return matchesQuery && matchesFilter;
    });
  }, [filter, query]);

  return (
    <div>
      <section className="mb-6 grid gap-4 lg:grid-cols-[1fr_320px]">
        <div className="now-panel">
          <p className="text-xs font-bold uppercase tracking-[0.1em] text-[#aebf93]">Bridge references</p>
          <h2 className="mt-2 font-serif text-3xl font-semibold">For high-agency listeners</h2>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-[#dce8c7]">
            Addendum material for readers who respect stoic self-reliance and want relational tools that feel concrete, strategic, and emotionally literate.
          </p>
        </div>
        <div className="dashboard-panel">
          <p className="panel-label">Best starting point</p>
          <p className="mt-2 font-serif text-2xl font-semibold">Empathy first, solutions later</p>
          <p className="mt-3 text-sm text-muted-foreground">
            Use these references when the core path needs more help with venting, rapport-talk, or fix-it reflexes.
          </p>
        </div>
      </section>
      <section className="mb-6 grid gap-3 md:grid-cols-2 xl:grid-cols-3" aria-label="Bridge reference notes">
        {bridgeReferences.map((reference) => (
          <div key={reference.title} className="rounded-lg border bg-card/80 p-4">
            <p className="font-medium">{reference.title}</p>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">{reference.note}</p>
          </div>
        ))}
      </section>
      <div className="grid gap-4 rounded-lg border bg-card/80 p-5 md:grid-cols-[1fr_260px]">
        <div>
          <Label htmlFor="library-search">Search the library</Label>
          <Input
            id="library-search"
            className="mt-2"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search by title, author, host, or theme"
          />
        </div>
        <div>
          <Label htmlFor="library-filter">Filter by stage/theme</Label>
          <select
            id="library-filter"
            className="mt-2 h-10 w-full rounded-md border border-input bg-background px-3 text-sm"
            value={filter}
            onChange={(event) => setFilter(event.target.value)}
          >
            {filters.map((item) => (
              <option key={item} value={item}>{item}</option>
            ))}
          </select>
        </div>
      </div>
      <p className="mt-4 text-sm text-muted-foreground" aria-live="polite">
        Showing {visible.length} resources. {saved.length} added to My Path.
      </p>
      <div className="mt-6 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {visible.map((resource) => (
          <Card key={resource.id} className="flex flex-col">
            <CardHeader>
              <div className="mb-2 flex items-center gap-2 text-sm text-muted-foreground">
                {resource.type === "book" ? <BookOpen className="h-4 w-4" /> : <Headphones className="h-4 w-4" />}
                <span>{resource.stage}</span>
              </div>
              <CardTitle className="text-xl">{resource.title}</CardTitle>
              <p className="text-sm text-muted-foreground">{resource.creator}</p>
            </CardHeader>
            <CardContent className="flex flex-1 flex-col">
              <p className="text-sm leading-6 text-muted-foreground">{resource.blurb}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {resource.themes.map((theme) => (
                  <span key={theme} className="rounded-full bg-muted px-3 py-1 text-xs text-muted-foreground">
                    {theme}
                  </span>
                ))}
              </div>
              <div className="mt-6 flex flex-wrap gap-2">
                <Button asChild variant="outline" size="sm">
                  <a href={resource.primaryLink}>Amazon</a>
                </Button>
                <Button asChild variant="outline" size="sm">
                  <a href={resource.secondaryLink}>Apple</a>
                </Button>
                <Button
                  size="sm"
                  onClick={() => setSaved((current) => current.includes(resource.id) ? current : [...current, resource.id])}
                >
                  <Plus className="h-4 w-4" aria-hidden="true" />
                  Add to My Path
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
