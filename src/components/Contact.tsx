import { useState } from "react";
import { motion } from "framer-motion";
import { profile, contact } from "../data/content";

export default function Contact() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <section id="contact" className="mx-auto max-w-7xl px-6 py-28 md:px-10">
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6 }}
        className="font-mono text-xs uppercase tracking-widest2 text-gold-soft"
      >
        {contact.eyebrow}
      </motion.p>

      <div className="mt-6 grid grid-cols-1 gap-12 md:grid-cols-2">
        <div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6 }}
            className="font-display text-5xl leading-[0.95] md:text-6xl"
          >
            <span className="silver-text block">{contact.heading[0]}</span>
            <span className="gold-text block">{contact.heading[1]}</span>
          </motion.h2>
          <p className="mt-6 max-w-sm text-cream-dim/80">{contact.sub}</p>

          <div className="mt-10 space-y-2 font-mono text-sm">
            <a href={`mailto:${profile.email}`} className="block text-cream hover:text-gold-soft transition-colors">
              {profile.email}
            </a>
            <a href={`tel:${profile.phone}`} className="block text-cream-dim hover:text-gold-soft transition-colors">
              {profile.phone}
            </a>
            <a href={profile.linkedin} className="block text-cream-dim hover:text-gold-soft transition-colors">
              LinkedIn ↗
            </a>
            <a href={profile.github} className="block text-cream-dim hover:text-gold-soft transition-colors">
              GitHub ↗
            </a>
          </div>
        </div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="rounded-lg border border-gold/25 bg-void-card p-8"
        >
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <label className="block">
              <span className="font-mono text-[11px] uppercase tracking-widest text-muted">
                // Name
              </span>
              <input
                type="text"
                required
                placeholder="Enter name"
                className="mt-2 w-full rounded border border-void-line bg-void px-3 py-2.5 text-sm text-cream placeholder:text-muted focus:border-gold focus:outline-none"
              />
            </label>
            <label className="block">
              <span className="font-mono text-[11px] uppercase tracking-widest text-muted">
                // Email
              </span>
              <input
                type="email"
                required
                placeholder="Enter email"
                className="mt-2 w-full rounded border border-void-line bg-void px-3 py-2.5 text-sm text-cream placeholder:text-muted focus:border-gold focus:outline-none"
              />
            </label>
          </div>

          <label className="mt-5 block">
            <span className="font-mono text-[11px] uppercase tracking-widest text-muted">
              // Message
            </span>
            <textarea
              required
              rows={4}
              placeholder="Enter your message..."
              className="mt-2 w-full rounded border border-void-line bg-void px-3 py-2.5 text-sm text-cream placeholder:text-muted focus:border-gold focus:outline-none"
            />
          </label>

          <button
            type="submit"
            className="mt-6 w-full rounded border border-cream/80 bg-cream py-3 font-mono text-xs uppercase tracking-widest text-void transition-transform hover:-translate-y-0.5"
          >
            {sent ? "Message noted ✓" : `${contact.submitLabel} ↗`}
          </button>
          {sent && (
            <p className="mt-3 text-center text-xs text-muted">
              This is a static demo form — wire it up to a real email service before going live.
            </p>
          )}
        </motion.form>
      </div>

      <div className="mt-24 flex flex-col items-start justify-between gap-4 border-t border-void-line pt-6 text-xs text-muted md:flex-row md:items-center">
        <p className="font-mono">
          {profile.name} · {profile.role} · {profile.location}
        </p>
        {/* <p className="font-mono">Built with React, Tailwind & Framer Motion</p> */} 
        {/* yaha se footer edit hoga */}
      </div>
    </section>
  );
}
