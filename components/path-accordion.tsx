"use client";

import { useEffect, useState } from "react";
import { stages } from "@/data/content";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@/components/ui/accordion";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

export function PathAccordion() {
  const [completed, setCompleted] = useState<Record<string, boolean>>({});

  useEffect(() => {
    const next: Record<string, boolean> = {};
    stages.forEach((stage) => {
      next[stage.id] = localStorage.getItem(`stage-${stage.id}`) === "true";
    });
    setCompleted(next);
  }, []);

  const toggleStage = (id: string, value: boolean) => {
    setCompleted((current) => ({ ...current, [id]: value }));
    localStorage.setItem(`stage-${id}`, String(value));
  };

  return (
    <Accordion type="multiple" className="rounded-lg border bg-card/80 px-5">
      {stages.map((stage, index) => (
        <AccordionItem value={stage.id} key={stage.id}>
          <AccordionTrigger>
            <span>Stage {index + 1}: {stage.title}</span>
          </AccordionTrigger>
          <AccordionContent>
            <div className="grid gap-6 lg:grid-cols-[1fr_280px]">
              <div className="space-y-5">
                <div>
                  <p className="font-medium">{stage.description}</p>
                  <p className="mt-2 text-muted-foreground">{stage.focus}</p>
                </div>
                <Section title="Recommended books/podcasts" items={stage.resources} />
                <Section title="Practice exercises" items={stage.practices} />
                <Section title="Reflection prompts" items={stage.reflections} />
              </div>
              <div className="rounded-lg border bg-background/70 p-4">
                <div className="flex items-center gap-3">
                  <Checkbox
                    id={`complete-${stage.id}`}
                    checked={completed[stage.id] ?? false}
                    onCheckedChange={(value) => toggleStage(stage.id, value === true)}
                  />
                  <Label htmlFor={`complete-${stage.id}`}>Mark milestone complete</Label>
                </div>
                <p className="mt-4 text-sm text-muted-foreground">
                  Progress is saved in this browser with localStorage.
                </p>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}

function Section({ title, items }: { title: string; items: string[] }) {
  return (
    <section>
      <h3 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">{title}</h3>
      <ul className="mt-3 grid gap-2">
        {items.map((item) => (
          <li key={item} className="rounded-md bg-muted/70 px-3 py-2 text-sm">
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
}
