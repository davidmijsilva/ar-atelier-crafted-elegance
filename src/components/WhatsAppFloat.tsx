import { MessageCircle } from "lucide-react";
import { useEffect, useState } from "react";

import { site } from "@/lib/site";

export function WhatsAppFloat() {
  const [raised, setRaised] = useState(false);

  useEffect(() => {
    const footer = document.getElementById("site-footer");
    if (!footer) return;
    const observer = new IntersectionObserver(
      ([entry]) => setRaised(Boolean(entry?.isIntersecting)),
      { rootMargin: "0px 0px -8px 0px", threshold: 0 },
    );
    observer.observe(footer);
    return () => observer.disconnect();
  }, []);

  return (
    <a
      href={site.whatsappHref}
      target="_blank"
      rel="noreferrer"
      aria-label="Falar connosco por WhatsApp"
      style={{ bottom: raised ? "calc(1rem + 22vh)" : "1rem" }}
      className="fixed right-4 z-50 flex items-center gap-2 rounded-full bg-foreground px-4 py-3 text-background shadow-lg transition-all duration-300 hover:scale-105"
    >
      <MessageCircle className="size-5" />
      <span className="hidden text-[0.7rem] tracking-brand sm:inline">WhatsApp</span>
    </a>
  );
}
