import { useEffect } from "react";
import { useNavigate } from "@tanstack/react-router";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";

const SECTIONS = [
  ["features", "Features"],
  ["playground", "Try HabitNow"],
  ["blocker-demo", "App blocker demo"],
  ["coach-demo", "AI coach demo"],
  ["insights-demo", "Insights demo"],
  ["loop", "The Loop"],
  ["themes", "Theme playground"],
  ["privacy", "Privacy and security"],
  ["everything", "Everything inside"],
  ["faq", "FAQ"],
] as const;

const PAGES = [
  ["/", "Home"],
  ["/download", "Download"],
  ["/roadmap", "Roadmap"],
  ["/support", "Support"],
  ["/privacy", "Privacy policy"],
  ["/terms", "Terms of use"],
] as const;

export function CommandSearch({ open, onOpenChange }: { open: boolean; onOpenChange: (o: boolean) => void }) {
  const navigate = useNavigate();

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        onOpenChange(!open);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onOpenChange]);

  const goSection = async (id: string) => {
    onOpenChange(false);
    await navigate({ to: "/", hash: id });
    setTimeout(() => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" }), 60);
  };

  return (
    <CommandDialog open={open} onOpenChange={onOpenChange}>
      <CommandInput placeholder="Jump to a section or page…" />
      <CommandList>
        <CommandEmpty>Nothing found.</CommandEmpty>
        <CommandGroup heading="On the home page">
          {SECTIONS.map(([id, label]) => (
            <CommandItem key={id} value={label} onSelect={() => goSection(id)}>
              {label}
            </CommandItem>
          ))}
        </CommandGroup>
        <CommandGroup heading="Pages">
          {PAGES.map(([to, label]) => (
            <CommandItem
              key={to}
              value={`page ${label}`}
              onSelect={() => {
                onOpenChange(false);
                navigate({ to });
              }}
            >
              {label}
            </CommandItem>
          ))}
        </CommandGroup>
      </CommandList>
    </CommandDialog>
  );
}
