"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function NewsletterForm() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <form
      className="rounded-lg border bg-background/60 p-5"
      onSubmit={(event) => {
        event.preventDefault();
        setSubmitted(true);
      }}
    >
      <Label htmlFor="newsletter-email">Weekly Presence Prompt</Label>
      <div className="mt-3 flex flex-col gap-3 sm:flex-row">
        <Input
          id="newsletter-email"
          type="email"
          required
          placeholder="you@example.com"
          aria-describedby="newsletter-status"
        />
        <Button type="submit">Sign up</Button>
      </div>
      <p id="newsletter-status" className="mt-3 text-sm text-muted-foreground" aria-live="polite">
        {submitted ? "You are on the placeholder list." : "A quiet weekly note for practicing presence."}
      </p>
    </form>
  );
}
