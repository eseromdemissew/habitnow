export async function celebrate() {
  if (typeof window === "undefined") return;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  const { default: confetti } = await import("canvas-confetti");
  // Brand palette (fixed values required by the canvas API)
  const colors = ["#7C5CFF", "#35D6B4", "#FFB59E", "#FFC857", "#5CC8FF"];
  confetti({ particleCount: 90, spread: 70, origin: { y: 0.7 }, colors, disableForReducedMotion: true });
}
