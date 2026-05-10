import type { Metadata } from "next";
import { VideoLibrary } from "@/components/video-library";

export const metadata: Metadata = {
  title: "Videos",
  description: "YouTube-focused playlists and video resources for presence, listening, and becoming an Illuminator."
};

export default function VideosPage() {
  return (
    <div className="container py-8">
      <div className="grid gap-4 md:grid-cols-[1fr_260px]">
        <section className="dashboard-panel">
          <p className="panel-label">Videos</p>
          <h1 className="mt-3 font-serif text-4xl font-semibold md:text-5xl">
            Watch the path unfold
          </h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-muted-foreground">
            A YouTube-centered resource hub for Brooks interviews, presence practices, and deep-listening teachings.
          </p>
        </section>
        <aside className="dashboard-panel">
          <p className="panel-label">Suggested rhythm</p>
          <p className="panel-value mt-3">1<span className="ml-1 text-base font-normal text-muted-foreground">video/week</span></p>
          <p className="mt-3 text-sm text-muted-foreground">
            Watch slowly, then pair each video with one reflection prompt from The Path.
          </p>
        </aside>
      </div>
      <div className="mt-4">
        <VideoLibrary />
      </div>
    </div>
  );
}
