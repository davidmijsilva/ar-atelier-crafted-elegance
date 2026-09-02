import { createFileRoute, Link } from "@tanstack/react-router";

import chaRevelacao from "@/assets/cha-revelacao.jpeg.asset.json";
import velaConchaAcesa from "@/assets/vela-concha-acesa.jpeg.asset.json";
import velasConchaDuo from "@/assets/velas-concha-duo.jpeg.asset.json";
import velasConchaDetalhe from "@/assets/velas-concha-detalhe.jpeg.asset.json";
import bouquetRosas from "@/assets/bouquet-rosas.jpeg.asset.json";
import jardimSuculentasAmbiente from "@/assets/jardim-suculentas-ambiente.jpeg.asset.json";
import { Section, SectionHeading } from "@/components/Section";

export const Route = createFileRoute("/velas")({
  head: () => ({
    meta: [
      { title: "Velas Artesanais em Lisboa — Aromáticas e Decorativas | AR atelier" },
      {
        name: "description",
        content:
          "Velas artesanais em cera vegetal: aromáticas, decorativas e coleções sazonais. Personalização de aroma, cor e recipiente. Atelier em Lisboa.",
      },
      { property: "og:title", content: "Velas Artesanais | AR atelier" },
      {
        property: "og:description",
        content: "Velas aromáticas e decorativas em cera vegetal, personalizadas à medida.",
      },
      { property: "og:url", content: "/velas" },
    ],
    links: [{ rel: "canonical", href: "/velas" }],
  }),
  component: VelasPage,
});

const grupos = [
  {
    title: "Velas Aromáticas",
    text: "Cera vegetal e aromas escolhidos consigo. Pode personalizar o aroma, a cor, o recipiente e o rótulo.",
    itens: ["Aroma à escolha", "Cera vegetal", "Rótulo personalizado"],
    imagens: [
      { src: chaRevelacao.url, alt: "Vela aromática em frasco de vidro com tampa de bambu e rótulo AR atelier" },
      { src: velaConchaAcesa.url, alt: "Vela em forma de concha acesa" },
    ],
  },
  {
    title: "Velas Decorativas",
    text: "Formas escultóricas pensadas para decorar mesas, estantes e espaços de descanso.",
    itens: ["Formas escultóricas", "Cores à medida", "Peças únicas"],
    imagens: [
      { src: velasConchaDuo.url, alt: "Duas velas decorativas em forma de concha sobre livros" },
      { src: velasConchaDetalhe.url, alt: "Detalhe das velas de concha em cera creme" },
    ],
  },
  {
    title: "Coleções Sazonais",
    text: "Edições limitadas criadas para épocas especiais do ano e datas comemorativas.",
    itens: ["Edições limitadas", "Embalagem de oferta", "Conjuntos"],
    imagens: [
      { src: bouquetRosas.url, alt: "Bouquet de velas em forma de rosas num vaso coração preto" },
      { src: jardimSuculentasAmbiente.url, alt: "Jardim de suculentas em cera junto a plantas decorativas" },
    ],
  },
];

function VelasPage() {
  return (
    <>
      <Section className="pb-8">
        <SectionHeading
          eyebrow="Coleção"
          title="Velas feitas à"
          script="mão"
          description="Cada vela é vertida manualmente, em pequenas quantidades, com atenção ao aroma, à cor e ao acabamento."
        />
      </Section>

      {grupos.map((grupo, index) => (
        <Section key={grupo.title} className="border-t border-border py-12 md:py-16">
          <div
            className={`grid items-center gap-10 md:grid-cols-2 ${index % 2 === 1 ? "md:[&>div:first-child]:order-2" : ""}`}
          >
            <div className="grid grid-cols-2 gap-4">
              <ImagePlaceholder label={grupo.title} />
              <ImagePlaceholder label="Detalhe" className="mt-8" />
            </div>
            <div>
              <h2 className="font-serif text-3xl">{grupo.title}</h2>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground md:text-base">
                {grupo.text}
              </p>
              <ul className="mt-6 space-y-2 text-sm text-foreground/80">
                {grupo.itens.map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <span className="h-px w-6 bg-gold" aria-hidden />
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                to="/contactos"
                className="mt-8 inline-block border border-foreground px-6 py-3 text-[0.7rem] tracking-brand transition-colors hover:bg-foreground hover:text-background"
              >
                Encomendar / Personalizar
              </Link>
            </div>
          </div>
        </Section>
      ))}
    </>
  );
}
