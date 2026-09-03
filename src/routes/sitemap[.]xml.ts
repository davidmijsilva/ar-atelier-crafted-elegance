import { createFileRoute } from "@tanstack/react-router";
import { sitemapXML, type SitemapEntry } from "@/lib/sitemap";

const BASE_URL = "https://ar-atelier-crafted-elegance.lovable.app";

const PUBLIC_PATHS: SitemapEntry[] = [
  { path: "/" },
  { path: "/velas" },
  { path: "/decoracao" },
  { path: "/eventos" },
  { path: "/sobre-nos" },
  { path: "/contactos" },
];

export const Route = createFileRoute("/sitemap.xml")({
  staticData: { sitemap: false },
  server: {
    handlers: {
      GET: async () => {
        if (!BASE_URL) {
          return new Response("Sitemap domain not configured", {
            status: 503,
            headers: { "Cache-Control": "no-store" },
          });
        }
        return new Response(sitemapXML(BASE_URL, PUBLIC_PATHS), {
          headers: { "Content-Type": "application/xml", "Cache-Control": "public, max-age=3600" },
        });
      },
    },
  },
});
