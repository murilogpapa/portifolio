import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
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

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      data-section="sobre"
      className={`${inter.variable} ${inter.className} h-full antialiased`}
      style={{ backgroundColor: "#0e0e0e", colorScheme: "dark" }}
    >
      <body
        className="min-h-full bg-background font-sans text-foreground"
        style={{ backgroundColor: "#0e0e0e" }}
      >
        {children}
      </body>
    </html>
  );
}
