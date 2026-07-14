import Link from "next/link";
import { getAllTags } from "@/lib/repos";
import TagBadge from "@/components/TagBadge";

export default function TagsPage() {
  const allTags = getAllTags();

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-[#23251d] mb-2">Tags</h1>
      <p className="text-[#65675e] mb-8">Navegue pelos repositórios por categoria.</p>

      <div className="flex flex-wrap gap-3">
        {allTags.map((tag) => (
          <TagBadge key={tag} tag={tag} />
        ))}
      </div>

      <div className="mt-12">
        <Link
          href="/"
          className="text-sm text-[#9ea096] hover:text-[#23251d] transition-colors"
        >
          ← Voltar
        </Link>
      </div>
    </div>
  );
}
