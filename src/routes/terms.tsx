import { createFileRoute } from "@tanstack/react-router";
import { pageHead } from "@/content/site";

export const Route = createFileRoute("/terms")({
  head: () => pageHead({ title: "Terms of use — HabitNow", description: "The terms for using HabitNow.", path: "/terms" }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <main className="container-site py-32">
      <h1 className="text-h1">Terms of use</h1>
      <p className="mt-4 text-lead text-muted-foreground">The terms for using HabitNow.</p>
    </main>
  );
}
