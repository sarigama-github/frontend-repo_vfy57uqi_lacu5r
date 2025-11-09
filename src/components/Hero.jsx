import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket, Download } from 'lucide-react';
import { motion } from 'framer-motion';

const gradientOverlay = (
  <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(1200px_600px_at_50%_-10%,rgba(99,102,241,0.18),transparent),radial-gradient(1000px_600px_at_90%_30%,rgba(34,211,238,0.14),transparent),radial-gradient(1000px_600px_at_10%_120%,rgba(59,130,246,0.14),transparent)]" />
);

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] w-full overflow-hidden bg-[#0a0e14]">
      {/* Spline background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/ESO6PnMadasO0hU3/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {gradientOverlay}
      {/* soft vignette for classy feel */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(1200px_600px_at_50%_120%,rgba(0,0,0,0.45),transparent)]" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center px-6 pt-28 text-center md:pt-36">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium text-white/90 backdrop-blur"
        >
          <span className="h-2 w-2 animate-pulse rounded-full bg-cyan-400" />
          A classy, animated story about code, craft, and curiosity
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="text-balance bg-gradient-to-b from-white to-white/70 bg-clip-text text-4xl font-extrabold leading-tight text-transparent md:text-6xl"
        >
          👋 Hi, I’m Swaparup Mukherjee.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="mt-4 max-w-2xl text-pretty text-base text-white/80 md:text-lg"
        >
          Full Stack Developer · Solana & Web3 Enthusiast · Cloud & DevOps Explorer
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#projects"
            className="group relative inline-flex items-center gap-2 overflow-hidden rounded-xl border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition-all hover:border-white/25 hover:bg-white/10"
          >
            <Rocket className="h-4 w-4" />
            <span className="relative z-10">View My Work</span>
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          </a>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="group relative inline-flex items-center gap-2 overflow-hidden rounded-xl bg-gradient-to-r from-[#E6E1FF] to-[#D7FFFE] px-6 py-3 text-sm font-semibold text-black shadow-[0_10px_40px_-10px_rgba(180,225,255,0.55)] transition-transform hover:scale-[1.02] active:scale-[0.99]"
          >
            <Download className="h-4 w-4" /> Download Resume
            <span className="absolute inset-0 bg-white/20 opacity-0 transition-opacity duration-300 group-hover:opacity-20" />
          </a>
        </motion.div>

        {/* Story teaser */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-10 max-w-3xl rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-sm text-white/75 backdrop-blur"
        >
          From NIT Agartala to Web3 — a journey told through projects, systems thinking, and pixel-perfect UX.
        </motion.p>
      </div>

      {/* bottom fade */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#0a0e14] to-transparent" />
    </section>
  );
}
