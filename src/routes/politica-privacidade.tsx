import { createFileRoute } from "@tanstack/react-router";

import { Section } from "@/components/Section";
import { site } from "@/lib/site";

export const Route = createFileRoute("/politica-privacidade")({
  head: () => ({
    meta: [
      { title: "Política de Privacidade e Informação Legal | AR atelier" },
      {
        name: "description",
        content:
          "Política de privacidade do AR atelier: que dados recolhemos através dos formulários, para que são usados e como exercer os seus direitos.",
      },
      { property: "og:title", content: "Política de Privacidade | AR atelier" },
      {
        property: "og:description",
        content: "Informação legal e tratamento de dados pessoais do AR atelier.",
      },
      { property: "og:url", content: "/politica-privacidade" },
      { name: "robots", content: "noindex" },
    ],
    links: [{ rel: "canonical", href: "/politica-privacidade" }],
  }),
  staticData: { sitemap: false },
  component: PrivacidadePage,
});

function PrivacidadePage() {
  return (
    <Section className="max-w-3xl">
      <h1 className="font-serif text-4xl">Política de Privacidade</h1>

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
          <h2 className="font-serif text-2xl text-foreground">Dados recolhidos</h2>
          <p className="mt-3">
            Através dos formulários deste website recolhemos apenas os dados que nos fornece
            voluntariamente: nome, email, telefone (opcional) e o conteúdo da sua mensagem, incluindo
            dados sobre o evento quando aplicável.
          </p>
        </section>

        <section>
          <h2 className="font-serif text-2xl text-foreground">Finalidade</h2>
          <p className="mt-3">
            Os dados são utilizados exclusivamente para responder ao seu pedido de informação ou de
            orçamento e para a gestão de eventuais encomendas. Não são usados para marketing sem o
            seu consentimento nem vendidos a terceiros.
          </p>
        </section>

        <section>
          <h2 className="font-serif text-2xl text-foreground">Processamento dos formulários</h2>
          <p className="mt-3">
            O envio dos formulários é processado pelo serviço Web3Forms, que encaminha a sua
            mensagem para o email do atelier. Não é criada qualquer conta nem armazenamos os seus
            dados numa base de dados deste website.
          </p>
        </section>

        <section>
          <h2 className="font-serif text-2xl text-foreground">Os seus direitos</h2>
          <p className="mt-3">
            Pode solicitar, a qualquer momento, o acesso, a retificação ou o apagamento dos seus
            dados pessoais através do email {site.email}.
          </p>
        </section>

        <section>
          <h2 className="font-serif text-2xl text-foreground">Resolução de litígios</h2>
          <p className="mt-3">
            Em caso de litígio, o consumidor pode recorrer ao{" "}
            <a
              href={site.complaintsHref}
              target="_blank"
              rel="noreferrer"
              className="text-foreground underline"
            >
              Livro de Reclamações
            </a>{" "}
            eletrónico.
          </p>
        </section>
      </div>
    </Section>
  );
}
