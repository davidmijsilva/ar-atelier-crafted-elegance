import { createFileRoute, Link } from "@tanstack/react-router";

import jardimSuculentas from "@/assets/jardim-suculentas.jpeg.asset.json";
import jardimSuculentasAmbiente from "@/assets/jardim-suculentas-ambiente.jpeg.asset.json";
import velasConchaDetalhe from "@/assets/velas-concha-detalhe.jpeg.asset.json";
import bouquetAzul from "@/assets/bouquet-azul.jpeg.asset.json";
import bouquetLacoRosa from "@/assets/bouquet-laco-rosa.jpeg.asset.json";
import bouquetCesto from "@/assets/bouquet-cesto.jpeg.asset.json";
import velaMyLastNerve from "@/assets/vela-my-last-nerve.jpeg.asset.json";
import { Section, SectionHeading } from "@/components/Section";

export const Route = createFileRoute("/decoracao")({
  head: () => ({
    meta: [
      { title: "Peças Decorativas Feitas à Medida | AR atelier Lisboa" },
      {
        name: "description",
        content:
          "Decoração feita à medida: vasos, bandejas, centros de mesa e esculturas personalizadas em cor e formato. Atelier artesanal em Lisboa.",
      },
      { property: "og:title", content: "Peças Decorativas Personalizadas | AR atelier" },
      {
        property: "og:description",
        content: "Vasos, bandejas, centros de mesa e esculturas, personalizados em cor e formato.",
      },
      { property: "og:url", content: "/decoracao" },
    ],
    links: [{ rel: "canonical", href: "/decoracao" }],
  }),
  component: DecoracaoPage,
});

const pecas = [
  {
    nome: "Jardim de Suculentas",
    src: jardimSuculentas.url,
    alt: "Jardim de suculentas em cera de coco e soja numa taça de cerâmica verde",
  },
  {
    nome: "Esculturas em Cera",
    src: velasConchaDetalhe.url,
    alt: "Detalhe do acabamento das velas escultóricas em forma de concha",
  },
  {
    nome: "Bouquet Floral Azul",
    src: bouquetAzul.url,
    alt: "Bouquet de velas em tons de azul pálido com margaridas, rosas e conchas",
  },
  {
    nome: "Bouquet com Laço",
    src: bouquetLacoRosa.url,
    alt: "Bouquet de velas florais em tons rosa e creme com laço branco",
  },
  {
    nome: "Cesto de Flores",
    src: bouquetCesto.url,
    alt: "Cesto com bouquet de velas florais em tons pastel visto de cima",
  },
  {
    nome: "Vela My Last Nerve",
    src: velaMyLastNerve.url,
    alt: "Vela decorativa em jarra de vidro com etiqueta personalizada My Last Nerve",
  },
];

function DecoracaoPage() {
  return (
    <>
      <Section className="pb-8">
        <SectionHeading
          eyebrow="Decoração"
          title="Peças decorativas"
          script="à medida"
          description="Criamos peças de raiz a partir da sua ideia, ajustando cor, formato, textura e escala ao seu espaço."
        />
      </Section>

      <Section className="border-t border-border">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {pecas.map((peca) => (
            <article key={peca.nome}>
              <img
                src={peca.src}
                alt={peca.alt}
                loading="lazy"
                className="aspect-[4/5] w-full object-cover"
              />
              <h2 className="mt-4 text-center font-serif text-xl">{peca.nome}</h2>
            </article>
          ))}
        </div>
      </Section>

      <Section className="border-t border-border">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <h2 className="font-serif text-3xl leading-tight">
              Totalmente <span className="font-script text-4xl">personalizáveis</span>
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground md:text-base">
              Partimos de uma conversa sobre o que imagina, propomos formas e paletas, e produzimos
              a peça à mão. Pode adaptar cor, acabamento, dimensão e conjunto.
            </p>
            <Link
              to="/contactos"
              className="mt-8 inline-block bg-foreground px-6 py-3.5 text-[0.7rem] tracking-brand text-background"
            >
              Solicitar Orçamento de Design
            </Link>
          </div>
          <img
            src={jardimSuculentasAmbiente.url}
            alt="Jardim de suculentas em cera junto a plantas decorativas"
            loading="lazy"
            className="aspect-[4/3] w-full object-cover"
          />
        </div>
      </Section>
    </>
  );
}
