import { Link } from "@tanstack/react-router";

import { LivroReclamacoesBadge } from "@/components/LivroReclamacoesBadge";
import { Instagram, Mail, MapPin, Phone } from "lucide-react";

import logoLettering from "@/assets/logo-lettering.asset.json";
import { nav, site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer id="site-footer" className="mt-24 border-t border-border bg-secondary/50">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-3">
        <div>
          <img
            src={logoLettering.url}
            alt="Logótipo AR atelier"
            className="h-20 w-auto mix-blend-multiply"
            loading="lazy"
            decoding="async"
          />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
            Velas, peças decorativas e lembranças personalizadas, feitas à mão em Lisboa. 
          </p>
          <p className="mt-4 max-w-xs text-xs leading-relaxed text-muted-foreground">
            Atelier a trabalhar por encomenda e de forma digital. Sem loja online e sem espaço
            físico aberto ao público.
          </p>
          <LivroReclamacoesBadge className="mt-6 inline-block" />
        </div>

        <div>
          <h3 className="text-[0.7rem] tracking-brand text-muted-foreground">Navegação</h3>
          <ul className="mt-4 space-y-2 text-sm">
            {nav.map((item) => (
              <li key={item.to}>
                <Link to={item.to} className="text-foreground/80 hover:text-foreground">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-[0.7rem] tracking-brand text-muted-foreground">Contactos</h3>
          <ul className="mt-4 space-y-3 text-sm text-foreground/80">
            <li className="flex items-start gap-2">
              <Mail className="mt-0.5 size-4 shrink-0 text-gold" />
              <a href={`mailto:${site.email}`} className="break-all hover:text-foreground">
                {site.email}
              </a>
            </li>
            <li className="flex items-start gap-2">
              <Phone className="mt-0.5 size-4 shrink-0 text-gold" />
              <a href={site.phoneHref} className="hover:text-foreground">
                {site.phone}
              </a>
            </li>
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 size-4 shrink-0 text-gold" />
              <span>{site.address}</span>
            </li>
            <li className="flex items-start gap-2">
              <Instagram className="mt-0.5 size-4 shrink-0 text-gold" />
              <a
                href={site.instagramHref}
                target="_blank"
                rel="noreferrer"
                className="hover:text-foreground"
              >
                @{site.instagram}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-5 py-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} AR atelier. Todos os direitos reservados.
          </p>
          <div className="flex flex-wrap gap-x-5 gap-y-2">
            <Link to="/politica-privacidade" className="hover:text-foreground">
              Política de Privacidade
            </Link>
            <Link to="/politica-cookies" className="hover:text-foreground">
              Política de Cookies
            </Link>
            <Link to="/aviso-legal" className="hover:text-foreground">
              Avisos Legais
            </Link>
            <a
              href={site.complaintsHref}
              target="_blank"
              rel="noreferrer"
              className="hover:text-foreground"
            >
              Livro de Reclamações
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
