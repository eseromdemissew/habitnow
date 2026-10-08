import { createFileRoute } from "@tanstack/react-router";
import { pageHead } from "@/content/site";

export const Route = createFileRoute("/roadmap")({
  head: () => pageHead({ title: "Roadmap — HabitNow", description: "What is built in HabitNow and what comes next.", path: "/roadmap" }),
  component: RoadmapPage,
});

function RoadmapPage() {
  return (
    <main className="container-site py-32">
      <h1 className="text-h1">Roadmap</h1>
      <p className="mt-4 text-lead text-muted-foreground">What is built in HabitNow and what comes next.</p>
    </main>
  );
}
