import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Neural Network SVG */}
      <div className="absolute inset-0 z-0 opacity-30 pointer-events-none flex items-center justify-center">
        <svg
          className="w-full h-full max-w-[1200px]"
          viewBox="0 0 1000 600"
          xmlns="http://www.w3.org/2000/svg"
        >
          <style>
            {`
              .node { fill: var(--accent-indigo); animation: pulseOpacity 4s infinite alternate; }
              .line { stroke: var(--border-subtle); stroke-width: 1; animation: fadeLine 6s infinite alternate; }
              @keyframes pulseOpacity { 0% { opacity: 0.2; } 100% { opacity: 0.8; } }
              @keyframes fadeLine { 0% { opacity: 0.1; } 100% { opacity: 0.5; } }
              
              /* Randomize animation delays */
              .node:nth-child(odd) { animation-delay: 1s; }
              .node:nth-child(3n) { animation-delay: 2s; }
              .line:nth-child(even) { animation-delay: 1.5s; }
            `}
          </style>
          
          {/* Lines */}
          <line x1="200" y1="150" x2="350" y2="250" className="line" />
          <line x1="350" y1="250" x2="500" y2="180" className="line" />
          <line x1="500" y1="180" x2="650" y2="280" className="line" />
          <line x1="650" y1="280" x2="800" y2="200" className="line" />
          <line x1="350" y1="250" x2="400" y2="400" className="line" />
          <line x1="500" y1="180" x2="600" y2="350" className="line" />
          <line x1="650" y1="280" x2="700" y2="450" className="line" />
          <line x1="400" y1="400" x2="600" y2="350" className="line" />
          <line x1="600" y1="350" x2="700" y2="450" className="line" />
          <line x1="250" y1="350" x2="400" y2="400" className="line" />
          <line x1="200" y1="150" x2="250" y2="350" className="line" />

          {/* Nodes */}
          <circle cx="200" cy="150" r="4" className="node" />
          <circle cx="350" cy="250" r="5" className="node" />
          <circle cx="500" cy="180" r="6" className="node" />
          <circle cx="650" cy="280" r="4" className="node" />
          <circle cx="800" cy="200" r="5" className="node" />
          <circle cx="400" cy="400" r="4" className="node" />
          <circle cx="600" cy="350" r="6" className="node" />
          <circle cx="700" cy="450" r="5" className="node" />
          <circle cx="250" cy="350" r="4" className="node" />
        </svg>
      </div>

      {/* Radial Gradient Overlay for depth */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(8,11,20,0)_0%,rgba(8,11,20,1)_80%)] z-0 pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 max-w-[1200px] mx-auto px-6 md:px-8 text-center flex flex-col items-center">
        <div className="animate-fade-in-up">
          <span className="text-xs tracking-[0.2em] text-[var(--accent-cyan)] font-medium mb-6 block">
            AI-FIRST TECHNOLOGY COMPANY
          </span>
          <h1 className="font-[family-name:var(--font-space-grotesk)] text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight mb-2">
            We Engineer <span className="bg-gradient-to-r from-[var(--accent-indigo)] to-[var(--accent-cyan)] bg-clip-text text-transparent animate-gradient-shift">Intelligence</span>
          </h1>
          <h1 className="font-[family-name:var(--font-space-grotesk)] text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            That Drives Real Results
          </h1>
        </div>

        <p className="text-lg md:text-xl text-[var(--text-muted)] max-w-2xl mx-auto mb-10 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
          HES Technologies builds production-ready AI systems — from RAG pipelines and multi-agent architectures to predictive analytics and intelligent automation.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-4 mb-16 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
          <Link
            href="#portfolio"
            className="flex items-center gap-2 bg-white text-[var(--bg-primary)] px-8 py-3.5 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            View Our Work <ArrowRight size={18} />
          </Link>
          <Link
            href="#team"
            className="px-8 py-3.5 rounded-lg font-semibold border border-[rgba(255,255,255,0.1)] hover:border-[rgba(255,255,255,0.3)] bg-[rgba(255,255,255,0.03)] hover:bg-[rgba(255,255,255,0.05)] transition-all backdrop-blur-sm"
          >
            Meet the Team
          </Link>
        </div>

        {/* Stats Row */}
        <div className="flex flex-wrap justify-center gap-6 md:gap-12 text-sm font-medium text-[var(--text-muted)] animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-[var(--accent-cyan)]" />
            6+ Projects Delivered
          </div>
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-[var(--accent-indigo)]" />
            3 AI Domains
          </div>
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-[var(--accent-cyan)]" />
            100% Production-Ready
          </div>
        </div>
      </div>
    </section>
  );
}
