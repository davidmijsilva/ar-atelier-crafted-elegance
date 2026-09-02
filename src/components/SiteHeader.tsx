import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useState } from "react";

import logoCircular from "@/assets/logo-circular.asset.json";
import { nav } from "@/lib/site";

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/90 backdrop-blur">
      <div className="mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-3 lg:flex lg:justify-between">
        <Link to="/" className="flex min-w-0 items-center gap-3" onClick={() => setOpen(false)}>
          <img
            src={logoCircular.url}
            alt="AR atelier — ilustração de linha do logótipo"
            className="h-12 w-12 shrink-0 rounded-full object-cover"
            width={48}
            height={48}
          />
          <span className="min-w-0">
            <span className="block truncate font-serif text-xl leading-none tracking-[0.18em]">
              AR
            </span>
            <span className="block truncate font-script text-lg leading-tight">atelier</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: item.to === "/" }}
              className="text-[0.72rem] tracking-brand text-muted-foreground transition-colors hover:text-foreground data-[status=active]:text-foreground"
            >
              {item.label}
            </Link>
          ))}
          <Link
            to="/contactos"
            className="border border-foreground px-4 py-2 text-[0.7rem] tracking-brand transition-colors hover:bg-foreground hover:text-background"
          >
            Pedir Orçamento
          </Link>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          className="shrink-0 p-2 lg:hidden"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {open ? (
        <nav className="border-t border-border/70 bg-background px-5 py-4 lg:hidden">
          <ul className="flex flex-col">
            {nav.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  onClick={() => setOpen(false)}
                  activeOptions={{ exact: item.to === "/" }}
                  className="block py-3 text-xs tracking-brand text-muted-foreground data-[status=active]:text-foreground"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            to="/contactos"
            onClick={() => setOpen(false)}
            className="mt-3 block border border-foreground px-4 py-3 text-center text-[0.7rem] tracking-brand"
          >
            Pedir Orçamento
          </Link>
        </nav>
      ) : null}
    </header>
  );
}
