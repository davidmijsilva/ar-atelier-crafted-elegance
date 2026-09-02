import { Camera } from "lucide-react";

import { cn } from "@/lib/utils";

export function ImagePlaceholder({
  label,
  className,
  ratio = "aspect-[4/5]",
}: {
  label: string;
  className?: string;
  ratio?: string;
}) {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center gap-3 border border-border bg-card px-6 text-center",
        ratio,
        className,
      )}
    >
      <Camera className="size-5 text-gold" aria-hidden />
      <p className="font-serif text-lg leading-tight">{label}</p>
      <p className="text-[0.65rem] tracking-brand text-muted-foreground">Fotografia em breve</p>
    </div>
  );
}
