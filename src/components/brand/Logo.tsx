import { useId } from "react";
import { motion, type MotionValue } from "motion/react";
import { cn } from "@/lib/utils";

export const RING_PATH = "M77.82 38.76 A30 30 0 1 1 64.08 23.51";
export const CHECK_PATH = "M32 52 L44 64 L73 29";

type Variant = "light" | "dark" | "icon";

/** HabitNow mark. `light` = gradient ring, `dark` = pale ring; colors are fixed brand values. */
export function LogoMark({
  variant = "light",
  className,
  title = "HabitNow",
}: {
  variant?: Variant;
  className?: string;
  title?: string;
}) {
  const id = useId().replace(/:/g, "");
  if (variant === "icon") {
    return (
      <svg viewBox="0 0 100 100" className={className} role="img" aria-label={title}>
        <defs>
          <linearGradient id={`bg${id}`} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#8B6CFF" />
            <stop offset="1" stopColor="#5233D6" />
          </linearGradient>
        </defs>
        <rect width="100" height="100" rx="22" fill={`url(#bg${id})`} />
        <g transform="translate(15 15) scale(0.7)" fill="none" strokeWidth="9" strokeLinecap="round" strokeLinejoin="round">
          <path d={RING_PATH} stroke="#FFFFFF" />
          <path d={CHECK_PATH} stroke="#4DE3C3" />
        </g>
      </svg>
    );
  }
  const dark = variant === "dark";
  return (
    <svg viewBox="0 0 100 100" className={className} role="img" aria-label={title}>
      <defs>
        <linearGradient id={`r${id}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#8B6CFF" />
          <stop offset="1" stopColor="#5233D6" />
        </linearGradient>
      </defs>
      <g fill="none" strokeWidth="9" strokeLinecap="round" strokeLinejoin="round">
        <path d={RING_PATH} stroke={dark ? "#B7A8FF" : `url(#r${id})`} />
        <path d={CHECK_PATH} stroke={dark ? "#35D6B4" : "#2FD1AE"} />
      </g>
    </svg>
  );
}

/** Scroll-linked mark: ring draws with progress, check pops at the end. */
export function ProgressMark({
  progress,
  done,
  className,
}: {
  progress: MotionValue<number>;
  done: boolean;
  className?: string;
}) {
  const id = useId().replace(/:/g, "");
  return (
    <svg viewBox="0 0 100 100" className={className} aria-hidden="true">
      <defs>
        <linearGradient id={`p${id}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#8B6CFF" />
          <stop offset="1" stopColor="#5233D6" />
        </linearGradient>
      </defs>
      <g fill="none" strokeWidth="9" strokeLinecap="round" strokeLinejoin="round">
        <path d={RING_PATH} className="stroke-border" />
        <motion.path d={RING_PATH} stroke={`url(#p${id})`} style={{ pathLength: progress }} />
        <motion.path
          d={CHECK_PATH}
          stroke="#2FD1AE"
          initial={false}
          animate={{ pathLength: done ? 1 : 0, opacity: done ? 1 : 0, scale: done ? 1 : 0.6 }}
          transition={{ type: "spring", stiffness: 380, damping: 18 }}
          style={{ originX: "50%", originY: "50%" }}
        />
      </g>
    </svg>
  );
}

export function Wordmark({ className, showTagline = false }: { className?: string; showTagline?: boolean }) {
  return (
    <span className={cn("inline-flex min-w-0 flex-col leading-none", className)}>
      <span className="font-display text-xl font-bold tracking-[-0.04em]">
        <span className="text-foreground">Habit</span>
        <span className="text-brand-text">Now</span>
      </span>
      {showTagline && (
        <span className="mt-1 text-[0.6rem] font-semibold tracking-[0.25em] text-muted-foreground">
          DAILY ROUTINE PLANNER
        </span>
      )}
    </span>
  );
}
