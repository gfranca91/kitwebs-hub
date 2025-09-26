type ToolCardProps = {
  title: string;
  description: string;
  href: string;
};

export default function ToolCard({ title, description, href }: ToolCardProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="block p-6 bg-white border border-gray-200 rounded-lg shadow-md hover:bg-gray-100 hover:shadow-lg transition-all duration-300"
    >
      <h3 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
        {title}
      </h3>
      <p className="font-normal text-gray-700">{description}</p>
    </a>
  );
}
