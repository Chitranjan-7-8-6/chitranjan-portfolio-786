import { motion } from "framer-motion";
import { pillars, pillarsHeading } from "../data/content";

export default function Skills() {
  return (
    <section id="skills" className="border-t border-void-line bg-void-soft/40">
      <div className="mx-auto max-w-7xl px-6 py-24 md:px-10">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="font-mono text-xs uppercase tracking-widest2 text-gold-soft"
        >
          {pillarsHeading.eyebrow}
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="mt-4 font-display text-5xl leading-[0.95] md:text-6xl"
        >
          <span className="silver-text block">{pillarsHeading.heading[0]}</span>
          <span className="gold-text block">{pillarsHeading.heading[1]}</span>
        </motion.h2>

        <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-2">
          {pillars.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="rounded border border-void-line bg-void-card/50 p-7 transition-colors hover:border-gold/50"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-[11px] uppercase tracking-widest text-gold-soft">
                  {p.tag}
                </span>
                <span className="rounded border border-void-line px-2.5 py-1 font-mono text-[10px] uppercase tracking-wide text-cream-dim">
                  {p.badge}
                </span>
              </div>
              <h3 className="mt-4 font-display text-2xl tracking-wide text-cream md:text-3xl">
                {p.title}
              </h3>
              <p className="mt-3 text-sm text-cream-dim/80">{p.description}</p>
              <div className="mt-6 flex flex-wrap gap-2 border-t border-void-line pt-4">
                {p.tools.map((tool) => (
                  <span
                    key={tool}
                    className="rounded border border-void-line px-2.5 py-1 font-mono text-[10px] uppercase tracking-wide text-cream-dim"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
