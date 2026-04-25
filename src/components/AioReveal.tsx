import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { FadeIn } from './FadeIn';

// ============================================================
// The "weird thing" — AIO before/after interactive demo
// ============================================================

const states = {
  before: {
    label: 'Uten AIO',
    rank: { text: '#47', isGood: false },
    clicks: { text: '23', isGood: false },
    visibility: 8,
    items: [
      { text: 'Ingen rangeringsstrategi', ok: false },
      { text: 'Statisk innhold', ok: false },
      { text: 'Ingen søkeordanalyse', ok: false },
      { text: 'Manuell oppdatering', ok: false },
    ],
  },
  after: {
    label: 'Med AIO',
    rank: { text: 'Topp 3', isGood: true },
    clicks: { text: '340+', isGood: true },
    visibility: 87,
    items: [
      { text: 'AI-optimalisert innhold', ok: true },
      { text: 'Automatiske oppdateringer', ok: true },
      { text: 'Søkeordanalyse hver uke', ok: true },
      { text: 'Rangeringsrapporter', ok: true },
    ],
  },
};

type StateKey = keyof typeof states;

function RankingBar({ value, isAfter }: { value: number; isAfter: boolean }) {
  const motionVal = useMotionValue(0);
  const spring = useSpring(motionVal, { damping: 30, stiffness: 80 });
  const width = useTransform(spring, (v) => `${v}%`);

  useEffect(() => {
    motionVal.set(value);
  }, [value, motionVal]);

  return (
    <div className="w-full h-2 rounded-full overflow-hidden" style={{ background: '#252840' }}>
      <motion.div
        className="h-full rounded-full"
        style={{
          width,
          background: isAfter
            ? 'linear-gradient(90deg, #E8FF47 0%, #C8DF00 100%)'
            : '#3C4480',
        }}
      />
    </div>
  );
}

