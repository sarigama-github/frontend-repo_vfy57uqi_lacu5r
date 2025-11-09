import React from 'react';
import { motion } from 'framer-motion';
import { Award, Star } from 'lucide-react';

const techs = [
  'JavaScript',
  'TypeScript',
  'React',
  'Next.js',
  'Solana',
  'Node.js',
  'Redis',
  'PostgreSQL',
  'AWS',
  'Docker',
  'Kubernetes',
  'CI/CD',
];

export default function Profile() {
  return (
    <section id="about" className="relative w-full bg-[#0b0f17] py-24 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(700px_300px_at_20%_0%,rgba(124,58,237,0.20),transparent),radial-gradient(700px_300px_at_80%_20%,rgba(34,211,238,0.15),transparent)]" />
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* About */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur md:p-10"
        >
          <h2 className="bg-gradient-to-r from-white to-white/70 bg-clip-text text-2xl font-bold text-transparent md:text-3xl">
            About Me
          </h2>
          <p className="mt-4 max-w-3xl text-white/80">
            I’m a developer passionate about building scalable web and blockchain applications. I love crafting smooth user experiences, solving complex backend problems, and experimenting with emerging technologies.
          </p>

          {/* Floating tech chips */}
          <div className="mt-6 flex flex-wrap gap-3">
            {techs.slice(0, 5).map((t, i) => (
              <motion.span
                key={t}
                whileHover={{ y: -4, scale: 1.03 }}
                className="inline-flex items-center rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs text-white/90 shadow-sm backdrop-blur"
              >
                {t}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Experience Timeline */}
        <div id="experience" className="mt-16 grid gap-10 md:grid-cols-2">
          {[
            {
              company: 'Psyber Technologies',
              role: 'Full Stack Intern',
              details: 'React, Node.js, PostgreSQL, AWS',
              accent: 'from-fuchsia-500 to-violet-500',
            },
            {
              company: 'OWASP',
              role: 'Open-Source Collaborator',
              details: 'UI/UX redesign, lazy loading, performance optimization',
              accent: 'from-cyan-400 to-indigo-500',
            },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur"
            >
              <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${item.accent}`} />
              <h3 className="text-lg font-semibold">{item.company}</h3>
              <p className="mt-1 text-sm text-white/70">{item.role}</p>
              <p className="mt-3 text-sm text-white/80">{item.details}</p>
            </motion.div>
          ))}
        </div>

        {/* Tech Stack Grid */}
        <motion.div
          id="tech"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="mt-16"
        >
          <h3 className="text-xl font-semibold text-white">Tech Stack</h3>
          <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
            {techs.map((t) => (
              <motion.div
                key={t}
                whileHover={{ y: -6, scale: 1.02 }}
                className="group relative overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-4 text-center text-sm text-white/90 backdrop-blur transition-shadow hover:shadow-[0_0_40px_rgba(56,189,248,0.25)]"
              >
                <span className="relative z-10">{t}</span>
                <span className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-fuchsia-500/10 via-cyan-400/10 to-indigo-500/10 opacity-0 transition-opacity group-hover:opacity-100" />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Achievements */}
        <motion.div
          id="achievements"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="mt-16"
        >
          <h3 className="text-xl font-semibold text-white">Achievements</h3>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-amber-400 to-pink-500 text-black shadow">
                  <Star className="h-5 w-5" />
                </span>
                <div>
                  <p className="font-medium">8th Rank – 100xDevs Solana Mini Hackathon</p>
                  <p className="text-sm text-white/70">Built performant Web3 features on Solana.</p>
                </div>
              </div>
              <span className="pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
            </div>
            <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400 to-violet-500 text-black shadow">
                  <Award className="h-5 w-5" />
                </span>
                <div>
                  <p className="font-medium">Finalist – Code Hive India, IIT Delhi (Tryst’25)</p>
                  <p className="text-sm text-white/70">Recognized for impactful product thinking and UX.</p>
                </div>
              </div>
              <span className="pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
