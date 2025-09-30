import ToolCard from "./components/ToolCard";

const tools = [
  {
    title: "Gerador de QR Code",
    description:
      "Crie QR Codes personalizados de forma rápida e fácil para seus links, textos ou redes Wi-Fi.",
    href: "https://qrcode.kitwebs.com.br",
  },
  {
    title: "Encurtador de Links",
    description:
      "Transforme URLs longas e complicadas em links curtos, memoráveis e fáceis de compartilhar.",
    href: "https://encurtador.kitwebs.com.br",
  },
  {
    title: "Qual é o Meu IP?",
    description:
      "Descubra seu endereço de IP público e veja informações de geolocalização como cidade, país e provedor.",
    href: "https://ip.kitwebs.com.br",
  },
  {
    title: "Diff Checker - Comparador de Textos",
    description:
      "Compare dois textos ou blocos de código e veja as diferenças linha por linha, com destaque de cores.",
    href: "https://diff.kitwebs.com.br",
  },
];

export default function Home() {
  return (
    <div className="container mx-auto px-6 py-8">
      <h1 className="text-4xl font-bold text-center mb-10 text-white">
        Bem-vindo ao KitWebs!
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {tools.map((tool) => (
          <ToolCard
            key={tool.title}
            title={tool.title}
            description={tool.description}
            href={tool.href}
          />
        ))}
      </div>

      <section className="mt-24 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-white mb-8">
          Um Kit de Ferramentas Online para Simplificar seu Dia
        </h2>

        <div className="space-y-8">
          <div>
            <h3 className="text-xl font-semibold text-white mb-2">
              O que é o KitWebs?
            </h3>
            <p className="text-gray-400 leading-relaxed">
              O KitWebs é um portal centralizado que reúne uma coleção de
              ferramentas online gratuitas, projetadas para serem simples,
              rápidas e seguras. Nosso objetivo é oferecer soluções para tarefas
              comuns do dia a dia, sem a necessidade de instalar qualquer
              software.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-white mb-2">
              As ferramentas são gratuitas?
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Sim, todas as ferramentas oferecidas no ecossistema KitWebs são
              100% gratuitas para uso. Não há necessidade de cadastro, login ou
              pagamento.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-white mb-2">
              Meus dados estão seguros?
            </h3>
            <p className="text-gray-400 leading-relaxed">
              A sua privacidade é nossa prioridade. A grande maioria das nossas
              ferramentas, como o Diff Checker e o Gerador de QR Code, rodam
              inteiramente no seu navegador. Isso significa que os dados que
              você insere nunca saem do seu computador ou são enviados para
              nossos servidores, garantindo total segurança e confidencialidade.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
