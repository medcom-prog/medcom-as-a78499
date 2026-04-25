import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// The "weird thing" — interactive AIO demo
// Shows before/after: without AIO vs with AIO
// User can toggle between views

const beforeData = {
  label: 'Uten AIO',
  rank: '#47',
  rankLabel: 'Google-rangering',
  clicks: '23',
  clicksLabel: 'klikk / måned',
  visibility: 8,
  items: [
    { text: 'Ingen rangeringsstrategi', ok: false },
    { text: 'Statisk innhold', ok: false },
    { text: 'Ingen søkeordanalyse', ok: false },
    { text: 'Manuell oppdatering', ok: false },
  ],
  color: 'text-ink-400',
  rankColor: 'text-ink-500',
  bg: 'bg-bg-card',
};

const afterData = {
  label: 'Med AIO',
  rank: 'Topp 3',
  rankLabel: 'Google-rangering',
  clicks: '340+',
  clicksLabel: 'klikk / måned',
  visibility: 87,
  items: [
    { text: 'AI-optimalisert innhold', ok: true },
    { text: 'Automatiske oppdateringer', ok: true },
    { text: 'Søkeordanalyse hver uke', ok: true },
    { text: 'Rangeringsrapporter', ok: true },
  ],
  color: 'text-accent',
  rankColor: 'text-accent',
  bg: 'bg-bg-card',
};

function VisibilityBar({ value, active }: { value: number; active: boolean }) {
  return (
    <div className="w-full h-1.5 bg-bg-border rounded-full overflow-hidden">
      <motion.div
        className={`h-full rounded-full ${active ? 'bg-accent' : 'bg-ink-600'}`}
        initial={{ width: 0 }}
        animate={{ width: `${value}%` }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
      />
    </div>
  );
}

export function AioReveal() {
  const [active, setActive] = useState<'before' | 'after'>('before');
  const data = active === 'before' ? beforeData : afterData;
  const isAfter = active === 'after';

  return (
    <section id="aio" className="bg-bg-soft py-24 md:py-32 border-y border-bg-border">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="mb-12 max-w-2xl"
        >
          <div className="font-mono text-xs tracking-widest text-accent/70 uppercase mb-3">
            (02) AIO — Ny tjeneste
          </div>
          <h2 className="font-display font-700 text-display-lg text-ink-100 mb-4">
            Hva AI-optimalisert SEO
            <br />faktisk gjør for deg.
          </h2>
          <p className="font-sans text-ink-400 leading-relaxed">
            AIO er ikke bare SEO — det er kontinuerlig AI-drevet optimalisering som
            justerer innholdet ditt automatisk basert på hva Google belønner akkurat nå.
          </p>
        </motion.div>

        {/* Interactive toggle + card */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
        >
          {/* Toggle buttons */}
          <div className="flex items-center gap-1 bg-bg p-1 rounded-full w-fit mb-8 border border-bg-border">
            <button
              onClick={() => setActive('before')}
              className={`font-sans text-sm font-500 px-5 py-2 rounded-full transition-all duration-200 ${
                active === 'before'
                  ? 'bg-bg-card text-ink-200 shadow-soft'
                  : 'text-ink-500 hover:text-ink-300'
              }`}
            >
              Uten AIO
            </button>
            <button
              onClick={() => setActive('after')}
              className={`font-sans text-sm font-500 px-5 py-2 rounded-full transition-all duration-200 ${
                active === 'after'
                  ? 'bg-accent text-bg shadow-soft'
                  : 'text-ink-500 hover:text-ink-300'
              }`}
            >
              Med AIO
            </button>
          </div>

          {/* Card */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-4xl">
            {/* Metrics card */}
            <div className="bg-bg-card border border-bg-border rounded-2xl p-8">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                >
                  <div className="font-mono text-xs text-ink-500 tracking-widest uppercase mb-6">
                    {data.label}
                  </div>

                  {/* Rank + Clicks */}
                  <div className="grid grid-cols-2 gap-6 mb-8">
                    <div>
                      <div className={`font-display font-800 text-4xl ${data.rankColor} mb-1`}>
                        {data.rank}
                      </div>
                      <div className="font-mono text-xs text-ink-500">{data.rankLabel}</div>
                    </div>
                    <div>
                      <div className={`font-display font-800 text-4xl ${data.color} mb-1`}>
                        {data.clicks}
                      </div>
                      <div className="font-mono text-xs text-ink-500">{data.clicksLabel}</div>
                    </div>
                  </div>

                  {/* Visibility bar */}
                  <div className="mb-2 flex items-center justify-between">
                    <span className="font-mono text-xs text-ink-500">Google-synlighet</span>
                    <span className={`font-mono text-xs ${data.color}`}>{data.visibility}%</span>
                  </div>
                  <VisibilityBar value={data.visibility} active={isAfter} />
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Checklist card */}
            <div className="bg-bg-card border border-bg-border rounded-2xl p-8">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                  className="h-full flex flex-col justify-between"
                >
                  <div>
                    <div className="font-mono text-xs text-ink-500 tracking-widest uppercase mb-6">
                      Hva du får
                    </div>
                    <ul className="space-y-4">
                      {data.items.map((item, i) => (
                        <motion.li
                          key={item.text}
                          initial={{ opacity: 0, x: -8 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.06, duration: 0.3 }}
                          className="flex items-center gap-3"
                        >
                          <span
                            className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-xs ${
                              item.ok
                                ? 'bg-accent/10 text-accent border border-accent/30'
                                : 'bg-bg-border text-ink-600 border border-bg-border'
                            }`}
                          >
                            {item.ok ? '✓' : '✕'}
                          </span>
                          <span
                            className={`font-sans text-sm ${
                              item.ok ? 'text-ink-200' : 'text-ink-600 line-through'
                            }`}
                          >
                            {item.text}
                          </span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  {isAfter && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                      className="mt-6 pt-5 border-t border-bg-border"
                    >
                      <a
                        href="#kontakt"
                        className="inline-flex items-center gap-2 font-sans text-sm font-600 text-accent hover:text-accent-soft transition-colors"
                      >
                        Kom i gang med AIO →
                      </a>
                    </motion.div>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
