import { createFileRoute, Link } from "@tanstack/react-router";

import bouquetAniversario from "@/assets/bouquet-aniversario.jpeg.asset.json";
import velaLimao from "@/assets/vela-limao.jpeg.asset.json";
import velasConchaDuo from "@/assets/velas-concha-duo.jpeg.asset.json";
import velaBorboletas from "@/assets/vela-borboletas.jpeg.asset.json";
import bouquetPascoa from "@/assets/bouquet-pascoa.jpeg.asset.json";
import velaCereal from "@/assets/vela-cereal.jpeg.asset.json";
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
      { src: velaLimao.url, alt: "Vela aromática de limão em recipiente de cerâmica com etiqueta AR Candle Studio" },
      { src: bouquetAniversario.url, alt: "Vela aromática em bouquet floral de aniversário" },
    ],
  },
  {
    title: "Velas Decorativas",
    text: "Formas escultóricas pensadas para decorar mesas, estantes e espaços de descanso.",
    itens: ["Formas escultóricas", "Cores à medida", "Peças únicas"],
    imagens: [
      { src: velasConchaDuo.url, alt: "Duas velas decorativas em forma de concha sobre livros" },
      { src: velaBorboletas.url, alt: "Vela de duas mechas com borboletas em relevo num vaso rosa em forma de flor" },
    ],
  },
  {
    title: "Coleções Sazonais",
    text: "Edições limitadas criadas para épocas especiais do ano e datas comemorativas.",
    itens: ["Edições limitadas", "Embalagem de oferta", "Conjuntos"],
    imagens: [
      { src: bouquetPascoa.url, alt: "Bouquet de velas de Páscoa com coelhinhos, ovos e flores" },
      { src: velaCereal.url, alt: "Velas em forma de argolas de cereais coloridas numa chávena amarela" },
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
              {grupo.imagens.map((img, i) => (
                <img
                  key={img.src}
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  className={`aspect-[3/4] w-full object-cover ${i === 1 ? "mt-8" : ""}`}
                />
              ))}
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
