import { createFileRoute } from "@tanstack/react-router";
import { pageHead } from "@/content/site";
import { Page } from "@/components/layout/Page";

export const Route = createFileRoute("/roadmap")({
  head: () => pageHead({ title: "Roadmap — HabitNow", description: "What is built in HabitNow and what comes next.", path: "/roadmap" }),
  component: RoadmapPage,
});

const STAGES = [
  { label: "Built", items: ["All habit types with flexible scheduling", "Tasks, projects and Kanban", "Guided routines", "Focus timers and ambient sounds", "Offline-first storage"] },
  { label: "In progress", items: ["App blocker profiles and strict mode", "AI coach and daily planner", "Home-screen widgets", "Cloud sync"] },
  { label: "Next", items: ["Challenges with friends", "Weekly and monthly AI reviews", "Wear OS companion"] },
];

function RoadmapPage() {
  return (
    <Page eyebrow="Roadmap" title="What's built and what's next" intro="An honest look at where HabitNow is today. Plans can change based on early-access feedback.">
      <div className="grid gap-4 md:grid-cols-3">
        {STAGES.map((s) => (
          <section key={s.label} className="rounded-3xl border bg-card p-6">
            <h2 className="text-h3">{s.label}</h2>
            <ul className="mt-4 space-y-2 text-muted-foreground">
              {s.items.map((i) => <li key={i}>• {i}</li>)}
            </ul>
          </section>
        ))}
      </div>
    </Page>
  );
}
