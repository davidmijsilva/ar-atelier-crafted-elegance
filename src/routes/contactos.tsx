import { createFileRoute } from "@tanstack/react-router";
import { Instagram, Mail, MapPin, MessageCircle, Phone } from "lucide-react";

import { QuoteForm } from "@/components/QuoteForm";
import { Section, SectionHeading } from "@/components/Section";
import { site } from "@/lib/site";

export const Route = createFileRoute("/contactos")({
  head: () => ({
    meta: [
      { title: "Contactos e Pedidos de Orçamento | AR atelier Lisboa" },
      {
        name: "description",
        content:
          "Peça o seu orçamento de velas artesanais, decoração à medida ou lembranças personalizadas. Email, telefone e WhatsApp do AR atelier em Lisboa.",
      },
      { property: "og:title", content: "Contactos | AR atelier" },
      {
        property: "og:description",
        content: "Fale connosco e peça um orçamento personalizado.",
      },
      { property: "og:url", content: "/contactos" },
    ],
    links: [{ rel: "canonical", href: "/contactos" }],
  }),
  component: ContactosPage,
});

function ContactosPage() {
  return (
    <Section>
      <SectionHeading
        eyebrow="Contactos"
        title="Vamos dar vida às suas"
        script="ideias"
        description="Escreva-nos com a sua ideia e responderemos com uma proposta personalizada."
      />

      <div className="mt-14 grid gap-12 md:grid-cols-[1fr_0.8fr]">
        <QuoteForm
          subject="Novo pedido de contacto — Website AR atelier"
          tipos={[
            "Velas aromáticas",
            "Velas decorativas",
            "Peça decorativa personalizada",
            "Lembranças de evento",
            "Outro assunto",
          ]}
        />

        <aside className="space-y-6 border-t border-border pt-8 md:border-t-0 md:border-l md:pt-0 md:pl-10">
          <div className="flex items-start gap-3">
            <Mail className="mt-1 size-4 shrink-0 text-gold" />
            <div className="min-w-0">
              <p className="text-[0.68rem] tracking-brand text-muted-foreground">Email</p>
              <a href={`mailto:${site.email}`} className="break-all text-sm">
                {site.email}
              </a>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Phone className="mt-1 size-4 shrink-0 text-gold" />
            <div>
              <p className="text-[0.68rem] tracking-brand text-muted-foreground">Telefone</p>
              <a href={site.phoneHref} className="text-sm">
                {site.phone}
              </a>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <MapPin className="mt-1 size-4 shrink-0 text-gold" />
            <div>
              <p className="text-[0.68rem] tracking-brand text-muted-foreground">Morada fiscal</p>
              <p className="text-sm">
                {site.address}
                <br />
                {site.city}
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Instagram className="mt-1 size-4 shrink-0 text-gold" />
            <div>
              <p className="text-[0.68rem] tracking-brand text-muted-foreground">Instagram</p>
              <a href={site.instagramHref} target="_blank" rel="noreferrer" className="text-sm">
                @{site.instagram}
              </a>
            </div>
          </div>

          <a
            href={site.whatsappHref}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 bg-foreground px-6 py-3.5 text-[0.7rem] tracking-brand text-background"
          >
            <MessageCircle className="size-4" />
            WhatsApp {site.whatsapp}
          </a>
        </aside>
      </div>
    </Section>
  );
}
