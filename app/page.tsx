import { Shell } from "@/components/blueprint";
import { Contact, Footer } from "@/components/contact";
import { Hero } from "@/components/hero";
import { IslandNav } from "@/components/island-nav";
import { Projects } from "@/components/projects";
import { RevealObserver } from "@/components/reveal-observer";
import { Stack, Timeline } from "@/components/stack-and-timeline";

export default function Home() {
  return (
    <Shell>
      <a
        href="#conteudo"
        className="sr-only z-[60] rounded-full bg-btn-bg px-4 py-2 text-btn-fg focus:not-sr-only focus:absolute focus:top-3 focus:left-3"
      >
        Pular para o conteúdo
      </a>
      <IslandNav />
      <main id="conteudo">
        <Hero />
        <Projects />
        <Stack />
        <Timeline />
        <Contact />
      </main>
      <Footer />
      <RevealObserver />
    </Shell>
  );
}
