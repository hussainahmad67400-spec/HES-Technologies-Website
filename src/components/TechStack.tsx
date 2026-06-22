export default function TechStack() {
  const categories = [
    {
      name: "AI & ML",
      techs: ["Python", "LangChain", "LlamaIndex", "OpenAI", "Claude", "Gemini", "Ollama"]
    },
    {
      name: "Frontend",
      techs: ["React", "Next.js", "TypeScript", "Tailwind CSS"]
    },
    {
      name: "Backend",
      techs: ["FastAPI", "Flask", "REST APIs", "Node.js"]
    },
    {
      name: "Databases",
      techs: ["PostgreSQL", "MongoDB", "ChromaDB", "FAISS", "Pinecone"]
    },
    {
      name: "DevOps",
      techs: ["Docker", "Vercel", "GitHub", "Git", "GCP"]
    }
  ];

  return (
    <section className="py-24 px-6 md:py-32 md:px-8 max-w-[1200px] mx-auto border-y border-[rgba(255,255,255,0.05)] bg-[radial-gradient(ellipse_at_center,rgba(91,78,255,0.05)_0%,transparent_70%)]">
      <div className="text-center mb-16 animate-fade-in-up">
        <span className="text-xs tracking-[0.2em] text-[var(--accent-cyan)] font-medium mb-3 block">
          TECHNOLOGIES WE USE
        </span>
        <h2 className="font-[family-name:var(--font-space-grotesk)] text-3xl md:text-4xl font-bold text-white">
          Our Technology Stack
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
        {categories.map((category, index) => (
          <div key={index} className="animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
            <h3 className="font-[family-name:var(--font-space-grotesk)] text-lg font-semibold text-white mb-6 border-b border-[rgba(255,255,255,0.1)] pb-2">
              {category.name}
            </h3>
            <ul className="flex flex-col gap-3">
              {category.techs.map((tech, techIndex) => (
                <li 
                  key={techIndex}
                  className="text-sm font-medium text-[var(--text-muted)] flex items-center gap-2 group cursor-default"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-[rgba(255,255,255,0.2)] group-hover:bg-[var(--accent-cyan)] transition-colors" />
                  <span className="group-hover:text-white transition-colors">{tech}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
