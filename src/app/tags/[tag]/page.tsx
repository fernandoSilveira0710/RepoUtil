import Link from "next/link";
import { notFound } from "next/navigation";
import { repos, getReposByTag, getAllTags, Tag } from "@/lib/repos";
import RepoCard from "@/components/RepoCard";
import TagBadge from "@/components/TagBadge";

interface Props {
  params: Promise<{ tag: string }>;
}

export async function generateStaticParams() {
  return getAllTags().map((tag) => ({ tag }));
}

const TAG_LABELS: Record<string, string> = {
  "ai-agents": "Agentes de IA",
  cli: "CLI",
  "code-assistant": "Assistente de Código",
  "developer-tools": "Dev Tools",
  "prompt-engineering": "Prompt Engineering",
  rust: "Rust",
  javascript: "JavaScript",
  nodejs: "Node.js",
  productivity: "Produtividade",
  "open-source": "Open Source",
};

export default async function TagPage({ params }: Props) {
  const { tag } = await params;

  const allTags = getAllTags();
  if (!allTags.includes(tag as Tag)) notFound();

  const filteredRepos = getReposByTag(tag as Tag);

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Breadcrumb */}
      <nav className="text-sm text-[#9ea096] mb-6">
        <Link href="/" className="hover:text-[#23251d] transition-colors">
          Início
        </Link>
        <span className="mx-2">/</span>
        <Link href="/tags" className="hover:text-[#23251d] transition-colors">
          Tags
        </Link>
        <span className="mx-2">/</span>
        <span className="text-[#65675e]">{TAG_LABELS[tag] || tag}</span>
      </nav>

      <h1 className="text-3xl font-bold text-[#23251d] mb-2">
        {TAG_LABELS[tag] || tag}
      </h1>
      <p className="text-[#65675e] mb-8">{filteredRepos.length} repositórios</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredRepos.map((repo) => (
          <RepoCard key={repo.slug} repo={repo} />
        ))}
      </div>
    </div>
  );
}
