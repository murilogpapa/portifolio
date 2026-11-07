import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { getContent, profile } from "./content";
import type { Locale } from "./content";

// Imagem de compartilhamento (Open Graph / Twitter), uma por idioma.
export const ogSize = { width: 1200, height: 630 };

const fontDir = join(process.cwd(), "node_modules/geist/dist/fonts");

const BG = "#0b0b0c";
const FG = "#f2f2f3";
const DIM = "#8e8e96";
const NOTE = "#7c7c86";
const LINE = "rgba(255,255,255,0.09)";
const ACCENT = "#7cb4ff";
const HATCH =
  "repeating-linear-gradient(-45deg, rgba(255,255,255,0.07) 0px, rgba(255,255,255,0.07) 1px, transparent 1px, transparent 8px)";
const GUTTER = 48;

function HLine({ y }: { y: number }) {
  return <div style={{ position: "absolute", left: 0, right: 0, top: y, height: 1, background: LINE, display: "flex" }} />;
}

function Note({ x, y, children }: { x: number; y: number; children: string }) {
  return (
    <div style={{ position: "absolute", left: x, top: y, fontFamily: "Geist Mono", fontSize: 14, color: NOTE, display: "flex" }}>
      {children}
    </div>
  );
}

/** Anel de uso de IA, como os da ilha do NotchMuc. */
function Ring({ color }: { color: string }) {
  return (
    <div
      style={{
        width: 30,
        height: 30,
        borderRadius: 999,
        border: "4px solid rgba(255,255,255,0.12)",
        borderTopColor: color,
        borderRightColor: color,
        display: "flex",
      }}
    />
  );
}

/**
 * No gerador de imagem (Satori) o "r" final da Geist deixa uma sobra antes do
 * espaço, que o navegador não mostra. Cada palavra vira um item com gap fixo,
 * e as que terminam em "r" descontam essa sobra.
 */
function Words({ text, size, tracking, style }: { text: string; size: number; tracking: number; style?: React.CSSProperties }) {
  return (
    <div style={{ display: "flex", fontWeight: 600, fontSize: size, letterSpacing: tracking, gap: Math.round(size * 0.24), ...style }}>
      {text.split(" ").map((word, i) => (
        <span key={i} style={{ marginRight: word.endsWith("r") ? -Math.round(size * 0.18) : 0 }}>
          {word}
        </span>
      ))}
    </div>
  );
}

