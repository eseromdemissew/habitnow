import { ArrowRight, Download } from "lucide-react";
import { Button, type ButtonProps } from "@/components/ui/button";
import { hasPlayStore, site } from "@/content/site";
import { APK_URL } from "@/hooks/use-apk-download";

/** Download CTAs always reach a real download destination. */
export function DownloadButton({ source = "button", label, ...props }: ButtonProps & { source?: string; label?: string }) {
  if (hasPlayStore) {
    return (
      <Button variant="mint" size="pill" asChild {...props}>
        <a href={site.playStoreUrl} target="_blank" rel="noopener noreferrer" data-source={source}>
          <Download aria-hidden /> {label ?? "Get it on Google Play"}
        </a>
      </Button>
    );
  }

  return (
    <Button variant="mint" size="pill" asChild {...props}>
      <a href={APK_URL} target="_blank" rel="noopener noreferrer" data-source={source}>
        <Download aria-hidden /> {label ?? "Download APK"}
      </a>
    </Button>
  );
}
