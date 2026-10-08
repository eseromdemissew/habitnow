import { createContext, useCallback, useContext, useEffect, useState, type ReactNode } from "react";

export type ThemeMode = "system" | "light" | "dark" | "amoled";
export type Accent = "violet" | "mint" | "coral" | "sky" | "sun";

export const ACCENTS: { id: Accent; label: string; cssVar: string }[] = [
  { id: "violet", label: "Violet", cssVar: "var(--violet)" },
  { id: "mint", label: "Mint", cssVar: "var(--mint)" },
  { id: "coral", label: "Coral", cssVar: "var(--coral)" },
  { id: "sky", label: "Sky", cssVar: "var(--sky)" },
  { id: "sun", label: "Sun", cssVar: "var(--sun)" },
];

const STORAGE = "habitnow-theme";

/** Runs before paint (inlined in <head>) to avoid a theme flash. */
export const themeInitScript = `(function(){try{var m=localStorage.getItem('${STORAGE}')||'system';var d=m==='dark'||m==='amoled'||(m==='system'&&matchMedia('(prefers-color-scheme: dark)').matches);var c=document.documentElement.classList;if(d)c.add('dark');if(m==='amoled')c.add('amoled');}catch(e){}})();`;

type Ctx = {
  mode: ThemeMode;
  setMode: (m: ThemeMode) => void;
  resolved: "light" | "dark" | "amoled";
  accent: Accent;
  setAccent: (a: Accent) => void;
};

const ThemeCtx = createContext<Ctx | null>(null);

function apply(mode: ThemeMode) {
  const sysDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const resolved = mode === "system" ? (sysDark ? "dark" : "light") : mode;
  const c = document.documentElement.classList;
  c.toggle("dark", resolved === "dark" || resolved === "amoled");
  c.toggle("amoled", resolved === "amoled");
  return resolved;
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [mode, setModeState] = useState<ThemeMode>("system");
  const [resolved, setResolved] = useState<"light" | "dark" | "amoled">("light");
  const [accent, setAccent] = useState<Accent>("violet");

  useEffect(() => {
    const stored = (localStorage.getItem(STORAGE) as ThemeMode | null) ?? "system";
    setModeState(stored);
    setResolved(apply(stored));
  }, []);

  useEffect(() => {
    if (mode !== "system") return;
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const on = () => setResolved(apply("system"));
    mq.addEventListener("change", on);
    return () => mq.removeEventListener("change", on);
  }, [mode]);

  const setMode = useCallback((m: ThemeMode) => {
    localStorage.setItem(STORAGE, m);
    setModeState(m);
    setResolved(apply(m));
  }, []);

  return (
    <ThemeCtx.Provider value={{ mode, setMode, resolved, accent, setAccent }}>{children}</ThemeCtx.Provider>
  );
}

export function useTheme() {
  const v = useContext(ThemeCtx);
  if (!v) throw new Error("useTheme must be used inside ThemeProvider");
  return v;
}
