import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";

const STORAGE_KEY = "ar-atelier-cookie-consent";

export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      if (!localStorage.getItem(STORAGE_KEY)) setVisible(true);
    } catch {
      // armazenamento indisponível — não mostrar
    }
  }, []);

  useEffect(() => {
    if (!visible) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [visible]);

  function decide(value: "accepted" | "rejected") {
    try {
      localStorage.setItem(STORAGE_KEY, value);
    } catch {
      // ignorar
    }
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-end justify-center bg-foreground/60 backdrop-blur-sm sm:items-center"
      aria-hidden={false}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="cookie-title"
        className="max-h-[90vh] w-full max-w-lg overflow-y-auto border border-border bg-background p-6 shadow-xl sm:p-8"
      >
        <h2 id="cookie-title" className="font-serif text-2xl">
          Privacidade e cookies
        </h2>
        <p className="mt-4 text-xs leading-relaxed text-muted-foreground">
          Utilizamos apenas armazenamento local estritamente necessário ao funcionamento do site
          (por exemplo, para guardar esta escolha). Não utilizamos cookies de publicidade, de redes
          sociais nem de análise de tráfego, e não fazemos qualquer perfilagem dos visitantes.
        </p>
        <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
          Para continuar a navegar, indique a sua preferência. Pode alterá-la a qualquer momento
          limpando os dados do seu navegador. Saiba mais na{" "}
          <Link to="/politica-cookies" className="text-foreground underline">
            Política de Cookies
          </Link>{" "}
          e na{" "}
          <Link to="/politica-privacidade" className="text-foreground underline">
            Política de Privacidade
          </Link>
          .
        </p>
        <div className="mt-6 flex flex-col gap-2 sm:flex-row">
          <button
            type="button"
            onClick={() => decide("rejected")}
            className="flex-1 border border-input px-4 py-3 text-[0.68rem] tracking-brand"
          >
            Rejeitar não essenciais
          </button>
          <button
            type="button"
            onClick={() => decide("accepted")}
            className="flex-1 bg-foreground px-4 py-3 text-[0.68rem] tracking-brand text-background"
          >
            Aceitar
          </button>
        </div>
      </div>
    </div>
  );
}
