import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Check, Flame, Shield, Sparkles, Timer } from "lucide-react";
import { pageHead } from "@/content/site";
import { CHAPTERS, FAQ, FEATURES, FEATURE_AREAS, type FeatureArea } from "@/content/features";
import { DownloadButton } from "@/components/waitlist/DownloadButton";
import { WaitlistForm } from "@/components/waitlist/WaitlistForm";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/")({
  head: () =>
    pageHead({
      title: "HabitNow — Daily Routine Planner for Android",
      description: "Build habits, run routines, protect your focus with an app blocker and get help from an AI coach. Join early access.",
      path: "/",
    }),
  component: Home,
});

const DEMO = [
  { name: "Drink 8 glasses of water", icon: Flame },
  { name: "Read 20 minutes", icon: Timer },
  { name: "No social media before 10am", icon: Shield },
  { name: "Plan tomorrow", icon: Sparkles },
];

function Home() {
  return (
    <main>
      <section className="bg-hero-gradient pb-20 pt-32 sm:pt-40">
        <div className="container-site grid items-center gap-12 lg:grid-cols-[1.1fr_1fr]">
          <div className="min-w-0">
            <p className="eyebrow text-muted-foreground">For Android · In development</p>
            <h1 className="text-display mt-4">Plan your day. Keep your habits. Guard your focus.</h1>
            <p className="text-lead mt-6 max-w-xl text-muted-foreground">
              HabitNow brings habits, routines, focus timers, an app blocker and an AI coach into one calm planner.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <DownloadButton source="hero" />
            </div>
          </div>
          <Playground />
        </div>
      </section>

      <section id="features" className="container-site scroll-mt-24 py-20">
        <p className="eyebrow text-muted-foreground">Everything in one place</p>
        <h2 className="text-h1 mt-3 max-w-2xl">Ten tools you'd normally need ten apps for</h2>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {CHAPTERS.map((c, i) => (
            <article key={c.id} className="rounded-3xl border bg-card p-6 shadow-soft">
              <span className="text-sm font-semibold text-primary">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="text-h3 mt-2">{c.title}</h3>
              <p className="mt-2 text-muted-foreground">{c.body}</p>
            </article>
          ))}
        </div>
      </section>

      <AllFeatures />

      <section className="container-site py-20">
        <h2 className="text-h1">Questions</h2>
        <Accordion type="single" collapsible className="mt-8 max-w-3xl">
          {FAQ.map((f) => (
            <AccordionItem key={f.q} value={f.q}>
              <AccordionTrigger className="text-left text-base">{f.q}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      <section className="section-ink py-20">
        <div className="container-site max-w-2xl text-center">
          <h2 className="text-h1">Be first to try HabitNow</h2>
          <p className="text-lead mt-4 text-muted-foreground">One email when it's ready. No spam.</p>
          <WaitlistForm source="footer-cta" tone="ink" className="mx-auto mt-8 max-w-md" />
        </div>
      </section>
    </main>
  );
}

function Playground() {
  const [done, setDone] = useState<Record<number, boolean>>({});
  const count = Object.values(done).filter(Boolean).length;
  const pct = Math.round((count / DEMO.length) * 100);
  return (
    <div id="playground" className="scroll-mt-24 rounded-[2rem] border bg-card p-6 shadow-soft">
      <div className="flex items-center justify-between">
        <div>
          <p className="eyebrow text-muted-foreground">Try it</p>
          <p className="text-h3">Today</p>
        </div>
        <div className="text-right">
          <p className="text-h2">{pct}%</p>
          <p className="text-sm text-muted-foreground">{count} of {DEMO.length} done</p>
        </div>
      </div>
      <div className="mt-4 h-2 overflow-hidden rounded-full bg-muted" role="progressbar" aria-valuenow={pct} aria-valuemin={0} aria-valuemax={100} aria-label="Daily progress">
        <div className="h-full rounded-full bg-mint transition-all duration-500" style={{ width: `${pct}%` }} />
      </div>
      <ul className="mt-6 space-y-2">
        {DEMO.map((h, i) => (
          <li key={h.name}>
            <button
              type="button"
              aria-pressed={!!done[i]}
              onClick={() => setDone((d) => ({ ...d, [i]: !d[i] }))}
              className="flex w-full items-center gap-3 rounded-2xl border bg-background px-4 py-3 text-left transition-colors hover:bg-accent"
            >
              <span className={cn("grid size-7 shrink-0 place-items-center rounded-full border-2", done[i] ? "border-mint bg-mint text-mint-foreground" : "border-border")}>
                {done[i] && <Check className="size-4" aria-hidden />}
              </span>
              <span className={cn("min-w-0 flex-1", done[i] && "text-muted-foreground line-through")}>{h.name}</span>
              <h.icon className="size-4 shrink-0 text-muted-foreground" aria-hidden />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

function AllFeatures() {
  const [area, setArea] = useState<FeatureArea>("Habits");
  const list = FEATURES.filter((f) => f.area === area);
  return (
    <section className="bg-surface py-20">
      <div className="container-site">
        <h2 className="text-h1">The full list</h2>
        <div className="mt-6 flex flex-wrap gap-2" role="tablist" aria-label="Feature areas">
          {FEATURE_AREAS.map((a) => (
            <button
              key={a}
              role="tab"
              aria-selected={a === area}
              onClick={() => setArea(a)}
              className={cn("rounded-full border px-4 py-2 text-sm font-medium transition-colors", a === area ? "bg-foreground text-background" : "bg-card hover:bg-accent")}
            >
              {a}
            </button>
          ))}
        </div>
        <ul className="mt-8 grid gap-3 sm:grid-cols-2">
          {list.map((f) => (
            <li key={f.name} className="rounded-2xl border bg-card p-5">
              <p className="font-semibold">{f.name}</p>
              <p className="mt-1 text-muted-foreground">{f.benefit}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
