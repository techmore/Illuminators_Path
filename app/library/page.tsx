import type { Metadata } from "next";
import { LibraryGrid } from "@/components/library-grid";

export const metadata: Metadata = {
  title: "Library",
  description: "Curated books and podcasts for the Illuminators' Path."
};

export default function LibraryPage() {
  return (
    <div className="container py-12">
      <p className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">Library</p>
      <h1 className="mt-3 font-serif text-4xl font-semibold md:text-5xl">
        Curated books and podcasts
      </h1>
      <p className="mt-4 max-w-3xl text-lg leading-8 text-muted-foreground">
        Search and filter the resources by stage or theme, then add entries to a placeholder path list.
      </p>
      <div className="mt-10">
        <LibraryGrid />
      </div>
    </div>
  );
}