export function AioReveal() {
  const [active, setActive] = useState<StateKey>('before');
  const data = states[active];
  const isAfter = active === 'after';

  return (
    <section
      id="aio"
      style={{
        background: '#0A0D1C',
        borderTop: '1px solid #252840',
        borderBottom: '1px solid #252840',
        padding: '6rem 0',
      }}
    >
      <div className="container mx-auto px-6">
        {/* Header */}
        <FadeIn style={{ maxWidth: '40rem', marginBottom: '3rem' }}>
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
              fontSize: 'clamp(1.75rem, 4vw, 3.25rem)',
              lineHeight: 1.08,
              letterSpacing: '-0.025em',
              color: '#F0F2FF',
              marginBottom: '1rem',
            }}
          >
            Se hva AIO gjør
            <br />
            <span style={{ color: '#E8FF47' }}>for en konkret nettside.</span>
          </h2>
          <p className="font-sans text-sm leading-relaxed" style={{ color: '#7880B8' }}>
            Klikk og se forskjellen. AIO justerer innholdet ditt automatisk
            basert på hva Google belønner akkurat nå.
          </p>
        </FadeIn>

        <FadeIn delay={0.1}>
          {/* Large toggle */}
          <div
            className="flex items-center gap-0 mb-10 w-fit"
            style={{
              background: '#13162A',
              border: '1px solid #252840',
              borderRadius: '9999px',
              padding: '4px',
            }}
          >
            {(['before', 'after'] as StateKey[]).map((key) => {
              const isCurrent = active === key;
              return (
                <button
                  key={key}
                  onClick={() => setActive(key)}
                  className="relative font-sans font-semibold px-6 py-3 rounded-full transition-all duration-300"
                  style={{
                    background: isCurrent
                      ? key === 'after'
                        ? '#E8FF47'
                        : '#181B2E'
                      : 'transparent',
                    color: isCurrent
                      ? key === 'after'
                        ? '#0D0F1A'
                        : '#F0F2FF'
                      : '#555E99',
                    fontSize: '0.9375rem',
                    minWidth: '140px',
                  }}
                >
                  {key === 'before' ? '✗ Uten AIO' : '✓ Med AIO'}
                </button>
              );
            })}
          </div>

          {/* Main demo panel */}
          <div
            className="rounded-3xl overflow-hidden"
            style={{
              border: isAfter ? '1px solid rgba(232,255,71,0.25)' : '1px solid #252840',
              background: '#181B2E',
              transition: 'border-color 0.4s ease, box-shadow 0.4s ease',
              maxWidth: '900px',
              boxShadow: isAfter ? '0 0 60px rgba(232,255,71,0.08)' : 'none',
            }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              >
                {/* Top status bar */}
                <div
                  className="px-6 py-3 flex items-center justify-between"
                  style={{
                    background: isAfter ? 'rgba(232,255,71,0.06)' : '#13162A',
                    borderBottom: '1px solid #252840',
                    transition: 'background 0.4s ease',
                  }}
                >
                  <span
                    className="font-mono text-xs"
                    style={{ color: isAfter ? '#E8FF47' : '#555E99' }}
                  >
                    {data.label}
                  </span>
                  <span
                    className="font-mono text-xs px-3 py-1 rounded-full"
                    style={{
                      background: isAfter ? 'rgba(232,255,71,0.12)' : 'rgba(60,68,128,0.3)',
                      color: isAfter ? '#E8FF47' : '#555E99',
                    }}
                  >
                    {isAfter ? 'AIO aktivt' : 'Ingen AIO'}
                  </span>
                </div>

                {/* Metrics */}
                <div
                  className="grid grid-cols-1 md:grid-cols-3 gap-0"
                  style={{ borderBottom: '1px solid #252840' }}
                >
                  {[
                    {
                      label: 'Google-rangering',
                      value: data.rank.text,
                      good: data.rank.isGood,
                    },
                    {
                      label: 'Organiske klikk / mnd',
                      value: data.clicks.text,
                      good: data.clicks.isGood,
                    },
                    {
                      label: 'Google-synlighet',
                      value: `${data.visibility}%`,
                      good: isAfter,
                      hasBar: true,
                    },
                  ].map((metric, i) => (
                    <div
                      key={metric.label}
                      className="p-6"
                      style={{
                        borderRight: i < 2 ? '1px solid #252840' : 'none',
                      }}
                    >
                      <div className="font-mono text-xs mb-2" style={{ color: '#555E99' }}>
                        {metric.label}
                      </div>
                      <div
                        style={{
                          fontFamily: "'Bricolage Grotesque', system-ui, sans-serif",
                          fontWeight: 800,
                          fontSize: '2.25rem',
                          lineHeight: 1,
                          color: metric.good ? '#E8FF47' : '#555E99',
                          marginBottom: '0.75rem',
                        }}
                      >
                        {metric.value}
                      </div>
                      {metric.hasBar && (
                        <RankingBar value={data.visibility} isAfter={isAfter} />
                      )}
                    </div>
                  ))}
                </div>

                {/* Checklist */}
                <div className="p-6">
                  <div className="font-mono text-xs mb-4" style={{ color: '#555E99' }}>
                    Hva som er på plass
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    {data.items.map((item) => (
                      <div key={item.text} className="flex items-center gap-2.5">
                        <span
                          className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-xs"
                          style={{
                            background: item.ok
                              ? 'rgba(232,255,71,0.1)'
                              : 'rgba(37,40,64,0.6)',
                            border: item.ok
                              ? '1px solid rgba(232,255,71,0.3)'
                              : '1px solid #252840',
                            color: item.ok ? '#E8FF47' : '#3C4480',
                          }}
                        >
                          {item.ok ? '✓' : '✕'}
                        </span>
                        <span
                          className="font-sans text-sm"
                          style={{
                            color: item.ok ? '#D4D8F5' : '#3C4480',
                            textDecoration: item.ok ? 'none' : 'line-through',
                          }}
                        >
                          {item.text}
                        </span>
                      </div>
                    ))}
                  </div>

                  {isAfter && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.25 }}
                      className="mt-6 pt-4"
                      style={{ borderTop: '1px solid #252840' }}
                    >
                      <a
                        href="#kontakt"
                        className="inline-flex items-center gap-2 font-sans text-sm font-semibold"
                        style={{ color: '#E8FF47' }}
                      >
                        Start med AIO — Book gratis gjennomgang →
                      </a>
                    </motion.div>
                  )}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
