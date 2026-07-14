import Link from "next/link";
import { Repo } from "@/lib/repos";

interface Props {
  repo: Repo;
}

const TAG_COLORS: Record<string, string> = {
  python: "bg-blue-100 text-blue-800",
  rust: "bg-orange-100 text-orange-800",
  typescript: "bg-indigo-100 text-indigo-800",
  "deep-learning": "bg-purple-100 text-purple-800",
  ml: "bg-violet-100 text-violet-800",
  "neural-networks": "bg-fuchsia-100 text-fuchsia-800",
  "data-augmentation": "bg-teal-100 text-teal-800",
  "game-development": "bg-green-100 text-green-800",
  "procedural-generation": "bg-amber-100 text-amber-800",
  "3d": "bg-rose-100 text-rose-800",
  "creative-coding": "bg-pink-100 text-pink-800",
  diffusion: "bg-sky-100 text-sky-800",
  tool: "bg-gray-100 text-gray-800",
  cli: "bg-stone-100 text-stone-800",
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
            ⭐ {repo.stars}
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
