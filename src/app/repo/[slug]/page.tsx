import Link from "next/link";
import { notFound } from "next/navigation";
import { repos, getRepoBySlug } from "@/lib/repos";
import TagBadge from "@/components/TagBadge";
import RepoCard from "@/components/RepoCard";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return repos.map((repo) => ({ slug: repo.slug }));
}

export default async function RepoPage({ params }: Props) {
  const { slug } = await params;
  const repo = getRepoBySlug(slug);

  if (!repo) notFound();

  const relatedRepos = repos.filter((r) => repo.relatedRepos.includes(r.slug));

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
                href={repo.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#23251d] transition-colors"
              >
                {repo.fullName}
              </a>
            </p>
          </div>
          <a
            href={repo.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#23251d] text-white text-sm font-medium hover:opacity-80 transition-opacity shrink-0"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
            Ver no GitHub
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

      {/* Summary */}
      <section className="mb-10">
        <h2 className="text-xl font-bold text-[#23251d] mb-3">📋 Resumo</h2>
        <div className="prose prose-sm prose-[#4d4f46] max-w-none leading-relaxed text-[#4d4f46]">
          <p>{repo.summary}</p>
        </div>
      </section>

      {/* How to use */}
      <section className="mb-10">
        <h2 className="text-xl font-bold text-[#23251d] mb-3">🔧 Como usar</h2>
        <div className="bg-[#f4f3ef] rounded-xl p-5 border border-[#e2e1da] overflow-x-auto">
          <pre className="text-sm text-[#23251d] whitespace-pre-wrap font-mono">
            {repo.howToUse}
          </pre>
        </div>
      </section>

      {/* Example */}
      {repo.example && (
        <section className="mb-10">
          <h2 className="text-xl font-bold text-[#23251d] mb-3">💡 Exemplo de uso</h2>
          <div className="prose prose-sm max-w-none leading-relaxed text-[#4d4f46]">
            <p>{repo.example}</p>
          </div>
        </section>
      )}

      {/* SaaS Ideas */}
      <section className="mb-10">
        <h2 className="text-xl font-bold text-[#23251d] mb-3">🚀 Ideias de SaaS</h2>
        <ul className="space-y-3">
          {repo.saasIdeas.map((idea, i) => (
            <li key={i} className="flex gap-3 text-sm text-[#4d4f46] leading-relaxed">
              <span className="text-[#bfc1b7] font-bold mt-0.5">{i + 1}.</span>
              <span>{idea}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Related repos */}
      {relatedRepos.length > 0 && (
        <section className="mb-10">
          <h2 className="text-xl font-bold text-[#23251d] mb-3">🔗 Repos relacionados</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {relatedRepos.map((related) => (
              <RepoCard key={related.slug} repo={related} />
            ))}
          </div>
        </section>
      )}

      {/* Docs link */}
      {repo.docsUrl && (
        <section className="border-t border-[#e2e1da] pt-6 text-center">
          <a
            href={repo.docsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm text-[#23251d] font-medium hover:underline"
          >
            📄 Ver documentação oficial →
          </a>
        </section>
      )}
    </div>
  );
}
