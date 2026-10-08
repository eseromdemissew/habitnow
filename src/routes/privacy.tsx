import { createFileRoute } from "@tanstack/react-router";
import { pageHead } from "@/content/site";

export const Route = createFileRoute("/privacy")({
  head: () => pageHead({ title: "Privacy policy — HabitNow", description: "How HabitNow handles your data.", path: "/privacy" }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <main className="container-site py-32">
      <h1 className="text-h1">Privacy policy</h1>
      <p className="mt-4 text-lead text-muted-foreground">How HabitNow handles your data.</p>
    </main>
  );
}
