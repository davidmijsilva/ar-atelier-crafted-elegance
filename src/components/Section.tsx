import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

export function Section({
  children,
  className,
  id,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={cn("mx-auto w-full max-w-6xl px-5 py-16 md:py-24", className)}>
      {children}
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  script,
  description,
  align = "center",
}: {
  eyebrow?: string;
  title: string;
  script?: string;
  description?: string;
  align?: "center" | "left";
}) {
  return (
    <div className={cn("max-w-2xl", align === "center" ? "mx-auto text-center" : "text-left")}>
      {eyebrow ? (
        <p className="text-[0.68rem] tracking-brand text-muted-foreground">{eyebrow}</p>
      ) : null}
      <h2 className="mt-3 font-serif text-3xl leading-tight md:text-4xl">
        {title}
        {script ? <span className="font-script text-4xl md:text-5xl"> {script}</span> : null}
      </h2>
      {description ? (
        <p className="mt-4 text-sm leading-relaxed text-muted-foreground md:text-base">
          {description}
        </p>
      ) : null}
    </div>
  );
}
