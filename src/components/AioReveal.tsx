import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FadeIn } from './FadeIn';

// The "weird thing" — interactive AIO demo
// Shows before/after: without AIO vs with AIO

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
};

function VisibilityBar({ value, active }: { value: number; active: boolean }) {
  return (
    <div
      className="w-full h-1.5 rounded-full overflow-hidden"
      style={{ background: '#252840' }}
    >
      <motion.div
        className="h-full rounded-full"
        style={{ background: active ? '#E8FF47' : '#555E99' }}
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
    <section
      id="aio"
      style={{
        background: '#13162A',
        borderTop: '1px solid #252840',
        borderBottom: '1px solid #252840',
        padding: '6rem 0',
      }}
    >
      <div className="container mx-auto px-6">
        {/* Header */}
        <FadeIn className="mb-12" style={{ maxWidth: '40rem' }}>
          <div
            className="font-mono text-xs tracking-widest uppercase mb-3"
            style={{ color: 'rgba(232,255,71,0.7)' }}
          >
            (02) AIO — Ny tjeneste
          </div>
          <h2
            style={{
              fontFamily: "'Bricolage Grotesque', system-ui, sans-serif",
              fontWeight: 800,
              fontSize: 'clamp(2rem, 4vw, 3.5rem)',
              lineHeight: 1.05,
              letterSpacing: '-0.025em',
              color: '#F0F2FF',
              marginBottom: '1rem',
            }}
          >
            Hva AI-optimalisert SEO
            <br />faktisk gjør for deg.
          </h2>
          <p className="font-sans leading-relaxed" style={{ color: '#6B7280' }}>
            AIO er ikke bare SEO — det er kontinuerlig AI-drevet optimalisering som
            justerer innholdet ditt automatisk basert på hva Google belønner akkurat nå.
          </p>
        </FadeIn>

        {/* Interactive toggle + card */}
        <FadeIn delay={0.1}>
          {/* Toggle buttons */}
          <div
            className="flex items-center gap-1 w-fit mb-8 p-1 rounded-full"
            style={{ background: '#0D0F1A', border: '1px solid #252840' }}
          >
            <button
              onClick={() => setActive('before')}
              className="font-sans text-sm font-medium px-5 py-2 rounded-full transition-all duration-200"
              style={{
                background: active === 'before' ? '#181B2E' : 'transparent',
                color: active === 'before' ? '#F0F2FF' : '#555E99',
              }}
            >
              Uten AIO
            </button>
            <button
              onClick={() => setActive('after')}
              className="font-sans text-sm font-medium px-5 py-2 rounded-full transition-all duration-200"
              style={{
                background: active === 'after' ? '#E8FF47' : 'transparent',
                color: active === 'after' ? '#0D0F1A' : '#555E99',
              }}
            >
              Med AIO
            </button>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6" style={{ maxWidth: '56rem' }}>
            {/* Metrics card */}
            <div
              className="rounded-2xl p-8"
              style={{ background: '#181B2E', border: '1px solid #252840' }}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                >
                  <div
                    className="font-mono text-xs tracking-widest uppercase mb-6"
                    style={{ color: '#555E99' }}
                  >
                    {data.label}
                  </div>

                  {/* Rank + Clicks */}
                  <div className="grid grid-cols-2 gap-6 mb-8">
                    <div>
                      <div
                        style={{
                          fontFamily: "'Bricolage Grotesque', system-ui, sans-serif",
                          fontWeight: 800,
                          fontSize: '2.5rem',
                          color: isAfter ? '#E8FF47' : '#555E99',
                          marginBottom: '0.25rem',
                          lineHeight: 1,
                        }}
                      >
                        {data.rank}
                      </div>
                      <div className="font-mono text-xs" style={{ color: '#555E99' }}>
                        {data.rankLabel}
                      </div>
                    </div>
                    <div>
                      <div
                        style={{
                          fontFamily: "'Bricolage Grotesque', system-ui, sans-serif",
                          fontWeight: 800,
                          fontSize: '2.5rem',
                          color: isAfter ? '#E8FF47' : '#555E99',
                          marginBottom: '0.25rem',
                          lineHeight: 1,
                        }}
                      >
                        {data.clicks}
                      </div>
                      <div className="font-mono text-xs" style={{ color: '#555E99' }}>
                        {data.clicksLabel}
                      </div>
                    </div>
                  </div>

                  {/* Visibility bar */}
                  <div className="mb-2 flex items-center justify-between">
                    <span className="font-mono text-xs" style={{ color: '#555E99' }}>
                      Google-synlighet
                    </span>
                    <span
                      className="font-mono text-xs"
                      style={{ color: isAfter ? '#E8FF47' : '#555E99' }}
                    >
                      {data.visibility}%
                    </span>
                  </div>
                  <VisibilityBar value={data.visibility} active={isAfter} />
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Checklist card */}
            <div
              className="rounded-2xl p-8"
              style={{ background: '#181B2E', border: '1px solid #252840' }}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                  className="h-full flex flex-col"
                >
                  <div>
                    <div
                      className="font-mono text-xs tracking-widest uppercase mb-6"
                      style={{ color: '#555E99' }}
                    >
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
                            className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-xs font-medium"
                            style={{
                              background: item.ok ? 'rgba(232,255,71,0.1)' : 'rgba(37,40,64,0.8)',
                              color: item.ok ? '#E8FF47' : '#3C4480',
                              border: item.ok ? '1px solid rgba(232,255,71,0.3)' : '1px solid #252840',
                            }}
                          >
                            {item.ok ? '✓' : '✕'}
                          </span>
                          <span
                            className="font-sans text-sm"
                            style={{
                              color: item.ok ? '#F0F2FF' : '#3C4480',
                              textDecoration: item.ok ? 'none' : 'line-through',
                            }}
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
                      className="mt-auto pt-5"
                      style={{ borderTop: '1px solid #252840', marginTop: '1.5rem' }}
                    >
                      <a
                        href="#kontakt"
                        className="inline-flex items-center gap-2 font-sans text-sm font-semibold transition-opacity hover:opacity-80"
                        style={{ color: '#E8FF47' }}
                      >
                        Kom i gang med AIO →
                      </a>
                    </motion.div>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
