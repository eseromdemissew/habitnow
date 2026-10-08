import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion, AnimatePresence } from "motion/react";
import { Check, Loader2, Mail } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { celebrate } from "@/lib/confetti";
import { cn } from "@/lib/utils";

const schema = z.object({
  email: z.string().trim().min(1, "Please enter your email").max(255, "That email is too long").email("That doesn't look like an email address"),
  company: z.string().max(0).optional(), // honeypot
});
type Values = z.infer<typeof schema>;

type Status = { kind: "idle" } | { kind: "success"; already: boolean } | { kind: "error"; msg: string };

export function WaitlistForm({ source, tone = "default", className }: { source: string; tone?: "default" | "ink"; className?: string }) {
  const [status, setStatus] = useState<Status>({ kind: "idle" });
  const { register, handleSubmit, formState } = useForm<Values>({ resolver: zodResolver(schema) });

  const onSubmit = async (v: Values) => {
    if (v.company) {
      setStatus({ kind: "success", already: false });
      return;
    }
    const { error } = await supabase.from("waitlist").insert({ email: v.email.toLowerCase(), source: source.slice(0, 50) });
    if (error) {
      if (error.code === "23505") {
        setStatus({ kind: "success", already: true });
        return;
      }
      setStatus({ kind: "error", msg: "Something went wrong on our side. Please try again in a moment." });
      return;
    }
    setStatus({ kind: "success", already: false });
    celebrate();
  };

  const err = formState.errors.email?.message;
  const inputId = `wl-${source}`;

  return (
    <div className={cn("w-full", className)}>
      <AnimatePresence mode="wait" initial={false}>
        {status.kind === "success" ? (
          <motion.div
            key="ok"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex items-center gap-3 rounded-full bg-mint px-5 py-3 text-mint-foreground"
          >
            <span className="grid size-8 shrink-0 place-items-center rounded-full bg-surface text-foreground">
              <Check className="size-4" aria-hidden />
            </span>
            <span className="min-w-0 font-semibold">
              {status.already ? "You are already on the list. See you at launch." : "You're in! We'll email you when HabitNow is ready."}
            </span>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            onSubmit={handleSubmit(onSubmit)}
            noValidate
            className="flex flex-col gap-2 sm:flex-row"
            exit={{ opacity: 0 }}
          >
            <label htmlFor={inputId} className="sr-only">Email address</label>
            <div className={cn("flex min-w-0 flex-1 items-center gap-2 rounded-full border bg-surface p-1.5 pl-1.5", err && "border-destructive")}>
              <span className="grid size-9 shrink-0 place-items-center rounded-full bg-tile-violet text-primary">
                <Mail className="size-4" aria-hidden />
              </span>
              <input
                id={inputId}
                type="email"
                autoComplete="email"
                placeholder="you@email.com"
                aria-invalid={!!err}
                aria-describedby={`${inputId}-msg`}
                className="min-w-0 flex-1 bg-transparent py-2 pr-3 text-base text-foreground outline-none placeholder:text-muted-foreground"
                {...register("email")}
              />
            </div>
            <input type="text" tabIndex={-1} autoComplete="off" aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 opacity-0" {...register("company")} />
            <Button type="submit" variant={tone === "ink" ? "mint" : "mint"} size="pill" disabled={formState.isSubmitting}>
              {formState.isSubmitting ? <Loader2 className="animate-spin" aria-hidden /> : null}
              {formState.isSubmitting ? "Joining…" : "Join early access"}
            </Button>
          </motion.form>
        )}
      </AnimatePresence>
      <p id={`${inputId}-msg`} role="status" aria-live="polite" className="mt-2 min-h-5 px-2 text-sm text-destructive">
        {err ?? (status.kind === "error" ? status.msg : "")}
      </p>
    </div>
  );
}
