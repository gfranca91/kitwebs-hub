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
    href: "http://ip.kitwebs.com.br",
  },
];

export default function Home() {
  return (
    <div className="container mx-auto px-6 py-8">
      <h1 className="text-4xl font-bold text-center mb-10">
        Bem-vindo ao KitWebs!
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {tools.map((tool) => (
          <ToolCard
            key={tool.title}
            title={tool.title}
            description={tool.description}
            href={tool.href}
          />
        ))}
      </div>
    </div>
  );
}
