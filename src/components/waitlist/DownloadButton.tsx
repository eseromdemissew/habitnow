import { ArrowRight, Download } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Button, type ButtonProps } from "@/components/ui/button";
import { hasPlayStore, site } from "@/content/site";

/** Download CTAs always reach a real download destination. */
export function DownloadButton({ source = "button", label, ...props }: ButtonProps & { source?: string; label?: string }) {
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
    <Button variant="mint" size="pill" asChild {...props}>
      <Link to="/download" data-source={source}>{label ?? "Get HabitNow"} <ArrowRight aria-hidden /></Link>
    </Button>
  );
}
