export const aboutParagraphs = [
  "Meu nome é Murilo, tenho 20 anos e nasci e cresci em São Paulo. Sempre aprendi tecnologia na prática: testando, errando e pesquisando por conta própria. No ensino médio me formei Técnico em IoT no Senac e ainda passei por projetos de empreendedorismo e robótica. Comecei Ciência da Computação, mas o que me move é construir software de verdade, então migrei pra ADS no Senac Santo Amaro, com foco em desenvolvimento web.",
  "Hoje busco estágio em desenvolvimento (front ou full-stack) e no tempo livre entrego produtos reais: o UGest, SaaS em Next.js e TypeScript pra médicos plantonistas (produto e código), o Ordem Files, plataforma web pra organizar campanhas com amigos e o Painel de controle pra impressão 3D, estoque de filamento, consignação e cálculo de custo. Também tenho base em design (Figma/Photoshop) de quando freelanciei com design e vídeo.",
] as const;

export const learningItems = [
  {
    id: "iot",
    title: "Técnico em IoT",
    place: "Senac · concluído 2022-2024",
    status: "Formação técnica",
  },
  {
    id: "ads",
    title: "Análise e Desenvolvimento de Sistemas",
    place:
      "Senac Santo Amaro · início jan/2026 · previsão meados de 2028 (curso 2,5 anos)",
    status: "Cursando",
  },
  {
    id: "assistente-apps",
    title: "Assistente de Desenvolvimento de Aplicativos para IoT",
    place: "Senac Nações Unidas · Internet das Coisas (IoT) · 01/2022-12/2024",
    status: "Formação complementar",
  },
  {
    id: "assistente-suporte",
    title: "Assistente de Suporte e Manutenção de Computadores e IoT",
    place: "Senac Nações Unidas · Internet das Coisas (IoT) · 01/2022-12/2024",
    status: "Formação complementar",
  },
  {
    id: "assistente-automacao",
    title: "Assistente de Suporte em Automação IoT",
    place: "Senac Nações Unidas · Internet das Coisas (IoT) · 01/2022-12/2024",
    status: "Formação complementar",
  },
  {
    id: "empreenda",
    title: "Empreenda Senac",
    place: "Senac",
    status: "Participação",
  },
  {
    id: "robotica",
    title: "Campeonato de robótica Senac",
    place: "Senac",
    status: "Participação",
  },
  {
    id: "tic-trilhas",
    title: "Tic em Trilhas · Apple / Swift",
    place: "Apple Developer Academy / Tic em Trilhas",
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
    id: "painel-controle-impressao-3d",
    kind: "flip" as const,
    title: "Painel de controle impressão 3D",
    summary: "estoque · filamento · consignação",
    stack: ["Web"],
    back: "Painel de controle impressão 3D: produtos e lotes de entrada com custo, filamentos e estoque interno, lojas parceiras, consignação, solicitações, fila de produção e calculadora de custo/gasto. Feito pra acompanhar produção e consignação sem planilha solta.",
  },
  {
    id: "pi-bcc-1sem",
    kind: "flip" as const,
    title: "PI BCC · 1º semestre",
    summary: "jogo web · p5.js · runner",
    stack: ["p5.js", "JavaScript", "HTML"],
    href: "https://github.com/murilogpapa/PI-bcc-1sem",
    back: "Projeto Integrador do 1º semestre de Ciência da Computação: jogo web em p5.js. Runner infinito com robô, inimigo (raio), moedas, pulo (espaço ou toque), ciclo dia/noite com sol e lua em órbita, e dificuldade que sobe com o tempo. Game over ao colidir com o inimigo no chão.",
  },
  {
    id: "rpg-tic-em-trilhas",
    kind: "flip" as const,
    title: "RPG Tic em Trilhas",
    summary: "RPG de terminal · Swift · Midgard",
    stack: ["Swift"],
    href: "https://github.com/murilogpapa/RPG-Tic-em-Trilhas",
    back: "RPG de terminal em Swift feito no Tic em Trilhas (Senac) durante o processo seletivo da Apple Developer Academy (aprovado nessa etapa). Ambientado em Midgard: explorar floresta (Goblin) ou torre (Guerreiro Esqueleto), atacar / defender / fugir, descansar na fogueira, level up com vida e dano. Loop de batalha e progressão no console.",
  },
] as const;

export type Project = (typeof projects)[number];
export type FlipProject = Extract<Project, { kind: "flip" }> & {
  href?: string;
};
export type LinkProject = Extract<Project, { kind: "link" }>;

export type SkillId =
  | "html"
  | "css"
  | "js"
  | "ts"
  | "react"
  | "next"
  | "tailwind"
  | "vite"
  | "python"
  | "sql"
  | "java"
  | "c"
  | "figma"
  | "photoshop"
  | "swift"
  | "git"
  | "ia";

export type SkillLevel = "Básico" | "Intermediário" | "Avançado";

export const skillList: {
  id: SkillId;
  label: string;
  bg: string;
  level?: SkillLevel;
  tools?: readonly string[];
}[] = [
  { id: "html", label: "HTML", bg: "bg-[#2a1810]", level: "Intermediário" },
  { id: "css", label: "CSS", bg: "bg-[#10182a]", level: "Intermediário" },
  { id: "js", label: "JavaScript", bg: "bg-[#2a2610]", level: "Básico" },
  { id: "ts", label: "TypeScript", bg: "bg-[#0f1c2e]", level: "Básico" },
  { id: "react", label: "React", bg: "bg-[#141414]", level: "Básico" },
  { id: "next", label: "Next.js", bg: "bg-[#111111]", level: "Básico" },
  {
    id: "tailwind",
    label: "Tailwind",
    bg: "bg-[#0b1220]",
    level: "Intermediário",
  },
  { id: "vite", label: "Vite", bg: "bg-[#1a1228]", level: "Básico" },
  { id: "python", label: "Python", bg: "bg-[#1a2430]", level: "Básico" },
  { id: "sql", label: "SQL", bg: "bg-[#2a2410]", level: "Básico" },
  { id: "java", label: "Java", bg: "bg-[#1a140e]", level: "Básico" },
  { id: "c", label: "C", bg: "bg-[#101820]", level: "Básico" },
  { id: "figma", label: "Figma", bg: "bg-[#2a2a2a]", level: "Intermediário" },
  {
    id: "photoshop",
    label: "Photoshop",
    bg: "bg-[#001e36]",
    level: "Intermediário",
  },
  { id: "swift", label: "Swift", bg: "bg-[#2a1410]", level: "Básico" },
  { id: "git", label: "Git", bg: "bg-[#241410]", level: "Básico" },
  {
    id: "ia",
    label: "IA",
    bg: "bg-[#16122a]",
    tools: ["Claude", "Gemini / Antigravity", "Grok"],
  },
];

export type Skill = (typeof skillList)[number];
