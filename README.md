<a href="https://murilogp.dev">
  <img src="https://murilogp.dev/opengraph-image" alt="murilogp.dev, portfólio de Murilo G. Papa" width="100%">
</a>

# murilogp.dev

Meu portfólio: quem eu sou, o que construí e como falar comigo. Feito do zero em Next.js 16, com cara de blueprint, tema claro e escuro e projeto rodando ao vivo dentro da página.

**[Abrir o site →](https://murilogp.dev)**

## O que tem lá

- **Projetos em destaque:** o NotchMuc roda ao vivo num iframe, o Salão Bio aparece num print da página inteira que dá pra rolar e o Ordem Files mostra uma ficha de personagem.
- **Outros projetos, faculdade e cursos**, stack separada por área, trajetória e contato com currículo em PDF.

## Detalhes de construção

- **Visual blueprint:** linhas que atravessam a página, laterais hachuradas e anotações com as classes do Tailwind, inspirado no site do Tailwind CSS.
- **Tema claro e escuro sem piscar:** um script no `<head>` aplica o tema salvo antes da primeira pintura.
- **Português e inglês:** `/` em português e `/en` em inglês, cada um com o próprio `<html lang>`, metadados, `hreflang` e imagem de compartilhamento. Quem chega com o navegador em outro idioma cai direto no inglês (via `proxy.ts`), e a escolha manual no botão PT/EN fica salva. A troca mantém a seção em que você está.
- **Responsivo de verdade:** a navegação em ilha vira menu no celular e as grades se reorganizam por breakpoint. Testado de 390 a 1440 px.
- **Animações** de entrada e ao rolar, que desligam com "reduzir movimento".
- **Prévias travadas:** o iframe e o print só capturam a rolagem depois de um clique, pra página não ficar presa.
- **Imagem de compartilhamento** gerada no build com `next/og`, com a fonte Geist embutida, uma por idioma.
- **Acessível:** HTML semântico, foco visível, contraste conferido nos dois temas e link pra pular direto pro conteúdo.
- **Texto separado do código:** todo o conteúdo fica em `lib/content-pt.ts` e `lib/content-en.ts`, com o mesmo tipo, fora dos componentes.

## Stack

Next.js 16 (App Router) · React 19 · TypeScript · Tailwind CSS 4 · Geist · lucide-react · Vercel

## Rodar localmente

`npm install` e depois `npm run dev`.

---

Murilo G. Papa · [murilogp.dev](https://murilogp.dev) · [LinkedIn](https://www.linkedin.com/in/murilogiampiccolopapa/) · [murilopapag@gmail.com](mailto:murilopapag@gmail.com)
