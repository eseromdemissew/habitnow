import { createContext, useContext, useState, type ReactNode } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { LogoMark } from "@/components/brand/Logo";
import { WaitlistForm } from "./WaitlistForm";

const Ctx = createContext<{ open: (source?: string) => void } | null>(null);

export function WaitlistProvider({ children }: { children: ReactNode }) {
  const [source, setSource] = useState<string | null>(null);
  return (
    <Ctx.Provider value={{ open: (s = "modal") => setSource(s) }}>
      {children}
      <Dialog open={source !== null} onOpenChange={(o) => !o && setSource(null)}>
        <DialogContent className="w-[calc(100%-2rem)] max-w-md sm:max-w-md overflow-hidden rounded-sheet border-glass-border bg-card p-6 sm:p-8">
          <DialogHeader className="items-start text-left">
            <LogoMark variant="icon" className="mb-2 size-12" />
            <DialogTitle className="text-h2">Join early access</DialogTitle>
            <DialogDescription className="text-base text-muted-foreground">
              Be first to try HabitNow on Android. One email at launch, no spam.
            </DialogDescription>
          </DialogHeader>
          {source !== null && <WaitlistForm source={source} />}
        </DialogContent>
      </Dialog>
    </Ctx.Provider>
  );
}

export function useWaitlist() {
  const v = useContext(Ctx);
  if (!v) throw new Error("useWaitlist must be used inside WaitlistProvider");
  return v;
}
