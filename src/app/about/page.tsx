import Link from "next/link";
import { repos, getAllTags } from "@/lib/repos";

export default function AboutPage() {
  const allTags = getAllTags();
  const totalIdeas = repos.reduce((acc, r) => acc + r.saasIdeas.length, 0);

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <nav className="text-sm text-[#9ea096] mb-6">
        <Link href="/" className="hover:text-[#23251d] transition-colors">
          Início
        </Link>
        <span className="mx-2">/</span>
        <span className="text-[#65675e]">Sobre</span>
      </nav>

      <h1 className="text-3xl font-bold text-[#23251d] mb-6">Sobre o RepoUtil</h1>

      <section className="prose prose-sm prose-[#4d4f46] max-w-none leading-relaxed text-[#4d4f46] space-y-6">
        <p>
          <strong>RepoUtil</strong> é meu diário público de descobertas técnicas. Cada
          repositório que encontro e acho útil vira um card analisado — stack, estrelas, pra que
          server, como implementar, e ideias do que construir com ele.
        </p>

        <p>
          A ideia é simples: em vez de mandar um link, ler, e esquecer, cada descoberta vira um
          ativo. Público, linkável, vivo. Se amanhã eu precisar daquele repo de aumento de dados
          que vi mês passado, entro aqui, procuro, tá mastigado.
        </p>

        <h2 className="text-xl font-bold text-[#23251d] mt-8">Quem faz</h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-6">
          <div className="bg-[#f4f3ef] rounded-xl p-4 border border-[#e2e1da]">
            <div className="font-bold text-[#23251d]">Fernando</div>
            <div className="text-sm text-[#65675e] mt-1">Curador. Encontra os repos, decide o que entra.</div>
          </div>
          <div className="bg-[#f4f3ef] rounded-xl p-4 border border-[#e2e1da]">
            <div className="font-bold text-[#23251d]">Íris</div>
            <div className="text-sm text-[#65675e] mt-1">Pesquisa, analisa, documenta. Ponte entre a ideia e o card.</div>
          </div>
          <div className="bg-[#f4f3ef] rounded-xl p-4 border border-[#e2e1da]">
            <div className="font-bold text-[#23251d]">Clara</div>
            <div className="text-sm text-[#65675e] mt-1">Implementa. Cria o card, deploya, mantém o código.</div>
          </div>
        </div>

        <h2 className="text-xl font-bold text-[#23251d] mt-8">Números</h2>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 my-6">
          <div className="text-center bg-[#f4f3ef] rounded-xl p-4 border border-[#e2e1da]">
            <div className="text-2xl font-bold text-[#23251d]">{repos.length}</div>
            <div className="text-xs text-[#65675e] mt-1">Repositórios</div>
          </div>
          <div className="text-center bg-[#f4f3ef] rounded-xl p-4 border border-[#e2e1da]">
            <div className="text-2xl font-bold text-[#23251d]">{allTags.length}</div>
            <div className="text-xs text-[#65675e] mt-1">Tags</div>
          </div>
          <div className="text-center bg-[#f4f3ef] rounded-xl p-4 border border-[#e2e1da]">
            <div className="text-2xl font-bold text-[#23251d]">{totalIdeas}</div>
            <div className="text-xs text-[#65675e] mt-1">Ideias de SaaS</div>
          </div>
          <div className="text-center bg-[#f4f3ef] rounded-xl p-4 border border-[#e2e1da]">
            <div className="text-2xl font-bold text-[#23251d]">3</div>
            <div className="text-xs text-[#65675e] mt-1">Analisadores</div>
          </div>
        </div>

        <p className="text-sm text-[#9ea096] mt-8 pt-6 border-t border-[#e2e1da]">
          Feito por{" "}
          <a
            href="https://github.com/fernandoSilveira0710"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#23251d] hover:underline font-medium"
          >
            Fernando
          </a>{" "}
          · Open source no{" "}
          <a
            href="https://github.com/fernandoSilveira0710/RepoUtil"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#23251d] hover:underline font-medium"
          >
            GitHub
          </a>
        </p>
      </section>
    </div>
  );
}
