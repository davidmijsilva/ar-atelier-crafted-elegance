import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";

const STORAGE_KEY = "ar-atelier-cookie-consent";

export function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      if (!localStorage.getItem(STORAGE_KEY)) setVisible(true);
    } catch {
      /* armazenamento indisponível */
    }
  }, []);

  function decide(value: "aceite" | "recusado") {
    try {
      localStorage.setItem(STORAGE_KEY, value);
    } catch {
      /* armazenamento indisponível */
    }
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Consentimento de cookies"
      className="fixed inset-x-0 bottom-0 z-60 border-t border-border bg-card/95 backdrop-blur"
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 py-5 md:flex-row md:items-center md:justify-between">
        <p className="max-w-2xl text-xs leading-relaxed text-muted-foreground">
          Este website utiliza apenas cookies estritamente necessários ao seu funcionamento. Só
          utilizaremos cookies opcionais (estatísticas) com o seu consentimento. Saiba mais na{" "}
          <Link to="/politica-cookies" className="text-foreground underline">
            Política de Cookies
          </Link>{" "}
          e na{" "}
          <Link to="/politica-privacidade" className="text-foreground underline">
            Política de Privacidade
          </Link>
          .
        </p>
        <div className="flex shrink-0 gap-3">
          <button
            type="button"
            onClick={() => decide("recusado")}
            className="border border-foreground px-5 py-2.5 text-[0.7rem] tracking-brand transition-colors hover:bg-foreground hover:text-background"
          >
            Recusar opcionais
          </button>
          <button
            type="button"
            onClick={() => decide("aceite")}
            className="bg-foreground px-5 py-2.5 text-[0.7rem] tracking-brand text-background transition-opacity hover:opacity-90"
          >
            Aceitar
          </button>
        </div>
      </div>
    </div>
  );
}
