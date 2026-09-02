export const site = {
  name: "AR atelier",
  tagline: "Criar. Experimentar. Dar vida. A todas as ideias.",
  email: "arhandmadecandles@gmail.com",
  phone: "962 107 278",
  phoneHref: "tel:+351918363976",
  whatsapp: "+351 962 106 278",
  whatsappHref:
    "https://wa.me/351962106278?text=" +
    encodeURIComponent("Olá! Gostaria de pedir um orçamento ao AR atelier."),
  instagram: "aratelier.pt",
  instagramHref: "https://instagram.com/aratelier.pt",
  address: "Lisboa, Portugal",
  nif: "227520807",
  complaintsHref: "https://www.livroreclamacoes.pt/inicio",
  web3formsKey: "37510a44-ce6d-4b38-8535-3bb4fd3178c5",
} as const;

export const nav = [
  { to: "/", label: "Início" },
  { to: "/velas", label: "Velas" },
  { to: "/decoracao", label: "Peças Decorativas" },
  { to: "/eventos", label: "Lembranças" },
  { to: "/sobre-nos", label: "Sobre Nós" },
  { to: "/contactos", label: "Contactos" },
] as const;
