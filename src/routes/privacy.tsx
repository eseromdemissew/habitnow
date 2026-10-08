import { createFileRoute } from "@tanstack/react-router";
import { pageHead, site } from "@/content/site";
import { Page, Block } from "@/components/layout/Page";

export const Route = createFileRoute("/privacy")({
  head: () => pageHead({ title: "Privacy policy — HabitNow", description: "How HabitNow handles your data.", path: "/privacy" }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <Page eyebrow="Legal" title="Privacy policy" intro="How HabitNow handles your data, in plain language.">
      <Block title="Website early access"><p>When you join early access we store your email address and where you signed up, only to tell you when the app is ready. You can ask us to delete it at any time.</p></Block>
      <Block title="In the app"><p>Your habits, tasks and notes are stored on your device first. Cloud sync is optional and needs an account. Journal and mood notes are encrypted on your device.</p></Block>
      <Block title="AI features"><p>AI features are optional. When used, only the information needed for your request is sent to Google Gemini.</p></Block>
      <Block title="Permissions"><p>The app blocker uses Usage Access and "Display over other apps" only to detect blocked apps on your device. This data never leaves your phone.</p></Block>
      <Block title="Your rights"><p>You can export or delete all of your data from Settings at any time.{site.contactEmail && <> Questions: <a className="underline" href={`mailto:${site.contactEmail}`}>{site.contactEmail}</a>.</>}</p></Block>
    </Page>
  );
}
