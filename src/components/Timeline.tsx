import { motion } from "framer-motion";
import { timeline, timelineHeading } from "../data/content";

export default function Timeline() {
  return (
    <section id="timeline" className="border-t border-void-line bg-void-soft/40">
      <div className="mx-auto max-w-7xl px-6 py-24 md:px-10">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="font-mono text-xs uppercase tracking-widest2 text-gold-soft"
        >
          {timelineHeading.eyebrow}
        </motion.p>

        <div className="relative mt-12 border-l border-void-line pl-10">
          {timeline.map((entry, i) => (
            <motion.div
              key={entry.title}
              initial={{ opacity: 0, x: -14 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="relative pb-14 last:pb-0"
            >
              <span className="absolute -left-[43px] top-1.5 h-3 w-3 rounded-full border-2 border-gold bg-void" />
              <p className="font-mono text-xs uppercase tracking-widest text-muted">
                {entry.period}
              </p>
              <h3 className="mt-2 font-display text-3xl tracking-wide text-cream md:text-4xl">
                {entry.title}
              </h3>
              <p className="mt-1 font-mono text-xs uppercase tracking-wide text-gold-soft">
                {entry.org}
              </p>
              <p className="mt-2 max-w-lg text-sm text-cream-dim/80">{entry.note}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
