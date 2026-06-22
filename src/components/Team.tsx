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

export default function Team() {
  const team = [
    {
      name: "Hussain Ahmed",
      role: "Chief Executive Officer",
      bio: "Leads HES Technologies with a vision of building innovative AI products that solve real-world business challenges. Drives strategic direction and long-term growth.",
      github: "https://github.com/AIStrikerX",
      linkedin: "https://www.linkedin.com/in/hussain-ahmad-510599247/",
      initials: "HA"
    },
    {
      name: "Sami Naeem",
      role: "COO & AI Engineer",
      bio: "Oversees operations and AI engineering. Expert in AI agents, RAG systems, machine learning, and enterprise AI architecture.",
      github: "https://github.com/itsami12",
      linkedin: "https://www.linkedin.com/in/itsami12/",
      initials: "SN"
    },
    {
      name: "Muhammad Abdullah Butt",
      role: "CFO & AI Engineer",
      bio: "Manages financial strategy and operational planning while contributing to AI engineering. Ensures sustainable growth and long-term value delivery.",
      github: "https://github.com/AbdullahButt-00",
      linkedin: "https://www.linkedin.com/in/m-abdullah-butt-01-01-abc/",
      initials: "AB"
    }
  ];

  return (
    <section id="team" className="py-24 px-6 md:py-32 md:px-8 max-w-[1200px] mx-auto">
      <div className="text-center mb-16 animate-fade-in-up">
        <span className="text-xs tracking-[0.2em] text-[var(--accent-cyan)] font-medium mb-3 block">
          LEADERSHIP
        </span>
        <h2 className="font-[family-name:var(--font-space-grotesk)] text-3xl md:text-5xl font-bold text-white">
          Meet the Team
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {team.map((member, index) => (
          <div 
            key={index}
            className="glass-card p-8 flex flex-col group animate-fade-in-up"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            {/* Avatar */}
            <div className="mb-6 flex justify-center">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[var(--accent-indigo)] to-[var(--accent-cyan)] flex items-center justify-center text-white font-[family-name:var(--font-space-grotesk)] text-2xl font-bold shadow-lg transition-all duration-300 group-hover:shadow-[0_0_20px_var(--accent-glow)]">
                {member.initials}
              </div>
            </div>

            {/* Content */}
            <div className="text-center flex-grow">
              <h3 className="font-[family-name:var(--font-space-grotesk)] text-xl font-bold text-white mb-1">
                {member.name}
              </h3>
              <p className="text-[var(--accent-cyan)] font-medium text-sm mb-4">
                {member.role}
              </p>
              <p className="text-[var(--text-muted)] text-sm leading-relaxed mb-6">
                {member.bio}
              </p>
            </div>

            {/* Social Links */}
            <div className="flex justify-center gap-4 mt-auto border-t border-[rgba(255,255,255,0.05)] pt-6">
              <Link
                href={member.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--text-muted)] hover:text-white transition-colors"
                aria-label={`${member.name}'s GitHub`}
              >
                <GithubIcon size={20} />
              </Link>
              <Link
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--text-muted)] hover:text-[#0a66c2] transition-colors"
                aria-label={`${member.name}'s LinkedIn`}
              >
                <LinkedinIcon size={20} />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
