import { createFileRoute } from "@tanstack/react-router";
import { pageHead } from "@/content/site";

export const Route = createFileRoute("/support")({
  head: () => pageHead({ title: "Support — HabitNow", description: "Answers and help for HabitNow.", path: "/support" }),
  component: SupportPage,
});

function SupportPage() {
  return (
    <main className="container-site py-32">
      <h1 className="text-h1">Support</h1>
      <p className="mt-4 text-lead text-muted-foreground">Answers and help for HabitNow.</p>
    </main>
  );
}
