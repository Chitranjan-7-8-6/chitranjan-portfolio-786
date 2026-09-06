import { motion } from "framer-motion";
import { about, aboutStats, profile } from "../data/content";
import portraitPhoto from "../assets/neeraj.jpg";

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-7xl px-6 py-24 md:px-10">
      <div className="grid grid-cols-1 gap-12 md:grid-cols-[1.2fr_0.8fr] md:gap-16">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
            className="font-mono text-xs uppercase tracking-widest2 text-gold-soft"
          >
            {about.eyebrow}
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6 }}
            className="mt-4 font-display text-5xl leading-[0.95] md:text-7xl"
          >
            <span className="silver-text block">{about.heading[0]}</span>
            <span className="gold-text block">{about.heading[1]}</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-6 max-w-2xl text-cream-dim/90"
          >
            {about.body}
          </motion.p>

          <div className="mt-14 grid grid-cols-2 gap-x-6 gap-y-10 border-t border-void-line pt-10 md:grid-cols-4">
            {aboutStats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <p className="tabular gold-text font-display text-4xl md:text-5xl">{stat.value}</p>
                <p className="mt-1 font-mono text-[11px] uppercase tracking-widest text-cream-dim">
                  {stat.label}
                </p>
                <p className="mt-0.5 text-xs text-muted">{stat.note}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right side portrait card */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="relative mx-auto w-full max-w-xs md:mx-0"
        >
          <div className="spotlight absolute -inset-10" aria-hidden />
          <div className="relative overflow-hidden rounded-lg border border-gold/25">
            <img
              src={portraitPhoto}
              alt={profile.name}
              className="h-full w-full object-cover"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-void/70 via-transparent to-transparent" />
            <p className="absolute bottom-4 right-5 font-signature text-2xl text-gold-soft">
              {profile.name.split(" ")[0]}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
