import './index.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Journey from './components/Journey';
import Projects from './components/Projects';
import Contact from './components/Contact';

function Footer() {
  return (
    <footer className="bg-[#080a16] py-10 text-center text-sm text-white/60">
      <div className="mx-auto max-w-7xl px-6">
        <p>
          © {new Date().getFullYear()} DevVibes — Built with React, Tailwind, Framer Motion & Spline.
        </p>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="scroll-smooth min-h-screen bg-[#0a0c18]">
      <Navbar />
      <main>
        <Hero />
        <Journey />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
