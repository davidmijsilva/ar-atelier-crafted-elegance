import { createFileRoute, Link } from "@tanstack/react-router";

import { Section } from "@/components/Section";
import { site } from "@/lib/site";

export const Route = createFileRoute("/politica-cookies")({
  head: () => ({
    meta: [
      { title: "Política de Cookies | AR atelier" },
      {
        name: "description",
        content:
          "Política de cookies do AR atelier: que tecnologias de armazenamento utilizamos, para que servem e como as pode gerir no seu navegador.",
      },
      { property: "og:title", content: "Política de Cookies | AR atelier" },
      {
        property: "og:description",
        content: "Informação sobre cookies e armazenamento local utilizado neste website.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://ar-atelier-crafted-elegance.lovable.app/politica-cookies" },
      { name: "robots", content: "noindex" },
    ],
    links: [
      {
        rel: "canonical",
        href: "https://ar-atelier-crafted-elegance.lovable.app/politica-cookies",
      },
    ],
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
            Cookies são pequenos ficheiros guardados no seu dispositivo quando visita um website.
            Podem servir para garantir o funcionamento do site, memorizar preferências ou recolher
            estatísticas de utilização.
          </p>
        </section>

        <section>
          <h2 className="font-serif text-2xl text-foreground">Que cookies utilizamos</h2>
          <p className="mt-3">
            Este website <strong className="text-foreground">não utiliza cookies</strong> de
            publicidade, de redes sociais nem de análise de tráfego, e não faz qualquer perfilagem
            dos visitantes.
          </p>
          <p className="mt-3">
            Utilizamos apenas armazenamento local (localStorage) estritamente necessário, com a
            seguinte finalidade:
          </p>
          <ul className="mt-3 list-disc space-y-2 pl-5">
            <li>
              <span className="text-foreground">ar-atelier-cookie-consent</span> — guarda a sua
              escolha no aviso de cookies para que este não volte a ser apresentado. Fica no seu
              navegador até que limpe os dados de navegação.
            </li>
          </ul>
          <p className="mt-3">
            Este armazenamento é isento de consentimento prévio por ser estritamente necessário,
            nos termos da legislação aplicável.
          </p>
        </section>

        <section>
          <h2 className="font-serif text-2xl text-foreground">Serviços de terceiros</h2>
          <p className="mt-3">
            O envio dos formulários é processado pelo serviço Web3Forms, que recebe apenas os dados
            que submete e não coloca cookies neste website. As fontes tipográficas são carregadas a
            partir do Google Fonts, o que implica a comunicação do seu endereço IP a esse serviço,
            sem colocação de cookies.
          </p>
        </section>

        <section>
          <h2 className="font-serif text-2xl text-foreground">Como gerir</h2>
          <p className="mt-3">
            Pode apagar ou bloquear cookies e armazenamento local nas definições do seu navegador. O
            website continuará a funcionar normalmente; apenas o aviso de cookies voltará a ser
            apresentado.
          </p>
        </section>

        <section>
          <h2 className="font-serif text-2xl text-foreground">Contacto</h2>
          <p className="mt-3">
            Dúvidas sobre esta política: {site.email}. Consulte também a{" "}
            <Link to="/politica-privacidade" className="text-foreground underline">
              Política de Privacidade
            </Link>
            .
          </p>
        </section>
      </div>
    </Section>
  );
}
