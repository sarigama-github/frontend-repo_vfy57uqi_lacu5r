import { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

function Starfield() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let raf;

    const dpr = window.devicePixelRatio || 1;
    const resize = () => {
      canvas.width = canvas.clientWidth * dpr;
      canvas.height = canvas.clientHeight * dpr;
    };
    resize();
    window.addEventListener('resize', resize);

    const stars = Array.from({ length: 160 }, () => ({
      x: Math.random(),
      y: Math.random(),
      z: Math.random(),
      s: 0.5 + Math.random() * 1.6,
    }));

    const render = () => {
      const w = canvas.width;
      const h = canvas.height;
      ctx.clearRect(0, 0, w, h);
      for (const st of stars) {
        const x = st.x * w;
        const y = st.y * h;
        const alpha = 0.45 + st.z * 0.55;
        ctx.fillStyle = `rgba(175, 220, 255, ${alpha})`;
        ctx.beginPath();
        ctx.arc(x, y, st.s * dpr, 0, Math.PI * 2);
        ctx.fill();
      }
      raf = requestAnimationFrame(render);
    };

    raf = requestAnimationFrame(render);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />;
}

function SkyGlow() {
  return (
    <svg className="absolute inset-0 h-full w-full" viewBox="0 0 1200 800" preserveAspectRatio="none" aria-hidden>
      <defs>
        <radialGradient id="glow" cx="50%" cy="20%" r="60%">
          <stop offset="0%" stopColor="#7dd3fc" stopOpacity="0.35" />
          <stop offset="60%" stopColor="#22d3ee" stopOpacity="0.12" />
          <stop offset="100%" stopColor="#0ea5e9" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="1200" height="800" fill="url(#glow)" />
    </svg>
  );
}

function MountainsBack({ className = '' }) {
  return (
    <svg className={className} viewBox="0 0 1200 400" preserveAspectRatio="none" aria-hidden>
      <defs>
        <linearGradient id="mtnBack" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="#3730a3" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#0ea5e9" stopOpacity="0.18" />
        </linearGradient>
      </defs>
      <path d="M0 260 L120 220 L220 260 L360 180 L480 240 L640 160 L760 220 L880 180 L1040 230 L1200 200 L1200 400 L0 400 Z" fill="url(#mtnBack)" />
    </svg>
  );
}

function MountainsMid({ className = '' }) {
  return (
    <svg className={className} viewBox="0 0 1200 420" preserveAspectRatio="none" aria-hidden>
      <defs>
        <linearGradient id="mtnMid" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="#4c1d95" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.28" />
        </linearGradient>
      </defs>
      <path d="M0 310 L140 250 L220 300 L340 220 L420 270 L540 210 L650 260 L760 200 L900 260 L1030 230 L1200 270 L1200 420 L0 420 Z" fill="url(#mtnMid)" />
    </svg>
  );
}

function TreeLine({ className = '' }) {
  // Stylized pine silhouettes
  return (
    <svg className={className} viewBox="0 0 1200 240" preserveAspectRatio="none" aria-hidden>
      <defs>
        <linearGradient id="trees" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="#0ea5e9" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#a78bfa" stopOpacity="0.35" />
        </linearGradient>
      </defs>
      {/* Repeating pines */}
      {Array.from({ length: 26 }).map((_, i) => {
        const x = i * 48 + (i % 2 === 0 ? 10 : 0);
        const h = 80 + ((i * 13) % 50);
        return (
          <g key={i} transform={`translate(${x} ${140 - (h - 80)})`} opacity={0.9}>
            <path d={`M0 ${h} L20 ${h - 28} L10 ${h - 28} L28 ${h - 52} L18 ${h - 52} L36 ${h - 76} L0 ${h - 76} Z`} fill="url(#trees)" />
            <rect x="16" y={h - 12} width="8" height="18" fill="#60a5fa" fillOpacity="0.45" />
          </g>
        );
      })}
      <rect x="0" y="190" width="1200" height="50" fill="#0b1026" fillOpacity="0.6" />
    </svg>
  );
}

