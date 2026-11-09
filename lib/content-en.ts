import type { Content } from "./content";

export const en: Content = {
  meta: {
    title: "Murilo G. Papa · Full stack developer",
    description:
      "Full stack developer focused on front-end. I build complete web applications with React, Next.js, TypeScript and Supabase, like NotchMuc and Salão Bio.",
  },
  profile: {
    role: "Full stack developer.",
    summary:
      "Front-end focused. I build complete web applications with React, Next.js, TypeScript and Supabase: authentication, database security with RLS, payments through APIs, testing and deploys on Vercel.",
    meta: "São Paulo, Brazil · Systems Analysis and Development at Senac (evenings) · available during the day",
    status: "Open to new opportunities",
    resume: "/resume.pdf",
  },
  nav: [
    { href: "#projetos", label: "Projects" },
    { href: "#stack", label: "Stack" },
    { href: "#trajetoria", label: "Background" },
    { href: "#contato", label: "Contact" },
  ],
  featured: [
    {
      id: "notchmuc",
      name: "NotchMuc",
      badge: "2026 · current",
      kind: "Desktop app",
      highlight: true,
      description:
        "A Dynamic Island style bar at the top of the screen, for Windows and macOS, with AI usage rings, notes, tasks, media, a camera mirror and a file tray.",
      bullets: [
        "Mucky, a 100% local AI assistant (Qwen2.5 via llama.cpp), with tools limited by an allowlist",
        "Sales website with OAuth (Google, Discord, GitHub), Stripe Checkout and per-device licenses",
        "Customizable themes that can be shared through a link",
      ],
      stack: ["Tauri", "Next.js", "Supabase", "Stripe", "llama.cpp"],
      site: { url: "https://notchmuc.murilogp.dev", label: "notchmuc.murilogp.dev" },
      preview: { kind: "live" },
    },
    {
      id: "salaobio",
      name: "Salão Bio",
      badge: "2026 · live",
      kind: "SaaS",
      highlight: true,
      description:
        "Online booking system for barbershops, salons and studios. Clients pick the service, the professional and the time slot right in the browser, with no app to download and no account to create.",
      bullets: [
        "Owner and staff dashboard: services and prices, schedules per professional, days off, reports and multiple locations",
        "Daily front desk with walk-ins, payments, no-shows and client history",
        "Each shop gets its own branded page on a subdomain, installable as an app (PWA)",
      ],
      stack: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase", "PWA"],
      site: { url: "https://salaobio.com.br", label: "salaobio.com.br" },
      preview: {
        kind: "image",
        src: "/projetos/salao-bio.webp",
        alt: "Salão Bio home page (in Portuguese), with the product overview, how it works, customization, plans and FAQ",
        width: 1418,
        height: 8000,
        barLabel: "salaobio.com.br",
        scroll: true,
      },
    },
  ],
  otherProjects: [
    {
      name: "UGest",
      meta: "2025 · SaaS",
      description:
        "SaaS for on-call physicians: shifts, prescriptions, payments and reports for Brazil's Carnê-Leão income tax. RLS, rate limiting, LGPD compliance, Asaas and Google Calendar.",
      stack: "Next.js · Supabase · Asaas · Vitest",
    },
    {
      name: "Ordem Files",
      meta: "2024 · web app",
      description:
        "A platform for Ordem Paranormal tabletop RPG campaigns that I built for my group, with character sheets, game master tools and visual themes. Used by more than 20 players.",
      stack: "React · TypeScript · Tailwind CSS · Supabase",
    },
    {
      name: "3D printing control panel",
      meta: "Web app · management",
      description:
        "Products and incoming batches with cost tracking, filaments and in-house stock, partner stores, consignment, requests, a production queue and a cost calculator. Built to track production and consignment without scattered spreadsheets.",
      stack: "Next.js",
    },
    {
      name: "Porta Figurinhas",
      meta: "2026 · physical product + web",
      description:
        "A 3D-printed sticker holder with NFC, linked to a digital sticker album for the 2026 World Cup.",
      stack: "Next.js · Supabase · NFC",
      href: "https://figurinhas.o3dmuc.com.br",
      cta: "Open the album",
    },
  ],
  schoolProjects: [
    {
      name: "WebGarage",
      meta: "Integrative project · 2nd semester of ADS",
      description:
        "Car dealership website with price lookups through the FIPE Table API (Brazil's vehicle price index).",
      stack: "Angular · TypeScript",
      href: "https://github.com/murilogpapa/webgarage",
      cta: "View on GitHub",
    },
    {
      name: "PI BCC",
      meta: "Computer Science · 1st semester",
      description:
        "Runner-style web game with a robot, a day and night cycle, coins and increasing difficulty.",
      stack: "p5.js · JavaScript · HTML",
      href: "https://github.com/murilogpapa/PI-bcc-1sem",
      cta: "View on GitHub",
    },
    {
      name: "RPG Tic em Trilhas",
      meta: "Swift course · Tic em Trilhas",
      description: "Terminal RPG set in Midgard, built during Apple's Swift course.",
      stack: "Swift",
      href: "https://github.com/murilogpapa/RPG-Tic-em-Trilhas",
      cta: "View on GitHub",
    },
  ],
  stack: [
    { area: "Front-end", items: "React, Next.js, Vite, Angular, Tailwind CSS, PWA" },
    {
      area: "Back-end & data",
      items:
        "Supabase (PostgreSQL, Auth, RLS), Node.js, REST APIs, webhooks, MongoDB, MySQL, SQL Server",
    },
    { area: "Integrations", items: "Stripe, Asaas, Google Calendar API, OAuth, Resend" },
    {
      area: "Languages",
      items: "TypeScript, JavaScript, SQL, Python, Java. Basic Rust, C and Swift",
    },
    {
      area: "AI",
      items: "Claude Code, agents, Gemini API, local LLMs (llama.cpp, Ollama), Hunyuan 3D",
    },
    { area: "Tools", items: "Git, GitHub, Vercel, Vitest, Tauri, VS Code" },
    {
      area: "Design",
      items: "Photoshop, Lightroom, Premiere, After Effects, Affinity Designer, Blender",
    },
    { area: "Hardware", items: "ESP32, IoT, computer maintenance, 3D printing" },
  ],
  experience: [
    {
      period: "2024 – present",
      title: "Founder and 3D designer · o3DMuc",
      description:
        "Game-inspired 3D printable models on Patreon and MakerWorld, with an AI-assisted creation workflow (Hunyuan 3D, finished in Blender).",
    },
    {
      period: "2026",
      title: "IT technician · freelance",
      description:
        "Built and configured 42 Windows 11 computers across two projects (30 and 12 machines), with a standardized image cloned onto SSDs (Clonezilla).",
    },
    {
      period: "2021 – 2024",
      title: "Graphic and motion designer · freelance",
      description:
        "Visual identity, logos, labels and packaging; photo retouching and video editing.",
    },
  ],
  education: [
    {
      period: "2026 – 2028 · in progress",
      title: "Associate degree in Systems Analysis and Development",
      description: "Centro Universitário Senac Santo Amaro, evening classes",
    },
    {
      period: "2022 – 2024",
      title: "Internet of Things (IoT) technician",
      description: "Senac Nações Unidas, integrated with high school",
    },
    {
      period: "2026 · in progress",
      title: "IA para quem programa de verdade · curso.dev",
      description:
        "Coding agents, MCP, skills and Spec-Driven Development.",
    },
    {
      period: "Languages",
      title: "English B2 (upper intermediate)",
      description: "Native Portuguese",
    },
  ],
  ui: {
    skip: "Skip to content",
    navAria: "Main",
    menuOpen: "Open menu",
    menuClose: "Close menu",
    theme: "Switch between light and dark theme",
    themeTitle: "Switch theme",
    langSwitch: "Ler em português",
    building: "Building now",
    buildingDesc: ", an interactive island at the top of the screen",
    seeProjects: "See projects",
    resume: "Résumé (PDF)",
    projectsTitle: "Projects",
    projectsSubtitle: "NotchMuc is running live right here: go ahead, click around.",
    allOnGithub: "Everything on GitHub",
    openSite: "Open {label}",
    tech: "Technologies",
    otherProjects: "Other projects",
    schoolProjects: "College and courses",
    viewProject: "View project",
    live: "live",
    openInNewTab: "Open the {name} website in a new tab",
    loading: "Loading {label}…",
    iframeTitle: "{name} website, live",
    tapToInteract: "Tap to interact",
    clickToInteract: "Click to interact",
    srInteract: " with the {name} website",
    shot: "screenshot",
    shotRegion: "Screenshot of the {name} page",
    tapToScroll: "Tap to scroll the page",
    clickToScroll: "Click to scroll the page",
    srScroll: " of {name}",
    stackSubtitle: "What I use day to day, grouped by area.",
    timelineTitle: "Background",
    experience: "Experience",
    education: "Education",
    contactTitle: "Let's talk",
    contactText:
      "If you have an opening or a software development project, reach out. I study in the evenings and I'm available during the day (São Paulo time, UTC−3).",
  },
};
