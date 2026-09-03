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

  function decide(value: "accepted" | "essential") {
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
      role="dialog"
      aria-label="Informação sobre cookies"
      className="fixed inset-x-0 bottom-0 z-[60] border-t border-border bg-background/98 backdrop-blur"
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 py-5 pb-24 sm:flex-row sm:items-center sm:justify-between sm:pr-44 sm:pb-5">
        <p className="max-w-2xl text-xs leading-relaxed text-muted-foreground">
          Este website utiliza apenas armazenamento local estritamente necessário ao seu
          funcionamento (por exemplo, para guardar esta escolha). Não usamos cookies de publicidade
          nem de análise de tráfego. Saiba mais na{" "}
          <Link to="/politica-cookies" className="text-foreground underline">
            Política de Cookies
          </Link>
          .
        </p>
        <div className="flex shrink-0 gap-2">
          <button
            type="button"
            onClick={() => decide("essential")}
            className="border border-input px-4 py-2.5 text-[0.68rem] tracking-brand"
          >
            Apenas essenciais
          </button>
          <button
            type="button"
            onClick={() => decide("accepted")}
            className="bg-foreground px-4 py-2.5 text-[0.68rem] tracking-brand text-background"
          >
            Compreendi
          </button>
        </div>
      </div>
    </div>
  );
}
