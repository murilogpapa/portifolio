import type { Metadata, Viewport } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { getContent, locales, profile } from "@/lib/content";
import type { Locale } from "@/lib/content";
import "../app/globals.css";

// Cada idioma tem o próprio root layout (app/(pt) e app/(en)/en), para o
// <html lang> sair certo já no HTML estático. Os dois usam este documento.

export function buildMetadata(locale: Locale): Metadata {
  const c = getContent(locale);
  const path = locales[locale].path;
  const other: Locale = locale === "pt" ? "en" : "pt";
  return {
    metadataBase: new URL(profile.site),
    title: c.meta.title,
    description: c.meta.description,
    authors: [{ name: profile.fullName, url: profile.site }],
    alternates: {
      canonical: path,
      languages: { "pt-BR": "/", en: "/en", "x-default": "/" },
    },
    openGraph: {
      type: "website",
      locale: locales[locale].og,
      alternateLocale: [locales[other].og],
      url: path,
      siteName: profile.name,
      title: c.meta.title,
      description: c.meta.description,
    },
    twitter: {
      card: "summary_large_image",
      title: c.meta.title,
      description: c.meta.description,
    },
  };
}

export const viewport: Viewport = {
  themeColor: "#0b0b0c",
  width: "device-width",
  initialScale: 1,
};

// Roda antes da primeira pintura: aplica o tema salvo (escuro por padrão)
// e marca o <html> com .js para as animações de entrada.
const bootScript = `(function(){var d=document.documentElement;try{var t=localStorage.getItem('tema');d.dataset.theme=t==='light'?'light':'dark';}catch(e){d.dataset.theme='dark';}d.classList.add('js');function m(){var e=document.querySelector('meta[name="theme-color"]');if(e)e.setAttribute('content',d.dataset.theme==='light'?'#fafafa':'#0b0b0c');}m();document.addEventListener('DOMContentLoaded',m);})();`;

export function RootDocument({ locale, children }: { locale: Locale; children: React.ReactNode }) {
  return (
    <html
      lang={locales[locale].htmlLang}
      data-theme="dark"
      suppressHydrationWarning
      className={`${GeistSans.variable} ${GeistMono.variable}`}
    >
      {/* Este componente é o root layout dos dois idiomas, então o <head> é o do App Router. */}
      {/* eslint-disable-next-line @next/next/no-head-element */}
      <head>
        <script dangerouslySetInnerHTML={{ __html: bootScript }} />
      </head>
      <body className="min-h-dvh font-sans antialiased">{children}</body>
    </html>
  );
}
