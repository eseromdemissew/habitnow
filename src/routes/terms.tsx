import { createFileRoute } from "@tanstack/react-router";
import { pageHead } from "@/content/site";
import { Page, Block } from "@/components/layout/Page";

export const Route = createFileRoute("/terms")({
  head: () => pageHead({ title: "Terms of use — HabitNow", description: "The terms for using HabitNow.", path: "/terms" }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <Page eyebrow="Legal" title="Terms of use" intro="The basic rules for using HabitNow and this website.">
      <Block title="Using HabitNow"><p>HabitNow is a personal planning tool. Use it lawfully and don't try to disrupt or reverse-engineer the service.</p></Block>
      <Block title="No guarantees"><p>The app is provided as is. Focus and blocking features add friction but can't guarantee you won't be distracted, and Android always lets you remove permissions.</p></Block>
      <Block title="AI suggestions"><p>AI coach suggestions are general guidance, not medical, legal or financial advice.</p></Block>
      <Block title="Changes"><p>We may update these terms. Significant changes will be announced in the app.</p></Block>
    </Page>
  );
}
