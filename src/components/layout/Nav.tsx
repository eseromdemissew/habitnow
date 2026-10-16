import { useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import { motion, useMotionValueEvent, useScroll, useSpring } from "motion/react";
import { Menu, Moon, Search, Sun, X } from "lucide-react";
import { ProgressMark, Wordmark } from "@/components/brand/Logo";
import { DownloadButton } from "@/components/waitlist/DownloadButton";
import { useTheme } from "@/lib/theme";
import { CommandSearch } from "./CommandSearch";
import { cn } from "@/lib/utils";

const LINKS = [
  { to: "/", hash: "features", label: "Features" },
  { to: "/", hash: "playground", label: "Try it" },
  { to: "/download", label: "Download" },
  { to: "/roadmap", label: "Roadmap" },
  { to: "/support", label: "Support" },
] as const;

export function Nav() {
  const { scrollYProgress, scrollY } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 140, damping: 26, mass: 0.3 });
  const [done, setDone] = useState(false);
  const [condensed, setCondensed] = useState(false);
  const [menu, setMenu] = useState(false);
  const [cmd, setCmd] = useState(false);
  const pillRef = useRef<HTMLDivElement>(null);
  const { resolved, setMode } = useTheme();

  useMotionValueEvent(scrollYProgress, "change", (v) => setDone(v > 0.985));
  useMotionValueEvent(scrollY, "change", (v) => setCondensed(v > 60));

  const onMove = (e: React.PointerEvent) => {
    const el = pillRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${e.clientX - r.left}px`);
    el.style.setProperty("--my", `${e.clientY - r.top}px`);
    el.style.setProperty("--sheen", "1");
  };

  const isDark = resolved !== "light";

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-50 flex justify-center px-3 pt-3 sm:pt-4">
      <motion.div
        ref={pillRef}
        onPointerMove={onMove}
        onPointerLeave={() => pillRef.current?.style.setProperty("--sheen", "0")}
        animate={{ maxWidth: condensed ? 860 : 1120, paddingTop: condensed ? 6 : 10, paddingBottom: condensed ? 6 : 10 }}
        transition={{ type: "spring", stiffness: 260, damping: 30 }}
        className="liquid-pill pointer-events-auto flex w-full items-center gap-2 pl-2 pr-2 sm:pl-3"
      >
        <Link to="/" className="flex min-w-0 shrink-0 items-center gap-2 rounded-full pr-2" aria-label="HabitNow home">
          <ProgressMark progress={progress} done={done} className="size-9 shrink-0" />
          <Wordmark className="hidden min-[360px]:inline-flex" />
        </Link>

        <nav aria-label="Main" className="ml-2 hidden min-w-0 flex-1 items-center gap-1 md:flex">
          {LINKS.map((l) => (
            <Link
              key={l.label}
              to={l.to}
              {...("hash" in l ? { hash: l.hash } : {})}
              className="shrink-0 whitespace-nowrap rounded-full px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="ml-auto flex shrink-0 items-center gap-1">
          <button
            type="button"
            onClick={() => setCmd(true)}
            className="hidden items-center gap-2 rounded-full px-3 py-2 text-sm text-muted-foreground hover:bg-accent sm:flex"
            aria-label="Search (Ctrl or Cmd + K)"
          >
            <Search className="size-4" aria-hidden />
            <kbd className="rounded-md border bg-surface px-1.5 text-xs">⌘K</kbd>
          </button>
          <button
            type="button"
            onClick={() => setMode(isDark ? "light" : "dark")}
            className="grid size-10 place-items-center rounded-full text-foreground hover:bg-accent"
            aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
          >
            {isDark ? <Sun className="size-5" aria-hidden /> : <Moon className="size-5" aria-hidden />}
          </button>
          <DownloadButton source="nav" size="default" className="hidden h-10 px-4 text-sm sm:inline-flex" label="Get the app" />
          <button
            type="button"
            className="grid size-10 place-items-center rounded-full hover:bg-accent md:hidden"
            onClick={() => setMenu((m) => !m)}
            aria-expanded={menu}
            aria-controls="mobile-menu"
            aria-label={menu ? "Close menu" : "Open menu"}
          >
            {menu ? <X className="size-5" aria-hidden /> : <Menu className="size-5" aria-hidden />}
          </button>
        </div>
      </motion.div>

      {menu && (
        <motion.div
          id="mobile-menu"
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="pointer-events-auto absolute inset-x-3 top-[4.5rem] rounded-sheet border bg-card p-3 shadow-soft md:hidden"
        >
          <nav aria-label="Mobile" className="flex flex-col">
            {LINKS.map((l) => (
              <Link
                key={l.label}
                to={l.to}
                {...("hash" in l ? { hash: l.hash } : {})}
                onClick={() => setMenu(false)}
                className="rounded-2xl px-4 py-3 font-medium hover:bg-accent"
              >
                {l.label}
              </Link>
            ))}
            <button type="button" onClick={() => { setMenu(false); setCmd(true); }} className="flex items-center gap-2 rounded-2xl px-4 py-3 text-left font-medium hover:bg-accent">
              <Search className="size-4" aria-hidden /> Search
            </button>
            <div className={cn("mt-2 px-1")}>
              <DownloadButton source="mobile-menu" className="w-full" />
            </div>
          </nav>
        </motion.div>
      )}
      <CommandSearch open={cmd} onOpenChange={setCmd} />
    </header>
  );
}
