import { createFileRoute } from "@tanstack/react-router";

import bouquetRosas from "@/assets/bouquet-rosas.jpeg.asset.json";
import velaConchaAcesa from "@/assets/vela-concha-acesa.jpeg.asset.json";
import chaRevelacao from "@/assets/cha-revelacao.jpeg.asset.json";
import lembrancaEducadora from "@/assets/lembranca-educadora.jpeg.asset.json";
import jardimSuculentas from "@/assets/jardim-suculentas.jpeg.asset.json";
import velasConchaDuo from "@/assets/velas-concha-duo.jpeg.asset.json";
import jardimSuculentasAmbiente from "@/assets/jardim-suculentas-ambiente.jpeg.asset.json";
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
    nome: "Batizados",
    src: velaConchaAcesa.url,
    alt: "Vela artesanal em forma de concha acesa",
  },
  {
    nome: "Chás de Bebé",
    src: chaRevelacao.url,
    alt: "Vela de chá revelação em frasco de vidro com tampa de bambu",
  },
  {
    nome: "Outras Celebrações",
    src: lembrancaEducadora.url,
    alt: "Lembrança personalizada para educadora com vela em forma de margarida",
  },
];

const portefolio = [
  {
    src: jardimSuculentas.url,
    alt: "Jardim de suculentas em cera numa taça de cerâmica",
  },
  {
    src: velasConchaDuo.url,
    alt: "Duas velas em forma de concha apresentadas sobre livros",
  },
  {
    src: jardimSuculentasAmbiente.url,
    alt: "Jardim de suculentas em cera em ambiente decorado",
  },
];

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
        <SectionHeading
          eyebrow="Portefólio"
          title="Apresentação e"
          script="embalagem"
          description="Alguns trabalhos criados no atelier, do conceito à apresentação final."
        />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {portefolio.map((img) => (
            <img
              key={img.src}
              src={img.src}
              alt={img.alt}
              loading="lazy"
              className="aspect-[4/3] w-full object-cover"
            />
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
