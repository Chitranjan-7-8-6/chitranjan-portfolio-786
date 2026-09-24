import { tickerFacts } from "../data/content";

export default function Ticker() {
  const items = [...tickerFacts, ...tickerFacts];

  return (
    <div className="border-y border-void-line bg-void-soft py-3">
      <div className="overflow-hidden">
        <div className="ticker-track flex w-max gap-10 whitespace-nowrap">
          {items.map((fact, i) => (
            <span
              key={i}
              className="flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-cream-dim/70"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-gold" aria-hidden />
              {fact}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