function ForegroundHills({ className = '' }) {
  return (
    <svg className={className} viewBox="0 0 1200 260" preserveAspectRatio="none" aria-hidden>
      <defs>
        <linearGradient id="hill" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#22d3ee" stopOpacity="0.25" />
        </linearGradient>
      </defs>
      <path d="M0 220 C120 190 240 210 360 190 C480 170 600 210 720 190 C840 170 960 200 1080 185 C1140 178 1200 185 1200 185 L1200 260 L0 260 Z" fill="url(#hill)" />
    </svg>
  );
}

export default function Journey() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ['start end', 'end start'] });

  // Parallax speeds
  const ySky = useTransform(scrollYProgress, [0, 1], ['0%', '-8%']);
  const yBack = useTransform(scrollYProgress, [0, 1], ['0%', '-14%']);
  const yMid = useTransform(scrollYProgress, [0, 1], ['0%', '-22%']);
  const yTrees = useTransform(scrollYProgress, [0, 1], ['0%', '-32%']);
  const yHills = useTransform(scrollYProgress, [0, 1], ['0%', '-42%']);

  // Mouse-based subtle parallax on X
  useEffect(() => {
    const onMove = (e) => {
      const x = e.clientX / window.innerWidth - 0.5;
      const root = containerRef.current;
      if (!root) return;
      root.style.setProperty('--parallax-x', String(x));
    };
    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  return (
    <section id="journey" ref={containerRef} className="relative w-full overflow-hidden bg-gradient-to-b from-[#090b1a] via-[#0b0f2a] to-[#0a0e20] text-white">
      <div className="relative mx-auto max-w-7xl px-6 pt-28">
        <h2 className="text-2xl font-semibold tracking-tight sm:text-4xl">The Journey</h2>
        <p className="mt-3 max-w-2xl text-white/80">Gen‑Z mountain vibes with neon trees and layered parallax. Move your mouse. Scroll for depth.</p>
      </div>

      {/* Cosmic sky */}
      <div className="absolute inset-0">
        <Starfield />
        <SkyGlow />
      </div>

      {/* Layers */}
      <motion.div style={{ y: ySky }} className="absolute inset-0" aria-hidden>
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-700/20 via-transparent to-transparent" />
      </motion.div>

      <motion.div style={{ y: yBack, transform: 'translateX(calc(var(--parallax-x,0)*-4%))' }} className="absolute inset-x-0 bottom-40 h-[38vh]" aria-hidden>
        <MountainsBack className="absolute inset-x-0 bottom-0 h-full w-full" />
      </motion.div>

      <motion.div style={{ y: yMid, transform: 'translateX(calc(var(--parallax-x,0)*-8%))' }} className="absolute inset-x-0 bottom-28 h-[42vh]" aria-hidden>
        <MountainsMid className="absolute inset-x-0 bottom-0 h-full w-full" />
      </motion.div>

      <motion.div style={{ y: yTrees, transform: 'translateX(calc(var(--parallax-x,0)*-12%))' }} className="absolute inset-x-0 bottom-16 h-[36vh]" aria-hidden>
        <TreeLine className="absolute inset-x-0 bottom-0 h-full w-full" />
      </motion.div>

      <motion.div style={{ y: yHills, transform: 'translateX(calc(var(--parallax-x,0)*-16%))' }} className="absolute inset-x-0 bottom-0 h-[28vh]" aria-hidden>
        <ForegroundHills className="absolute inset-x-0 bottom-0 h-full w-full" />
      </motion.div>

      {/* Foreground card focal */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 py-24 md:py-40">
        <div className="ml-auto w-full max-w-md rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
          <h3 className="text-lg font-medium">Parallax Playground</h3>
          <p className="mt-2 text-sm text-white/75">This section blends scroll and mouse parallax across neon mountains and trees for a cinematic vibe.</p>
          <div className="pointer-events-none mt-6 h-px w-32 bg-gradient-to-r from-cyan-400/60 to-transparent" />
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#090b1a] to-transparent" />
    </section>
  );
}
