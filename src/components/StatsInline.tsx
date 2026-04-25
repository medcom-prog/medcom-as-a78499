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
    <section className="bg-bg-soft border-y border-bg-border py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0 md:divide-x md:divide-bg-border">
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
              className="flex flex-col items-center text-center md:px-8"
            >
              <div className="font-display font-800 text-4xl md:text-5xl text-ink-100 mb-2">
                <AnimatedNumber value={stat.value} suffix={stat.suffix} />
              </div>
              <div className="font-mono text-xs text-ink-500 tracking-wide leading-snug max-w-[150px]">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
