/**
 * Site-wide values. Fill these in before launch.
 * - siteUrl: full https origin, e.g. "https://habitnow.app" (used for canonical + OG image)
 * - contactEmail: shown on legal and support pages
 * - playStoreUrl: when empty, every download button becomes "Join early access"
 * - socials: empty entries are hidden
 */
export const site = {
  name: "HabitNow",
  tagline: "Daily Routine Planner",
  siteUrl: "",
  contactEmail: "",
  playStoreUrl: "",
  socials: {
    x: "",
    instagram: "",
    youtube: "",
    linkedin: "",
  } as Record<string, string>,
};

export const hasPlayStore = site.playStoreUrl.trim().length > 0;

export function absoluteUrl(path: string) {
  return site.siteUrl ? `${site.siteUrl.replace(/\/$/, "")}${path}` : "";
}

/** Shared head() builder so every page gets title, description, OG, Twitter and canonical. */
export function pageHead(opts: { title: string; description: string; path: string }) {
  const canonical = absoluteUrl(opts.path);
  const og = absoluteUrl("/og.png");
  const meta: Array<Record<string, string>> = [
    { title: opts.title },
    { name: "description", content: opts.description },
    { property: "og:title", content: opts.title },
    { property: "og:description", content: opts.description },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: opts.title },
    { name: "twitter:description", content: opts.description },
  ];
  if (canonical) meta.push({ property: "og:url", content: canonical });
  if (og) {
    meta.push({ property: "og:image", content: og }, { name: "twitter:image", content: og });
  }
  const links = canonical ? [{ rel: "canonical", href: canonical }] : [];
  return { meta, links };
}
