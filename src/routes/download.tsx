import { createFileRoute } from "@tanstack/react-router";
import { hasPlayStore, pageHead } from "@/content/site";
import { Page, Block } from "@/components/layout/Page";
import { DownloadButton } from "@/components/waitlist/DownloadButton";
import { WaitlistForm } from "@/components/waitlist/WaitlistForm";

export const Route = createFileRoute("/download")({
  head: () => pageHead({ title: "Download — HabitNow", description: "Get HabitNow for Android or join early access.", path: "/download" }),
  component: DownloadPage,
});

function DownloadPage() {
  return (
    <Page eyebrow="Android" title="Download HabitNow" intro={hasPlayStore ? "Get HabitNow free on Google Play." : "HabitNow isn't on Google Play yet. Leave your email and we'll send one message when it's ready."}>
      {hasPlayStore ? <DownloadButton source="download-page" /> : <WaitlistForm source="download-page" className="max-w-md" />}
      <Block title="Requirements">
        <p>Android 8.0 or newer. The app blocker needs Usage Access and "Display over other apps" permissions, which the app explains before asking.</p>
      </Block>
    </Page>
  );
}
