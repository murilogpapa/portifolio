import { getContent, locales } from "@/lib/content";
import type { Locale } from "@/lib/content";
import { Shell } from "./blueprint";
import { Contact, Footer } from "./contact";
import { Hero } from "./hero";
import { IslandNav } from "./island-nav";
import { Projects } from "./projects";
import { RevealObserver } from "./reveal-observer";
import { Stack, Timeline } from "./stack-and-timeline";

/** A página inteira, no idioma pedido. */
export function Site({ locale }: { locale: Locale }) {
  const c = getContent(locale);
  const other: Locale = locale === "pt" ? "en" : "pt";

  return (
    <Shell>
      <a
        href="#conteudo"
        className="sr-only z-[60] rounded-full bg-btn-bg px-4 py-2 text-btn-fg focus:not-sr-only focus:absolute focus:top-3 focus:left-3"
      >
        {c.ui.skip}
      </a>
      <IslandNav
        items={c.nav}
        text={{
          navAria: c.ui.navAria,
          menuOpen: c.ui.menuOpen,
          menuClose: c.ui.menuClose,
          theme: c.ui.theme,
          themeTitle: c.ui.themeTitle,
          langSwitch: c.ui.langSwitch,
        }}
        langHref={locales[other].path}
        langShort={locales[other].short}
        langCode={locales[other].htmlLang}
      />
      <main id="conteudo">
        <Hero c={c} />
        <Projects c={c} />
        <Stack c={c} />
        <Timeline c={c} />
        <Contact c={c} />
      </main>
      <Footer />
      <RevealObserver />
    </Shell>
  );
}
