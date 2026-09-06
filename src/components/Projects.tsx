import { motion } from "framer-motion";
import { projects, projectsHeading, type Project } from "../data/content";

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <div
      className="sticky"
      style={{ top: `${88 + index * 28}px`, zIndex: 10 + index }}
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
        className="mb-8 grid grid-cols-1 gap-8 rounded-lg border border-gold/25 bg-void-card p-8 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.7)] md:grid-cols-[1.3fr_1fr] md:p-10"
      >
        <div>
          <p className="font-mono text-xs uppercase tracking-widest text-gold-soft">
            {project.index} // {project.category}
          </p>
          <h3 className="mt-3 font-display text-3xl leading-[0.95] text-cream md:text-4xl">
            {project.title.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </h3>
          <p className="mt-4 max-w-md text-sm text-cream-dim/80">{project.summary}</p>

          <div className="mt-6 flex flex-wrap gap-2 border-t border-void-line pt-4">
            {project.tools.map((tool) => (
              <span
                key={tool}
                className="rounded border border-void-line px-2.5 py-1 font-mono text-[10px] uppercase tracking-wide text-cream-dim"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>

        <div>
          <p className="font-mono text-[11px] uppercase tracking-widest text-muted">
            // Analysis Metrics
          </p>
          <div className="mt-3 divide-y divide-void-line border-y border-void-line">
            {project.metrics.map((m) => (
              <div key={m.label} className="flex items-center justify-between py-3">
                <span className="font-mono text-[11px] uppercase tracking-wide text-cream-dim/70">
                  {m.label}
                </span>
                <span className="font-mono text-sm text-cream">{m.value}</span>
              </div>
            ))}
          </div>
          {project.link && (
            <a
              href={project.link}
              className="mt-6 block rounded border border-void-line py-3 text-center font-mono text-xs uppercase tracking-widest text-cream-dim hover:border-gold hover:text-gold-soft transition-colors"
            >
              View Project ↗
            </a>
          )}
        </div>
      </motion.div>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-7xl px-6 py-24 md:px-10">
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6 }}
        className="font-mono text-xs uppercase tracking-widest2 text-gold-soft"
      >
        {projectsHeading.eyebrow}
      </motion.p>
      <div className="mt-4 flex flex-col justify-between gap-4 md:flex-row md:items-end">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="font-display text-5xl leading-[0.95] md:text-6xl"
        >
          <span className="silver-text block">{projectsHeading.heading[0]}</span>
          <span className="gold-text block">{projectsHeading.heading[1]}</span>
        </motion.h2>
        <p className="max-w-xs text-sm text-cream-dim/70">{projectsHeading.sub}</p>
      </div>

      <div className="relative mt-16">
        {projects.map((project, i) => (
          <ProjectCard key={project.id} project={project} index={i} />
        ))}
      </div>
    </section>
  );
}
