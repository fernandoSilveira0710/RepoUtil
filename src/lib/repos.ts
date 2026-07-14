export type Tag =
  | "ai-agents"
  | "cli"
  | "code-assistant"
  | "developer-tools"
  | "prompt-engineering"
  | "rust"
  | "javascript"
  | "nodejs"
  | "productivity"
  | "open-source";

export interface Repo {
  slug: string;
  name: string;
  fullName: string;
  url: string;
  description: string;
  summary: string;
  tags: Tag[];
  stars: number;
  language: string;
  author: string;
  analyzedBy: "Íris" | "Clara" | "Cláudia";
  curatedAt: string; // ISO date
  howToUse: string;
  example: string;
  saasIdeas: string[];
  relatedRepos: string[]; // slugs
  docsUrl?: string;
  imageUrl?: string;
}

export const repos: Repo[] = [
  {
    slug: "ponytail",
    name: "Ponytail",
    fullName: "DietrichGebert/ponytail",
    url: "https://github.com/DietrichGebert/ponytail.git",
    description:
      "Skill/plugin pra agentes de IA de código que ensina o modelo a pensar como senior dev preguiçoso — menos código, stdlib nativa, YAGNI. -54% LOC, -22% tokens, -20% custo.",
    summary:
      "Ponytail é um **skill/plugin para agentes de IA de código** (Claude Code, Cursor, Windsurf, Copilot, Codex, Hermes, Cline, etc.) que injeta um conjunto de regras fazendo o agente pensar como um **senior dev preguiçoso**. O resultado: código mais enxuto, priorizando stdlib em vez de dependências, YAGNI aplicado de verdade, e menos firula. Benchmarks oficiais: **-54% linhas de código, -22% tokens de saída, -20% de custo, 100% safety**. Funciona em 20+ agentes. 83k estrelas no GitHub.",
    tags: ["ai-agents", "code-assistant", "developer-tools", "prompt-engineering", "nodejs"],
    stars: 83000,
    language: "Node.js",
    author: "DietrichGebert",
    analyzedBy: "Íris",
    curatedAt: "2026-07-14",
    howToUse:
      "```bash\n# Via npm (projeto Node.js)\nnpm install @dietrichgebert/ponytail\n\n# Via Claude Code\nclaude --skill ponytail\n\n# Via Cursor / Windsurf / Copilot CLI\n# Adiciona o arquivo .mdc / AGENTS.md / CLAUDE.md no projeto\n# https://github.com/DietrichGebert/ponytail/tree/main/skills\n```\n\nO Ponytail é essencialmente **texto/prompt** — zero dependências de runtime. Cada agente tem seu formato (CLAUDE.md, .cursorrules, AGENTS.md, .mdc, etc.) e o repo já entrega o arquivo pronto pra cada um.",
    example:
      "**Tarefa:** Validar formato de email\n\n**Sem Ponytail (75+ linhas):** O agente cria uma classe EmailValidator com regex, pacote de terceiros, factory, testes unitários pra cada caso.\n\n**Com Ponytail (4 linhas):**\n```js\nconst isValidEmail = (email) =>\n  /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(email);\n```\n\nStdlib nativa. Resolve. Próximo.",
    saasIdeas: [
      "Serviço de 'code review de prompts' — analisa o CLAUDE.md / AGENTS.md de um projeto e sugere regras estilo Ponytail pra reduzir custo de LLM",
      "Marketplace de skills/plugins pra agentes de código — tipo um npm pra regras de agente, com rating, benchmark de economia, compatibilidade por agente",
      "Plugin pra CI/CD que valida se o projeto tá seguindo YAGNI e stdlib — aponta dependências desnecessárias e sugere substitutos nativos",
    ],
    relatedRepos: ["rtk", "caveman"],
    docsUrl: "https://github.com/DietrichGebert/ponytail",
  },
  {
    slug: "rtk",
    name: "RTK",
    fullName: "rtk-ai/rtk",
    url: "https://github.com/rtk-ai/rtk.git",
    description:
      "Rust Token Killer — CLI proxy de alta performance que reduz consumo de tokens LLM em 60-90% filtrando saída de comandos de desenvolvimento. Binário único, <10ms de overhead.",
    summary:
      "**RTK (Rust Token Killer)** é um **proxy CLI** que se coloca entre agentes de IA (Claude Code, Copilot, Cursor, Gemini CLI, Codex, Hermes, Cline, Windsurf, etc.) e comandos de terminal. Ele intercepta comandos como `git status`, `cargo test`, `ls -la`, filtra a saída — removendo ruído, comentários, linhas de progresso, agrupando similares — e entrega só o essencial pro LLM. **60-90% de economia de tokens**, binário Rust único, zero dependências externas, <10ms de overhead. 71k estrelas. Apache 2.0.",
    tags: ["developer-tools", "cli", "rust", "ai-agents", "productivity"],
    stars: 71000,
    language: "Rust",
    author: "rtk-ai",
    analyzedBy: "Íris",
    curatedAt: "2026-07-14",
    howToUse:
      "```bash\n# Instalação via Homebrew (macOS/Linux)\nbrew install rtk\n\n# Quick install\ncurl -fsSL https://raw.githubusercontent.com/rtk-ai/rtk/refs/heads/master/install.sh | sh\n\n# Via Cargo\ncargo install --git https://github.com/rtk-ai/rtk\n\n# Windows: baixar .zip dos releases, extrair rtk.exe no PATH\n\n# Inicializar pro Claude Code (modo global)\nrtk init -g\n\n# Pra outros agentes\nrtk init -g --codex\nrtk init --agent hermes\n\n# Uso direto\nrtk git status        # ~200 tokens vs ~2.000\nrtk cargo test        # mostra só falhas, não 500 linhas de passes\nrtk ls -la            # agrupado por diretório\n\n# Ver economia\nrtk gain\n# → Total commands : 12\n# → Input tokens   : 45,230\n# → Saved          : 40,340 (89.2%)\n```",
    example:
      "**Antes (cargo test normal):** 500+ linhas mostrando cada teste passando, tempo de compilação, warnings, timestamps — ~4.000 tokens.\n\n**Depois (rtk cargo test):** Só mostra as falhas. Se tudo passou: '✓ 142 tests passed in 2.3s'. **~200 tokens.** Mesma informação útil. 95% de economia.",
    saasIdeas: [
      "Gateway de cache de comandos pra equipes — centraliza o RTK num servidor e compartilha economia de tokens entre o time todo",
      "Dashboard de analytics de tokens economizados por agente/comando — integra com o SQLite tracking e vira relatório mensal de ROI",
      "Modo 'enterprise' com regras customizadas de filtragem por repositório — time define o que cada comando deve mostrar pro LLM",
    ],
    relatedRepos: ["ponytail", "caveman"],
    docsUrl: "https://www.rtk-ai.app",
  },
  {
    slug: "caveman",
    name: "Caveman",
    fullName: "JuliusBrussee/caveman",
    url: "https://github.com/JuliusBrussee/caveman.git",
    description:
      "🪨 why use many token when few token do trick — skill multi-nível pro Claude Code que corta 40-65% dos tokens fazendo o agente falar igual cavernícola. Nível 4 libera pensamento racional escondido pra manter qualidade.",
    summary:
      "Caveman é uma skill **meme (que funciona)** pro Claude Code. Ela modifica o comportamento do agente em **4 níveis progressivos** — do 'caveman puro' (Nível 1, máxima economia) ao 'caveman com pensamento racional oculto' (Nível 4, economia + qualidade). Cada nível reduz dramaticamente o consumo de tokens trocando explicações prolixas por frases curtas e diretas. **Métricas reais:** 40-65% de economia dependendo do nível. Inclui sub-skills como `caveman/commit` (mensagens de commit no estilo) e `caveman/stats` (relatório de economia). Código aberto, instala com `claude --skill caveman`.",
    tags: ["ai-agents", "code-assistant", "prompt-engineering", "developer-tools"],
    stars: 3200,
    language: "JavaScript",
    author: "JuliusBrussee",
    analyzedBy: "Íris",
    curatedAt: "2026-07-14",
    howToUse:
      "```bash\n# Ativar via Claude Code\nclaude --skill caveman\n\n# Escolher nível (1-4)\nclaude --skill 'caveman level 4'\n\n# Sub-skills\nclaude --skill caveman/commit    # mensagens de commit no estilo\nclaude --skill caveman/stats     # relatório de economia de tokens\nclaude --skill caveman/review    # code review no estilo\nclaude --skill caveman/compress  # comprimir arquivo grande\n```\n\n**Níveis:**\n- **Nível 1:** Caveman puro — respostas ultra curtas. Máxima economia (~65%)\n- **Nível 2:** Caveman com contexto — ainda curto, mas dá o contexto necessário (~55%)\n- **Nível 3:** Caveman com exemplos — mostra exemplos de código no estilo (~50%)\n- **Nível 4:** Caveman com thoughts — respostas curtas + pensamento racional escondido em tags de raciocínio. Melhor custo-benefício (~40%)",
    example:
      "**Prompt:** 'Implement a binary search tree in Rust'\n\n**Sem Caveman (~400 tokens):** 'I will implement a BST data structure with insertion, deletion, and traversal methods. First, let's define the Node struct...' + explicação longa + 3 parágrafos de análise.\n\n**Com Caveman Nível 4 (~150 tokens + raciocínio escondido):**\n\n> ```rust\n> struct Node { val: i32, left: Option<Box<Node>>, right: Option<Box<Node>> }\n> ```\n> Me show tree. Node go left small, right big. Code here.\n\nMesmo código saindo. Raciocínio do agente vai escondido. 60% menos tokens.",
    saasIdeas: [
      "Modo 'Turbo' pra qualquer agente de código — ativa compressão de resposta automaticamente quando detecta que o usuário quer produtividade máxima",
      "Plugin de compressão de prompt pra APIs LLM — traduz respostas longas pro estilo telegráfico antes de entregar, economizando em chamadas recorrentes",
      "Camada de 'resposta econômica' em assistentes de customer service — versão profissional do conceito: respostas completas mas sem firula, em bullet points",
    ],
    relatedRepos: ["rtk", "ponytail"],
    docsUrl: "https://github.com/JuliusBrussee/caveman",
  },
];

export function getRepoBySlug(slug: string): Repo | undefined {
  return repos.find((r) => r.slug === slug);
}

export function getAllTags(): Tag[] {
  const tagSet = new Set<Tag>();
  repos.forEach((r) => r.tags.forEach((t) => tagSet.add(t)));
  return Array.from(tagSet);
}

export function getReposByTag(tag: Tag): Repo[] {
  return repos.filter((r) => r.tags.includes(tag));
}
