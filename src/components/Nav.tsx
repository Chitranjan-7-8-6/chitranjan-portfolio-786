import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { profile } from "../data/content";

const links = [
  { href: "#top", label: "HOME" },
  { href: "#about", label: "ABOUT" },
  { href: "#skills", label: "SKILLS" },
  { href: "#projects", label: "PROJECTS" },
  { href: "#contact", label: "CONTACT" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  function handleMobileNavClick(event: React.MouseEvent<HTMLAnchorElement>) {
    const href = event.currentTarget.getAttribute("href");
    if (!href?.startsWith("#") || href === "#") return;

    const section = document.querySelector<HTMLElement>(href);
    if (!section) return;

    event.preventDefault();
    setOpen(false);
    window.history.pushState(null, "", href);
    window.setTimeout(() => {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 0);
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-void-line/60 bg-void/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-10">
        <a href="#top" className="font-display text-xl tracking-widest text-cream">
          {profile.initials}
        </a>

        {/* Desktop nav links */}
        <ul className="hidden gap-9 font-mono text-[11px] uppercase tracking-widest text-cream-dim/80 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="hover:text-gold-soft transition-colors">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="hidden rounded border border-gold/40 px-4 py-2 font-mono text-[11px] uppercase tracking-widest text-gold-soft hover:bg-gold hover:text-void transition-colors md:inline-block"
        >
          Let's Talk ↗
        </a>

        {/* Mobile hamburger toggle */}
        <button
          type="button"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="flex h-9 w-9 flex-col items-center justify-center gap-1.5 md:hidden"
        >
          <span
            className={`h-[1.5px] w-6 bg-cream transition-transform ${open ? "translate-y-[7px] rotate-45" : ""}`}
          />
          <span className={`h-[1.5px] w-6 bg-cream transition-opacity ${open ? "opacity-0" : ""}`} />
          <span
            className={`h-[1.5px] w-6 bg-cream transition-transform ${open ? "-translate-y-[7px] -rotate-45" : ""}`}
          />
        </button>
      </nav>

      {/* Mobile menu panel */}
      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden border-t border-void-line bg-void/95 font-mono text-xs uppercase tracking-widest text-cream-dim md:hidden"
          >
            {links.map((link) => (
              <li key={link.href} className="border-b border-void-line/60 last:border-none">
                <a
                  href={link.href}
                  onClick={handleMobileNavClick}
                  className="block px-6 py-4 hover:text-gold-soft transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contact"
                onClick={handleMobileNavClick}
                className="block px-6 py-4 text-gold-soft"
              >
                Let's Talk ↗
              </a>
            </li>
          </motion.ul>
        )}
      </AnimatePresence>
    </header>
  );
}
