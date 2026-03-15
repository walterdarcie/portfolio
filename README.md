# Portfólio — Walter Darcie (Product Designer)

Portfólio editorial e minimalista construído com **Next.js + TypeScript + Tailwind + MDX**.

## Stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS
- MDX para os cases em `/content/projects`

## Como rodar localmente

```bash
npm install
npm run dev
```

Acesse: `http://localhost:3000`

## Como editar textos

### Conteúdo da Home, Sobre e Contato

Edite os arquivos:

- `app/page.tsx`
- `app/sobre/page.tsx`
- `app/contato/page.tsx`

### Conteúdo dos projetos (cases)

Cada projeto fica em um arquivo MDX:

- `content/projects/*.mdx`

## Como criar novos projetos

1. Crie um novo arquivo em `content/projects/` com nome em slug, ex.: `novo-case.mdx`.
2. Adicione o frontmatter obrigatório:

```md
---
title: "Título do projeto"
summary: "Resumo curto"
date: "2026"
order: 2
impact: "+12% conversão"
tags:
  - Product Design
  - Discovery
thumbnail: "/images/projects/novo-case/thumb.svg"
---
```

3. Preencha as seções do case seguindo o framework existente.
4. O projeto aparecerá automaticamente na Home e em `/projects`, ordenado pelo campo `order`.

## Como adicionar imagens

Estrutura recomendada:

```txt
/public/images/projects/nome-do-projeto/
```

No MDX, use os componentes:

```mdx
<ProjectImage
  src="/images/projects/nome-do-projeto/tela-1.png"
  alt="Descrição da imagem"
  caption="Legenda curta"
  width={1600}
  height={900}
/>

<ImageGrid>
  <ProjectImage ... />
  <ProjectImage ... />
</ImageGrid>
```

## Publicação

Opção mais simples: **Vercel**.

1. Suba o repositório no GitHub.
2. Importe o projeto na Vercel.
3. Build command: `npm run build`
4. Output: padrão do Next.js.

Também funciona em qualquer ambiente Node com:

```bash
npm run build
npm run start
```

## SEO e acessibilidade

- Metadados básicos configurados em `app/layout.tsx`.
- Hierarquia semântica de headings.
- Contraste alto, tipografia legível e layout responsivo.
## Segurança de dependências

- `next-mdx-remote` está definido em versão `^6.0.0` (ou superior), compatível com o requisito de segurança informado pela Vercel.

