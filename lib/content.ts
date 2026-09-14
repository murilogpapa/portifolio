export const aboutParagraphs = [
  "Meu nome é Murilo, nasci e cresci em São Paulo. Desde pequeno fui apaixonado por tecnologia, o tipo que aprende testando, errando e pesquisando por conta própria. No ensino médio profissionalizei isso no técnico em IoT. Depois fui pra Ciência da Computação, mas o que me brilha os olhos é aplicação prática: aprender construindo. Por isso migrei pra ADS no Senac, com foco em software de verdade.",
  "No tempo livre construo apps web pra problemas reais. Um deles é o Ordem Files, plataforma web que fiz pra organizar campanhas com amigos (fichas, arquivos e ferramentas de sessão). Outro é o Painel #3D MUC, que controla estoque de filamento, consignação em lojas parceiras e calcula gasto e custo. Também tenho o UGest, SaaS em Next.js e TypeScript pra médicos plantonistas, onde cuido de produto e código.",
] as const;

export const learningItems = [
  {
    id: "iot",
    title: "Técnico em IoT",
    place: "Senac",
    status: "Formação técnica",
  },
  {
    id: "ads",
    title: "Análise e Desenvolvimento de Sistemas",
    place: "Senac",
    status: "Cursando",
  },
  {
    id: "empreenda",
    title: "Empreenda Senac",
    place: "Senac",
    status: "Penúltima etapa",
  },
  {
    id: "robotica",
    title: "Campeonato de robótica Senac",
    place: "Senac",
    status: "Participação",
  },
  {
    id: "ingles",
    title: "Inglês",
    place: "Nível B2",
    status: "Idioma",
  },
] as const;

export const projects = [
  {
    id: "ugest",
    kind: "link" as const,
    title: "UGest",
    summary: "SaaS pra médicos plantonistas",
    stack: ["Next.js", "TypeScript", "Tailwind"],
    href: "https://ugest.app",
  },
  {
    id: "ordem-files",
    kind: "flip" as const,
    title: "Ordem Files",
    summary: "plataforma web · fichas e campanhas",
    stack: ["Web"],
    back: "Ordem Files é uma plataforma web para organizar campanhas de RPG paranormal. Reúne fichas completas (dossiê, perícias, inventário, poderes, documentos), evidências, protocolos, mapa da sessão, escudo do mestre, notas e arquivos, com papéis de Mestre e Agente e controle de permissões. Visual escuro, estilo arquivo investigativo, com acentos neon.",
  },
  {
    id: "painel-3d-muc",
    kind: "flip" as const,
    title: "Painel #3D MUC",
    summary: "estoque · filamento · consignação",
    stack: ["Web"],
    back: "Painel admin pra operação de impressão 3D: produtos e lotes de entrada com custo, filamentos e estoque interno, lojas parceiras, consignação, solicitações, fila de produção e calculadora de custo/gasto. Feito pra acompanhar produção e consignação sem planilha solta.",
  },
] as const;

export type Project = (typeof projects)[number];
export type FlipProject = Extract<Project, { kind: "flip" }>;
export type LinkProject = Extract<Project, { kind: "link" }>;

export type SkillId =
  | "html"
  | "css"
  | "js"
  | "ts"
  | "react"
  | "next"
  | "tailwind"
  | "python"
  | "sql"
  | "figma"
  | "photoshop";

export const skillList: { id: SkillId; label: string; bg: string }[] = [
  { id: "html", label: "HTML", bg: "bg-[#2a1810]" },
  { id: "css", label: "CSS", bg: "bg-[#10182a]" },
  { id: "js", label: "JavaScript", bg: "bg-[#2a2610]" },
  { id: "ts", label: "TypeScript", bg: "bg-[#0f1c2e]" },
  { id: "react", label: "React", bg: "bg-[#141414]" },
  { id: "next", label: "Next.js", bg: "bg-[#111111]" },
  { id: "tailwind", label: "Tailwind CSS", bg: "bg-[#0b1220]" },
  { id: "python", label: "Python", bg: "bg-[#1a2430]" },
  { id: "sql", label: "SQL", bg: "bg-[#2a2410]" },
  { id: "figma", label: "Figma", bg: "bg-[#2a2a2a]" },
  { id: "photoshop", label: "Photoshop", bg: "bg-[#001e36]" },
];
