import Link from "next/link";
import { Repo } from "@/lib/repos";

interface Props {
  repo: Repo;
}

const TAG_COLORS: Record<string, string> = {
  "ai-agents": "bg-violet-100 text-violet-800",
  c: "bg-gray-100 text-gray-800",
  cli: "bg-stone-100 text-stone-800",
  "code-assistant": "bg-blue-100 text-blue-800",
  dataset: "bg-cyan-100 text-cyan-800",
  "developer-tools": "bg-green-100 text-green-800",
  fitness: "bg-red-100 text-red-800",
  "machine-learning": "bg-indigo-100 text-indigo-800",
  "prompt-engineering": "bg-amber-100 text-amber-800",
  rust: "bg-orange-100 text-orange-800",
  javascript: "bg-yellow-100 text-yellow-800",
  nodejs: "bg-lime-100 text-lime-800",
  productivity: "bg-teal-100 text-teal-800",
  "open-source": "bg-pink-100 text-pink-800",
};

export default function RepoCard({ repo }: Props) {
  return (
    <Link
      href={`/repo/${repo.slug}`}
      className="group block bg-white rounded-xl border border-[#e2e1da] p-5 hover:border-[#bfc1b7] hover:shadow-sm transition-all"
    >
      {/* Header */}
      <div className="flex items-start justify-between gap-3 mb-3">
        <h3 className="text-lg font-bold text-[#23251d] group-hover:text-[#4d4f46] transition-colors leading-snug">
          {repo.name}
        </h3>
        {repo.stars > 0 && (
          <span className="text-sm text-[#9ea096] whitespace-nowrap shrink-0">
            ⭐ {repo.stars >= 1000 ? `${(repo.stars / 1000).toFixed(0)}k` : repo.stars}
          </span>
        )}
      </div>

      {/* Language + Author */}
      <div className="flex items-center gap-2 text-xs text-[#9ea096] mb-3">
        <span className="font-medium text-[#65675e]">{repo.language}</span>
        <span>·</span>
        <span>{repo.author}</span>
        {repo.stars === 0 && <span>· novo</span>}
      </div>

      {/* Description */}
      <p className="text-sm text-[#65675e] leading-relaxed line-clamp-3 mb-4">
        {repo.description}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-1.5">
        {repo.tags.map((tag) => (
          <span
            key={tag}
            className={`inline-block px-2 py-0.5 rounded-full text-xs font-medium ${
              TAG_COLORS[tag] || "bg-gray-100 text-gray-700"
            }`}
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Footer */}
      <div className="mt-4 pt-3 border-t border-[#f0efe9] flex items-center justify-between text-xs text-[#9ea096]">
        <span>Analisado por {repo.analyzedBy}</span>
        <span className="text-[#bfc1b7]">→</span>
      </div>
    </Link>
  );
}
