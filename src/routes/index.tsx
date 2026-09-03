import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Hand, Sparkles, Ruler } from "lucide-react";

import logoCircular from "@/assets/logo-circular.asset.json";
import testemunho1 from "@/assets/testemunho1.jpeg.asset.json";
import testemunho2 from "@/assets/testemunho2.jpeg.asset.json";
import velaConchaAcesa from "@/assets/vela-concha-acesa.jpeg.asset.json";
import bouquetRosas from "@/assets/bouquet-rosas.jpeg.asset.json";
import lembrancaBatizado from "@/assets/lembranca-batizado-colecao.jpeg.asset.json";
import { Section, SectionHeading } from "@/components/Section";
import { site } from "@/lib/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "AR atelier — Velas Artesanais e Lembranças Personalizadas em Lisboa" },
      {
        name: "description",
        content:
          "Velas artesanais, decoração feita à medida e lembranças personalizadas para casamentos e batizados. Atelier em Lisboa, envios para todo o país.",
      },
      { property: "og:title", content: "AR atelier — Criação Artesanal e Personalizada" },
      {
        property: "og:description",
        content:
          "Velas, decoração e lembranças únicas, feitas à medida para si e para ocasiões especiais.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

const destaques = [
  {
    title: "Velas Aromáticas",
    text: "Cera vegetal e aromas selecionados, em recipientes escolhidos peça a peça.",
    to: "/velas" as const,
    image: velaConchaAcesa.url,
    alt: "Vela artesanal em forma de concha acesa num prato de vidro",
  },
  {
    title: "Peça Decorativa Personalizada",
    text: "Formas, cores e acabamentos pensados para o seu espaço.",
    to: "/decoracao" as const,
    image: bouquetRosas.url,
    alt: "Bouquet de velas em forma de rosas vermelhas num vaso coração preto",
  },
  {
    title: "Lembranças",
    text: "Detalhes que ficam na memória dos seus convidados.",
    to: "/eventos" as const,
    image: lembrancaBatizado.url,
    alt: "Conjunto de lembranças personalizadas de batizado em tons de rosa",
  },
];

const vantagens = [
  {
    icon: Ruler,
    title: "Personalização à Medida",
    text: "Cada peça é pensada de raiz para o cliente ou para o evento em causa.",
  },
  {
    icon: Hand,
    title: "Processo 100% Artesanal",
    text: "Tudo é feito à mão, em pequenas quantidades, com tempo e cuidado.",
  },
  {
    icon: Sparkles,
    title: "Atenção ao Detalhe",
    text: "Da conceção à apresentação final, nada é deixado ao acaso.",
  },
];

const faq = [
  {
    q: "Como posso personalizar a minha peça?",
    a: "Basta enviar-nos a sua ideia através do formulário ou do WhatsApp. Falamos consigo sobre cores, formatos, aromas e apresentação, e avançamos apenas depois de tudo estar aprovado.",
  },
  {
    q: "Quais os prazos de entrega?",
    a: "O prazo depende do tipo de peça e da quantidade. Indicamos sempre uma data concreta na resposta ao seu pedido de orçamento.",
  },
  {
    q: "Enviam para todo o país?",
    a: "Sim. Fazemos entregas em mãos na zona de Lisboa e envios para todo o país.",
  },
  {
    q: "Aceitam encomendas grandes de lembranças para eventos?",
    a: "Sim. Trabalhamos regularmente lembranças para casamentos, batizados e chás de bebé. Diga-nos a data e a quantidade prevista para prepararmos uma proposta.",
  },
];

function Home() {
  return (
    <>
      <Section className="py-14 md:py-20">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div>
            <p className="text-[0.68rem] tracking-brand text-muted-foreground">
              Atelier artesanal · Lisboa
            </p>
            <h1 className="mt-5 font-serif text-4xl leading-[1.1] md:text-6xl">
              AR <span className="font-script text-5xl md:text-7xl">atelier</span>
              <span className="mt-3 block text-2xl text-muted-foreground md:text-3xl">
                Criar. Experimentar. Dar vida. A todas as ideias.
              </span>
            </h1>
            <p className="mt-6 max-w-md text-sm leading-relaxed text-muted-foreground md:text-base">
              Velas, decoração e lembranças únicas, feitas à medida para si e para ocasiões
              especiais.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/contactos"
                className="bg-foreground px-6 py-3.5 text-[0.7rem] tracking-brand text-background transition-opacity hover:opacity-90"
              >
                Pedir Orçamento
              </Link>
              <a
                href={site.whatsappHref}
                target="_blank"
                rel="noreferrer"
                className="border border-foreground px-6 py-3.5 text-[0.7rem] tracking-brand transition-colors hover:bg-foreground hover:text-background"
              >
                Falar por WhatsApp
              </a>
            </div>
          </div>
          <div className="flex justify-center">
            <img
              src={logoCircular.url}
              alt="Ilustração de linha do AR atelier: artesã a verter cera numa vela"
              className="w-full max-w-md mix-blend-multiply"
              width={900}
              height={960}
            />
          </div>
        </div>
      </Section>

      <Section className="border-t border-border">
        <SectionHeading
          eyebrow="Em destaque"
          title="O que criamos no"
          script="atelier"
          description="Peças feitas à mão, uma a uma, para quem procura algo verdadeiramente seu."
        />
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {destaques.map((item) => (
            <article key={item.title}>
              <img
                src={item.image}
                alt={item.alt}
                loading="lazy"
                decoding="async"
                className="aspect-[4/5] w-full object-cover"
              />
              <h3 className="mt-5 font-serif text-2xl">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
              <Link
                to={item.to}
                className="mt-4 inline-block border-b border-foreground pb-1 text-[0.68rem] tracking-brand"
              >
                Saber Mais
              </Link>
            </article>
          ))}
        </div>
      </Section>

      <Section className="border-t border-border">
        <div className="grid gap-10 md:grid-cols-3">
          {vantagens.map(({ icon: Icon, title, text }) => (
            <div key={title} className="text-center md:text-left">
              <Icon className="mx-auto size-6 text-gold md:mx-0" aria-hidden />
              <h3 className="mt-4 font-serif text-2xl">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section className="border-t border-border">
        <SectionHeading
          eyebrow="Testemunhos"
          title="O que dizem os nossos"
          script="clientes"
          description="Palavras de quem já confiou no AR atelier para tornar momentos ainda mais especiais."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <figure className="overflow-hidden rounded-sm border border-border bg-card p-2 shadow-sm">
            <img
              src={testemunho1.url}
              alt="Testemunho de cliente: 'Adorei Ana, perfeito e com mto significado. Vou divulgar o teu trabalho.'"
              className="w-full"
              loading="lazy"
              decoding="async"
            />
          </figure>
          <figure className="overflow-hidden rounded-sm border border-border bg-card p-2 shadow-sm">
            <img
              src={testemunho2.url}
              alt="Testemunho de cliente: 'A minha mãe adorou! Gostou tanto que diz que nem vai queimar as velas porque são demasiado bonitas.'"
              className="w-full"
              loading="lazy"
              decoding="async"
            />
          </figure>
        </div>
      </Section>

      <Section className="border-t border-border">
        <SectionHeading eyebrow="FAQ" title="Perguntas" script="frequentes" />
        <Accordion type="single" collapsible className="mx-auto mt-10 max-w-2xl">
          {faq.map((item) => (
            <AccordionItem key={item.q} value={item.q}>
              <AccordionTrigger className="text-left font-serif text-lg">{item.q}</AccordionTrigger>
              <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                {item.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Section>

      <Section className="border-t border-border text-center">
        <h2 className="mx-auto max-w-2xl font-serif text-3xl leading-tight md:text-4xl">
          Pronto para dar vida às suas <span className="font-script text-4xl md:text-5xl">ideias</span>?
        </h2>
        <p className="mt-4 text-sm text-muted-foreground">Fale connosco hoje mesmo.</p>
        <Link
          to="/contactos"
          className="mt-8 inline-block bg-foreground px-8 py-3.5 text-[0.7rem] tracking-brand text-background"
        >
          Pedir Orçamento
        </Link>
      </Section>
    </>
  );
}
