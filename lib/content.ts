export const aboutParagraphs = [
  "Sou o Murilo, de São Paulo. Técnico em IoT, saí de Ciência da Computação para ADS no Senac porque queria um caminho mais prático.",
  "No tempo livre construo apps pessoais. Site de PRG com IA, estoque de filamento com cálculo de custo e o UGest, um SaaS próprio em Next.js e TypeScript.",
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
    title: "Campeonato de robótica",
    place: "Competição",
    status: "Participação",
  },
] as const;

export const projects = [
  {
    id: "ugest",
    title: "UGest",
    summary: "SaaS próprio de gestão, feito com Next.js e TypeScript.",
    stack: ["Next.js", "TypeScript"],
    href: "#", // TODO: GitHub ou demo
  },
  {
    id: "prg",
    title: "Site PRG com IA",
    summary: "App web de PRG com apoio de inteligência artificial.",
    stack: ["Web", "IA"],
    href: "#", // TODO: GitHub ou demo
  },
  {
    id: "filamento",
    title: "Estoque de filamento",
    summary: "Controle de estoque de filamento com cálculo de custo.",
    stack: ["App pessoal"],
    href: "#", // TODO: GitHub ou demo
  },
] as const;

export type SkillId =
  | "html"
  | "css"
  | "js"
  | "ts"
  | "react"
  | "next"
  | "tailwind"
  | "python"
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
  { id: "figma", label: "Figma", bg: "bg-[#2a2a2a]" },
  { id: "photoshop", label: "Photoshop", bg: "bg-[#001e36]" },
];
