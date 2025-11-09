import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, Send } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="relative w-full bg-[#0b0f17] py-24 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(700px_300px_at_20%_0%,rgba(124,58,237,0.18),transparent)]" />
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <h2 className="text-2xl font-bold md:text-3xl">Contact</h2>
        <div className="mt-8 grid gap-8 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur"
          >
            <p className="text-white/80">
              Let’s build something futuristic together. Reach out for collaborations, internships, or freelance gigs.
            </p>
            <div className="mt-5 flex flex-col gap-3 text-sm">
              <a href="mailto:swaparup36@gmail.com" className="inline-flex items-center gap-2 text-white/90 hover:text-white">
                <Mail className="h-4 w-4" /> swaparup36@gmail.com
              </a>
              <a href="https://linkedin.com/in/swaparup-mukherjee-508001280" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-white/90 hover:text-white">
                <Linkedin className="h-4 w-4" /> LinkedIn
              </a>
              <a href="https://github.com/swaparup36" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-white/90 hover:text-white">
                <Github className="h-4 w-4" /> GitHub
              </a>
            </div>
          </motion.div>

          <motion.form
            onSubmit={(e) => {
              e.preventDefault();
              const form = e.currentTarget;
              form.reset();
              alert('Message sent! Thanks for reaching out.');
            }}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur"
          >
            <div className="grid gap-4">
              <input required type="text" placeholder="Your Name" className="rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-sm outline-none placeholder:text-white/40 focus:border-cyan-400/50" />
              <input required type="email" placeholder="Your Email" className="rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-sm outline-none placeholder:text-white/40 focus:border-cyan-400/50" />
              <textarea required placeholder="Your Message" rows={5} className="resize-none rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-sm outline-none placeholder:text-white/40 focus:border-cyan-400/50" />
            </div>
            <button type="submit" className="mt-5 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-fuchsia-500 via-violet-500 to-cyan-400 px-5 py-3 text-sm font-semibold text-white shadow-[0_0_32px_rgba(139,92,246,0.35)] transition-transform hover:scale-[1.02] active:scale-[0.99]">
              <Send className="h-4 w-4" /> Send Message
            </button>
            <span className="pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
          </motion.form>
        </div>
      </div>
    </section>
  );
}
