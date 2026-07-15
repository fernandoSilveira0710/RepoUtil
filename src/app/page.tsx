import { repos, getAllTags } from "@/lib/repos";
import RepoCard from "@/components/RepoCard";
import TagBadge from "@/components/TagBadge";

export default function Home() {
  const allTags = getAllTags();

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero */}
      <section className="mb-16">
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-[#23251d] leading-[1.1]">
          Repositórios úteis,
          <br />
          <span className="text-[#65675e]">mastigados pra você</span>
        </h1>
        <p className="mt-4 text-lg text-[#65675e] max-w-2xl leading-relaxed">
          Cada link que eu encontro vira um card com análise, stack, exemplos de uso e ideias de
          SaaS. Curadoria do{" "}
          <a
            href="https://github.com/fernandoSilveira0710"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#23251d] font-medium hover:underline"
          >
            Fernando
          </a>
          , destrinchado por{" "}
          <span className="font-medium">Bony e Clide</span>.
        </p>
      </section>

      {/* Tags filter */}
      <section className="mb-10">
        <div className="flex flex-wrap gap-2">
          {allTags.map((tag) => (
            <TagBadge key={tag} tag={tag} />
          ))}
        </div>
      </section>

      {/* Grid */}
      <section>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {repos.map((repo) => (
            <RepoCard key={repo.slug} repo={repo} />
          ))}
        </div>

        {repos.length === 0 && (
          <div className="text-center py-20 text-[#9ea096]">
            <p className="text-lg">Nenhum repositório cadastrado ainda.</p>
            <p className="text-sm mt-1">Manda um link que a gente analisa!</p>
          </div>
        )}
      </section>

      {/* Footer note */}
      <section className="mt-20 text-center">
        <p className="text-sm text-[#9ea096]">
          {repos.length} repositórios catalogados ·{" "}
          {repos.reduce((acc, r) => acc + r.saasIdeas.length, 0)} ideias de SaaS geradas ·{" "}
          {allTags.length} tags
        </p>
      </section>
    </div>
  );
}
