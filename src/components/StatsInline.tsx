import { motion, useInView, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useRef, useEffect } from 'react';

function AnimatedNumber({ value, suffix = '' }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });
  const motionVal = useMotionValue(0);
  const spring = useSpring(motionVal, { damping: 40, stiffness: 200 });
  const display = useTransform(spring, (v) => Math.round(v).toString());

  useEffect(() => {
    if (isInView) {
      motionVal.set(value);
    }
  }, [isInView, motionVal, value]);

  return (
    <span ref={ref} className="tabular-nums">
      <motion.span>{display}</motion.span>
      {suffix}
    </span>
  );
}

const stats = [
  { value: 48, suffix: 't', label: 'Responstid på hverdager' },
  { value: 100, suffix: '%', label: 'Norskutviklet — ingen outsourcing' },
  { value: 3, suffix: ' steg', label: 'Fra brief til lansering' },
];

export function StatsInline() {
  return (
    <section
      style={{
        background: '#13162A',
        borderTop: '1px solid #252840',
        borderBottom: '1px solid #252840',
        padding: '4rem 0',
      }}
    >
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{
                duration: 0.5,
                ease: [0.22, 1, 0.36, 1],
                delay: i * 0.1,
              }}
              className="flex flex-col items-center text-center"
              style={{
                padding: '0 2rem',
                borderRight: i < 2 ? '1px solid #252840' : 'none',
              }}
            >
              <div
                style={{
                  fontFamily: "'Bricolage Grotesque', system-ui, sans-serif",
                  fontWeight: 800,
                  fontSize: 'clamp(2.5rem, 4vw, 3.5rem)',
                  color: '#F0F2FF',
                  lineHeight: 1,
                  marginBottom: '0.5rem',
                }}
              >
                <AnimatedNumber value={stat.value} suffix={stat.suffix} />
              </div>
              <div
                className="font-mono text-xs tracking-wide leading-snug"
                style={{ color: '#555E99', maxWidth: '150px' }}
              >
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
