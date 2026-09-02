import { createFileRoute, Link } from "@tanstack/react-router";

import fundadora from "@/assets/fundadora.asset.json";
import { Section, SectionHeading } from "@/components/Section";

export const Route = createFileRoute("/sobre-nos")({
  head: () => ({
    meta: [
      { title: "Sobre Nós — A História do AR atelier | Lisboa" },
      {
        name: "description",
        content:
          "Conheça o AR atelier: um projeto artesanal de Lisboa dedicado a velas, decoração e lembranças personalizadas, feitas à mão com atenção ao detalhe.",
      },
      { property: "og:title", content: "Sobre o AR atelier" },
      {
        property: "og:description",
        content: "Um atelier artesanal em Lisboa dedicado a criar peças únicas e personalizadas.",
      },
      { property: "og:url", content: "/sobre-nos" },
    ],
    links: [{ rel: "canonical", href: "/sobre-nos" }],
  }),
  component: SobrePage,
});

const valores = [
  { title: "Artesanal", text: "Tudo é feito à mão, em pequenas quantidades." },
  { title: "Personalizado", text: "Cada peça nasce de uma ideia concreta do cliente." },
  { title: "Detalhe", text: "Do primeiro esboço à apresentação final." },
  { title: "Minimalista", text: "Formas simples, paletas neutras, presença discreta." },
];

function SobrePage() {
  return (
    <>
      <Section>
        <div className="grid items-center gap-12 md:grid-cols-2">
          <img
            src={fundadora.url}
            alt="Fundadora do AR atelier"
            className="w-full object-cover"
            loading="lazy"
          />
          <div>
            <p className="text-[0.68rem] tracking-brand text-muted-foreground">Sobre nós</p>
            <h1 className="mt-4 font-serif text-4xl leading-tight">
              O <span className="font-script text-5xl">atelier</span> por detrás das peças
            </h1>
            <p className="mt-6 text-sm leading-relaxed text-muted-foreground md:text-base">
              O AR atelier nasceu do gosto por criar com as mãos e da vontade de transformar ideias
              em objetos com significado. Cada vela, peça decorativa ou lembrança é pensada de
              raiz, feita em pequenas quantidades e acompanhada até ao último detalhe.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground md:text-base">
              A missão é simples: criar peças especiais, que façam parte de momentos importantes e
              que fiquem na memória de quem as recebe.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground md:text-base">
              O atelier trabalha a partir de <strong className="font-medium">Lisboa</strong>, com
              entregas em mãos na região e envios para todo o país.
            </p>
            <Link
              to="/contactos"
              className="mt-8 inline-block border border-foreground px-6 py-3 text-[0.7rem] tracking-brand transition-colors hover:bg-foreground hover:text-background"
            >
              Falar connosco
            </Link>
          </div>
        </div>
      </Section>

      <Section className="border-t border-border">
        <SectionHeading eyebrow="Valores" title="O que nos" script="guia" />
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {valores.map((v) => (
            <div key={v.title} className="border-t border-gold/60 pt-5">
              <h3 className="font-serif text-2xl">{v.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{v.text}</p>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
