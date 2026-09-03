import { createFileRoute } from "@tanstack/react-router";

import { Section } from "@/components/Section";
import { site } from "@/lib/site";

export const Route = createFileRoute("/politica-cookies")({
  head: () => ({
    meta: [
      { title: "Política de Cookies | AR atelier" },
      {
        name: "description",
        content:
          "Que cookies utiliza o website do AR atelier, para que servem e como pode gerir ou retirar o seu consentimento.",
      },
      { property: "og:title", content: "Política de Cookies | AR atelier" },
      {
        property: "og:description",
        content: "Informação sobre cookies e consentimento no website do AR atelier.",
      },
      { property: "og:url", content: "/politica-cookies" },
      { name: "robots", content: "noindex" },
    ],
    links: [{ rel: "canonical", href: "/politica-cookies" }],
  }),
  staticData: { sitemap: false },
  component: CookiesPage,
});

function CookiesPage() {
  return (
    <Section className="max-w-3xl">
      <h1 className="font-serif text-4xl">Política de Cookies</h1>

      <div className="mt-10 space-y-8 text-sm leading-relaxed text-muted-foreground">
        <section>
          <h2 className="font-serif text-2xl text-foreground">O que são cookies</h2>
          <p className="mt-3">
            Cookies são pequenos ficheiros de texto guardados no seu dispositivo quando visita um
            website. Permitem, por exemplo, recordar preferências ou garantir o funcionamento
            correto das páginas.
          </p>
        </section>

        <section>
          <h2 className="font-serif text-2xl text-foreground">Cookies utilizados</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5">
            <li>
              <span className="text-foreground">Estritamente necessários:</span> garantem o
              funcionamento do website e o registo da sua escolha no banner de consentimento
              (guardada localmente no seu navegador). Não requerem consentimento prévio.
            </li>
            <li>
              <span className="text-foreground">Estatísticos ou de marketing:</span> não são
              utilizados atualmente. Caso venham a ser adotados, apenas serão ativados após o seu
              consentimento expresso no banner.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="font-serif text-2xl text-foreground">Serviços de terceiros</h2>
          <p className="mt-3">
            O website carrega tipos de letra a partir do Google Fonts e envia os formulários através
            do serviço Web3Forms. Estes serviços podem registar dados técnicos (como o endereço IP)
            necessários à entrega do conteúdo ou da mensagem.
          </p>
        </section>

        <section>
          <h2 className="font-serif text-2xl text-foreground">Gerir o consentimento</h2>
          <p className="mt-3">
            Pode alterar ou retirar o seu consentimento a qualquer momento, apagando os dados do
            website no seu navegador (o banner voltará a ser apresentado) ou bloqueando cookies nas
            definições do navegador. Para qualquer questão, contacte-nos através de {site.email}.
          </p>
        </section>
      </div>
    </Section>
  );
}
