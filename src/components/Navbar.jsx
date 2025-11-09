import React from 'react';
import { motion } from 'framer-motion';

export default function Navbar() {
  const links = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#experience', label: 'Experience' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed inset-x-0 top-4 z-50 flex justify-center"
    >
      <div className="mx-auto flex max-w-3xl items-center justify-between gap-2 rounded-2xl border border-white/10 bg-white/10 px-4 py-2 text-sm text-white backdrop-blur">
        <a href="#home" className="font-semibold tracking-wide">Swaparup</a>
        <div className="hidden items-center gap-1 sm:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-lg px-3 py-2 text-white/80 transition hover:bg-white/10 hover:text-white"
            >
              {l.label}
            </a>
          ))}
        </div>
        <a
          href="#projects"
          className="rounded-xl bg-gradient-to-r from-fuchsia-500 to-cyan-400 px-3 py-2 font-medium text-black shadow-[0_0_20px_rgba(56,189,248,0.35)] hover:opacity-95"
        >
          Explore
        </a>
      </div>
    </motion.nav>
  );
}
