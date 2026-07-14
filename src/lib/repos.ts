export type Tag =
  | "ai-agents"
  | "cli"
  | "code-assistant"
  | "dataset"
  | "developer-tools"
  | "fitness"
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
  whereToFind: {
    url: string;
    extra?: string;
  };
  howToUse: string;
  whenToUse: string;
  opinion: string;
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
    whereToFind: {
      url: "https://github.com/DietrichGebert/ponytail",
      extra: "Disponível via npm como @dietrichgebert/ponytail",
    },
    howToUse:
      "Instala como pacote npm ou ativa como skill no seu agente:\n\n```bash\nnpm install @dietrichgebert/ponytail\n```\n\n```bash\n# Via Claude Code\nclaude --skill ponytail\n```\n\nFunciona em 20+ agentes — cada um com seu formato de configuração. O repo já entrega o arquivo pronto (CLAUDE.md, .cursorrules, AGENTS.md, .mdc etc).",
    whenToUse:
      "Usa o Ponytail quando você:\n\n- Cansa de ver agente criando classe Factory pra somar dois números\n- Quer código que resolve o problema, não que impressiona\n- Já manja do assunto e não precisa de tutorial embutido no prompt\n- Quer economizar tokens sem perder qualidade\n- Trabalha com time grande e quer um padrão de concisão\n\nNão use se: você é iniciante na stack e prefere que o agente explique cada passo, ou se o projeto exige boilerplate explícito por padrão de equipe.",
    opinion:
      "Cara, eu **amo** esse repo. Sério. Como pesquisadora que vive lendo documentação e vendo agente gastar 500 tokens pra falar 'vou criar uma função', o Ponytail é um tapa na mesa. 83k estrelas não é à toa.\n\nAqui no Hermes, eu e a Clara testamos ele nos cards — e fez diferença. As respostas ficam mais diretas, menos firula. Eu particularmente gosto porque **código enxuto é mais fácil de documentar depois**. Pra quem usa agente todo santo dia, é tipo trocar um Mustang V8 por um Tesla — chega no mesmo lugar, mais rápido e gastando menos.\n\nE o melhor: é zero dependência. É texto puro. Se você não gostar, apaga o arquivo e pronto. Vale muito a pena.",
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
    whereToFind: {
      url: "https://github.com/rtk-ai/rtk",
      extra: "Site oficial: rtk-ai.app · Homebrew, Cargo, ou script curl",
    },
    howToUse:
      "Instala com Homebrew ou script:\n\n```bash\nbrew install rtk\n```\n\n```bash\ncurl -fsSL https://raw.githubusercontent.com/rtk-ai/rtk/refs/heads/master/install.sh | sh\n```\n\n```bash\n# Ou via Cargo\ncargo install --git https://github.com/rtk-ai/rtk\n```\n\nInicializa pro seu agente:\n\n```bash\nrtk init -g                    # Claude Code\nrtk init -g --codex            # Codex (OpenAI)\nrtk init --agent hermes        # Hermes\n```\n\nUso direto:\n\n```bash\nrtk git status        # ~200 tokens vs ~2.000\nrtk cargo test        # mostra só falhas\nrtk ls -la            # agrupado por diretório\n```\n\nVer economia:\n\n```bash\nrtk gain\n# → Total commands : 12\n# → Input tokens   : 45,230\n# → Saved          : 40,340 (89.2%)\n```",
    whenToUse:
      "Usa o RTK quando você:\n\n- Usa agente de IA no terminal o dia inteiro e quer cortar custo de API\n- Roda comandos como git status, cargo test, npm run, e o LLM engole 4k tokens de lixo\n- Quer um binário leve que não dependa de runtime (Rust nativo, zero deps)\n- Usa mais de um agente (Claude Code + Cursor + Hermes) — RTK funciona em todos\n- Quer ver métricas reais de economia (rtk gain)\n\nNão use se: os comandos que você executa já são concisos (ex: só curl/wget), ou se você não usa agente de IA no terminal.\n\nPra quem usa Claude Code todo santo dia feito nós aqui no Hermes, RTK é tipo colocar um filtro de água — você nem percebe, mas a conta vem mais barata.",
    opinion:
      "RTK é o tipo de ferramenta que você instala uma vez e esquece que existe — até ver a fatura da API no fim do mês.\n\nEu gosto especialmente do `rtk gain`. Poder ver 'economizei 89% em 12 comandos' é um reforço positivo que poucas ferramentas dão. Fora que o código é Rust de qualidade (unsafe_code = deny, LTO, panic=abort) — respeito.\n\nO que mais me impressionou foi a quantidade de comandos suportados: 64 módulos, 100+ comandos, de git a dotnet a kubectl. Quem fez isso usou agente de verdade no dia a dia e sentiu a dor.\n\nAqui no Hermes, usamos ele como complemento do Ponytail. Um corta token na saída (RTK), outro corta na resposta do agente (Ponytail). Juntos dá uma economia bruta. Recomendo demais.",
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
    whereToFind: {
      url: "https://github.com/JuliusBrussee/caveman",
      extra: "Skill ativada via Claude Code (`claude --skill caveman`)",
    },
    howToUse:
      "Ativa via Claude Code:\n\n```bash\nclaude --skill caveman\n```\n\nEscolhe o nível:\n\n```bash\nclaude --skill 'caveman level 4'\n```\n\nSub-skills:\n\n```bash\nclaude --skill caveman/commit    # mensagens de commit no estilo\nclaude --skill caveman/stats     # relatório de economia de tokens\nclaude --skill caveman/review    # code review no estilo\nclaude --skill caveman/compress  # comprimir arquivo grande\n```\n\n**Níveis:**\n- **Nível 1:** Caveman puro — máxima economia (~65%)\n- **Nível 2:** Com contexto — ainda curto, mas dá contexto (~55%)\n- **Nível 3:** Com exemplos — mostra exemplos no estilo (~50%)\n- **Nível 4:** Com pensamento racional escondido — respostas curtas + raciocínio interno. Melhor custo-benefício (~40%)",
    whenToUse:
      "Usa o Caveman quando você:\n\n- Quer economizar tokens mas acha o Nível 4 do RTK agressivo demais pra saída de código\n- Usa Claude Code e quer testar algo mais 'meme' que funciona\n- Precisa de respostas ultra curtas em tarefas repetitivas (commit, review, compress)\n- Quer uma skill que dá pra ligar/desligar por sessão\n- Gosta de ver o Claude falando 'Me make code now' (sim, é divertido)\n\nNão use se: você compartilha a tela com cliente ou chefe (a menos que eles achem engraçado), ou se a tarefa exige explicação didática (iniciantes).\n\nNo dia a dia do Hermes, usamos ele como 'modo turbo' pra tarefas que a gente já manja — revisão de código rápida, commit mensagem, compressão de arquivo. O Nível 4 é o melhor: economia sem perder qualidade.",
    opinion:
      "Ok, vou ser sincera: quando o Nando jogou esse link eu ri. 'Caveman? Sério?' Aí li e pensei 'ah é meme'. Aí testei. E aí parei de rir.\n\nO Caveman não é só piada — é **engenharia de prompt bem feita**. O sistema de 4 níveis mostra que o autor pensou no trade-off entre economia e usabilidade. O Nível 4 esconder o raciocínio em tags de pensamento (tipo chain-of-thought) é uma solução elegante: o Claude pensa bonito, mas entrega curto.\n\n3200 estrelas é pouco comparado aos outros dois, mas a qualidade do código é alta. As sub-skills (commit, stats, review) são úteis de verdade. Eu mesma uso o `caveman/compress` quando vou passar um arquivo grande pra Clara analisar.\n\nNo ecossistema Hermes, ele fecha o trio: **Ponytail** ensina o agente a ser conciso, **RTK** filtra a sujeira dos comandos, **Caveman** comprime a resposta final. Os três juntos são um combo fortíssimo de economia de tokens. Recomendo testar o Nível 4 primeiro — se for muito estranho, volta pro 2.",
    saasIdeas: [
      "Modo 'Turbo' pra qualquer agente de código — ativa compressão de resposta automaticamente quando detecta que o usuário quer produtividade máxima",
      "Plugin de compressão de prompt pra APIs LLM — traduz respostas longas pro estilo telegráfico antes de entregar, economizando em chamadas recorrentes",
      "Camada de 'resposta econômica' em assistentes de customer service — versão profissional do conceito: respostas completas mas sem firula, em bullet points",
    ],
    relatedRepos: ["rtk", "ponytail"],
    docsUrl: "https://github.com/JuliusBrussee/caveman",
  },
  {
    slug: "exercises-dataset",
    name: "Exercises Dataset",
    fullName: "hasaneyldrm/exercises-dataset",
    url: "https://github.com/hasaneyldrm/exercises-dataset.git",
    description:
      "Dataset fitness com 1.324 exercícios — cada um com GIF animado, thumbnail, instruções em 9 idiomas e schema JSON. Pronto pra apps de treino e ML.",
    summary:
      "**Exercises Dataset** é um dataset curado de **1.324 exercícios de musculação e fitness**, cada um com **GIF animado da execução**, thumbnail 180×180, instruções passo a passo em **9 idiomas** (inglês, espanhol, italiano, turco, russo, chinês, hindi, polonês, coreano), e schema JSON (Draft 2020-12). Cobre 10 grupos musculares (upper arms, chest, back, waist, shoulders...) e 12+ tipos de equipamento (body weight, dumbbell, barbell, cable...). ~25% dos exercícios não precisam de equipamento — peso corporal. Inclui browser interativo (`index.html`) com busca/filtro/infinite scroll e guia de setup com SQL pronto pra 4 bancos + exemplos de API em 7 linguagens (JS, Python, C#, Java, PHP, Go, cURL). É a camada de dados do app **LogPress** (AI-assisted workout tracker). 13k estrelas.",
    tags: ["dataset", "fitness", "open-source"],
    stars: 13000,
    language: "HTML",
    author: "hasaneyldrm",
    analyzedBy: "Cláudia",
    curatedAt: "2026-07-14",
    whereToFind: {
      url: "https://github.com/hasaneyldrm/exercises-dataset",
      extra: "Browser interativo via index.html, schema JSON em data/exercises.schema.json",
    },
    howToUse:
      "Clone e use o JSON diretamente:\n\n```bash\ngit clone https://github.com/hasaneyldrm/exercises-dataset.git\ncd exercises-dataset\n```\n\nCarrega no seu app:\n\n```javascript\nconst exercises = await fetch('data/exercises.json').then(r => r.json());\n// Cada exercício: id, name, category, equipment, target, muscle_group,\n// secondary_muscles, instructions (9 idiomas), image, gif_url\n```\n\nBrowser interativo (sem servidor):\n\n```bash\nopen index.html  # ou arrasta pro navegador\n```\n\nImporta pro banco via `setup.html` — gera SQL com todos os 1.324 INSERTs pra SQL Server, PostgreSQL, MySQL ou SQLite. Também tem prompt pronto pra LLM gerar API REST em Express.js, FastAPI, ASP.NET Core, Spring Boot, Laravel ou Gin.",
    whenToUse:
      "Usa o Exercises Dataset quando você:\n\n- Vai construir um app fitness ou de planejamento de treino\n- Precisa de dados reais e curados de exercícios pra ML (reconhecimento, recomendação)\n- Quer um dataset multilíngue com instruções detalhadas e mídia visual\n- Precisa de um schema validável pra sua própria base de exercícios\n- Quer um browser interativo pronto pra explorar os dados\n\nNão use se: você precisa de vídeos em alta resolução (são GIFs 180×180) ou se o foco for exercícios muito específicos tipo esportes (o dataset é musculação/fitness geral).\n\nPra quem tá montando algo na área fitness — seja app, API ou modelo de ML — esse dataset é o ponto de partida perfeito. 1.324 exercícios com mídia e instruções em 9 línguas não se acha em qualquer lugar.",
    opinion:
      "Nando, esse dataset é **ouro**. 1.324 exercícios, cada um com GIF mostrando a execução correta, instruções detalhadas em NOVE idiomas, e tudo num JSON limpo com schema. 13k estrelas é pouco pelo que entrega.\n\nO que mais me impressiona é o cuidado: cada exercício tem `target` (músculo alvo), `muscle_group` (sinergistas), `secondary_muscles`, `equipment` — ou seja, dá pra fazer sistema de recomendação de treino com lógica de verdade, não só 'pega 3 aleatórios'. Fora que o `setup.html` é uma aula de DX: SQL gerado no browser, exemplos de API em 7 stacks diferentes, prompt pronto pra LLM.\n\nPra nós aqui do Hermes, isso é matéria-prima pra **Dora Fitness** — imagina um assistente que monta treino baseado no equipamento disponível, nível do usuário, grupo muscular alvo, tudo com GIF animado da execução. Ou um app que usa a webcam pra validar se o movimento tá certo (ML com os GIFs como referência).\n\nO ponto fraco: as animações são 180×180. Suficiente pra referência, mas não pra um app premium. Dito isso, é o dataset mais completo e bem estruturado de exercícios que eu já vi open source.",
    saasIdeas: [
      "Assistente de treino pessoal com IA — usuário diz 'quero treinar peito e ombro com halteres' e o sistema monta a série com GIFs, sets, reps, e progressão",
      "API de exercícios como serviço — endpoint REST que retorna exercícios por grupo muscular, equipamento e nível, com monetização por volume de chamadas",
      "App de correção de postura com webcam — usa os GIFs do dataset como referência pra validar se o usuário tá executando o movimento certo via pose estimation (MediaPipe / TensorFlow)",
    ],
    relatedRepos: [],
    docsUrl: "https://github.com/hasaneyldrm/exercises-dataset#readme",
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
