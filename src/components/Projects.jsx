import { motion } from 'framer-motion';
import { ExternalLink, Code2 } from 'lucide-react';

const projects = [
  {
    title: 'Neon Tasker',
    desc: 'A minimal task manager with realtime sync and neon glass UI.',
    url: '#',
  },
  {
    title: 'Parallax Play',
    desc: 'Experimental parallax scenes with mouse and scroll blending.',
    url: '#',
  },
  {
    title: 'Web3 Wallet Peek',
    desc: 'A sleek portfolio viewer with on-chain stats.',
    url: '#',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative z-10 bg-[#090b1a] py-20 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 flex items-center gap-3">
          <div className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-cyan-500/20 text-cyan-300">
            <Code2 size={18} />
          </div>
          <h3 className="text-xl font-semibold tracking-tight sm:text-2xl">Featured Projects</h3>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <motion.a
              key={p.title}
              href={p.url}
              whileHover={{ y: -4 }}
              className="group relative rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur transition-colors hover:border-cyan-400/30"
            >
              <div className="mb-3 text-lg font-medium">{p.title}</div>
              <div className="text-sm text-white/75">{p.desc}</div>
              <div className="mt-4 inline-flex items-center gap-2 text-cyan-300">
                <ExternalLink size={16} />
                <span className="text-xs">Open</span>
              </div>
              <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-tr from-cyan-400/10 via-indigo-400/10 to-fuchsia-400/10 opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-100" />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
