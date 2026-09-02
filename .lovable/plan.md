# AR Atelier — Website institucional

Website em Português de Portugal, minimalista e premium, focado em apresentar a marca e gerar pedidos de orçamento.

## Identidade visual

- Paleta: creme/bege claro como fundo, preto/cinza escuro para texto e linhas, dourado suave e verde-sálvia como realces pontuais.
- Tipografia: serifada elegante (Cormorant Garamond) nos títulos, cursiva delicada (Style Script) em subtítulos e ênfases, sans-serif limpa (Karla) no texto corrido.
- Logótipo: a ilustração de linha circular no cabeçalho e como favicon; o lettering "AR atelier" no hero e rodapé.
- Muito espaço branco, linhas finas, sem sombras pesadas, animações discretas.

## Páginas

1. `/` — Início
   - Header fixo com logótipo e navegação (Início, Velas, Peças Decorativas, Eventos, Sobre Nós, Contactos), menu mobile.
   - Hero: ilustração de linha em destaque, título "AR atelier. Criar. Experimentar. Dar Vida. A Todas as Ideias.", subtítulo sobre velas, decoração e lembranças, CTA "Pedir Orçamento".
   - Em Destaque: grelha de 3 cartões (Velas Aromáticas, Peça Decorativa Personalizada, Lembranças de Evento) com "Saber Mais".
   - Vantagens: Personalização à Medida, Processo 100% Artesanal, Atenção ao Detalhe.
   - Testemunhos: espaço reservado, sem conteúdo inventado (marcado para preencher).
   - FAQ: 4 perguntas em acordeão (personalização, prazos, envios, encomendas para eventos), respostas genéricas e conservadoras, sem prazos concretos inventados.
   - CTA final e rodapé (contactos, morada, Instagram, Política de Privacidade, Livro de Reclamações).
2. `/velas` — Velas Aromáticas, Velas Decorativas, Coleções Sazonais + CTA "Encomendar/Personalizar".
3. `/decoracao` — vasos, bandejas, centros de mesa, esculturas + CTA "Solicitar Orçamento de Design".
4. `/eventos` — casamentos, batizados, chás de bebé, portefólio e formulário específico (data, tipo, quantidade, ideias).
5. `/sobre-nos` — foto da fundadora, história e valores, Lisboa (entregas em mãos) e envios nacionais.
6. `/contactos` — formulário (Nome, Email, Tipo de Pedido, Mensagem), email, telefone, morada, WhatsApp, Instagram.
7. `/politica-privacidade` — página legal com NIF 227520807 e dados fiscais.

Botão flutuante de WhatsApp (+351 962 106 278) presente em todas as páginas.

## Imagens

- Ilustração de linha, lettering e foto da fundadora: carregadas como assets do projeto a partir das imagens enviadas.
- Galerias de produtos: espaços reservados neutros (moldura em linha fina com nota "Fotografia em breve"), prontos para substituição por fotos reais.

## Conteúdo real utilizado

Email arhandmadecandles@gmail.com, telefone 918363976, WhatsApp +351 962 106 278, morada fiscal Rua das Terras Compridas n2 rc A, Instagram @aratelier.pt, NIF 227520807 (apenas na página legal). Sem testemunhos, anos de experiência ou prazos inventados.

## Notas técnicas

- Formulários: envio via `fetch` para `https://api.web3forms.com/submit` com `access_key` 37510a44-ce6d-4b38-8535-3bb4fd3178c5, campo de destino arhandmadecandles@gmail.com, validação com Zod, honeypot anti-spam e mensagem de sucesso no ecrã. Sem base de dados nem Lovable Cloud.
- Tokens de cor e tipografia definidos em `src/styles.css`; fontes carregadas por `<link>` no `__root.tsx`.
- Uma rota por página em `src/routes/`, cada uma com `head()` próprio: title, description, og e canonical, orientados a "velas artesanais lisboa", "lembranças personalizadas casamento", "decoração feita à medida".
- Componentes partilhados: Header, Footer, botão WhatsApp, cartão de produto, placeholder de imagem, formulário reutilizável.
- Layout mobile-first, imagens otimizadas e carregamento lazy.
