import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowDownToLine, ArrowUpRight, Check, ChevronRight, CircleCheck, ListChecks, Loader2, ShieldCheck, Smartphone, Timer } from "lucide-react";
import { hasPlayStore, pageHead, site } from "@/content/site";
import { Button } from "@/components/ui/button";
import { WaitlistForm } from "@/components/waitlist/WaitlistForm";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { LogoMark } from "@/components/brand/Logo";
import { APK_URL, useApkDownload } from "@/hooks/use-apk-download";
import downloadArt from "@/assets/download-still-life.jpg";

export const Route = createFileRoute("/download")({
  head: () => pageHead({ title: "Download HabitNow — Android App & APK", description: "Get HabitNow for Android. Download the APK when available, find installation help, or join early access.", path: "/download" }),
  component: DownloadPage,
});

function DownloadPage() {
  const status = useApkDownload();
  const available = status === "available";
  return (
    <main className="pb-20">
      <section className="download-hero relative isolate overflow-hidden border-b pt-28 sm:pt-32">
        <img src={downloadArt} width={1536} height={1024} alt="" fetchPriority="high" className="absolute inset-0 -z-20 h-full w-full object-cover object-right" />
        <div className="download-veil absolute inset-0 -z-10" />
        <div className="container-site pb-12 sm:pb-16">
          <div className="max-w-xl">
            <div className="flex items-center gap-3"><LogoMark variant="icon" className="size-12" /><span className="text-sm font-semibold">HabitNow · Android</span></div>
            <h1 className="mt-6 font-display text-4xl font-bold leading-tight sm:text-5xl">Download HabitNow</h1>
            <p className="mt-5 max-w-md text-lg leading-relaxed text-muted-foreground">A little more structure.<br />A lot more room for what matters.</p>
            <p className="mt-4 max-w-md leading-relaxed text-muted-foreground">Your habits, daily routines and focus time. Together in one Android planner.</p>
            <div className="mt-7 flex items-center gap-2 text-sm font-medium" role="status" aria-live="polite">
              {status === "checking" ? <Loader2 className="size-4 animate-spin" aria-hidden /> : <span className={`size-2 rounded-full ${available || hasPlayStore ? "bg-mint" : "bg-peach"}`} />}
              {status === "checking" ? "Checking download availability…" : available ? "Android APK available" : hasPlayStore ? "Available on Google Play" : "In development · Join early access"}
            </div>
            <div className="mt-5 flex flex-wrap gap-3">
              <Button variant="mint" size="pill" asChild>
                <a href={APK_URL} download="HabitNow-v1.0.0.apk" rel="noopener noreferrer">
                  <ArrowDownToLine aria-hidden /> Download APK
                </a>
              </Button>
              {hasPlayStore && <Button variant={available ? "outline" : "mint"} size="pill" asChild><a href={site.playStoreUrl} target="_blank" rel="noopener noreferrer"><Smartphone aria-hidden />Google Play</a></Button>}
            </div>
            {status === "unavailable" && !hasPlayStore && <div className="mt-5 max-w-md"><p className="mb-3 text-sm text-muted-foreground">The app download isn't available yet. Get one email when it lands.</p><WaitlistForm source="download-page" tone="default" className="max-w-md" /></div>}
            <p className="mt-5 flex items-center gap-2 text-sm text-muted-foreground"><Smartphone className="size-4" aria-hidden />For Android phones · iOS not available</p>
          </div>
        </div>
      </section>

      <section className="border-b bg-surface">
        <div className="container-site grid gap-6 py-8 sm:grid-cols-3">
          {[{ icon: ListChecks, title: "Build your rhythm", text: "Habits & daily routines", color: "bg-tile-violet text-primary" }, { icon: Timer, title: "Make time to focus", text: "Timers & distraction-free sessions", color: "bg-tile-peach text-primary" }, { icon: CircleCheck, title: "Stay on track", text: "Routine check-ins and progress", color: "bg-tile-mint text-primary" }].map((item) => (
            <article key={item.title} className="rounded-3xl border bg-card p-5 shadow-soft">
              <div className={`grid size-11 place-items-center rounded-2xl ${item.color}`}>
                <item.icon className="size-5" aria-hidden />
              </div>
              <h3 className="mt-4 text-lg font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="container-site grid gap-12 py-14 lg:grid-cols-[1.5fr_1fr] lg:gap-20">
        <div>
          <p className="eyebrow text-muted-foreground">From download to day one</p>
          <h2 className="mt-3 font-display text-3xl font-semibold">Install. Open. Start fresh.</h2>
          <ol className="mt-8 space-y-7">
            {[{ title: "Download the Android APK", body: "Save the APK using the button above. When the release is ready, you can install it on compatible Android devices." }, { title: "Allow app installs", body: "Android may ask you to allow installs from unknown sources. That’s normal for APK installs and is required before the app can open." }, { title: "Set up your first routine", body: "Choose a few habits and focus blocks, then start building momentum with a small plan for today." }].map((step) => (
              <li key={step.title} className="flex gap-4">
                <span className="grid size-8 shrink-0 place-items-center rounded-full bg-primary text-sm font-semibold text-primary-foreground">{step.title.startsWith("Download") ? "1" : step.title.startsWith("Allow") ? "2" : "3"}</span>
                <div>
                  <h3 className="font-semibold">{step.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{step.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
        <aside className="border-t pt-6 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
          <ShieldCheck className="size-7 text-primary" aria-hidden />
          <h2 className="mt-4 text-xl font-semibold">Before you install</h2>
          <ul className="mt-5 space-y-4 text-sm leading-relaxed text-muted-foreground">
            <li className="flex gap-2"><Check className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden />Use an Android phone. APK files won't install on an iPhone.</li>
            <li className="flex gap-2"><Check className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden />Your phone needs enough space for the download and installation.</li>
            <li className="flex gap-2"><Check className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden />Android checks device compatibility when you install.</li>
          </ul>
          <Button variant="link" className="mt-5 h-auto px-0" asChild><Link to="/support">Need a hand?<ChevronRight aria-hidden /></Link></Button>
        </aside>
      </section>

      <section className="container-site max-w-3xl border-t pt-12">
        <h2 className="font-display text-2xl font-semibold">Download questions</h2>
        <Accordion type="single" collapsible className="mt-5">
          <AccordionItem value="availability"><AccordionTrigger>Why can't I download the app yet?</AccordionTrigger><AccordionContent className="leading-relaxed text-muted-foreground">The APK is hosted on our GitHub release and may take a few minutes to appear after a new build. If the file isn’t available yet, join early access to be notified.</AccordionContent></AccordionItem>
          <AccordionItem value="warnings"><AccordionTrigger>Why does Android show an installation warning?</AccordionTrigger><AccordionContent className="leading-relaxed text-muted-foreground">Android warns about installing apps from sources outside Google Play. That’s expected for APK installs, and it’s safe when the file comes from HabitNow’s official release.</AccordionContent></AccordionItem>
          <AccordionItem value="updates"><AccordionTrigger>How do I update an APK installation?</AccordionTrigger><AccordionContent className="leading-relaxed text-muted-foreground">Download a newer release and install it over the previous version. Android will replace the older app with the latest build.</AccordionContent></AccordionItem>
          <AccordionItem value="ios"><AccordionTrigger>Can I use HabitNow on iPhone?</AccordionTrigger><AccordionContent className="leading-relaxed text-muted-foreground">This download is for Android devices only. iPhone support isn’t available yet.</AccordionContent></AccordionItem>
        </Accordion>
      </section>
    </main>
  );
}
