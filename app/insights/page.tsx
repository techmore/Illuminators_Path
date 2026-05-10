import type { Metadata } from "next";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Insights",
  description: "Essays, user stories, and Brooks commentary placeholders."
};

const posts = [
  {
    title: "From head-knowledge to heart-wisdom",
    description: "A note on moving from intellectual achievement toward relational depth."
  },
  {
    title: "Illuminator notes from the week",
    description: "A placeholder user story about practicing full presence."
  },
  {
    title: "Brooks commentary archive",
    description: "A future home for essays and external links."
  }
];

export default function InsightsPage() {
  return (
    <div className="container py-12">
      <p className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">Insights</p>
      <h1 className="mt-3 font-serif text-4xl font-semibold md:text-5xl">
        Essays and stories
      </h1>
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {posts.map((post) => (
          <Card key={post.title}>
            <CardHeader>
              <CardTitle>{post.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm leading-6 text-muted-foreground">{post.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
