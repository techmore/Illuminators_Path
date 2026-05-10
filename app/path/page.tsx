import type { Metadata } from "next";
import { PathAccordion } from "@/components/path-accordion";
import { ProgressDashboard } from "@/components/progress-dashboard";

export const metadata: Metadata = {
  title: "The Path",
  description: "A five-stage interactive curriculum for becoming an Illuminator."
};

export default function PathPage() {
  return (
    <div className="container py-12">
      <div className="grid gap-8 lg:grid-cols-[1fr_340px]">
        <section>
          <p className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">The Path</p>
          <h1 className="mt-3 font-serif text-4xl font-semibold md:text-5xl">
            The Illuminator&apos;s 5-Stage Path
          </h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-muted-foreground">
            A clear, progressive curriculum with readings, practices, reflections, milestones, and a capstone project.
          </p>
        </section>
        <ProgressDashboard />
      </div>
      <div className="mt-10">
        <PathAccordion />
      </div>
    </div>
  );
}
