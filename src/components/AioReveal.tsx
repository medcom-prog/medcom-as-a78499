import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useInView, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { FadeIn } from './FadeIn';

// ============================================================
// The "weird thing" — AIO before/after interactive demo
// Animated counters + SERP reorder + auto-plays on scroll into view
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
  const spring = useSpring(motionVal, { damping: 20, stiffness: 50 });
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
  const spring = useSpring(motionVal, { damping: 20, stiffness: 50 });
  const width = useTransform(spring, (v) => `${Math.min(v, 100)}%`);

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

function SerpList({ isAfter }: { isAfter: boolean }) {
  const positions = isAfter
    ? ['Din bedrift', 'Konkurrent A', 'Konkurrent B', 'Konkurrent C']
    : ['Konkurrent A', 'Konkurrent B', 'Konkurrent C', 'Din bedrift'];

  return (
    <div className="space-y-2">
      {positions.map((name, i) => {
        const isOwn = name === 'Din bedrift';
        return (
          <motion.div
            key={name}
            layout
            initial={false}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: i * 0.05 }}
            className="flex items-center gap-2.5 rounded-lg px-3 py-2"
            style={{
              background: isOwn
                ? isAfter
                  ? 'rgba(232,255,71,0.08)'
                  : 'rgba(37,40,64,0.4)'
                : 'rgba(13,15,26,0.6)',
              border: isOwn
                ? isAfter
                  ? '1px solid rgba(232,255,71,0.25)'
                  : '1px solid #252840'
                : '1px solid transparent',
            }}
          >
            <span
              className="font-mono text-xs w-5 text-center flex-shrink-0"
              style={{ color: isOwn && isAfter ? '#E8FF47' : '#555E99' }}
            >
              {i + 1}
            </span>
            <span
              className="font-sans text-xs"
              style={{ color: isOwn ? (isAfter ? '#E8FF47' : '#7880B8') : '#7880B8' }}
            >
              {name}
            </span>
            {isOwn && isAfter && (
              <span
                className="ml-auto font-mono text-xs px-1.5 py-0.5 rounded"
                style={{ background: 'rgba(232,255,71,0.12)', color: '#E8FF47' }}
              >
                ↑ 44 plasser
              </span>
            )}
          </motion.div>
        );
      })}
    </div>
  );
}

export function AioReveal() {
  const [active, setActive] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  // Auto-play: when section comes into view, switch to "after" after 1.2s
  useEffect(() => {
    if (isInView && !active) {
      const timer = setTimeout(() => setActive(true), 1200);
      return () => clearTimeout(timer);
    }
  }, [isInView]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <section
      id="aio"
      ref={sectionRef}
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
            Tallene animeres automatisk når du scroller hit. Klikk «Uten AIO» og
            tilbake for å se forskjellen.
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

          {/* Demo panel */}
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
              <span
                className="font-mono text-xs"
                style={{ color: active ? '#E8FF47' : '#555E99' }}
              >
                {active ? 'Med AIO' : 'Uten AIO'}
              </span>
              <motion.span
                key={active ? 'on' : 'off'}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="font-mono text-xs px-3 py-1 rounded-full"
                style={{
                  background: active ? 'rgba(232,255,71,0.12)' : 'rgba(60,68,128,0.3)',
                  color: active ? '#E8FF47' : '#555E99',
                }}
              >
                {active ? '● AIO aktivt' : '○ Ingen AIO'}
              </motion.span>
            </div>

            {/* Content */}
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
                    }}
                  >
                    <AnimatePresence mode="wait">
                      {active ? (
                        <motion.span
                          key="after"
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.3 }}
                        >
                          Topp 3
                        </motion.span>
                      ) : (
                        <motion.span
                          key="before"
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.3 }}
                          className="tabular-nums"
                        >
                          #<AnimatedCounter from={3} to={47} active={!active} />
                        </motion.span>
                      )}
                    </AnimatePresence>
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
                    }}
                    className="tabular-nums"
                  >
                    <AnimatedCounter from={23} to={340} suffix={active ? '+' : ''} active={active} />
                  </div>
                </div>

                {/* Visibility */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
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

              {/* Right: SERP */}
              <div className="p-6">
                <div className="font-mono text-xs mb-4" style={{ color: '#555E99' }}>
                  Google-resultater
                </div>
                <SerpList isAfter={active} />

                {active && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
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
