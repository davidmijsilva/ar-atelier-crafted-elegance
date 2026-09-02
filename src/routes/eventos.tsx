import { createFileRoute } from "@tanstack/react-router";

import chaRevelacao from "@/assets/cha-revelacao.jpeg.asset.json";
import lembrancaCasamento from "@/assets/lembranca-casamento-mesa.jpeg.asset.json";
import lembrancaBatizado from "@/assets/lembranca-batizado-mao.jpeg.asset.json";
import anuncioGravidez from "@/assets/anuncio-gravidez.jpeg.asset.json";
import lembrancaKraft from "@/assets/lembranca-detalhe-kraft.jpeg.asset.json";
import lembrancaEmbalada from "@/assets/lembranca-embalada.jpeg.asset.json";
import embalamentoCaixa from "@/assets/embalamento-caixa.jpeg.asset.json";
import embalamentoEnvio from "@/assets/embalamento-envio.jpeg.asset.json";
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
    src: lembrancaCasamento.url,
    alt: "Lembrança personalizada com vela apresentada numa mesa de casamento",
  },
  {
    nome: "Batizados",
    src: lembrancaBatizado.url,
    alt: "Lembrança personalizada de batizado em tons de rosa com vela",
  },
  {
    nome: "Chás de Bebé e Revelação",
    src: chaRevelacao.url,
    alt: "Vela personalizada para chá de revelação de bebé em frasco de vidro com rótulo",
  },
  {
    nome: "Lembranças Personalizadas",
    src: lembrancaKraft.url,
    alt: "Lembrança personalizada com etiqueta kraft, flores secas e vela",
  },
];

const embalamento = [
  {
    nome: "Lembranças Embaladas",
    src: lembrancaEmbalada.url,
    alt: "Lembranças com vela em forma de margarida embaladas individualmente com cartão personalizado",
  },
  {
    nome: "Caixas de Apresentação",
    src: embalamentoCaixa.url,
    alt: "Bouquet de velas acondicionado em caixa de apresentação com instruções de segurança",
  },
  {
    nome: "Envios Cuidados",
    src: embalamentoEnvio.url,
    alt: "Caixa de envio selada e sinalizada como frágil com a marca AR Candle Studio",
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
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
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
          eyebrow="Embalamento"
          title="Apresentação ao"
          script="detalhe"
          description="Cada lembrança sai embalada individualmente e protegida para chegar perfeita ao seu dia."
        />
        <div className="mt-12 grid gap-8 sm:grid-cols-3">
          {embalamento.map((o) => (
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
