import { Link } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { z } from "zod";

import { site } from "@/lib/site";

const baseSchema = z.object({
  nome: z.string().trim().min(2, "Indique o seu nome.").max(100),
  email: z.string().trim().email("Indique um email válido.").max(255),
  telefone: z.string().trim().max(40).optional(),
  tipo: z.string().trim().max(80).optional(),
  data: z.string().trim().max(40).optional(),
  quantidade: z.string().trim().max(40).optional(),
  mensagem: z.string().trim().min(10, "Descreva a sua ideia (mín. 10 caracteres).").max(1500),
});

type Variant = "geral" | "evento";

export function QuoteForm({
  variant = "geral",
  subject,
  tipos,
}: {
  variant?: Variant;
  subject: string;
  tipos: string[];
}) {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [errorMessage, setErrorMessage] = useState("");
  const [consent, setConsent] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries()) as Record<string, string>;

    if (data["website"]) return; // honeypot

    const parsed = baseSchema.safeParse(data);
    if (!parsed.success) {
      const next: Record<string, string> = {};
      for (const issue of parsed.error.issues) {
        const key = String(issue.path[0]);
        if (!next[key]) next[key] = issue.message;
      }
      setErrors(next);
      return;
    }

    setErrors({});
    setStatus("sending");
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: site.web3formsKey,
          subject,
          from_name: "Website AR atelier",
          to: site.email,
          ...parsed.data,
        }),
      });
      const result = (await response.json()) as { success?: boolean; message?: string };
      if (!response.ok || !result.success) {
        throw new Error(result.message ?? "Não foi possível enviar o pedido.");
      }
      form.reset();
      setStatus("success");
    } catch (error) {
      setErrorMessage(
        error instanceof Error ? error.message : "Não foi possível enviar o pedido.",
      );
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="border border-border bg-card p-8 text-center">
        <p className="font-script text-3xl">Obrigada!</p>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
          O seu pedido foi enviado com sucesso. Responderemos por email o mais breve possível.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-6 border border-foreground px-5 py-2.5 text-[0.7rem] tracking-brand transition-colors hover:bg-foreground hover:text-background"
        >
          Enviar outro pedido
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      <input type="text" name="website" tabIndex={-1} autoComplete="off" className="hidden" />

      <Field label="Nome" name="nome" error={errors["nome"]} required />
      <Field label="Email" name="email" type="email" error={errors["email"]} required />
      <Field label="Telefone (opcional)" name="telefone" error={errors["telefone"]} />

      <div>
        <label htmlFor="tipo" className="text-[0.68rem] tracking-brand text-muted-foreground">
          Tipo de pedido
        </label>
        <select
          id="tipo"
          name="tipo"
          defaultValue={tipos[0]}
          className="mt-2 w-full border border-input bg-card px-4 py-3 text-sm outline-none focus:border-gold"
        >
          {tipos.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
      </div>

      {variant === "evento" ? (
        <div className="grid gap-5 sm:grid-cols-2">
          <Field label="Data do evento" name="data" type="date" error={errors["data"]} />
          <Field
            label="Quantidade estimada"
            name="quantidade"
            error={errors["quantidade"]}
            placeholder="Ex.: 80 lembranças"
          />
        </div>
      ) : null}

      <div>
        <label htmlFor="mensagem" className="text-[0.68rem] tracking-brand text-muted-foreground">
          Mensagem / ideias
        </label>
        <textarea
          id="mensagem"
          name="mensagem"
          rows={6}
          maxLength={1500}
          required
          className="mt-2 w-full border border-input bg-card px-4 py-3 text-sm outline-none focus:border-gold"
          placeholder="Conte-nos o que imagina: aromas, cores, formatos, ocasião..."
        />
        {errors["mensagem"] ? (
          <p className="mt-1 text-xs text-destructive">{errors["mensagem"]}</p>
        ) : null}
      </div>

      <div className="flex items-start gap-3 border border-border bg-secondary/40 p-4">
        <input
          id="consentimento"
          name="consentimento"
          type="checkbox"
          checked={consent}
          onChange={(e) => setConsent(e.target.checked)}
          className="mt-0.5 size-4 shrink-0 accent-foreground"
        />
        <label htmlFor="consentimento" className="text-xs leading-relaxed text-muted-foreground">
          Autorizo o AR atelier a tratar os dados que indiquei acima com a finalidade exclusiva de
          responder ao meu pedido de informação ou de orçamento e de gerir uma eventual encomenda.
          Declaro ter lido a{" "}
          <Link to="/politica-privacidade" className="text-foreground underline">
            Política de Privacidade
          </Link>
          .
        </label>
      </div>
      {errors["consentimento"] ? (
        <p className="-mt-3 text-xs text-destructive">{errors["consentimento"]}</p>
      ) : null}

      {status === "error" ? (
        <p className="text-xs text-destructive">
          {errorMessage} Também pode escrever para {site.email}.
        </p>
      ) : null}

      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full bg-foreground px-6 py-3.5 text-[0.7rem] tracking-brand text-background transition-opacity hover:opacity-90 disabled:opacity-60 sm:w-auto"
      >
        {status === "sending" ? "A enviar..." : "Enviar pedido"}
      </button>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  error,
  required,
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  error?: string | undefined;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <div>
      <label htmlFor={name} className="text-[0.68rem] tracking-brand text-muted-foreground">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder ?? ""}
        className="mt-2 w-full border border-input bg-card px-4 py-3 text-sm outline-none focus:border-gold"
      />
      {error ? <p className="mt-1 text-xs text-destructive">{error}</p> : null}
    </div>
  );
}