export async function renderOg(locale: Locale) {
  const c = getContent(locale);
  const [regular, semibold, mono, avatar] = await Promise.all([
    readFile(join(fontDir, "geist-sans/Geist-Regular.ttf")),
    readFile(join(fontDir, "geist-sans/Geist-SemiBold.ttf")),
    readFile(join(fontDir, "geist-mono/GeistMono-Regular.ttf")),
    readFile(join(process.cwd(), "public/avatar-nav.png")),
  ]);
  const avatarSrc = `data:image/png;base64,${avatar.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          background: BG,
          color: FG,
          fontFamily: "Geist",
        }}
      >
        {/* laterais hachuradas e linhas do blueprint */}
        <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: GUTTER, display: "flex", backgroundImage: HATCH, borderRight: `1px solid ${LINE}` }} />
        <div style={{ position: "absolute", right: 0, top: 0, bottom: 0, width: GUTTER, display: "flex", backgroundImage: HATCH, borderLeft: `1px solid ${LINE}` }} />
        <HLine y={88} />
        <HLine y={344} />
        <HLine y={528} />

        {/* ilha de navegação */}
        <div style={{ position: "absolute", left: 0, right: 0, top: 20, display: "flex", justifyContent: "center" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 6,
              padding: 6,
              borderRadius: 999,
              background: "#000",
              border: "1px solid rgba(255,255,255,0.12)",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 10, padding: "4px 14px 4px 4px" }}>
              {/* eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text */}
              <img src={avatarSrc} width={34} height={34} style={{ display: "flex" }} />
              <div style={{ display: "flex", fontSize: 17, fontWeight: 600 }}>Murilo</div>
            </div>
            {c.nav.map(({ label: item }) => (
              <div key={item} style={{ display: "flex", padding: "0 12px", fontSize: 15, color: "#b4b4bb", fontWeight: 400 }}>
                {item}
              </div>
            ))}
          </div>
        </div>

        {/* lado esquerdo de cima: status e NotchMuc */}
        <Note x={88} y={102}>rounded-full bg-black ring-1 ring-white/10</Note>
        <div style={{ position: "absolute", left: 88, top: 136, display: "flex", flexDirection: "column", alignItems: "flex-start", gap: 16 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              padding: "10px 18px",
              borderRadius: 999,
              background: "rgba(74,222,128,0.12)",
              color: "#86efac",
              fontSize: 19,
              fontWeight: 600,
            }}
          >
            <div style={{ width: 10, height: 10, borderRadius: 999, background: "#4ade80", display: "flex" }} />
            {c.profile.status}
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 14,
              padding: "8px 22px 8px 8px",
              borderRadius: 999,
              background: "#000",
              border: "1px solid rgba(255,255,255,0.12)",
            }}
          >
            <div style={{ display: "flex", alignItems: "flex-end", gap: 4, height: 40, padding: "11px 12px", borderRadius: 999, background: "#17171a" }}>
              {[10, 18, 13, 8].map((h, i) => (
                <div key={i} style={{ width: 4, height: h, borderRadius: 2, background: ACCENT, display: "flex" }} />
              ))}
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
              <div style={{ display: "flex", fontFamily: "Geist Mono", fontSize: 13, letterSpacing: 1, color: DIM }}>{c.ui.building.toUpperCase()}</div>
              <div style={{ display: "flex", fontSize: 19, fontWeight: 600 }}>{locale === "pt" ? "NotchMuc, ilha no topo da tela" : "NotchMuc, an island atop the screen"}</div>
            </div>
          </div>
        </div>

        {/* lado direito de cima: tela com a ilha do NotchMuc */}
        <div
          style={{
            position: "absolute",
            left: 690,
            top: 112,
            width: 430,
            height: 214,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            borderRadius: 16,
            border: "1px solid rgba(255,255,255,0.16)",
            background: "#0e0e10",
            overflow: "hidden",
            boxShadow: "0 24px 60px rgba(0,0,0,0.5)",
          }}
        >
          {/* ilha expandida */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 14,
              marginTop: 10,
              padding: "10px 16px 10px 12px",
              borderRadius: 26,
              background: "#000",
              border: "1px solid rgba(255,255,255,0.12)",
            }}
          >
            <Ring color="#7cb4ff" />
            <Ring color="#f5a3ff" />
            <div style={{ width: 1, height: 28, background: "rgba(255,255,255,0.12)", display: "flex" }} />
            <div style={{ width: 30, height: 30, borderRadius: 8, background: "#26262b", display: "flex" }} />
            <div style={{ display: "flex", flexDirection: "column", gap: 1 }}>
              <div style={{ display: "flex", fontSize: 13, fontWeight: 600 }}>{locale === "pt" ? "Tocando agora" : "Now playing"}</div>
              <div style={{ display: "flex", fontSize: 11, color: DIM }}>{locale === "pt" ? "Módulo de mídia" : "Media module"}</div>
            </div>
            <div style={{ display: "flex", alignItems: "flex-end", gap: 3, height: 16, marginLeft: 6 }}>
              {[7, 15, 10, 13].map((h, i) => (
                <div key={i} style={{ width: 3, height: h, borderRadius: 2, background: ACCENT, display: "flex" }} />
              ))}
            </div>
          </div>

          {/* módulos soltos pela tela */}
          {[
            { x: 26, y: 86 },
            { x: 128, y: 106 },
            { x: 292, y: 102 },
            { x: 374, y: 82 },
          ].map((p, i) => (
            <div
              key={i}
              style={{
                position: "absolute",
                left: p.x,
                top: p.y,
                width: 30,
                height: 30,
                borderRadius: 9,
                border: "1px solid rgba(255,255,255,0.14)",
                background: "rgba(255,255,255,0.03)",
                display: "flex",
              }}
            />
          ))}

          {/* nome do app e olhos do Mucky */}
          <div style={{ position: "absolute", left: 20, bottom: 16, display: "flex", flexDirection: "column", gap: 2 }}>
            <div style={{ display: "flex", fontSize: 24, fontWeight: 600, letterSpacing: -0.5 }}>NotchMuc</div>
            <div style={{ display: "flex", fontSize: 12, color: DIM }}>{locale === "pt" ? "App desktop · Windows e macOS" : "Desktop app · Windows and macOS"}</div>
          </div>
          <div style={{ position: "absolute", right: 30, bottom: 20, display: "flex", alignItems: "flex-end", gap: 14 }}>
            <div style={{ width: 19, height: 30, borderRadius: 999, background: "#fff", transform: "rotate(-12deg)", display: "flex" }} />
            <div style={{ width: 19, height: 30, borderRadius: 999, background: "#fff", transform: "rotate(-12deg) translateY(-5px)", display: "flex" }} />
          </div>
        </div>

        {/* nome e cargo */}
        <Note x={88} y={318}>text-8xl font-semibold tracking-tighter</Note>
        <div style={{ position: "absolute", left: 84, top: 354, display: "flex", flexDirection: "column" }}>
          <Words text={profile.name} size={92} tracking={-4} style={{ lineHeight: 1 }} />
          <Words text={c.profile.role} size={50} tracking={-2} style={{ lineHeight: 1.1, color: DIM, marginTop: 6 }} />
        </div>

        {/* faixa de baixo */}
        <div
          style={{
            position: "absolute",
            left: 88,
            right: 88,
            top: 556,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontFamily: "Geist Mono",
            fontSize: 22,
          }}
        >
          <div style={{ display: "flex", color: ACCENT }}>React · Next.js · TypeScript · Supabase</div>
          <div style={{ display: "flex", alignItems: "center", gap: 10, color: DIM }}>
            <div style={{ width: 9, height: 9, borderRadius: 999, background: "#4ade80", display: "flex" }} />
            murilogp.dev
          </div>
        </div>
      </div>
    ),
    {
      ...ogSize,
      fonts: [
        { name: "Geist", data: regular, style: "normal", weight: 400 },
        { name: "Geist", data: semibold, style: "normal", weight: 600 },
        { name: "Geist Mono", data: mono, style: "normal", weight: 400 },
      ],
    },
  );
}
