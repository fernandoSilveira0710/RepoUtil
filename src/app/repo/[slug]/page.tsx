import Link from "next/link";
import { notFound } from "next/navigation";
import { repos, getRepoBySlug } from "@/lib/repos";
import TagBadge from "@/components/TagBadge";
import RepoCard from "@/components/RepoCard";
import CodeBlock from "@/components/CodeBlock";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return repos.map((repo) => ({ slug: repo.slug }));
}

function splitCodeBlocks(text: string): { blocks: { language: string; code: string }[]; text: string } {
  const codeBlocks: { language: string; code: string }[] = [];
  const parts: string[] = [];
  const regex = /```(\w*)\n([\s\S]*?)```/g;
  let lastIndex = 0;
  let match;

  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(text.slice(lastIndex, match.index).trim());
    }
    const lang = match[1] || "";
    const code = match[2].trim();
    codeBlocks.push({ language: lang, code });
    lastIndex = match.index + match[0].length;
  }

  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex).trim());
  }

  return { blocks: codeBlocks, text: parts.join("\n\n") };
}

export default async function RepoPage({ params }: Props) {
  const { slug } = await params;
  const repo = getRepoBySlug(slug);

  if (!repo) notFound();

  const relatedRepos = repos.filter((r) => repo.relatedRepos.includes(r.slug));
  const howTo = splitCodeBlocks(repo.howToUse || "");

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Breadcrumb */}
      <nav className="text-sm text-[#9ea096] mb-6">
        <Link href="/" className="hover:text-[#23251d] transition-colors">
          Início
        </Link>
        <span className="mx-2">/</span>
        <span className="text-[#65675e]">{repo.name}</span>
      </nav>

      {/* Header */}
      <section className="mb-10">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h1 className="text-3xl sm:text-4xl font-bold text-[#23251d] tracking-tight">
              {repo.name}
            </h1>
            <p className="text-[#9ea096] text-sm mt-1">
              <a
                href={repo.whereToFind?.url || repo.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#23251d] transition-colors"
              >
                {repo.fullName}
              </a>
            </p>
          </div>
          <a
            href={repo.whereToFind?.url || repo.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#23251d] text-white text-sm font-medium hover:opacity-80 transition-opacity shrink-0"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
            Ver original
          </a>
        </div>

        {/* Meta */}
        <div className="flex flex-wrap items-center gap-3 mt-4 text-sm text-[#65675e]">
          <span className="font-medium">{repo.language}</span>
          <span className="text-[#bfc1b7]">·</span>
          <span>por {repo.author}</span>
          <span className="text-[#bfc1b7]">·</span>
          <span>Analisado por {repo.analyzedBy}</span>
          <span className="text-[#bfc1b7]">·</span>
          <span>
            {new Date(repo.curatedAt).toLocaleDateString("pt-BR", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </span>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-4">
          {repo.tags.map((tag) => (
            <TagBadge key={tag} tag={tag} />
          ))}
        </div>
      </section>

      {/* ⚡ Onde encontrar */}
      <section className="mb-8">
        <h2 className="text-base font-bold text-[#23251d] mb-3 flex items-center gap-2">
          <span className="text-sm">📍</span> Onde encontrar
        </h2>
        <div className="bg-[#f4f3ef] rounded-xl p-4 border border-[#e2e1da]">
          <div className="flex flex-wrap items-center gap-4 text-sm">
            <a
              href={repo.whereToFind?.url || repo.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#23251d] font-medium hover:underline"
            >
              {repo.whereToFind?.url || repo.url}
            </a>
            {repo.stars > 0 && (
              <>
                <span className="text-[#bfc1b7]">·</span>
                <span>⭐ {repo.stars.toLocaleString("pt-BR")} estrelas</span>
              </>
            )}
            {repo.whereToFind?.extra && (
              <>
                <span className="text-[#bfc1b7]">·</span>
                <span className="text-[#65675e]">{repo.whereToFind.extra}</span>
              </>
            )}
          </div>
        </div>
      </section>

      {/* 🛠 Como usar */}
      <section className="mb-8">
        <h2 className="text-base font-bold text-[#23251d] mb-3 flex items-center gap-2">
          <span className="text-sm">🛠</span> Como usar
        </h2>
        {howTo.text && (
          <div className="text-sm text-[#4d4f46] mb-4 leading-relaxed whitespace-pre-line">
            {howTo.text}
          </div>
        )}
        <div className="space-y-3">
          {howTo.blocks.map((block, i) => (
            <CodeBlock key={i} code={block.code} language={block.language} />
          ))}
        </div>
        {howTo.blocks.length === 0 && !howTo.text && (
          <div className="text-sm text-[#65675e] italic">Nenhum guia de uso registrado.</div>
        )}
      </section>

      {/* 🎯 Quando usar */}
      <section className="mb-8">
        <h2 className="text-base font-bold text-[#23251d] mb-3 flex items-center gap-2">
          <span className="text-sm">🎯</span> Quando usar
        </h2>
        <div className="text-sm text-[#4d4f46] leading-relaxed">{repo.whenToUse}</div>
      </section>

      {/* 💬 Opinião da Bony / Clide */}
      <section className="mb-8">
        <h2 className="text-base font-bold text-[#23251d] mb-3 flex items-center gap-2">
          <span className="text-sm">💬</span> Opinião da {repo.analyzedBy}
        </h2>
        <div className="bg-[#f4f3ef] rounded-xl p-5 border border-[#e2e1da] text-sm text-[#4d4f46] leading-relaxed">
          {repo.opinion}
        </div>
      </section>

      {/* 🚀 Ideias de SaaS */}
      {repo.saasIdeas.length > 0 && (
        <section className="mb-8">
          <h2 className="text-base font-bold text-[#23251d] mb-3 flex items-center gap-2">
            <span className="text-sm">🚀</span> Ideias de SaaS
          </h2>
          <ul className="space-y-2">
            {repo.saasIdeas.map((idea, i) => (
              <li key={i} className="flex gap-3 text-sm text-[#4d4f46] leading-relaxed">
                <span className="text-[#bfc1b7] font-bold mt-0.5 shrink-0">{i + 1}.</span>
                <span>{idea}</span>
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* 🔗 Relacionados */}
      {relatedRepos.length > 0 && (
        <section className="mb-8">
          <h2 className="text-base font-bold text-[#23251d] mb-3 flex items-center gap-2">
            <span className="text-sm">🔗</span> Relacionados
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {relatedRepos.map((related) => (
              <RepoCard key={related.slug} repo={related} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
