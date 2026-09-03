import { site } from "@/lib/site";

export function LivroReclamacoesBadge({ className }: { className?: string }) {
  return (
    <a
      href={site.complaintsHref}
      target="_blank"
      rel="noreferrer"
      aria-label="Livro de Reclamações Eletrónico (abre em nova janela)"
      className={className}
    >
      <svg
        width="176"
        height="48"
        viewBox="0 0 176 48"
        role="img"
        aria-hidden="true"
        focusable="false"
      >
        <rect x="0.5" y="0.5" width="175" height="47" rx="4" fill="#F5C518" stroke="#1A1A1A" />
        <g transform="translate(12 11)">
          <rect x="0" y="0" width="22" height="26" rx="2" fill="#1A1A1A" />
          <rect x="4" y="4" width="14" height="18" rx="1" fill="#F5C518" />
          <rect x="6" y="8" width="10" height="1.6" fill="#1A1A1A" />
          <rect x="6" y="12" width="10" height="1.6" fill="#1A1A1A" />
          <rect x="6" y="16" width="7" height="1.6" fill="#1A1A1A" />
        </g>
        <text
          x="44"
          y="21"
          fill="#1A1A1A"
          fontFamily="Karla, Arial, sans-serif"
          fontSize="11"
          fontWeight="700"
          letterSpacing="0.5"
        >
          LIVRO DE
        </text>
        <text
          x="44"
          y="35"
          fill="#1A1A1A"
          fontFamily="Karla, Arial, sans-serif"
          fontSize="11"
          fontWeight="700"
          letterSpacing="0.5"
        >
          RECLAMAÇÕES
        </text>
      </svg>
    </a>
  );
}
