"use client";

import { useMemo, useState } from "react";
import { ExternalLink, Play, Plus, Search } from "lucide-react";
import { videoPlaylists, videoResources } from "@/data/content";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const filters = ["All", "Stage 2", "Stage 3", "Stage 4", "Stage 5"];

export function VideoLibrary() {
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState("All");
  const [featuredId, setFeaturedId] = useState(videoResources[0]?.id ?? "");
  const [saved, setSaved] = useState<string[]>([]);

  const featured = videoResources.find((video) => video.id === featuredId) ?? videoResources[0];
  const visible = useMemo(() => {
    return videoResources.filter((video) => {
      const text = `${video.title} ${video.speaker} ${video.source} ${video.theme} ${video.stage}`.toLowerCase();
      const matchesQuery = text.includes(query.toLowerCase());
      const matchesFilter = filter === "All" || video.stage === filter;
      return matchesQuery && matchesFilter;
    });
  }, [filter, query]);

  return (
    <div className="space-y-8">
      <section className="grid gap-4 lg:grid-cols-[1fr_360px]">
        <div className="now-panel">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.1em] text-[#aebf93]">Featured video</p>
              <h2 className="mt-2 font-serif text-3xl font-semibold">{featured.title}</h2>
              <p className="mt-2 text-sm text-[#c8d6ad]">{featured.speaker} · {featured.source}</p>
            </div>
            <Button asChild variant="secondary">
              <a href={featured.url} target="_blank" rel="noreferrer">
                Open source <ExternalLink className="h-4 w-4" aria-hidden="true" />
              </a>
            </Button>
          </div>
          <div className="mt-5 overflow-hidden rounded-lg border border-[#3d512d] bg-black">
            {featured.embedUrl.includes("PLplaceholder") ? (
              <div className="flex aspect-video items-center justify-center p-6 text-center text-sm text-[#c8d6ad]">
                YouTube embed placeholder. Use the source button to watch this resource.
              </div>
            ) : (
              <iframe
                className="aspect-video w-full"
                src={featured.embedUrl}
                title={featured.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            )}
          </div>
          <p className="mt-4 text-sm leading-6 text-[#dce8c7]">{featured.blurb}</p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Video Playlists</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {videoPlaylists.map((playlist) => (
              <div key={playlist.id} className="rounded-lg border bg-background/70 p-4">
                <p className="panel-label">{playlist.stage}</p>
                <h3 className="mt-1 font-serif text-xl font-semibold">{playlist.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{playlist.description}</p>
                <ul className="mt-3 space-y-1 text-sm">
                  {playlist.videos.map((video) => (
                    <li key={video} className="text-muted-foreground">{video}</li>
                  ))}
                </ul>
              </div>
            ))}
          </CardContent>
        </Card>
      </section>

      <section className="dashboard-panel">
        <div className="grid gap-4 md:grid-cols-[1fr_220px]">
          <div>
            <Label htmlFor="video-search" className="flex items-center gap-2">
              <Search className="h-4 w-4" aria-hidden="true" />
              Search videos
            </Label>
            <Input
              id="video-search"
              className="mt-2"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search speaker, source, theme, or title"
            />
          </div>
          <div>
            <Label htmlFor="video-filter">Filter by stage</Label>
            <select
              id="video-filter"
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
          Showing {visible.length} videos. {saved.length} saved to watchlist.
        </p>
      </section>

      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {visible.map((video) => (
          <Card key={video.id} className="flex flex-col">
            <CardHeader>
              <p className="panel-label">{video.stage} · {video.theme}</p>
              <CardTitle className="text-xl">{video.title}</CardTitle>
              <p className="text-sm text-muted-foreground">{video.speaker} · {video.source}</p>
            </CardHeader>
            <CardContent className="flex flex-1 flex-col">
              <p className="text-sm leading-6 text-muted-foreground">{video.blurb}</p>
              <p className="mt-3 text-xs font-semibold uppercase tracking-wide text-muted-foreground">{video.duration}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                <Button size="sm" onClick={() => setFeaturedId(video.id)}>
                  <Play className="h-4 w-4" aria-hidden="true" />
                  Feature
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => setSaved((current) => current.includes(video.id) ? current : [...current, video.id])}
                >
                  <Plus className="h-4 w-4" aria-hidden="true" />
                  Watchlist
                </Button>
                <Button asChild size="sm" variant="outline">
                  <a href={video.url} target="_blank" rel="noreferrer">
                    Source <ExternalLink className="h-4 w-4" aria-hidden="true" />
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </section>
    </div>
  );
}
