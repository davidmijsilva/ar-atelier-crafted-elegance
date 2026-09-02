import { createFileRoute } from "@tanstack/react-router";

import bouquetRosas from "@/assets/bouquet-rosas.jpeg.asset.json";
import lembrancaEducadora from "@/assets/lembranca-educadora.jpeg.asset.json";
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

const ocasioes = [
  {
    nome: "Casamentos",
    src: bouquetRosas.url,
    alt: "Bouquet de velas em forma de rosas e escultura de mãos dadas em gesso",
  },
  {
    nome: "Lembranças Personalizadas",
    src: lembrancaEducadora.url,
    alt: "Lembrança personalizada para educadora com vela em forma de margarida",
  },
];

const outrasOcasioes = ["Batizados", "Chás de bebé", "Aniversários", "Datas comemorativas"];

function EventosPage() {
  return (
    <>
      <Section className="pb-8">
        <SectionHeading
          eyebrow="Lembranças"
          title="Lembranças que ficam na"
          script="memória"
          description="Criamos lembranças personalizadas para o seu dia, do conceito à embalagem final."
        />
      </Section>

      <Section className="border-t border-border">
        <div className="grid gap-8 sm:grid-cols-2">
          {ocasioes.map((o) => (
            <article key={o.nome}>
              <img
                src={o.src}
                alt={o.alt}
                loading="lazy"
                className="aspect-[4/5] w-full object-cover"
              />
              <h2 className="mt-4 font-serif text-xl">{o.nome}</h2>
            </article>
          ))}
        </div>
      </Section>

      <Section className="border-t border-border">
        <div className="flex flex-wrap gap-3">
          {outrasOcasioes.map((o) => (
            <span
              key={o}
              className="border border-border px-4 py-2 text-[0.7rem] tracking-brand text-muted-foreground"
            >
              {o}
            </span>
          ))}
        </div>
      </Section>

      <Section className="border-t border-border">
        <div className="mx-auto max-w-2xl">
          <SectionHeading
            eyebrow="Pedido para lembranças"
            title="Conte-nos sobre o seu"
            script="evento"
            description="Indique a data, o tipo de evento e a quantidade prevista. Respondemos com uma proposta personalizada."
          />
          <div className="mt-10">
            <QuoteForm
              variant="evento"
              subject="Novo pedido de lembranças para evento — Website AR atelier"
              tipos={["Casamento", "Batizado", "Chá de bebé", "Aniversário", "Outro"]}
            />
          </div>
        </div>
      </Section>
    </>
  );
}
