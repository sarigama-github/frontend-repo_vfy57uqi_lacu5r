import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

/*
  Journey Parallax Section
  Layers: sky -> far mountains -> pine trees -> city -> skyscrapers -> character evolution
  Uses Framer Motion parallax tied to the section scroll progress for performant transforms.
*/
export default function Journey() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start end', 'end start'] });

  // Parallax mappings (smaller movement for far elements, larger for close ones)
  const ySky = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const yMountains = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const yTrees = useTransform(scrollYProgress, [0, 1], [0, -180]);
  const yCity = useTransform(scrollYProgress, [0, 1], [0, -240]);
  const ySkyscrapers = useTransform(scrollYProgress, [0, 1], [0, -300]);

  // Character evolution: crossfade three stages across progress
  const kidOpacity = useTransform(scrollYProgress, [0.00, 0.25, 0.35], [1, 1, 0]);
  const builderOpacity = useTransform(scrollYProgress, [0.25, 0.45, 0.65], [0, 1, 0]);
  const proOpacity = useTransform(scrollYProgress, [0.60, 0.80, 1.00], [0, 1, 1]);
  const proGlow = useTransform(scrollYProgress, [0.7, 1], [0, 1]);

  return (
    <section id="journey" ref={sectionRef} className="relative w-full overflow-hidden bg-[#090d13] text-white">
      {/* Scene height to allow storytelling scroll */}
      <div className="relative h-[140vh] w-full">
        {/* Sky gradient with soft stars */}
        <motion.div style={{ y: ySky }} className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_50%_-10%,rgba(99,102,241,0.18),transparent),radial-gradient(1000px_600px_at_90%_30%,rgba(34,211,238,0.14),transparent),linear-gradient(180deg,rgba(10,14,20,1)_0%,rgba(9,13,19,1)_100%)]" />
          <Starfield />
        </motion.div>

        {/* Far mountains (SVG waves) */}
        <motion.div style={{ y: yMountains }} className="absolute inset-x-0 bottom-0 h-[55%]">
          <svg className="absolute inset-x-0 bottom-0 h-full w-full" viewBox="0 0 1440 600" preserveAspectRatio="none" aria-hidden>
            <defs>
              <linearGradient id="mountainGrad" x1="0" x2="1" y1="0" y2="1">
                <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.18" />
                <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.25" />
              </linearGradient>
            </defs>
            <path d="M0,420 L120,360 L240,410 L360,310 L480,380 L600,330 L720,400 L840,340 L960,390 L1080,320 L1200,360 L1320,300 L1440,340 L1440,600 L0,600 Z" fill="url(#mountainGrad)" />
          </svg>
        </motion.div>

        {/* Pine trees silhouette */}
        <motion.div style={{ y: yTrees }} className="absolute inset-x-0 bottom-0 h-[45%]">
          <svg className="absolute inset-x-0 bottom-0 h-full w-full" viewBox="0 0 1440 600" preserveAspectRatio="none" aria-hidden>
            <defs>
              <linearGradient id="treeGrad" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.22" />
                <stop offset="100%" stopColor="#0ea5e9" stopOpacity="0.26" />
              </linearGradient>
            </defs>
            {Array.from({ length: 24 }).map((_, i) => {
              const x = i * 60 + (i % 2 === 0 ? 20 : 0);
              const h = 120 + (i % 3) * 30;
              return (
                <polygon key={i} points={`${x},${520 - h} ${x - 30},520 ${x + 30},520`} fill="url(#treeGrad)" opacity="0.8" />
              );
            })}
            <rect x="0" y="520" width="1440" height="80" fill="#0a0f18" opacity="0.9" />
          </svg>
        </motion.div>

        {/* City Skyline */}
        <motion.div style={{ y: yCity }} className="absolute inset-x-0 bottom-0 h-[40%]">
          <svg className="absolute inset-x-0 bottom-0 h-full w-full" viewBox="0 0 1440 600" preserveAspectRatio="none" aria-hidden>
            <defs>
              <linearGradient id="cityGrad" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0%" stopColor="#818cf8" stopOpacity="0.25" />
                <stop offset="100%" stopColor="#22d3ee" stopOpacity="0.2" />
              </linearGradient>
            </defs>
            {Array.from({ length: 18 }).map((_, i) => {
              const w = 40 + (i % 4) * 20;
              const h = 120 + (i % 5) * 30;
              const x = i * 80 + 20;
              return <rect key={i} x={x} y={480 - h} width={w} height={h} fill="url(#cityGrad)" rx="4" />;
            })}
          </svg>
        </motion.div>

        {/* Skyscrapers (foreground) */}
        <motion.div style={{ y: ySkyscrapers }} className="absolute inset-x-0 bottom-0 h-[35%]">
          <svg className="absolute inset-x-0 bottom-0 h-full w-full" viewBox="0 0 1440 600" preserveAspectRatio="none" aria-hidden>
            <defs>
              <linearGradient id="skyGrad" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0%" stopColor="#a78bfa" stopOpacity="0.32" />
                <stop offset="100%" stopColor="#60a5fa" stopOpacity="0.28" />
              </linearGradient>
            </defs>
            {/* left tower */}
            <rect x="140" y="380" width="90" height="200" fill="url(#skyGrad)" rx="6" />
            <rect x="180" y="340" width="60" height="240" fill="url(#skyGrad)" rx="6" />
            {/* right cluster */}
            <rect x="1040" y="360" width="80" height="220" fill="url(#skyGrad)" rx="6" />
            <rect x="1120" y="400" width="60" height="180" fill="url(#skyGrad)" rx="6" />
            <rect x="1180" y="350" width="70" height="230" fill="url(#skyGrad)" rx="6" />
          </svg>
        </motion.div>

        {/* Character evolution (simple silhouettes) */}
        <div className="pointer-events-none absolute inset-x-0 bottom-[14vh] flex items-end justify-center">
          {/* Kid with backpack */}
          <motion.div style={{ opacity: kidOpacity }} className="relative mr-24 hidden h-24 w-24 items-end justify-center sm:flex">
            <Person scale={0.9} bag />
            <StageLabel>Curious kid</StageLabel>
          </motion.div>
          {/* College builder with laptop */}
          <motion.div style={{ opacity: builderOpacity }} className="relative h-28 w-28 items-end justify-center hidden sm:flex">
            <Person scale={1.0} laptop />
            <StageLabel>College builder</StageLabel>
          </motion.div>
          {/* Pro developer glowing */}
          <motion.div style={{ opacity: proOpacity }} className="relative ml-24 hidden h-32 w-32 items-end justify-center sm:flex">
            <div className="absolute -inset-6 rounded-full bg-cyan-400/10 blur-2xl" />
            <div className="absolute -inset-10 rounded-full bg-fuchsia-500/10 blur-3xl" />
            <motion.div style={{ boxShadow: proGlow.to(v => `0 0 ${24 + v * 24}px rgba(56,189,248,0.45)`) }}>
              <Person scale={1.1} laptop glasses />
            </motion.div>
            <StageLabel>Full‑stack & Web3</StageLabel>
          </motion.div>
        </div>

        {/* Copy overlay */}
        <div className="pointer-events-none absolute inset-x-0 top-20 flex flex-col items-center px-6 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-balance bg-gradient-to-b from-white to-white/70 bg-clip-text text-2xl font-semibold text-transparent md:text-4xl"
          >
            A journey from mountains to megapolis
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="mt-3 max-w-2xl text-white/75"
          >
            Watch the world evolve as you scroll — quiet hills to neon skylines — mirroring an entry into tech and the craft that follows.
          </motion.p>
        </div>

        {/* Bottom gradient to next section */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#0b0f17] to-transparent" />
      </div>
    </section>
  );
}

