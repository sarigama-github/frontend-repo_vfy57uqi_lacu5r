import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="relative z-10 bg-[#090b1a] py-20 text-white">
      <div className="mx-auto max-w-3xl px-6">
        <div className="mb-8 flex items-center gap-3">
          <div className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-fuchsia-500/20 text-fuchsia-300">
            <Mail size={18} />
          </div>
          <h3 className="text-xl font-semibold tracking-tight sm:text-2xl">Get in touch</h3>
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            alert('Thanks! Your message was captured in this demo.');
          }}
          className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm text-white/80">Name</label>
              <input
                required
                type="text"
                className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-sm outline-none ring-cyan-400/30 placeholder:text-white/40 focus:ring-2"
                placeholder="Satoshi Nakamoto"
              />
            </div>
            <div>
              <label className="mb-2 block text-sm text-white/80">Email</label>
              <input
                required
                type="email"
                className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-sm outline-none ring-cyan-400/30 placeholder:text-white/40 focus:ring-2"
                placeholder="you@domain.com"
              />
            </div>
          </div>
          <div className="mt-4">
            <label className="mb-2 block text-sm text-white/80">Message</label>
            <textarea
              required
              rows={5}
              className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-sm outline-none ring-cyan-400/30 placeholder:text-white/40 focus:ring-2"
              placeholder="Tell me about your idea..."
            />
          </div>
          <motion.button
            whileTap={{ scale: 0.98 }}
            className="mt-6 inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-cyan-500 to-fuchsia-500 px-6 py-3 text-sm font-medium text-white shadow-lg shadow-fuchsia-500/20"
          >
            Send Message
          </motion.button>
        </form>
      </div>
    </section>
  );
}
