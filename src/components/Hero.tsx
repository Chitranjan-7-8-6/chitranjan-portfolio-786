import { motion, type Variants } from "framer-motion";
import { profile, heroBadges, heroQuote } from "../data/content";
import heroVideo from "../assets/hero-video.mp4";
import heroPoster from "../assets/hero-poster.jpg";

const EASE_OUT = [0.22, 1, 0.36, 1] as const;

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE_OUT } },
};

function Portrait() {
  return (
    <div className="relative mx-auto flex h-[440px] w-full max-w-sm items-end justify-center md:h-[560px]">
      <div className="spotlight absolute -inset-16" aria-hidden />

      {/*
        HERO PHOTO (static) — currently OFF, video is active instead below.
        To go back to the static photo:
        1. Comment out the <video> block below.
        2. Uncomment this <motion.img> block.
        3. Make sure "../assets/neeraj.jpg" still exists in src/assets/.
      */}
      {/*
      <motion.img
        src={portraitPhoto}
        alt={profile.name}
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.3, ease: EASE_OUT }}
        className="relative h-full w-auto object-contain object-bottom"
        style={{ filter: "drop-shadow(0 30px 40px rgba(0,0,0,0.6))" }}
      />
      */}

      <video
        src={heroVideo}
        poster={heroPoster}
        autoPlay
        loop
        muted
        playsInline
        className="relative h-full w-auto object-contain object-bottom"
        style={{ filter: "drop-shadow(0 30px 40px rgba(0,0,0,0.6))" }}
      />
    </div>
  );
}

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #F2ECDD 1px, transparent 1px), linear-gradient(to bottom, #F2ECDD 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 md:grid-cols-[1.1fr_0.9fr] md:px-10">
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.h1
            variants={item}
            className="font-display text-[15vw] leading-[0.88] tracking-tight md:text-[6.2vw]"
          >
            <span className="silver-text block">I ANALYZE</span>
            <span className="gold-text block">MESSY DATA</span>
            <span className="gold-text block">INTO ANSWERS</span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-7 font-mono text-xs uppercase tracking-widest text-cream-dim/80 md:text-sm"
          >
            {heroBadges.join("  ·  ")}
          </motion.p>

          <motion.p variants={item} className="mt-5 max-w-lg text-cream-dim/90">
            I turn raw, messy spreadsheets into numbers people can act on.
            Where SQL meets a clean dashboard, and data becomes a decision.
          </motion.p>

          <motion.div variants={item} className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="rounded border border-cream/80 bg-cream px-6 py-3 font-mono text-xs uppercase tracking-widest text-void transition-transform hover:-translate-y-0.5"
            >
              Explore My Work ↗
            </a>
            <a
              href={profile.resumeUrl}
              className="rounded border border-void-line px-6 py-3 font-mono text-xs uppercase tracking-widest text-cream-dim hover:border-gold hover:text-gold-soft transition-colors"
            >
              Download Resume ↓
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: EASE_OUT }}
          className="relative"
        >
          <Portrait />

          <div className="relative mt-4 max-w-xs rounded border border-void-line bg-void-card/60 px-6 py-5 backdrop-blur-sm md:absolute md:right-0 md:-bottom-4 md:mt-0">
            <p className="font-display text-2xl text-gold/70">&ldquo;</p>
            <p className="font-mono text-xs uppercase leading-relaxed tracking-wide text-cream-dim">
              {heroQuote.text.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </p>
            <p className="mt-3 border-t border-void-line pt-2 font-signature text-2xl text-gold-soft">
              {heroQuote.signature}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
