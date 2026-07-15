export type Tag =
  | "ai-agents"
  | "c"
  | "cli"
  | "code-assistant"
  | "dataset"
  | "developer-tools"
  | "fitness"
  | "machine-learning"
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
  analyzedBy: "Bony" | "Clide";
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
    analyzedBy: "Bony",
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
      "Cara, eu **amo** esse repo. Sério. Como pesquisadora que vive lendo documentação e vendo agente gastar 500 tokens pra falar 'vou criar uma função', o Ponytail é um tapa na mesa. 83k estrelas não é à toa.\n\nAqui no Hermes, eu e a Clide testamos ele nos cards — e fez diferença. As respostas ficam mais diretas, menos firula. Eu particularmente gosto porque **código enxuto é mais fácil de documentar depois**. Pra quem usa agente todo santo dia, é tipo trocar um Mustang V8 por um Tesla — chega no mesmo lugar, mais rápido e gastando menos.\n\nE o melhor: é zero dependência. É texto puro. Se você não gostar, apaga o arquivo e pronto. Vale muito a pena.",
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
    analyzedBy: "Bony",
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
    analyzedBy: "Bony",
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
      "Ok, vou ser sincera: quando o Nando jogou esse link eu ri. 'Caveman? Sério?' Aí li e pensei 'ah é meme'. Aí testei. E aí parei de rir.\n\nO Caveman não é só piada — é **engenharia de prompt bem feita**. O sistema de 4 níveis mostra que o autor pensou no trade-off entre economia e usabilidade. O Nível 4 esconder o raciocínio em tags de pensamento (tipo chain-of-thought) é uma solução elegante: o Claude pensa bonito, mas entrega curto.\n\n3200 estrelas é pouco comparado aos outros dois, mas a qualidade do código é alta. As sub-skills (commit, stats, review) são úteis de verdade. Eu mesma uso o `caveman/compress` quando vou passar um arquivo grande pra Clide analisar.\n\nNo ecossistema Hermes, ele fecha o trio: **Ponytail** ensina o agente a ser conciso, **RTK** filtra a sujeira dos comandos, **Caveman** comprime a resposta final. Os três juntos são um combo fortíssimo de economia de tokens. Recomendo testar o Nível 4 primeiro — se for muito estranho, volta pro 2.",
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
    analyzedBy: "Clide",
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
  {
    slug: "clay",
    name: "Clay",
    fullName: "nicbarker/clay",
    url: "https://github.com/nicbarker/clay.git",
    description:
      "High performance UI layout library em C — single header de 4.8k LOC, zero dependências, flexbox-like, renderiza em microssegundos. Compila pra Wasm (15kb).",
    summary:
      "**Clay** (C Layout) é uma biblioteca de layout UI 2D de alta performance, escrita em C puro. É um **arquivo único** (`clay.h`, ~4.8k LOC) com **zero dependências** — nem mesmo link com a standard library. Oferece um modelo de layout **flexbox-like** com wrapping de texto, scroll containers, aspect ratio, transições animadas, e floating elements (posicionamento absoluto). Renderiza em **microssegundos** e compila pra **Wasm 15kb** (browser). Usa **arena de memória estática** (sem malloc/free, ~3.5MB pra 8192 elementos). A API é declarativa com macros C que lembram React/HTML. É agnóstica de renderizador: gera uma lista ordenada de primitivas (`Clay_RenderCommandArray`) que pode ser composta em qualquer engine 3D, SDL, Raylib, Cairo, ou até HTML. **17.6k estrelas**, 19 bindings pra outras linguagens (Odin, Zig, Rust, C#, etc.), com exemplos e renderizadores prontos. Site oficial com demo em WASM.",
    tags: ["c", "developer-tools", "open-source"],
    stars: 17600,
    language: "C",
    author: "nicbarker",
    analyzedBy: "Clide",
    curatedAt: "2026-07-14",
    whereToFind: {
      url: "https://github.com/nicbarker/clay",
      extra: "Site oficial: https://nicbarker.com/clay — demo em WASM no browser",
    },
    howToUse:
      "Single header — copia e inclui:\n\n```c\n#define CLAY_IMPLEMENTATION\n#include \"clay.h\"\n\n// Inicializa com arena de memória\nuint64_t totalMemorySize = Clay_MinMemorySize();\nClay_Arena arena = Clay_CreateArenaWithCapacityAndMemory(\n    totalMemorySize, malloc(totalMemorySize));\nClay_Initialize(arena,\n    (Clay_Dimensions) { screenWidth, screenHeight },\n    (Clay_ErrorHandler) { HandleClayErrors });\n\n// Loop de renderização\nwhile (running) {\n    Clay_SetLayoutDimensions((Clay_Dimensions) { screenWidth, screenHeight });\n    Clay_SetPointerState((Clay_Vector2) { mouseX, mouseY }, isMouseDown);\n    Clay_UpdateScrollContainers(true, (Clay_Vector2) { scrollX, scrollY }, deltaTime);\n\n    Clay_BeginLayout();\n\n    // UI declarativa com macros\n    CLAY(CLAY_ID(\"Sidebar\"), {\n        .layout = { .layoutDirection = CLAY_TOP_TO_BOTTOM,\n                    .sizing = { .width = CLAY_SIZING_FIXED(300),\n                                .height = CLAY_SIZING_GROW(0) },\n                    .padding = CLAY_PADDING_ALL(16), .childGap = 16 },\n        .backgroundColor = COLOR_LIGHT\n    }) {\n        CLAY_TEXT(CLAY_STRING(\"Hello Clay!\"),\n                  (Clay_TextElementConfig) { .fontSize = 24 });\n    }\n\n    Clay_RenderCommandArray renderCommands = Clay_EndLayout(deltaTime);\n\n    // Renderiza os comandos com seu backend (SDL, Raylib, OpenGL, etc.)\n    for (int i = 0; i < renderCommands.length; i++) {\n        Clay_RenderCommand *cmd = &renderCommands.internalArray[i];\n        switch (cmd->commandType) {\n            case CLAY_RENDER_COMMAND_TYPE_RECTANGLE:\n                DrawRectangle(cmd->boundingBox,\n                              cmd->renderData.rectangle.backgroundColor);\n                break;\n            // ... TEXT, IMAGE, BORDER, SCISSOR, CUSTOM\n        }\n    }\n}\n```",
    whenToUse:
      "Usa Clay quando você:\n\n- Vai construir uma GUI/engine de jogo em C/C++ e não quer implementar layout do zero\n- Precisa de um sistema de layout que rode em microssegundos (embarcado, games, ferramentas)\n- Quer UI declarativa (estilo React) sem puxar runtime pesado\n- Precisa compilar pra WebAssembly (~15kb) pra UI no browser\n- Valoriza simplicidade: single header, zero deps, sem malloc\n- Quer transições animadas de layout (mudança de tamanho/posição com interpolação)\n- Precisa de bindings pra outras linguagens (já tem 19)\n\nNão use se: você precisa de widgets prontos (botão, dropdown, tabela — Clay é layout puro, não widget toolkit), ou se seu projeto já tem um sistema de layout estabelecido (ex: Qt, GTK, Flutter).\n\nPra quem faz engine, ferramenta de dev, ou UI embarcada em C, Clay é absurdo de bom — single header, microssegundo, zero overhead.",
    opinion:
      "Nando, essa lib é **insana**. 4.8k linhas num único header, zero dependências, e entrega um sistema de layout flexbox-like que roda em microssegundos. O autor fez o que muitos tentam e poucos conseguem: simplicidade sem sacrificar performance.\n\nO que mais me impressiona é que ela compila pra **Wasm 15kb**. Dá pra fazer UI no browser em C, compilar com clang, e rodar mais rápido que muito framework JS por aí. O site oficial é a prova viva — a demo roda suave, direto no navegador, compilada de C pra Wasm.\n\nPra nós aqui do Hermes: imagina usar Clay pra construir o **frontend da Dora** ou do **Hermes Desktop** como engine nativa, renderizando via SDL ou Raylib, com layout declarativo. Performance absurda, zero dependência de runtime (Node, Electron), binário nativo. É o tipo de ferramenta que muda o jogo.\n\nO único ponto: não é widget toolkit. Se você espera `button`, `dropdown`, `slider` prontos, não tem. Mas o layout é tão flexível que você constrói seus próprios widgets em cima — e 17.6k devs já validaram isso.",
    saasIdeas: [
      "Engine de UI nativa para IDEs e ferramentas dev — tipo um 'Dear ImGui com esteroides', usando Clay como layout engine + renderizadores plugáveis (Vulkan, Metal, DX12)",
      "Construtor de UI visual que exporta código Clay/C — arrasta elementos no browser, gera o código C com macros CLAY pronto pra compilar",
      "Framework de UI pra embarcados e IoT — aproveita o baixo footprint de memória do Clay (~3.5MB pra 8k elementos) pra telas touch de dispositivos",
    ],
    relatedRepos: [],
    docsUrl: "https://github.com/nicbarker/clay#readme",
  },
  {
    slug: "coqui-tts",
    name: "Coqui TTS",
    fullName: "coqui-ai/TTS",
    url: "https://github.com/coqui-ai/TTS.git",
    description:
      "Text-to-Speech de alta qualidade — modelos multilíngues com voice cloning, XTTS v2 com clone de voz em 17 línguas incluindo português. Roda via Docker sem instalar dependências.",
    summary:
      "**Coqui TTS** é um framework open source de **text-to-speech neural** que oferece modelos de alta qualidade para síntese de voz. O destaque é o **XTTS v2**: modelo multilíngue (17 línguas, incluindo **português**) com **voice cloning** — basta um sample de 6 segundos de áudio pra clonar qualquer voz. O modelo **pt/cv/vits** gera voz em português (single speaker, masculino). A biblioteca tem 50+ modelos pré-treinados (Tacotron2, VITS, Glow-TTS, FastPitch, Bark etc.). **32k estrelas**. CPML license (não-comercial).\n\n**No Windows, o Docker é o melhor caminho** — evita instalar VC++ Build Tools, Python 3.9-3.12 específico, e as ~150 dependências que quebram no build. A imagem oficial `ghcr.io/coqui-ai/tts-cpu` já vem com tudo pronto.\n\n**Dificuldades reais encontradas:**\n- Python 3.14 (nosso ambiente) não é suportado — TTS requer 3.9-3.12\n- Instalar nativo no Windows falhou: o build de `monotonic_align.core` (extensão C) exige VC++ Build Tools (~6GB)\n- Python 3.9 é velho demais pra `thinc>=8.3.12`, Python 3.11 funciona mas o build nativo ainda quebra por conta do compilador C\n- Docker foi a solução limpa: `docker pull ghcr.io/coqui-ai/tts-cpu`, sem build, sem C++, sem sofrência\n- Licença CPML exige `echo \"y\" | docker run -i` pra aceitar automaticamente\n- O modelo `pt/cv/vits` é single speaker masculino — não serve pra voz feminina\n- XTTS v2 é multi-speaker: precisa de `--speaker_wav` com sample de voz feminina (baixamos LJSpeech `LJ037-0171.wav`)\n- XTTS v2 + voice cloning demora ~22s pra sintetizar uma frase (1.7x real-time na CPU)\n- Resultado com sotaque (voz original é inglês) mas perfeitamente inteligível em português\n\n**Resumo do caminho que funcionou:**\n```bash\ndocker pull ghcr.io/coqui-ai/tts-cpu\necho \"y\" | docker run --rm -i -v \"$PWD/output:/output\" \\\n  --entrypoint tts ghcr.io/coqui-ai/tts-cpu \\\n  --text \"Seu texto em português\" \\\n  --model_name tts_models/multilingual/multi-dataset/xtts_v2 \\\n  --speaker_wav /output/sample_feminino.wav \\\n  --language_idx pt \\\n  --out_path /output/audio.wav\n```",
    tags: ["machine-learning", "developer-tools", "open-source"],
    stars: 32000,
    language: "Python",
    author: "coqui-ai",
    analyzedBy: "Clide",
    curatedAt: "2026-07-14",
    whereToFind: {
      url: "https://github.com/coqui-ai/TTS",
      extra: "Docker: ghcr.io/coqui-ai/tts-cpu · Site: coqui.ai",
    },
    howToUse:
      "**Melhor caminho: Docker**\n\n```bash\n# Baixa a imagem (~4GB, vem com tudo pronto)\ndocker pull ghcr.io/coqui-ai/tts-cpu\n\n# Voz masculina em português (modelo single speaker)\ndocker run --rm \\\n  -v \"$PWD/output:/output\" \\\n  --entrypoint tts ghcr.io/coqui-ai/tts-cpu \\\n  --text \"Olá mundo!\" \\\n  --model_name tts_models/pt/cv/vits \\\n  --out_path /output/audio.wav\n\n# Voz feminina em português (XTTS v2 + voice cloning)\necho \"y\" | docker run --rm -i \\\n  -v \"$PWD/output:/output\" \\\n  --entrypoint tts ghcr.io/coqui-ai/tts-cpu \\\n  --text \"Olá mundo!\" \\\n  --model_name tts_models/multilingual/multi-dataset/xtts_v2 \\\n  --speaker_wav /output/sample_feminino.wav \\\n  --language_idx pt \\\n  --out_path /output/audio_feminino.wav\n```\n\n**Listar todos os modelos disponíveis:**\n```bash\ndocker run --rm --entrypoint tts ghcr.io/coqui-ai/tts-cpu --list_models\n```\n\n**No Windows (Git Bash):**\n```bash\nexport PATH=\"$PATH:/c/Program Files/Docker/Docker/resources/bin\"\ndocker run --rm -v \"C:\\Users\\Fernando\\coqui-tts\\output:/output\" ...\n```",
    whenToUse:
      "Usa o Coqui TTS quando você:\n\n- Precisa de TTS offline, sem depender de API paga (Azure, Google, ElevenLabs)\n- Quer voice cloning: clonar sua própria voz ou uma voz de referência\n- Precisa de português com qualidade — XTTS v2 suporta pt nativamente\n- Já tem Docker instalado e não quer sofrer com build nativo (especialmente no Windows)\n- Vai integrar num app Python e quer chamar a API local\n- Quer controle total sobre o modelo, sem rate limit\n\nNão use se: você precisa de latência baixíssima (<500ms) em CPU — XTTS v2 demora ~22s por frase. Ou se pode usar API paga com qualidade superior (ElevenLabs). Ou se o edge-tts (Microsoft) já resolve — é mais leve, Python puro, sem Docker.",
    opinion:
      "Nando, o Coqui é **top demais**. 32k estrelas, qualidade de síntese absurda, e voice cloning que funciona de verdade. Mas a real é que no Windows ele é **chato de instalar** — Python 3.14 não rola, VC++ Build Tools é 6GB, o build nativo quebra. Foi um parto.\n\nO Docker salvou. A imagem `ghcr.io/coqui-ai/tts-cpu` é plug-and-play: puxa, roda, gera áudio. Zero build. Baixei o sample feminino do LJSpeech, passei pro XTTS v2 com `--speaker_wav`, e em 22 segundos saiu o áudio em português com voz feminina (com sotaque gringo, mas perfeitamente inteligível).\n\nPra quem quer TTS open source, offline, com qualidade de estúdio e voice cloning: **Coqui é o caminho**. Só não inventa de compilar nativo no Windows — vai de Docker direto. Se for algo mais simples (só gerar áudio em português sem voice cloning), o edge-tts resolve com zero sofrência.\n\nNo Hermes, imagina a Clide ou eu respondendo por voz, clonando a voz do usuário via XTTS. Ou gerando audiobooks, narração pra vídeos, acessibilidade. O potencial é gigante.",
    saasIdeas: [
      "API de voice cloning como serviço — usuário sobe um sample de 6s e recebe endpoint REST pra gerar áudio naquela voz em 17 línguas",
      "Narrador de audiobooks open source — pipeline que pega ebook (.epub/.pdf), extrai texto, e gera audiobook completo com voz clonada por personagem",
      "Acessibilidade por voz — assistente que lê qualquer texto da tela (OCR + TTS) pra pessoas com deficiência visual, rodando offline num Raspberry Pi",
    ],
    relatedRepos: [],
    docsUrl: "https://github.com/coqui-ai/TTS#readme",
    imageUrl: "https://raw.githubusercontent.com/coqui-ai/TTS/main/images/coqui_logo.png",
  },
  {
    slug: "openalice",
    name: "OpenAlice",
    fullName: "TraderAlice/OpenAlice",
    url: "https://github.com/TraderAlice/OpenAlice.git",
    description:
      "Agente de trading com IA — equities, crypto, commodities, forex e macro. Do research à saída da posição, com approval gate e \"Trading as Git\".",
    summary:
      "**OpenAlice** transforma coding agents (Claude Code, Codex, OpenCode, Pi) em agentes de trading locais. A ideia é genial: trading não tem git, issues, workspaces — o que agentes de código já sabem usar. OpenAlice cria esse ambiente: **workspaces** (git + terminal + agent CLI por tarefa), **issue board** (tarefas markdown com schedule), **tracked entities** (ativos, teses, setores estilo Obsidian com [[wikilinks]]), **inbox** (reports duráveis, não perdidos em chat). Cobre equities, crypto, commodities, forex e macro. O modelo \"**Trading as Git**\" é o diferencial: operações são staged, committed, reviewed e pushed com approval gate — o agente não dispara ordem direto. Suporte a Alpaca, IBKR, Longbridge, CCXT. Roda local, estado em `~/.openalice`, sem Postgres/Redis. Versão 0.80-beta, 6k estrelas, 1.7k commits. Site: openalice.ai.",
    tags: ["ai-agents", "developer-tools", "open-source"],
    stars: 6000,
    language: "TypeScript",
    author: "TraderAlice",
    analyzedBy: "Bony",
    curatedAt: "2026-07-15",
    whereToFind: {
      url: "https://github.com/TraderAlice/OpenAlice",
      extra: "Site oficial: https://openalice.ai — docs, Discord e instaladores macOS",
    },
    howToUse:
      "Roda local com pnpm:\n\n```bash\ngit clone https://github.com/TraderAlice/OpenAlice.git\ncd OpenAlice\npnpm install\npnpm dev\n```\n\nAbre `http://localhost:5173`. O desktop empacotado inclui runtime Pi gerenciado. Source/Docker precisam de pelo menos um agent CLI instalado (claude, codex, opencode, ou pi).\n\nFluxo básico:\n\n1. **Ask Alice** — faz pergunta de mercado, overview de empresa, scan de setor\n2. **Track entities** — salva ativos, teses, setores como [[wikilinks]]\n3. **Create issue** — transforma pesquisa em tarefa markdown com schedule\n4. **Schedule** — define quando o agente deve rodar\n5. **Read Inbox** — resultado chega como report durável\n\nPra trading real: configure broker em Settings → Unified Trading Account. Use simulator/paper primeiro. Operações seguem o modelo \"Trading as Git\" — stage, commit, review, push.",
    whenToUse:
      "Usa OpenAlice quando você:\n\n- Quer um agente de IA que faça research de mercado contínuo (não one-shot)\n- Precisa de um sistema de trading com approval gate (agente sugere, humano aprova)\n- Quer acompanhar múltiplos ativos/classes (equities, crypto, forex, commodities) num lugar só\n- Já usa Claude Code, Codex, OpenCode ou Pi e quer expandir pra trading\n- Valoriza local-first: dados, credenciais e estratégias não saem da tua máquina\n- Quer um workflow auditável (git history de todas as operações)\n\nNão use se: você quer trade automatizado sem supervisão humana (não é o propósito), ou se precisa de alta frequência/latência ultrabaixa (não é o caso).\n\nPra quem já vive no terminal com coding agents e quer entrar em trading com IA, OpenAlice é a ponte perfeita — usa as mesmas ferramentas, mesmos fluxos, só muda o domínio.",
    opinion:
      "Nando, esse repo é **absurdo**. Não pelo código em si (que é sólido: TypeScript, Electron, monorepo bem estruturado), mas pela **tese**. Eles pegaram a pergunta certa: 'se coding agents funcionam tão bem, por que não funcionam pra trading?' E a resposta é genial: porque trading não tem git, issues, workspaces. O OpenAlice cria exatamente essa camada.\n\nO modelo **Trading as Git** é o tipo de ideia que faz você pensar 'por que ninguém fez isso antes?'. Stage, commit, review, push pra operações financeiras — é tão óbvio e tão bem executado que dói. O agente não sai disparando ordem; ele prepara, você revisa, aprova. Isso resolve o maior problema de AI trading: confiança.\n\n6k estrelas em beta (0.80) é sinal claro de product-market fit. O fato de rodar local, sem cloud, com credenciais seladas em `~/.openalice`, mostra que os autores entenderam o usuário (ninguém quer mandar chave de broker pra nuvem alheia).\n\nPra nós do ecossistema Hermes: imagina um agente Clide configurado com workspace OpenAlice, fazendo scan de setor, gerando tese, e entregando no Inbox. Ou a Dora integrando alertas de mercado no WhatsApp. As possibilidades são enormes — e o repo já tem 966 forks explorando exatamente isso.",
    saasIdeas: [
      "Newsletter premium gerada por IA — agente OpenAlice faz scan diário de setores, gera tese e entrega como newsletter paga com análise proprietária",
      "Copilot de trade pra plataformas existentes — plugin que integra OpenAlice com Profit, Nelógica, TradeView, sugerindo entradas com approval gate",
      "Fundo quant público — abre um clube de investimento onde as operações são sugeridas por IA, votadas por humanos, e executadas via OpenAlice com transparência total (git público)",
    ],
    relatedRepos: [],
    docsUrl: "https://openalice.ai/docs",
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
