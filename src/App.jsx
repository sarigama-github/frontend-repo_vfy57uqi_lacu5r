import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Profile from './components/Profile';
import Projects from './components/Projects';
import Contact from './components/Contact';

export default function App() {
  useEffect(() => {
    // Enable smooth scrolling across the app
    document.documentElement.classList.add('scroll-smooth');
    return () => document.documentElement.classList.remove('scroll-smooth');
  }, []);

  return (
    <div className="min-h-screen bg-[#0b0f17] font-sans text-white">
      <Navbar />
      <Hero />
      <Profile />
      <Projects />
      <Contact />
      <footer className="border-t border-white/10 bg-[#0b0f17]/80 py-8 text-center text-sm text-white/60">
        © {new Date().getFullYear()} Swaparup Mukherjee • Built with love, caffeine, and neon gradients.
      </footer>
    </div>
  );
}
