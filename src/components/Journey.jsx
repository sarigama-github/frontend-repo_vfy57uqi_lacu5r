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

    const stars = Array.from({ length: 140 }, () => ({
      x: Math.random(),
      y: Math.random(),
      z: Math.random(),
      s: 0.5 + Math.random() * 1.5,
    }));

    const render = () => {
      const w = canvas.width;
      const h = canvas.height;
      ctx.clearRect(0, 0, w, h);
      for (const st of stars) {
        const x = st.x * w;
        const y = st.y * h;
        const alpha = 0.5 + st.z * 0.5;
        ctx.fillStyle = `rgba(180, 220, 255, ${alpha})`;
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

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />;
}

export default function Journey() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ['start end', 'end start'] });

  // Parallax speeds
  const ySky = useTransform(scrollYProgress, [0, 1], ['0%', '-10%']);
  const yMountains = useTransform(scrollYProgress, [0, 1], ['0%', '-18%']);
  const yTrees = useTransform(scrollYProgress, [0, 1], ['0%', '-28%']);
  const yCity = useTransform(scrollYProgress, [0, 1], ['0%', '-36%']);
  const ySkyscrapers = useTransform(scrollYProgress, [0, 1], ['0%', '-46%']);
  const personScale = useTransform(scrollYProgress, [0, 1], [0.9, 1.1]);
  const personY = useTransform(scrollYProgress, [0, 1], ['0%', '-10%']);

  // Mouse-based subtle parallax on X
  const mx = useRef(0);
  useEffect(() => {
    const onMove = (e) => {
      const x = e.clientX / window.innerWidth - 0.5;
      mx.current = x;
      const root = containerRef.current;
      if (!root) return;
      root.style.setProperty('--parallax-x', String(x));
    };
    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  return (
    <section id="journey" ref={containerRef} className="relative min-h-[140vh] w-full overflow-hidden bg-gradient-to-b from-[#090b1a] via-[#0b0f2a] to-[#0a0e20] text-white">
      <div className="absolute inset-0">
        <Starfield />
      </div>

      {/* Layers */}
      <motion.div style={{ y: ySky }} className="absolute inset-0" aria-hidden>
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-700/20 via-transparent to-transparent" />
      </motion.div>

      <motion.div style={{ y: yMountains }} className="absolute inset-x-0 bottom-0 h-2/3" aria-hidden>
        <div className="absolute inset-x-0 bottom-0 h-full bg-gradient-to-t from-indigo-900/60 to-transparent" />
      </motion.div>

      <motion.div style={{ y: yTrees }} className="absolute inset-x-0 bottom-0 h-2/3" aria-hidden>
        <div className="absolute inset-x-0 bottom-0 h-full bg-[radial-gradient(ellipse_at_bottom,rgba(0,255,170,0.15),transparent_60%)]" />
      </motion.div>

      <motion.div style={{ y: yCity }} className="absolute inset-x-0 bottom-0 h-1/2" aria-hidden>
        <div className="absolute inset-x-10 bottom-0 h-full rounded-t-[3rem] bg-gradient-to-t from-cyan-500/10 to-transparent" />
      </motion.div>

      <motion.div style={{ y: ySkyscrapers }} className="absolute inset-x-0 bottom-0 h-1/3" aria-hidden>
        <div className="absolute inset-x-0 bottom-0 h-full bg-gradient-to-t from-blue-500/20 to-transparent" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-6 py-24 md:grid-cols-2 md:py-40">
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-4xl">The Journey</h2>
          <p className="text-white/80">
            From first commit to full‑stack, scroll to see the evolution. Layers drift with your mouse to add depth.
          </p>
          <div className="pointer-events-none mt-6 h-px w-32 bg-gradient-to-r from-cyan-400/60 to-transparent" />
        </div>

        <motion.div
          style={{ scale: personScale, y: personY }}
          className="relative flex h-80 items-end justify-center"
        >
          <div
            className="absolute inset-0 -translate-x-[calc(var(--parallax-x,0)*10%)] transition-transform duration-200"
            aria-hidden
          />
          <div className="relative flex w-full max-w-xs items-end justify-center">
            <div className="h-64 w-40 rounded-3xl bg-gradient-to-b from-white/10 to-white/5 backdrop-blur border border-white/10" />
            <div className="pointer-events-none absolute -inset-6 rounded-[2rem] bg-[radial-gradient(ellipse_at_center,rgba(0,255,200,0.25),transparent_60%)] blur-xl" />
          </div>
        </motion.div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#090b1a] to-transparent" />
    </section>
  );
}
