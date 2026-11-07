# murilogp.dev

Portfólio do Murilo Giampiccolo Papa. Next.js 16 (App Router), React 19, TypeScript e Tailwind CSS 4.

## Rodando

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # build de produção
npm run lint
```

## Onde mexer

- **Textos, projetos, stack e trajetória:** `lib/content.ts`. Dá pra mudar quase tudo sem tocar em componente.
- **Cores dos temas (escuro e claro):** variáveis no topo de `app/globals.css`.
- **Currículo:** `public/curriculo.pdf`.
- **Prints de projetos:** `public/projetos/`.

## Como funciona

- **Blueprint:** a coluna central tem bordas e laterais hachuradas (`components/blueprint.tsx`). Cada faixa usa a classe `rule-t`, que desenha uma linha atravessando a página inteira. As anotações em mono (`<Note>`) somem no celular.
- **Tema:** escuro por padrão. O botão de sol e lua na ilha troca o `data-theme` do `<html>` e salva a escolha no `localStorage` (chave `tema`). Um script no `<head>` aplica o tema antes da primeira pintura, então não pisca.
- **Animações:** o topo entra em sequência ao carregar; o resto aparece ao rolar (`data-reveal` + `components/reveal-observer.tsx`). Tudo desliga com "reduzir movimento" do sistema.
- **Sites ao vivo:** NotchMuc e Salão Bio aparecem em iframes (`components/live-preview.tsx`). O iframe começa travado pra rolagem da página não ficar presa nele; um clique libera.

## Para os iframes funcionarem

Os sites embutidos precisam permitir ser abertos dentro do murilogp.dev. Em cada um (notchmuc.murilogp.dev e salaobio.com.br), mande este header nas páginas:

```
Content-Security-Policy: frame-ancestors 'self' https://murilogp.dev
```

e remova qualquer `X-Frame-Options: DENY` ou `SAMEORIGIN`. No Next.js isso vai em `headers()` do `next.config.ts`.

Evite liberar `https://*.vercel.app`: isso deixaria qualquer site hospedado na Vercel embutir os seus (risco de clickjacking, principalmente no Salão Bio). Por isso, nas prévias da Vercel os iframes aparecem bloqueados; só no domínio final eles carregam.
