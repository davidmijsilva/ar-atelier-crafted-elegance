import { createFileRoute } from "@tanstack/react-router";

import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { QuoteForm } from "@/components/QuoteForm";
import { Section, SectionHeading } from "@/components/Section";

export const Route = createFileRoute("/eventos")({
  head: () => ({
    meta: [
      { title: "Lembranças Personalizadas para Casamentos e Batizados | AR atelier" },
      {
        name: "description",
        content:
          "Lembranças personalizadas para casamentos, batizados e chás de bebé. Velas e peças artesanais com embalagem à medida. Lisboa e envios nacionais.",
      },
      { property: "og:title", content: "Lembranças de Evento | AR atelier" },
      {
        property: "og:description",
        content: "Lembranças artesanais para casamentos, batizados e chás de bebé.",
      },
      { property: "og:url", content: "/eventos" },
    ],
    links: [{ rel: "canonical", href: "/eventos" }],
  }),
  component: EventosPage,
});

const ocasioes = ["Casamentos", "Batizados", "Chás de Bebé", "Outras Celebrações"];

function EventosPage() {
  return (
    <>
      <Section className="pb-8">
        <SectionHeading
          eyebrow="Eventos"
          title="Lembranças que ficam na"
          script="memória"
          description="Criamos lembranças personalizadas para o seu dia, do conceito à embalagem final."
        />
      </Section>

      <Section className="border-t border-border">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {ocasioes.map((o) => (
            <article key={o}>
              <ImagePlaceholder label={o} />
              <h2 className="mt-4 font-serif text-xl">{o}</h2>
            </article>
          ))}
        </div>
      </Section>

      <Section className="border-t border-border">
        <SectionHeading
          eyebrow="Portefólio"
          title="Apresentação e"
          script="embalagem"
          description="Espaço reservado para fotografias de eventos realizados pelo atelier."
        />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {["Mesa de lembranças", "Embalagem individual", "Etiquetas personalizadas"].map((l) => (
            <ImagePlaceholder key={l} label={l} ratio="aspect-[4/3]" />
          ))}
        </div>
      </Section>

      <Section className="border-t border-border">
        <div className="mx-auto max-w-2xl">
          <SectionHeading
            eyebrow="Pedido para eventos"
            title="Conte-nos sobre o seu"
            script="evento"
            description="Indique a data, o tipo de evento e a quantidade prevista. Respondemos com uma proposta personalizada."
          />
          <div className="mt-10">
            <QuoteForm
              variant="evento"
              subject="Novo pedido de evento — Website AR atelier"
              tipos={["Casamento", "Batizado", "Chá de bebé", "Aniversário", "Outro evento"]}
            />
          </div>
        </div>
      </Section>
    </>
  );
}
