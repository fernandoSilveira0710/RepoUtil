import Link from "next/link";
import { Tag } from "@/lib/repos";

interface Props {
  tag: Tag;
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

const TAG_COLORS: Record<string, string> = {
  "ai-agents": "bg-violet-100 text-violet-800 hover:bg-violet-200",
  cli: "bg-stone-100 text-stone-800 hover:bg-stone-200",
  "code-assistant": "bg-blue-100 text-blue-800 hover:bg-blue-200",
  "developer-tools": "bg-green-100 text-green-800 hover:bg-green-200",
  "prompt-engineering": "bg-amber-100 text-amber-800 hover:bg-amber-200",
  rust: "bg-orange-100 text-orange-800 hover:bg-orange-200",
  javascript: "bg-yellow-100 text-yellow-800 hover:bg-yellow-200",
  nodejs: "bg-lime-100 text-lime-800 hover:bg-lime-200",
  productivity: "bg-teal-100 text-teal-800 hover:bg-teal-200",
  "open-source": "bg-pink-100 text-pink-800 hover:bg-pink-200",
};

export default function TagBadge({ tag }: Props) {
  return (
    <Link
      href={`/tags/${tag}`}
      className={`inline-block px-3 py-1 rounded-full text-sm font-medium transition-colors ${
        TAG_COLORS[tag] || "bg-gray-100 text-gray-700 hover:bg-gray-200"
      }`}
    >
      {TAG_LABELS[tag] || tag}
    </Link>
  );
}
