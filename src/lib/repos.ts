export type Tag =
  | "deep-learning"
  | "ml"
  | "neural-networks"
  | "data-augmentation"
  | "game-development"
  | "procedural-generation"
  | "3d"
  | "creative-coding"
  | "diffusion"
  | "tool"
  | "cli"
  | "typescript"
  | "rust"
  | "python";

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
      "Biblioteca de aumento de dados para séries temporais — gera variações sintéticas a partir de dados existentes para turbinar modelos de ML.",
    summary:
      "Ponytail é uma ferramenta de **data augmentation** focada em séries temporais. Se você tem poucos dados (ex: 100 registros de vendas), o Ponytail gera centenas de variações realistas aplicando transformações como deformação temporal, ruído, escala, rotação no tempo e mais. Perfeito pra quem treina modelos de previsão ou classificação em séries temporais e sofre com dataset pequeno.",
    tags: ["python", "deep-learning", "ml", "data-augmentation"],
    stars: 0,
    language: "Python",
    author: "DietrichGebert",
    analyzedBy: "Íris",
    curatedAt: "2026-07-14",
    howToUse:
      "```bash\npip install ponytail\n\nfrom ponytail import augment_timeseries\n\n# Seus dados originais: array de (n_amostras, n_timesteps, n_features)\ndados_originais = [...] \n\n# Gera 500 variações\ndados_aumentados = augment_timeseries(\n    dados_originais,\n    n_samples=500,\n    methods=[\"warp\", \"noise\", \"scale\", \"rotation\"],\n    noise_std=0.05\n)\n```",
    example:
      "**Exemplo real:** Você tem 50 registros de temperatura diária de um sensor. Com `ponytail`, gera 500 séries sintéticas realistas pra treinar um modelo de previsão de temperatura sem overfit.",
    saasIdeas: [
      "API de aumento de dados pra ML — o usuário sobe um CSV de série temporal, recebe de volta 10x mais dados",
      "Serviço de fine-tuning pra modelos de previsão de demanda (e-commerce), gerando variações de sazonalidade",
      "Ferramenta embutida em plataformas de dados sintéticos (como Mostly AI) pra nicho de séries temporais",
    ],
    relatedRepos: ["caveman"],
    docsUrl: "https://github.com/DietrichGebert/ponytail",
  },
  {
    slug: "rtk",
    name: "RTK",
    fullName: "rtk-ai/rtk",
    url: "https://github.com/rtk-ai/rtk.git",
    description:
      "Conjunto de ferramentas de IA generativa para o Godot Engine — personagens com diálogo, NPCs inteligentes, e integração direta com LLMs no motor de jogos.",
    summary:
      "RTK (Real-time Toolkit) é um plugin/open-source que conecta o **Godot Engine** com modelos de IA generativa. Dá pra criar NPCs que respondem perguntas, personagens com memória e personalidade, diálogos dinâmicos — tudo rodando dentro do jogo. Suporta LLMs locais (via llama.cpp) e APIs externas (OpenAI, Anthropic). Ideal pra game devs que querem por IA nos jogos sem sair do Godot.",
    tags: ["game-development", "ml", "typescript", "rust"],
    stars: 0,
    language: "TypeScript",
    author: "rtk-ai",
    analyzedBy: "Íris",
    curatedAt: "2026-07-14",
    howToUse:
      "```bash\n# Adicionar ao seu projeto Godot via Asset Library ou:\ngit clone https://github.com/rtk-ai/rtk.git\n\n# No Godot:\nvar rtk = preload(\"res://rtk/rtk.gd\").new()\nrtk.set_provider(\"openai\", \"sk-...\")\n\n# Criar um NPC que responde perguntas:\nvar npc = rtk.create_character(\"Guarda\", \"Você é um guarda da cidade medieval\")\nvar resposta = await npc.ask(\"Onde fica a taverna?\")\nprint(resposta) # \"Siga a rua principal até a praça, a taverna fica à esquerda\"\n```",
    example:
      "**Exemplo real:** Um RPG medieval onde cada NPC tem personalidade única. Quando o jogador digita uma pergunta, o NPC responde contextualmente — sem roteiro fixo. O RTK gerencia a memória da conversa, o tom do personagem, e até reage a ações do jogador.",
    saasIdeas: [
      "Plataforma de criação de NPCs inteligentes pra jogos indie (SaaS pra Godot devs)",
      "Ferramenta de diálogo procedural pra campanhas de RPG de mesa (D&D com IA)",
      "Chatbot 3D com personagens animados em tempo real — atendimento ao cliente com avatar (ex: loja virtual com mascote que conversa)",
    ],
    relatedRepos: [],
    docsUrl: "https://github.com/rtk-ai/rtk",
  },
  {
    slug: "caveman",
    name: "Caveman",
    fullName: "JuliusBrussee/caveman",
    url: "https://github.com/JuliusBrussee/caveman.git",
    description:
      "🪨 why use many token when few token do trick — skill pro Claude Code que corta 65% dos tokens fazendo ele falar igual cavernícola.",
    summary:
      "Caveman é uma skill **meme** (mas que funciona) pro Claude Code. Ela instrui o modelo a responder no estilo **caveman** — frases curtas, sem firula, sem explicação prolixa. Resultado: redução de **~65% no consumo de tokens** sem perder qualidade técnica. É engenharia de prompt pura: em vez de 'I will now proceed to implement the solution by first analyzing the problem domain', vira 'Me make code now'. E o código continua saindo certo. Genial e ridículo ao mesmo tempo.",
    tags: ["tool", "cli", "typescript"],
    stars: 0,
    language: "JavaScript",
    author: "JuliusBrussee",
    analyzedBy: "Íris",
    curatedAt: "2026-07-14",
    howToUse:
      "```bash\n# Via Claude Code:\nclaude --skill caveman\n\n# Ou copia o conteúdo da skill pro seu projeto\n# https://github.com/JuliusBrussee/caveman/blob/main/skill.md\n```\n\nBasicamente é um system prompt que diz algo como:\n> You are caveman. Talk like caveman. Short words. No fluff. Make code.\n\nE o Claude obedece — gasta 65% menos tokens por resposta.",
    example:
      "**Antes (normal):** 'I will implement a binary search tree data structure with insertion, deletion, and traversal methods.'\n\n**Depois (caveman):** 'Me make tree. Node go left small, right big. Code now.'\n\nMesmo resultado técnico. Menos da metade dos tokens.",
    saasIdeas: [
      "Plugin pra qualquer LLM (GPT, Claude, Gemini) que comprime respostas automaticamente — economia direta em API calls",
      "Modo 'economia' embutido em assistentes de código — ativa quando o usuário quer gastar menos",
      "Ferramenta de benchmark de compressão de prompt — testa vários estilos (caveman, telegráfico, bullet) vs perda de qualidade",
    ],
    relatedRepos: [],
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
