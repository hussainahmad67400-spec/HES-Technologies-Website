import { Brain, Database, TrendingUp, Globe, MessageSquare, Zap } from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: <Brain size={24} />,
      title: "AI Agent Development",
      description: "Autonomous multi-agent systems that coordinate complex tasks and deliver intelligent decision support.",
    },
    {
      icon: <Database size={24} />,
      title: "RAG & Knowledge Systems",
      description: "Retrieval-Augmented Generation pipelines for intelligent document search and enterprise Q&A.",
    },
    {
      icon: <TrendingUp size={24} />,
      title: "Predictive Analytics",
      description: "Machine learning models for forecasting — from real estate prices to financial trends.",
    },
    {
      icon: <Globe size={24} />,
      title: "Web Scraping & Data Intelligence",
      description: "Automated data collection and processing pipelines for structured business intelligence.",
    },
    {
      icon: <MessageSquare size={24} />,
      title: "LLM Application Development",
      description: "Custom applications powered by GPT-4, Claude, and Gemini, fine-tuned to your domain.",
    },
    {
      icon: <Zap size={24} />,
      title: "Business Process Automation",
      description: "AI-driven automation that eliminates repetitive workflows and accelerates operations.",
    },
  ];

  return (
    <section id="services" className="py-24 px-6 md:py-32 md:px-8 max-w-[1200px] mx-auto">
      <div className="text-center mb-16 animate-fade-in-up">
        <span className="text-xs tracking-[0.2em] text-[var(--accent-cyan)] font-medium mb-3 block">
          WHAT WE OFFER
        </span>
        <h2 className="font-[family-name:var(--font-space-grotesk)] text-3xl md:text-5xl font-bold text-white">
          Our Services
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <div
            key={index}
            className="glass-card p-8 group hover:shadow-[0_0_30px_rgba(91,78,255,0.15)] animate-fade-in-up"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="w-12 h-12 rounded-xl bg-[rgba(91,78,255,0.15)] text-[var(--accent-indigo)] flex items-center justify-center mb-6 transition-colors group-hover:bg-[var(--accent-indigo)] group-hover:text-white">
              {service.icon}
            </div>
            <h3 className="font-[family-name:var(--font-space-grotesk)] text-xl font-bold text-white mb-3">
              {service.title}
            </h3>
            <p className="text-[var(--text-muted)] leading-relaxed">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
