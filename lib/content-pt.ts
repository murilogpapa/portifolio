import type { Content } from "./content";

export const pt: Content = {
  meta: {
    title: "Murilo G. Papa · Desenvolvedor full stack",
    description:
      "Desenvolvedor full stack com foco em front-end. Construo aplicações web completas com React, Next.js, TypeScript e Supabase, como o NotchMuc e o Salão Bio.",
  },
  profile: {
    role: "Desenvolvedor full stack.",
    summary:
      "Foco em front-end. Construo aplicações web completas com React, Next.js, TypeScript e Supabase: autenticação, segurança no banco com RLS, pagamentos via API, testes e deploy na Vercel.",
    meta: "São Paulo, SP · ADS no Senac (noturno) · disponível no período diurno",
    status: "Aberto a novas oportunidades",
    resume: "/curriculo.pdf",
  },
  nav: [
    { href: "#projetos", label: "Projetos" },
    { href: "#stack", label: "Stack" },
    { href: "#trajetoria", label: "Trajetória" },
    { href: "#contato", label: "Contato" },
  ],
  featured: [
    {
      id: "notchmuc",
      name: "NotchMuc",
      badge: "2026 · atual",
      kind: "App desktop",
      highlight: true,
      description:
        "Barra estilo Dynamic Island no topo da tela, para Windows e macOS, com anéis de uso das IAs, notas, tarefas, mídia, espelho da câmera e bandeja de arquivos.",
      bullets: [
        "Mucky, assistente de IA 100% local (Qwen2.5 via llama.cpp), com ferramentas limitadas por allowlist",
        "Site de vendas com OAuth (Google, Discord, GitHub), Stripe Checkout e licenças por dispositivo",
        "Temas personalizáveis, compartilháveis por link",
      ],
      stack: ["Tauri", "Next.js", "Supabase", "Stripe", "llama.cpp"],
      site: { url: "https://notchmuc.murilogp.dev", label: "notchmuc.murilogp.dev" },
      preview: { kind: "live" },
    },
    {
      id: "salaobio",
      name: "Salão Bio",
      badge: "2026 · no ar",
      kind: "SaaS",
      highlight: true,
      description:
        "Sistema de agendamento online para barbearias, salões e estúdios. O cliente escolhe serviço, profissional e horário pelo navegador, sem baixar app nem criar conta.",
      bullets: [
        "Painel do dono e da equipe: serviços e preços, agenda por profissional, folgas, relatórios e várias lojas",
        "Balcão do dia com encaixes, pagamentos, faltas e histórico do cliente",
        "Página própria por loja em subdomínio, com a marca dela e instalável como app (PWA)",
      ],
      stack: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase", "PWA"],
      site: { url: "https://salaobio.com.br", label: "salaobio.com.br" },
      preview: {
        kind: "image",
        src: "/projetos/salao-bio.webp",
        alt: "Página inicial do Salão Bio, com a apresentação do produto, como funciona, personalização, planos e perguntas frequentes",
        width: 1418,
        height: 8000,
        barLabel: "salaobio.com.br",
        scroll: true,
      },
    },
    {
      id: "ordem-files",
      name: "Ordem Files",
      badge: "2024",
      kind: "Web app",
      description:
        "Plataforma de mesas de Ordem Paranormal que criei pro meu grupo de RPG, com fichas de personagem, ferramentas do mestre e temas visuais. Usada por mais de 20 jogadores.",
      bullets: [],
      stack: ["React", "TypeScript", "Tailwind CSS", "Supabase"],
      preview: {
        kind: "image",
        src: "/projetos/ordem-files.webp",
        alt: "Ficha de personagem no Ordem Files, com pontos de vida, atributos e dados pessoais",
        width: 1180,
        height: 885,
        barLabel: "Ficha de personagem · uso privado do grupo",
      },
    },
  ],
  otherProjects: [
    {
      name: "UGest",
      meta: "2025 · SaaS",
      description:
        "SaaS para médicos plantonistas: plantões, receitas, pagamentos e relatórios para o Carnê-Leão. RLS, rate limiting, LGPD, Asaas e Google Calendar.",
      stack: "Next.js · Supabase · Asaas · Vitest",
    },
    {
      name: "Painel de controle impressão 3D",
      meta: "Web app · gestão",
      description:
        "Produtos e lotes de entrada com custo, filamentos e estoque interno, lojas parceiras, consignação, solicitações, fila de produção e calculadora de custo/gasto. Feito pra acompanhar produção e consignação sem planilha solta.",
      stack: "Next.js",
    },
    {
      name: "Porta Figurinhas",
      meta: "2026 · produto físico + web",
      description:
        "Suporte impresso em 3D com NFC, ligado a um álbum digital de figurinhas da Copa 2026.",
      stack: "Next.js · Supabase · NFC",
      href: "https://figurinhas.o3dmuc.com.br",
      cta: "Abrir o álbum",
    },
  ],
  schoolProjects: [
    {
      name: "WebGarage",
      meta: "Projeto Integrador · 2º semestre de ADS",
      description: "Site de concessionária com consulta de preços pela API da Tabela FIPE.",
      stack: "Angular · TypeScript",
      href: "https://github.com/murilogpapa/webgarage",
      cta: "Ver no GitHub",
    },
    {
      name: "PI BCC",
      meta: "Ciência da Computação · 1º semestre",
      description:
        "Jogo web estilo runner com um robô, ciclo de dia e noite, moedas e dificuldade crescente.",
      stack: "p5.js · JavaScript · HTML",
      href: "https://github.com/murilogpapa/PI-bcc-1sem",
      cta: "Ver no GitHub",
    },
    {
      name: "RPG Tic em Trilhas",
      meta: "Curso de Swift · Tic em Trilhas",
      description: "RPG de terminal ambientado em Midgard, feito no curso de Swift da Apple.",
      stack: "Swift",
      href: "https://github.com/murilogpapa/RPG-Tic-em-Trilhas",
      cta: "Ver no GitHub",
    },
  ],
  stack: [
    { area: "Front-end", items: "React, Next.js, Vite, Angular, Tailwind CSS, PWA" },
    {
      area: "Back-end e dados",
      items:
        "Supabase (PostgreSQL, Auth, RLS), Node.js, APIs REST, webhooks, MongoDB, MySQL, SQL Server",
    },
    { area: "Integrações", items: "Stripe, Asaas, Google Calendar API, OAuth, Resend" },
    {
      area: "Linguagens",
      items: "TypeScript, JavaScript, SQL, Python, Java. Noções de Rust, C e Swift",
    },
    {
      area: "IA",
      items: "Claude Code, agentes, API do Gemini, LLMs locais (llama.cpp, Ollama), Hunyuan 3D",
    },
    { area: "Ferramentas", items: "Git, GitHub, Vercel, Vitest, Tauri, VS Code" },
    {
      area: "Design",
      items: "Photoshop, Lightroom, Premiere, After Effects, Affinity Designer, Blender",
    },
    { area: "Hardware", items: "ESP32, IoT, manutenção de computadores, impressão 3D" },
  ],
  experience: [
    {
      period: "2024 – atual",
      title: "Fundador e designer 3D · o3DMuc",
      description:
        "Modelos 3D para impressão inspirados em games, no Patreon e no MakerWorld, com um fluxo de criação assistido por IA (Hunyuan 3D e acabamento no Blender).",
    },
    {
      period: "2026",
      title: "Técnico de informática · freelancer",
      description:
        "Montei e configurei 42 computadores com Windows 11 em dois projetos (30 e 12 máquinas), com imagem padronizada clonada em SSDs (Clonezilla).",
    },
    {
      period: "2021 – 2024",
      title: "Designer gráfico e motion designer · freelancer",
      description:
        "Identidade visual, logotipos, rótulos e embalagens; tratamento de imagens e edição de vídeos.",
    },
  ],
  education: [
    {
      period: "2026 – 2028 · cursando",
      title: "Tecnólogo em Análise e Desenvolvimento de Sistemas",
      description: "Centro Universitário Senac Santo Amaro, período noturno",
    },
    {
      period: "2022 – 2024",
      title: "Técnico em Internet das Coisas (IoT)",
      description: "Senac Nações Unidas, integrado ao Ensino Médio",
    },
    {
      period: "2026 · em andamento",
      title: "IA para quem programa de verdade · curso.dev",
      description:
        "Agentes de codificação, MCP, skills e Spec-Driven Development.",
    },
    {
      period: "Idiomas",
      title: "Inglês B2 (intermediário avançado)",
      description: "Português nativo",
    },
  ],
  ui: {
    skip: "Pular para o conteúdo",
    navAria: "Principal",
    menuOpen: "Abrir menu",
    menuClose: "Fechar menu",
    theme: "Alternar entre tema claro e escuro",
    themeTitle: "Alternar tema",
    langSwitch: "Read in English",
    building: "Construindo agora",
    buildingDesc: ", uma ilha interativa no topo da tela",
    seeProjects: "Ver projetos",
    resume: "Currículo em PDF",
    projectsTitle: "Projetos",
    projectsSubtitle: "O NotchMuc está rodando aqui dentro, ao vivo: pode clicar e mexer.",
    allOnGithub: "Tudo no GitHub",
    openSite: "Abrir {label}",
    tech: "Tecnologias",
    otherProjects: "Outros projetos",
    schoolProjects: "Faculdade e cursos",
    viewProject: "Ver projeto",
    live: "ao vivo",
    openInNewTab: "Abrir o site do {name} em nova aba",
    loading: "Carregando {label}…",
    iframeTitle: "Site do {name} ao vivo",
    tapToInteract: "Toque para interagir",
    clickToInteract: "Clique para interagir",
    srInteract: " com o site do {name}",
    shot: "print",
    shotRegion: "Print da página do {name}",
    tapToScroll: "Toque para rolar a página",
    clickToScroll: "Clique para rolar a página",
    srScroll: " do {name}",
    stackSubtitle: "O que uso no dia a dia, separado por área.",
    timelineTitle: "Trajetória",
    experience: "Experiência",
    education: "Formação",
    contactTitle: "Vamos conversar?",
    contactText:
      "Se tiver uma vaga ou um projeto em desenvolvimento de software, me chama. Estudo à noite e estou disponível no período diurno.",
  },
};
