import Link from "next/link";
import { Tag } from "@/lib/repos";

interface Props {
  tag: Tag;
}

const TAG_LABELS: Record<string, string> = {
  python: "Python",
  rust: "Rust",
  typescript: "TypeScript",
  "deep-learning": "Deep Learning",
  ml: "ML",
  "neural-networks": "Redes Neurais",
  "data-augmentation": "Data Augmentation",
  "game-development": "Game Dev",
  "procedural-generation": "Procedural",
  "3d": "3D",
  "creative-coding": "Creative Coding",
  diffusion: "Diffusion",
  tool: "Ferramenta",
  cli: "CLI",
};

const TAG_COLORS: Record<string, string> = {
  python: "bg-blue-100 text-blue-800 hover:bg-blue-200",
  rust: "bg-orange-100 text-orange-800 hover:bg-orange-200",
  typescript: "bg-indigo-100 text-indigo-800 hover:bg-indigo-200",
  "deep-learning": "bg-purple-100 text-purple-800 hover:bg-purple-200",
  ml: "bg-violet-100 text-violet-800 hover:bg-violet-200",
  "neural-networks": "bg-fuchsia-100 text-fuchsia-800 hover:bg-fuchsia-200",
  "data-augmentation": "bg-teal-100 text-teal-800 hover:bg-teal-200",
  "game-development": "bg-green-100 text-green-800 hover:bg-green-200",
  "procedural-generation": "bg-amber-100 text-amber-800 hover:bg-amber-200",
  "3d": "bg-rose-100 text-rose-800 hover:bg-rose-200",
  "creative-coding": "bg-pink-100 text-pink-800 hover:bg-pink-200",
  diffusion: "bg-sky-100 text-sky-800 hover:bg-sky-200",
  tool: "bg-gray-100 text-gray-800 hover:bg-gray-200",
  cli: "bg-stone-100 text-stone-800 hover:bg-stone-200",
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
