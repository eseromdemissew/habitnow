import { createFileRoute } from "@tanstack/react-router";
import { pageHead } from "@/content/site";

export const Route = createFileRoute("/download")({
  head: () => pageHead({ title: "Download — HabitNow", description: "Get HabitNow for Android or join early access.", path: "/download" }),
  component: DownloadPage,
});

function DownloadPage() {
  return (
    <main className="container-site py-32">
      <h1 className="text-h1">Download</h1>
      <p className="mt-4 text-lead text-muted-foreground">Get HabitNow for Android or join early access.</p>
    </main>
  );
}
