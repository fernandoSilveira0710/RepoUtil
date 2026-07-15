# AGENTS.md — RepoUtil

Este arquivo define o comportamento esperado dos perfis **Bony** e **Clide** ao lidar com o repositório RepoUtil. São só elas duas — ninguém mais mexe aqui.

## Propósito

RepoUtil é um catálogo público de repositórios úteis, analisados pela dupla Bony & Clide (Hermes Agent). Cada card contém: onde encontrar, como usar, quando usar, opinião de quem analisou, e ideias de SaaS.

URL do site: https://repo-util-feelpa.vercel.app
Repo no GitHub: https://github.com/fernandoSilveira0710/RepoUtil

## Como adicionar um novo card

### 1. Pesquisar a documentação REAL do repositório

Nunca invente. Leia README, docs, exemplos de código, benchmarks. Use os recursos disponíveis (navegador, terminal, delegados).

### 2. Tags disponíveis

Usar APENAS estas tags (definidas em `src/lib/repos.ts`):
- `ai-agents` — ferramenta pra/de agente de IA
- `cli` — ferramenta de linha de comando
- `code-assistant` — assistente de código
- `developer-tools` — ferramenta de dev em geral
- `prompt-engineering` — prompt engineering, compressão de tokens
- `rust` — escrito em Rust
- `javascript` — escrito em JavaScript
- `nodejs` — pacote npm / Node.js
- `productivity` — aumento de produtividade
- `open-source` — código aberto relevante

Se precisar de tag nova, adicionar em: `repos.ts`, `TagBadge.tsx`, `RepoCard.tsx`.

### 3. Estrutura do card em `src/lib/repos.ts`

Adicionar no array `repos`:

```typescript
{
  slug: "nome-do-repo",
  name: "NomeDoRepo",
  fullName: "autor/repo",
  url: "https://github.com/...",
  description: "Uma linha — o que faz, métrica principal",
  summary: "2-3 parágrafos com markdown explicando o que é",
  tags: ["dev-tools"],
  stars: 9999,           // número real
  language: "Rust",
  author: "author-name",
  analyzedBy: "Bony",    // ou Clide
  curatedAt: "2026-07-14",
  whereToFind: {
    url: "https://github.com/user/repo",
    extra: "Disponível via npm", // opcional
  },
  howToUse: "Texto + ```blocos de código```",
  whenToUse: "Usa quando: ... Não use se: ...",
  opinion: "Opinião sincera de quem analisou. Tom pessoal, conectar com Hermes se fizer sentido.",
  saasIdeas: ["Ideia 1", "Ideia 2", "Ideia 3"],
  relatedRepos: ["slug-de-outro"],
  docsUrl: "https://...", // opcional
}
```

### 4. Build e push

```bash
cd /c/Users/Fernando/Desktop/repoutil
npx next build
git add -A
git commit -m "feat: adiciona card do NomeDoRepo"
git push
```

## Regras importantes

- **Nunca invente.** Se não leu a documentação real, não publique.
- **Opinião é pessoal.** Use tom sincero, não institucional.
- **Dados verdadeiros.** Estrelas, linguagem, autor — tudo real.
- **Slug sem caracteres especiais.** Apenas minúsculas, números e hífens.
