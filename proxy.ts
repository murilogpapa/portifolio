import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Quem abre murilogp.dev com o navegador em outro idioma vai pra /en.
// Só age na página inicial: um link direto pra /en ou pra / com escolha
// salva é respeitado. A escolha manual (botão PT/EN) fica no cookie `lingua`.

const BOTS =
  /bot|crawl|spider|slurp|facebookexternalhit|whatsapp|linkedin|slack|discord|telegram|preview|embed|vercel|lighthouse/i;

/** "pt-BR,pt;q=0.9,en;q=0.8" → ["pt-br", "pt", "en"], na ordem de preferência. */
function languages(header: string) {
  return header
    .split(",")
    .map((part, i) => {
      const [tag, ...params] = part.trim().toLowerCase().split(";");
      const q = params.find((p) => p.trim().startsWith("q="));
      return { tag, q: q ? Number(q.trim().slice(2)) || 0 : 1, i };
    })
    .filter((l) => l.tag && l.q > 0)
    .sort((a, b) => b.q - a.q || a.i - b.i)
    .map((l) => l.tag);
}

function prefersEnglish(header: string) {
  const langs = languages(header);
  if (langs.length === 0 || langs[0] === "*") return false;
  const pt = langs.findIndex((l) => l === "pt" || l.startsWith("pt-"));
  // Sem português na lista: estrangeiro, vai pro inglês.
  if (pt === -1) return true;
  const en = langs.findIndex((l) => l === "en" || l.startsWith("en-"));
  return en !== -1 && en < pt;
}

export function proxy(request: NextRequest) {
  const choice = request.cookies.get("lingua")?.value;
  if (choice === "pt") return;
  if (choice !== "en") {
    if (BOTS.test(request.headers.get("user-agent") ?? "")) return;
    const accept = request.headers.get("accept-language");
    if (!accept || !prefersEnglish(accept)) return;
  }
  return NextResponse.redirect(new URL("/en", request.url), 307);
}

export const config = {
  matcher: [
    {
      source: "/",
      // Prefetch e requisições internas do Next não são redirecionadas.
      missing: [
        { type: "header", key: "next-router-prefetch" },
        { type: "header", key: "rsc" },
      ],
    },
  ],
};
