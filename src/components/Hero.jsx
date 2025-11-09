import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] w-full overflow-hidden bg-gradient-to-b from-[#0b0c1a] via-[#0a0d2a] to-[#090b1a] text-white">
      {/* Spline full-bleed background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/Qe6dlWJktclXcUBS/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* gradient overlays that won't block interactions */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/70" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#090b1a] to-transparent" />

      <div className="relative z-10 mx-auto flex min-h-[90vh] max-w-7xl flex-col items-center justify-center px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="font-semibold tracking-tight text-3xl sm:text-5xl md:text-6xl"
        >
          Gen‑Z Developer Portfolio
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut', delay: 0.1 }}
          className="mt-4 max-w-2xl text-white/80"
        >
          Parallax storytelling, neon gradients, micro‑interactions, and a cinematic 3D hero. Scroll to explore the journey.
        </motion.p>

        <motion.a
          href="#journey"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.6 }}
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-white/10 px-5 py-3 text-sm text-white backdrop-blur hover:bg-white/20"
        >
          Start the Journey
        </motion.a>
      </div>
    </section>
  );
}
