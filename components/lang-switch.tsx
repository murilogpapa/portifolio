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
