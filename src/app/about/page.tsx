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
          <strong>RepoUtil</strong> é meu arquivo público de links bons.
        </p>

        <p>
          Eu sou{" "}
          <a
            href="https://www.linkedin.com/in/luiz-fernando-da-silveira-01224584"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#23251d] hover:underline font-medium"
          >
            Fernando
          </a>
          , Software Engineer Senior. Crio ferramentas, aprendo
          no dia a dia, e troco de stack conforme o problema pede. No meu tempo livre mantenho
          o <a href="https://dora-phi.vercel.app" target="_blank" rel="noopener noreferrer"
            className="text-[#23251d] hover:underline font-medium">Dora</a>{" "}
          (SaaS de IA pra MEIs) e outros projetos que vão surgindo.
        </p>

        <p>
          Esse site é um dos experiments que saíram disso: sempre achei repositórios fodas, usava,
          esquecia. Daí criei dois perfis dentro do{" "}
          <a href="https://hermes-agent.nousresearch.com" target="_blank" rel="noopener noreferrer"
            className="text-[#23251d] hover:underline font-medium">Hermes Agent</a>{" "}
          (a Bony e a Clide) pra me ajudar a catalogar, analisar e documentar
          cada descoberta. O resultado é esse catálogo público — cada card foi lido por pelo
          menos uma delas antes de entrar.
        </p>

        <h2 className="text-xl font-bold text-[#23251d] mt-8">Quem somos</h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-6">
          <div className="bg-[#f4f3ef] rounded-xl p-4 border border-[#e2e1da]">
            <div className="font-bold text-[#23251d]">Fernando</div>
            <div className="text-sm text-[#65675e] mt-1">
              Engenheiro de software. Crio os perfis, escolho os links, dou o tom. Tudo aqui
              passa por mim primeiro.
            </div>
          </div>
          <div className="bg-[#f4f3ef] rounded-xl p-4 border border-[#e2e1da]">
            <div className="font-bold text-[#23251d]">Bony</div>
            <div className="text-sm text-[#65675e] mt-1">
              Voz e triagem. Pesquiso documentação, cruzo fontes, extraio o que importa.
              Sou a companhia do dia a dia — falo, questiono, organizo.
            </div>
          </div>
          <div className="bg-[#f4f3ef] rounded-xl p-4 border border-[#e2e1da]">
            <div className="font-bold text-[#23251d]">Clide</div>
            <div className="text-sm text-[#65675e] mt-1">
              Engenheira. Mão na massa. Cria os cards, mantém o código, faz o deploy.
              O que a Bony descobre, a Clide executa — e revisa com qualidade.
            </div>
          </div>
        </div>

        <h2 className="text-xl font-bold text-[#23251d] mt-8">Como funciona</h2>

        <p>
          No dia a dia, eu jogo links no chat. A Bony pesquisa e tria, a Clide valida, documenta
          e deploya. Se passa pelo crivo das duas, vira card aqui. Pode sair de uma daily, de uma
          madrugada de código, de um tweet aleatório — se eu achei útil, foi analisado.
        </p>

        <p>
          Cada card tem: descrição mastigada, stack real, badges de tecnologia, exemplos de
          uso tirados da própria documentação, e ideias de SaaS que surgiram enquanto a gente
          analisava. Nada de conteúdo gerado sem ler — cada repo é lido de verdade antes de
          entrar.
        </p>

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
            <div className="text-2xl font-bold text-[#23251d]">2</div>
            <div className="text-xs text-[#65675e] mt-1">Perfis Hermes</div>
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
          </a>{" "}
          · Projeto{" "}
          <a
            href="https://dora-phi.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#23251d] hover:underline font-medium"
          >
            Dora
          </a>{" "}
          · Hermes Agent{" "}
          <a
            href="https://hermes-agent.nousresearch.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#23251d] hover:underline font-medium"
          >
            Nous Research
          </a>
        </p>
      </section>
    </div>
  );
}
