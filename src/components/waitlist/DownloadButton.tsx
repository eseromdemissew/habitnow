import { ArrowRight, Download } from "lucide-react";
import { Button, type ButtonProps } from "@/components/ui/button";
import { hasPlayStore, site } from "@/content/site";
import { useWaitlist } from "./WaitlistProvider";

/** Every download CTA: Play Store when configured, otherwise opens the waitlist. */
export function DownloadButton({ source = "button", label, ...props }: ButtonProps & { source?: string; label?: string }) {
  const { open } = useWaitlist();
  if (hasPlayStore) {
    return (
      <Button variant="mint" size="pill" asChild {...props}>
        <a href={site.playStoreUrl} target="_blank" rel="noopener noreferrer">
          <Download aria-hidden /> {label ?? "Get it on Google Play"}
        </a>
      </Button>
    );
  }
  return (
    <Button variant="mint" size="pill" onClick={() => open(source)} {...props}>
      {label ?? "Join early access"} <ArrowRight aria-hidden />
    </Button>
  );
}
