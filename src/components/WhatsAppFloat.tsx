import { MessageCircle } from "lucide-react";

import { site } from "@/lib/site";

export function WhatsAppFloat() {
  return (
    <a
      href={site.whatsappHref}
      target="_blank"
      rel="noreferrer"
      aria-label="Falar connosco por WhatsApp"
      className="fixed right-4 bottom-4 z-50 flex items-center gap-2 rounded-full bg-foreground px-4 py-3 text-background shadow-lg transition-transform hover:scale-105"
    >
      <MessageCircle className="size-5" />
      <span className="hidden text-[0.7rem] tracking-brand sm:inline">WhatsApp</span>
    </a>
  );
}
