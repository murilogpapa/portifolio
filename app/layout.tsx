import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  adjustFontFallback: true,
});

export const metadata: Metadata = {
  title: "Murilo Giampiccolo Papa",
  description: "Portfólio de Murilo Giampiccolo Papa",
};

export const viewport: Viewport = {
  colorScheme: "dark",
  themeColor: "#0e0e0e",
};

const sectionBootScript = `(function(){try{var h=location.hash.replace("#","");var s=["sobre","aprendizado","portfolio","contato"];document.documentElement.setAttribute("data-section",s.indexOf(h)>=0?h:"sobre")}catch(e){document.documentElement.setAttribute("data-section","sobre")}})();`;

const bootCss = `html,body{background:#0e0e0e;color:#f5f5f5;color-scheme:dark}
.section-title{display:none}
.section-panel{display:none;min-height:0;flex:1 1 auto;flex-direction:column;overflow-x:hidden;overflow-y:auto}
html[data-section="sobre"] .section-title[data-panel="sobre"],html[data-section="aprendizado"] .section-title[data-panel="aprendizado"],html[data-section="portfolio"] .section-title[data-panel="portfolio"],html[data-section="contato"] .section-title[data-panel="contato"]{display:block}
html[data-section="sobre"] .section-panel[data-panel="sobre"],html[data-section="aprendizado"] .section-panel[data-panel="aprendizado"],html[data-section="portfolio"] .section-panel[data-panel="portfolio"],html[data-section="contato"] .section-panel[data-panel="contato"]{display:flex}
html[data-section="sobre"] .nav-link[data-nav="sobre"],html[data-section="aprendizado"] .nav-link[data-nav="aprendizado"],html[data-section="portfolio"] .nav-link[data-nav="portfolio"],html[data-section="contato"] .nav-link[data-nav="contato"]{color:#3b82f6}`;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      data-section="sobre"
      className={`${inter.variable} ${inter.className} h-full antialiased`}
      style={{ backgroundColor: "#0e0e0e", colorScheme: "dark" }}
      suppressHydrationWarning
    >
      <head>
        <style dangerouslySetInnerHTML={{ __html: bootCss }} />
        <script dangerouslySetInnerHTML={{ __html: sectionBootScript }} />
      </head>
      <body
        className="min-h-full bg-background font-sans text-foreground"
        style={{ backgroundColor: "#0e0e0e" }}
      >
        {children}
      </body>
    </html>
  );
}
