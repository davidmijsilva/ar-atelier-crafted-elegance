import { createFileRoute, Link } from "@tanstack/react-router";

import jardimSuculentas from "@/assets/jardim-suculentas.jpeg.asset.json";
import jardimSuculentasTopo from "@/assets/jardim-suculentas-topo.jpeg.asset.json";
import jardimSuculentasAmbiente from "@/assets/jardim-suculentas-ambiente.jpeg.asset.json";
import bouquetRosas from "@/assets/bouquet-rosas.jpeg.asset.json";
import velasConchaDuo from "@/assets/velas-concha-duo.jpeg.asset.json";
import velasConchaDetalhe from "@/assets/velas-concha-detalhe.jpeg.asset.json";
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

const pecas = ["Vasos", "Bandejas", "Centros de Mesa", "Esculturas"];

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
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {pecas.map((peca) => (
            <article key={peca}>
              <ImagePlaceholder label={peca} />
              <h2 className="mt-4 font-serif text-xl">{peca}</h2>
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
          <div className="grid grid-cols-2 gap-4">
            <ImagePlaceholder label="Processo" ratio="aspect-square" />
            <ImagePlaceholder label="Acabamento" ratio="aspect-square" />
          </div>
        </div>
      </Section>
    </>
  );
}
