import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'ydrop',
    desc: 'Airdrop platform for YouTubers using Solana + PostgreSQL + Redis',
    tech: ['Solana', 'PostgreSQL', 'Redis'],
    github: 'https://github.com/',
    live: '#',
    accent: 'from-fuchsia-500/20 to-cyan-400/20',
  },
  {
    title: 'Swappy Review Reward',
    desc: 'Web3 review platform rewarding users with Solana USDC',
    tech: ['Solana', 'USDC', 'Next.js'],
    github: 'https://github.com/',
    live: '#',
    accent: 'from-violet-500/20 to-indigo-400/20',
  },
];

function TiltCard({ children }) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur"
    >
      <div className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <div className="absolute inset-0 animate-[spin_6s_linear_infinite] bg-[conic-gradient(from_0deg,rgba(168,85,247,0.35),rgba(34,211,238,0.35),transparent_80%)]" />
      </div>
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="relative w-full bg-[#0b0f17] py-24 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(800px_300px_at_80%_0%,rgba(34,211,238,0.15),transparent)]" />
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <h2 className="text-2xl font-bold md:text-3xl">Projects</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {projects.map((p) => (
            <TiltCard key={p.title}>
              <div className={`absolute -inset-10 -z-[1] bg-gradient-to-r ${p.accent} blur-3xl`} />
              <h3 className="text-xl font-semibold">{p.title}</h3>
              <p className="mt-2 text-white/80">{p.desc}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {p.tech.map((t) => (
                  <span key={t} className="rounded-full border border-white/15 bg-white/10 px-2 py-1 text-xs text-white/80">
                    {t}
                  </span>
                ))}
              </div>
              <div className="mt-5 flex items-center gap-3">
                <a
                  href={p.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-cyan-400/40 px-4 py-2 text-sm text-white hover:shadow-[0_0_24px_rgba(34,211,238,0.35)]"
                >
                  <Github className="h-4 w-4" /> GitHub
                </a>
                <a
                  href={p.live}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-fuchsia-400/40 px-4 py-2 text-sm text-white hover:shadow-[0_0_24px_rgba(217,70,239,0.35)]"
                >
                  <ExternalLink className="h-4 w-4" /> Live Demo
                </a>
              </div>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
}
