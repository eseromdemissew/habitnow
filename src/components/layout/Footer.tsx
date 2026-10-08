import { Link } from "@tanstack/react-router";
import { LogoMark, Wordmark } from "@/components/brand/Logo";
import { site } from "@/content/site";

const SOCIAL_LABELS: Record<string, string> = { x: "X", instagram: "Instagram", youtube: "YouTube", linkedin: "LinkedIn" };

export function Footer() {
  const socials = Object.entries(site.socials).filter(([, url]) => url.trim());
  return (
    <footer className="section-ink mt-0">
      <div className="container-site grid gap-10 py-14 md:grid-cols-[1.4fr_1fr_1fr]">
        <div className="min-w-0">
          <div className="flex items-center gap-3">
            <LogoMark variant="dark" className="size-10 shrink-0" />
            <Wordmark showTagline />
          </div>
          <p className="mt-4 max-w-sm text-muted-foreground">
            Plan your day, build your habits and protect your focus. Made for Android.
          </p>
          {site.contactEmail && (
            <a href={`mailto:${site.contactEmail}`} className="mt-4 inline-block font-medium underline underline-offset-4">
              {site.contactEmail}
            </a>
          )}
        </div>
        <nav aria-label="Product" className="flex flex-col gap-2">
          <p className="eyebrow mb-1 text-muted-foreground">Product</p>
          <Link to="/" hash="features" className="hover:underline">Features</Link>
          <Link to="/download" className="hover:underline">Download</Link>
          <Link to="/roadmap" className="hover:underline">Roadmap</Link>
          <Link to="/support" className="hover:underline">Support</Link>
        </nav>
        <nav aria-label="Legal" className="flex flex-col gap-2">
          <p className="eyebrow mb-1 text-muted-foreground">Legal</p>
          <Link to="/privacy" className="hover:underline">Privacy policy</Link>
          <Link to="/terms" className="hover:underline">Terms of use</Link>
          {socials.map(([k, url]) => (
            <a key={k} href={url} target="_blank" rel="noopener noreferrer" className="hover:underline">
              {SOCIAL_LABELS[k] ?? k}
            </a>
          ))}
        </nav>
      </div>
      <div className="container-site border-t py-6 text-sm text-muted-foreground">
        © {new Date().getFullYear()} {site.name}. Android is a trademark of Google LLC.
      </div>
    </footer>
  );
}
