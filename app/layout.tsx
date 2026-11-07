import type { Metadata, Viewport } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { profile } from "@/lib/content";
import "./globals.css";

const description =
  "Desenvolvedor full stack com foco em front-end. Construo aplicações web completas com React, Next.js, TypeScript e Supabase, como o NotchMuc e o Salão Bio.";

export const metadata: Metadata = {
  metadataBase: new URL(profile.site),
  title: `${profile.name} · Desenvolvedor full stack`,
  description,
  authors: [{ name: profile.fullName, url: profile.site }],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "/",
    siteName: profile.name,
    title: `${profile.name} · Desenvolvedor full stack`,
    description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} · Desenvolvedor full stack`,
    description,
  },
};

export const viewport: Viewport = {
  themeColor: "#0b0b0c",
  width: "device-width",
  initialScale: 1,
};

// Roda antes da primeira pintura: aplica o tema salvo (escuro por padrão)
// e marca o <html> com .js para as animações de entrada.
const bootScript = `(function(){var d=document.documentElement;try{var t=localStorage.getItem('tema');d.dataset.theme=t==='light'?'light':'dark';}catch(e){d.dataset.theme='dark';}d.classList.add('js');function m(){var e=document.querySelector('meta[name="theme-color"]');if(e)e.setAttribute('content',d.dataset.theme==='light'?'#fafafa':'#0b0b0c');}m();document.addEventListener('DOMContentLoaded',m);})();`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="pt-BR"
      data-theme="dark"
      suppressHydrationWarning
      className={`${GeistSans.variable} ${GeistMono.variable}`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: bootScript }} />
      </head>
      <body className="min-h-dvh font-sans antialiased">{children}</body>
    </html>
  );
}
