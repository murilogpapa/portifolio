"use client";

/**
 * Link para a outra versão do site. Leva junto a âncora atual
 * (#projetos, #contato…), assim quem troca de idioma continua na mesma seção.
 */
export function LangSwitch({
  href,
  short,
  lang,
  label,
  className,
}: {
  href: string;
  short: string;
  lang: string;
  label: string;
  className?: string;
}) {
  return (
    <a
      href={href}
      hrefLang={lang}
      lang={lang}
      aria-label={label}
      title={label}
      onClick={(e) => {
        // Escolha manual vale mais que o idioma do navegador (ver proxy.ts).
        document.cookie = `lingua=${short.toLowerCase()}; path=/; max-age=31536000; samesite=lax`;
        if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return;
        e.preventDefault();
        window.location.href = href + window.location.hash;
      }}
      className={className}
    >
      {short}
    </a>
  );
}
