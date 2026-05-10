"use client";

import { useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const questions = [
  "I ask follow-up questions before offering advice.",
  "I can sit with silence without rushing to fill it.",
  "I remember details people share about their inner lives.",
  "I leave conversations with more curiosity than certainty."
];

export function IlluminatorQuiz() {
  const [answers, setAnswers] = useState<number[]>(Array(questions.length).fill(3));
  const score = useMemo(() => answers.reduce((sum, value) => sum + value, 0), [answers]);
  const result =
    score >= 17
      ? "Illuminator habits are already visible."
      : score >= 12
        ? "You are practicing the turn toward presence."
        : "Begin with listening slowly and asking one better question.";

  return (
    <Card>
      <CardHeader>
        <CardTitle>Illuminator or Diminisher?</CardTitle>
        <p className="text-sm text-muted-foreground">
          A simple self-assessment for conversation habits.
        </p>
      </CardHeader>
      <CardContent>
        <form className="space-y-5">
          {questions.map((question, index) => (
            <div key={question}>
              <label className="text-sm font-medium" htmlFor={`quiz-${index}`}>
                {question}
              </label>
              <input
                id={`quiz-${index}`}
                type="range"
                min="1"
                max="5"
                value={answers[index]}
                aria-label={question}
                className="mt-2 w-full accent-[hsl(var(--accent))]"
                onChange={(event) => {
                  const next = [...answers];
                  next[index] = Number(event.target.value);
                  setAnswers(next);
                }}
              />
            </div>
          ))}
          <div className="rounded-md bg-muted p-4" aria-live="polite">
            <p className="text-sm font-medium">Score: {score} / 20</p>
            <p className="mt-1 text-sm text-muted-foreground">{result}</p>
          </div>
          <Button type="button" onClick={() => setAnswers(Array(questions.length).fill(3))} variant="outline">
            Reset
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
