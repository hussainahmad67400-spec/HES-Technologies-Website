import { Rocket, Target } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-24 px-6 md:py-32 md:px-8 max-w-[1200px] mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left Column: Text Content */}
        <div className="animate-fade-in-up">
          <span className="text-xs tracking-[0.2em] text-[var(--accent-cyan)] font-medium mb-3 block">
            ABOUT US
          </span>
          <h2 className="font-[family-name:var(--font-space-grotesk)] text-3xl md:text-4xl font-bold mb-6 text-white leading-tight">
            Bridging AI Research and Business Reality
          </h2>
          
          <div className="space-y-4 text-[var(--text-muted)] leading-relaxed text-lg">
            <p>
              HES Technologies is an AI-first technology company dedicated to building intelligent software solutions that help businesses automate processes, make data-driven decisions, and unlock new opportunities through Artificial Intelligence.
            </p>
            <p>
              We specialize in transforming innovative ideas into scalable, production-ready AI products by combining modern software engineering with cutting-edge AI technologies. Our mission is to bridge the gap between advanced AI research and real-world business applications.
            </p>
            <p>
              Whether it's developing AI-powered assistants, intelligent automation systems, predictive analytics platforms, or enterprise software, we focus on creating products that generate measurable business value.
            </p>
          </div>
        </div>

        {/* Right Column: Mission & Vision Cards */}
        <div className="space-y-6">
          {/* Vision Card */}
          <div className="glass-card p-8 relative overflow-hidden group">
            {/* Subtle glow effect on hover */}
            <div className="absolute -inset-1 bg-gradient-to-r from-[var(--accent-indigo)] to-[var(--accent-cyan)] opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-500" />
            
            <div className="relative z-10">
              <div className="w-12 h-12 rounded-xl bg-[rgba(91,78,255,0.1)] flex items-center justify-center mb-6 text-[var(--accent-indigo)]">
                <Rocket size={24} />
              </div>
              <h3 className="font-[family-name:var(--font-space-grotesk)] text-xl font-bold text-white mb-3">
                Our Vision
              </h3>
              <p className="text-[var(--text-muted)] leading-relaxed">
                To become a globally recognized AI engineering company that empowers organizations with intelligent, scalable, and innovative technology solutions.
              </p>
            </div>
          </div>

          {/* Mission Card */}
          <div className="glass-card p-8 relative overflow-hidden group">
            <div className="absolute -inset-1 bg-gradient-to-r from-[var(--accent-cyan)] to-[var(--accent-indigo)] opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-500" />
            
            <div className="relative z-10">
              <div className="w-12 h-12 rounded-xl bg-[rgba(0,212,255,0.1)] flex items-center justify-center mb-6 text-[var(--accent-cyan)]">
                <Target size={24} />
              </div>
              <h3 className="font-[family-name:var(--font-space-grotesk)] text-xl font-bold text-white mb-3">
                Our Mission
              </h3>
              <p className="text-[var(--text-muted)] leading-relaxed">
                To design, develop, and deploy world-class AI solutions that simplify complex workflows, enhance decision-making, and accelerate digital transformation for businesses of all sizes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
