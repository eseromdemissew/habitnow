import type { ReactNode } from "react";

export function Page({ eyebrow, title, intro, children }: { eyebrow?: string; title: string; intro: string; children: ReactNode }) {
  return (
    <main className="container-site max-w-3xl pb-24 pt-32 sm:pt-40">
      {eyebrow && <p className="eyebrow text-muted-foreground">{eyebrow}</p>}
      <h1 className="text-h1 mt-2">{title}</h1>
      <p className="text-lead mt-4 text-muted-foreground">{intro}</p>
      <div className="mt-12 space-y-10">{children}</div>
    </main>
  );
}

export function Block({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section>
      <h2 className="text-h3">{title}</h2>
      <div className="mt-3 space-y-3 text-muted-foreground">{children}</div>
    </section>
  );
}
