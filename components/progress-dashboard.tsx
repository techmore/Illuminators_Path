"use client";

import { useEffect, useState } from "react";
import { stages } from "@/data/content";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function ProgressDashboard() {
  const [completed, setCompleted] = useState(0);

  useEffect(() => {
    const count = stages.filter((stage) => localStorage.getItem(`stage-${stage.id}`) === "true").length;
    setCompleted(count);
  }, []);

  const percent = Math.round((completed / stages.length) * 100);

  return (
    <Card className="bg-card/80">
      <CardHeader>
        <CardTitle>User Progress</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="text-3xl font-semibold">{percent}%</p>
            <p className="text-sm text-muted-foreground">Mock logged-in dashboard</p>
          </div>
          <p className="text-sm text-muted-foreground">{completed} of {stages.length} stages</p>
        </div>
        <div className="mt-4 h-3 overflow-hidden rounded-full bg-muted" aria-label={`${percent}% complete`}>
          <div className="h-full rounded-full bg-accent transition-all" style={{ width: `${percent}%` }} />
        </div>
      </CardContent>
    </Card>
  );
}
