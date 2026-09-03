import { createFileRoute } from "@tanstack/react-router";

import { Section } from "@/components/Section";
import { site } from "@/lib/site";

export const Route = createFileRoute("/aviso-legal")({
  head: () => ({
    meta: [
      { title: "Avisos Legais e Termos de Utilização | AR atelier" },
      {
        name: "description",
        content:
          "Informação legal do AR atelier: identificação, condições de encomenda por medida, resolução alternativa de litígios e Livro de Reclamações Eletrónico.",
      },
      { property: "og:title", content: "Avisos Legais | AR atelier" },
      {
        property: "og:description",
        content: "Identificação, termos de utilização e informação ao consumidor do AR atelier.",
      },
      { property: "og:url", content: "/aviso-legal" },
      { name: "robots", content: "noindex" },
    ],
    links: [{ rel: "canonical", href: "/aviso-legal" }],
  }),
  staticData: { sitemap: false },
  component: AvisoLegalPage,
});

function AvisoLegalPage() {
  return (
    <Section className="max-w-3xl">
      <h1 className="font-serif text-4xl">Avisos Legais</h1>

      <div className="mt-10 space-y-8 text-sm leading-relaxed text-muted-foreground">
        <section>
          <h2 className="font-serif text-2xl text-foreground">Identificação</h2>
          <p className="mt-3">
            AR atelier
            <br />
            Morada: {site.address}
            <br />
            NIF: {site.nif}
            <br />
            Email: {site.email} · Telefone: {site.phone}
          </p>
        </section>

        <section>
          <h2 className="font-serif text-2xl text-foreground">Natureza da atividade</h2>
          <p className="mt-3">
            O AR atelier trabalha exclusivamente por encomenda e de forma digital. Este website é
            institucional e informativo: não constitui uma loja online, não permite compras nem
            pagamentos e não apresenta preços vinculativos. Não existe espaço físico aberto ao
            público — todos os pedidos são tratados por email, telefone ou WhatsApp.
          </p>
        </section>

        <section>
          <h2 className="font-serif text-2xl text-foreground">Encomendas e orçamentos</h2>
          <p className="mt-3">
            Os pedidos enviados através dos formulários deste website não constituem uma encomenda
            confirmada. Cada pedido é analisado individualmente e respondido com um orçamento
            personalizado. A encomenda só se considera aceite após confirmação escrita entre as
            partes, incluindo descrição, valor e condições de entrega.
          </p>
          <p className="mt-3">
            Tratando-se de peças feitas à medida e personalizadas, o direito de livre resolução pode
            não ser aplicável, nos termos do Decreto-Lei n.º 24/2014, quando os bens sejam
            confecionados de acordo com especificações do cliente ou claramente personalizados. Os
            direitos de conformidade previstos no Decreto-Lei n.º 84/2021 mantêm-se garantidos.
          </p>
        </section>

        <section>
          <h2 className="font-serif text-2xl text-foreground">Segurança do produto</h2>
          <p className="mt-3">
            As velas são artigos decorativos com chama viva. Devem ser utilizadas em superfícies
            resistentes ao calor, longe de materiais inflamáveis, crianças e animais, e nunca
            deixadas sem vigilância. Cada peça é acompanhada de instruções de utilização.
          </p>
        </section>

        <section>
          <h2 className="font-serif text-2xl text-foreground">Propriedade intelectual</h2>
          <p className="mt-3">
            Os textos, fotografias, marca e elementos gráficos deste website são propriedade do AR
            atelier e não podem ser reproduzidos sem autorização prévia.
          </p>
        </section>

        <section>
          <h2 className="font-serif text-2xl text-foreground">Resolução de litígios</h2>
          <p className="mt-3">
            Em caso de litígio de consumo, o consumidor pode recorrer ao{" "}
            <a
              href={site.complaintsHref}
              target="_blank"
              rel="noreferrer"
              className="text-foreground underline"
            >
              Livro de Reclamações Eletrónico
            </a>{" "}
            e às entidades de resolução alternativa de litígios competentes, nos termos da Lei n.º
            144/2015. Mais informação em{" "}
            <a
              href="https://www.consumidor.gov.pt"
              target="_blank"
              rel="noreferrer"
              className="text-foreground underline"
            >
              consumidor.gov.pt
            </a>
            .
          </p>
        </section>
      </div>
    </Section>
  );
}
