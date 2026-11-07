import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt = "Murilo Papa · Desenvolvedor full stack";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const fontDir = join(process.cwd(), "node_modules/geist/dist/fonts");

export default async function Image() {
  const [semibold, mono] = await Promise.all([
    readFile(join(fontDir, "geist-sans/Geist-SemiBold.ttf")),
    readFile(join(fontDir, "geist-mono/GeistMono-Regular.ttf")),
  ]);

  const line = "rgba(255,255,255,0.09)";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: "#0b0b0c",
          color: "#f2f2f3",
          fontFamily: "Geist",
          position: "relative",
        }}
      >
        <div style={{ position: "absolute", top: 0, bottom: 0, left: 72, width: 1, background: line }} />
        <div style={{ position: "absolute", top: 0, bottom: 0, right: 72, width: 1, background: line }} />
        <div style={{ position: "absolute", left: 0, right: 0, top: 150, height: 1, background: line }} />
        <div style={{ position: "absolute", left: 0, right: 0, top: 510, height: 1, background: line }} />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "0 112px",
            gap: 22,
            width: "100%",
          }}
        >
          <div
            style={{
              display: "flex",
              alignSelf: "flex-start",
              alignItems: "center",
              gap: 12,
              padding: "10px 20px",
              borderRadius: 999,
              background: "#000",
              border: "1px solid rgba(255,255,255,0.12)",
              fontFamily: "Geist Mono",
              fontSize: 22,
              color: "#8e8e96",
            }}
          >
            <div style={{ width: 10, height: 10, borderRadius: 999, background: "#4ade80" }} />
            murilogp.dev
          </div>
          <div style={{ display: "flex", flexDirection: "column", lineHeight: 1 }}>
            <span style={{ fontSize: 120, letterSpacing: -5 }}>Murilo Papa</span>
            <span style={{ fontSize: 64, letterSpacing: -2, color: "#8e8e96", marginTop: 8 }}>
              Desenvolvedor full stack.
            </span>
          </div>
          <div style={{ fontFamily: "Geist Mono", fontSize: 24, color: "#7cb4ff" }}>
            React · Next.js · TypeScript · Supabase
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Geist", data: semibold, style: "normal", weight: 600 },
        { name: "Geist Mono", data: mono, style: "normal", weight: 400 },
      ],
    },
  );
}
