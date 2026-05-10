import Link from "next/link";
import { NewsletterForm } from "@/components/newsletter-form";

export function SiteFooter() {
  return (
    <footer className="border-t bg-card/60">
      <div className="container grid gap-8 py-10 lg:grid-cols-[1.2fr_0.8fr]">
        <div>
          <h2 className="font-serif text-2xl font-semibold">Illuminators&apos; Path</h2>
          <p className="mt-3 max-w-xl text-sm leading-6 text-muted-foreground">
            From Intellectuals to Active Listening and Presence - Inspired by David Brooks.
          </p>
          <div className="mt-5 flex flex-wrap gap-4 text-sm text-muted-foreground">
            <Link href="/path" className="hover:text-foreground">The Path</Link>
            <Link href="/library" className="hover:text-foreground">Library</Link>
            <Link href="/videos" className="hover:text-foreground">Videos</Link>
            <Link href="/practices" className="hover:text-foreground">Practices</Link>
            <Link href="/community" className="hover:text-foreground">Community</Link>
          </div>
        </div>
        <NewsletterForm />
      </div>
    </footer>
  );
}
