import Link from "next/link";

function GithubIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
    </svg>
  );
}

function LinkedinIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  );
}

export default function Portfolio() {
  const projects = [
    {
      title: "Scholaris RAG",
      description: "Intelligent Retrieval-Augmented Generation platform for document search, knowledge retrieval, and question answering over custom knowledge bases.",
      tags: ["RAG", "LangChain", "Vector DB", "Python"],
      github: "https://github.com/itsami12/scholaris-rag",
      highlight: true
    },
    {
      title: "AgentFinance",
      description: "Multi-agent financial advisory system utilizing AI Agents and RAG to deliver intelligent financial insights and decision support.",
      tags: ["AI Agents", "RAG", "LLM", "FastAPI"],
      github: "https://github.com/itsami12/AgentFinance-A-Multi-Agent-Financial-Advisory-System-with-RAG",
      highlight: false
    },
    {
      title: "PropWise",
      description: "UK real estate price forecasting and advisory platform powered by machine learning and predictive analytics.",
      tags: ["Machine Learning", "Predictive Analytics", "Python", "Real Estate"],
      github: "https://github.com/itsami12/PropWise---UK-Real-Estate-Price-Forecaster-Advisor",
      highlight: false
    },
    {
      title: "ScriptGen AI",
      description: "Generative AI platform for automated script and content generation using Large Language Models.",
      tags: ["Generative AI", "LLM", "Content Generation", "OpenAI"],
      github: "https://github.com/itsami12/ScriptGen-AI-",
      highlight: false
    },
    {
      title: "Business Registration Scraper",
      description: "Automated web scraping solution for collecting, organizing, and processing business registration data at scale.",
      tags: ["Web Scraping", "Python", "Data Pipeline", "Automation"],
      github: "https://github.com/itsami12/business-registration-scraper",
      highlight: false
    },
    {
      title: "Coffee & Pastry Pairing System",
      description: "AI-powered recommendation engine that intelligently suggests coffee and pastry pairings based on user preferences and behavioral patterns.",
      tags: ["Recommendation System", "ML", "NLP", "Python"],
      github: "https://github.com/AIStrikerX/Coffee-Pastry-Pairing-System",
      highlight: false
    }
  ];

  return (
    <section id="portfolio" className="py-24 px-6 md:py-32 md:px-8 max-w-[1200px] mx-auto">
      <div className="text-center mb-16 animate-fade-in-up">
        <span className="text-xs tracking-[0.2em] text-[var(--accent-cyan)] font-medium mb-3 block">
          DELIVERED PROJECTS
        </span>
        <h2 className="font-[family-name:var(--font-space-grotesk)] text-3xl md:text-5xl font-bold text-white">
          Our Portfolio
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`glass-card p-8 group flex flex-col h-full relative overflow-hidden animate-fade-in-up ${project.highlight ? "md:col-span-2 lg:col-span-1 lg:row-span-2 min-h-[320px]" : "min-h-[280px]"}`}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            {/* Hover Glow */}
            <div className="absolute -inset-1 bg-gradient-to-br from-[var(--accent-indigo)] to-transparent opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-500 pointer-events-none" />
            
            <div className="relative z-10 flex-grow">
              <h3 className="font-[family-name:var(--font-space-grotesk)] text-2xl font-semibold text-white mb-4 group-hover:text-[var(--accent-cyan)] transition-colors">
                {project.title}
              </h3>
              <p className="text-[var(--text-muted)] leading-relaxed mb-8">
                {project.description}
              </p>
            </div>
            
            <div className="relative z-10 mt-auto">
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="text-xs font-medium px-3 py-1 bg-[rgba(91,78,255,0.15)] text-[#a39df5] rounded-full border border-[rgba(91,78,255,0.2)]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              
              <div className="flex justify-end border-t border-[rgba(255,255,255,0.08)] pt-4 mt-auto">
                <Link
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--text-muted)] hover:text-white transition-colors flex items-center gap-2"
                  aria-label={`View ${project.title} on GitHub`}
                >
                  <GithubIcon size={20} />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
