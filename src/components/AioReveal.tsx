import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { FadeIn } from './FadeIn';

// ============================================================
// The "weird thing" — AIO before/after interactive demo
// Full metrics panel with animated counters and live bar
// ============================================================

function AnimatedCounter({
  from,
  to,
  prefix = '',
  suffix = '',
  active,
}: {
  from: number;
  to: number;
  prefix?: string;
  suffix?: string;
  active: boolean;
}) {
  const motionVal = useMotionValue(active ? to : from);
  const spring = useSpring(motionVal, { damping: 25, stiffness: 60 });
  const display = useTransform(spring, (v) => Math.round(v).toString());

  useEffect(() => {
    motionVal.set(active ? to : from);
  }, [active, from, to, motionVal]);

  return (
    <span>
      {prefix}
      <motion.span>{display}</motion.span>
      {suffix}
    </span>
  );
}

function RankingBar({ value, isAfter }: { value: number; isAfter: boolean }) {
  const motionVal = useMotionValue(isAfter ? value : 8);
  const spring = useSpring(motionVal, { damping: 25, stiffness: 60 });
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

// Mini SERP component — shows ranking position reordering
function SerpList({ isAfter }: { isAfter: boolean }) {
  const positions = isAfter
    ? ['Din bedrift', 'Konkurrent A', 'Konkurrent B', 'Konkurrent C']
    : ['Konkurrent A', 'Konkurrent B', 'Konkurrent C', 'Din bedrift'];

  return (
    <div className="space-y-1.5">
      {positions.map((name, i) => {
        const isOwn = name === 'Din bedrift';
        return (
          <motion.div
            key={name}
            layout
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="flex items-center gap-2.5 rounded-lg px-3 py-1.5"
            style={{
              background: isOwn ? (isAfter ? 'rgba(232,255,71,0.08)' : 'rgba(37,40,64,0.4)') : '#0D0F1A',
              border: isOwn ? (isAfter ? '1px solid rgba(232,255,71,0.25)' : '1px solid #252840') : '1px solid transparent',
            }}
          >
            <span
              className="font-mono text-xs w-5 text-center"
              style={{ color: isOwn && isAfter ? '#E8FF47' : '#555E99' }}
            >
              {i + 1}
            </span>
            <span
              className="font-sans text-xs"
              style={{ color: isOwn ? (isAfter ? '#E8FF47' : '#555E99') : '#7880B8' }}
            >
              {name}
            </span>
          </motion.div>
        );
      })}
    </div>
  );
}

export function AioReveal() {
  const [active, setActive] = useState(false); // false = before, true = after
  const ref = useRef<HTMLDivElement>(null);

  return (
    <section
      id="aio"
      ref={ref}
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
            Klikk «Med AIO» og se tallene bevege seg. AIO justerer innholdet ditt
            kontinuerlig basert på hva Google belønner akkurat nå.
          </p>
        </FadeIn>

        <FadeIn delay={0.1}>
          {/* Toggle */}
          <div
            className="flex items-center gap-0 mb-10 w-fit"
            style={{
              background: '#13162A',
              border: '1px solid #252840',
              borderRadius: '9999px',
              padding: '4px',
            }}
          >
            <button
              onClick={() => setActive(false)}
              className="font-sans font-semibold px-6 py-3 rounded-full transition-all duration-300"
              style={{
                background: !active ? '#181B2E' : 'transparent',
                color: !active ? '#F0F2FF' : '#555E99',
                fontSize: '0.9375rem',
                minWidth: '140px',
              }}
            >
              ✗ Uten AIO
            </button>
            <button
              onClick={() => setActive(true)}
              className="font-sans font-semibold px-6 py-3 rounded-full transition-all duration-300"
              style={{
                background: active ? '#E8FF47' : 'transparent',
                color: active ? '#0D0F1A' : '#555E99',
                fontSize: '0.9375rem',
                minWidth: '140px',
              }}
            >
              ✓ Med AIO
            </button>
          </div>

          {/* Main demo panel */}
          <div
            className="rounded-3xl overflow-hidden"
            style={{
              border: active ? '1px solid rgba(232,255,71,0.25)' : '1px solid #252840',
              background: '#181B2E',
              transition: 'border-color 0.5s ease, box-shadow 0.5s ease',
              maxWidth: '900px',
              boxShadow: active ? '0 0 60px rgba(232,255,71,0.07)' : 'none',
            }}
          >
            {/* Status bar */}
            <div
              className="px-6 py-3 flex items-center justify-between"
              style={{
                background: active ? 'rgba(232,255,71,0.05)' : '#13162A',
                borderBottom: '1px solid #252840',
                transition: 'background 0.4s ease',
              }}
            >
              <span className="font-mono text-xs" style={{ color: active ? '#E8FF47' : '#555E99' }}>
                {active ? 'Med AIO' : 'Uten AIO'}
              </span>
              <span
                className="font-mono text-xs px-3 py-1 rounded-full"
                style={{
                  background: active ? 'rgba(232,255,71,0.12)' : 'rgba(60,68,128,0.3)',
                  color: active ? '#E8FF47' : '#555E99',
                }}
              >
                {active ? '● AIO aktivt' : '○ Ingen AIO'}
              </span>
            </div>

            {/* Metrics + SERP side by side */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              {/* Left: metrics */}
              <div style={{ borderRight: '1px solid #252840' }}>
                {/* Rank */}
                <div className="p-6" style={{ borderBottom: '1px solid #252840' }}>
                  <div className="font-mono text-xs mb-2" style={{ color: '#555E99' }}>
                    Google-rangering
                  </div>
                  <div
                    style={{
                      fontFamily: "'Bricolage Grotesque', system-ui, sans-serif",
                      fontWeight: 800,
                      fontSize: '2.5rem',
                      lineHeight: 1,
                      color: active ? '#E8FF47' : '#555E99',
                      transition: 'color 0.3s ease',
                      marginBottom: '0.5rem',
                    }}
                  >
                    {active ? 'Topp 3' : (
                      <span className="tabular-nums">
                        #<AnimatedCounter from={3} to={47} prefix="" suffix="" active={!active} />
                      </span>
                    )}
                  </div>
                </div>

                {/* Clicks */}
                <div className="p-6" style={{ borderBottom: '1px solid #252840' }}>
                  <div className="font-mono text-xs mb-2" style={{ color: '#555E99' }}>
                    Organiske klikk / mnd
                  </div>
                  <div
                    style={{
                      fontFamily: "'Bricolage Grotesque', system-ui, sans-serif",
                      fontWeight: 800,
                      fontSize: '2.5rem',
                      lineHeight: 1,
                      color: active ? '#E8FF47' : '#555E99',
                      transition: 'color 0.3s ease',
                      marginBottom: '0.5rem',
                    }}
                  >
                    <span className="tabular-nums">
                      <AnimatedCounter from={23} to={340} suffix={active ? '+' : ''} active={active} />
                    </span>
                  </div>
                </div>

                {/* Synlighet */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-mono text-xs" style={{ color: '#555E99' }}>
                      Søkesynlighet
                    </span>
                    <span
                      className="font-mono text-xs tabular-nums"
                      style={{ color: active ? '#E8FF47' : '#555E99' }}
                    >
                      <AnimatedCounter from={8} to={87} suffix="%" active={active} />
                    </span>
                  </div>
                  <RankingBar value={active ? 87 : 8} isAfter={active} />
                </div>
              </div>

              {/* Right: SERP preview */}
              <div className="p-6">
                <div className="font-mono text-xs mb-4" style={{ color: '#555E99' }}>
                  Google-resultater — live
                </div>
                <AnimatePresence mode="popLayout">
                  <SerpList key={active ? 'after' : 'before'} isAfter={active} />
                </AnimatePresence>

                {active && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="mt-6 pt-5"
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
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