function Starfield() {
  return (
    <div className="absolute inset-0">
      {Array.from({ length: 90 }).map((_, i) => {
        const left = Math.random() * 100;
        const top = Math.random() * 100;
        const size = Math.random() * 2 + 0.5;
        const delay = Math.random() * 5;
        return (
          <span
            key={i}
            className="absolute rounded-full bg-white/70"
            style={{ left: `${left}%`, top: `${top}%`, width: size, height: size, opacity: 0.8, animation: `twinkle 2.4s ease-in-out ${delay}s infinite alternate` }}
          />
        );
      })}
      <style>{`
        @keyframes twinkle { from { opacity: 0.3; transform: scale(0.9); } to { opacity: 0.9; transform: scale(1.05); } }
      `}</style>
    </div>
  );
}

function Person({ scale = 1, bag = false, laptop = false, glasses = false }) {
  const s = 24 * scale; // base unit
  return (
    <svg width={s * 3} height={s * 3} viewBox="0 0 72 72" aria-hidden>
      {/* glow */}
      <defs>
        <radialGradient id="skin" cx="50%" cy="40%" r="50%">
          <stop offset="0%" stopColor="#fff" stopOpacity="0.95" />
          <stop offset="100%" stopColor="#cbd5e1" stopOpacity="0.8" />
        </radialGradient>
      </defs>
      {/* head */}
      <circle cx="36" cy="18" r="8" fill="url(#skin)" />
      {glasses && (
        <>
          <circle cx="32" cy="18" r="3" fill="transparent" stroke="#22d3ee" strokeWidth="1.5" />
          <circle cx="40" cy="18" r="3" fill="transparent" stroke="#22d3ee" strokeWidth="1.5" />
          <line x1="35" y1="18" x2="37" y2="18" stroke="#22d3ee" strokeWidth="1" />
        </>
      )}
      {/* body */}
      <rect x="30" y="26" width="12" height="18" rx="4" fill={laptop ? '#a78bfa' : '#22d3ee'} opacity="0.9" />
      {/* arms */}
      <line x1="30" y1="28" x2="22" y2="36" stroke="#c7d2fe" strokeWidth="3" strokeLinecap="round" />
      <line x1="42" y1="28" x2="50" y2="36" stroke="#c7d2fe" strokeWidth="3" strokeLinecap="round" />
      {/* legs */}
      <line x1="33" y1="44" x2="28" y2="58" stroke="#93c5fd" strokeWidth="3" strokeLinecap="round" />
      <line x1="39" y1="44" x2="44" y2="58" stroke="#93c5fd" strokeWidth="3" strokeLinecap="round" />
      {/* accessories */}
      {bag && <rect x="21" y="34" width="9" height="10" rx="2" fill="#38bdf8" opacity="0.8" />}
      {laptop && (
        <g>
          <rect x="18" y="32" width="16" height="10" rx="2" fill="#e2e8f0" opacity="0.9" />
          <rect x="18" y="42" width="16" height="2" fill="#94a3b8" opacity="0.8" />
        </g>
      )}
    </svg>
  );
}

function StageLabel({ children }) {
  return (
    <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs text-white/80 backdrop-blur">
      {children}
    </div>
  );
}
