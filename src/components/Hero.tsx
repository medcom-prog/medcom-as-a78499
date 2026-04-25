import { motion } from 'framer-motion';
import { site } from '../site.config';

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

export function Hero() {
  const { hero } = site;
  const lines = hero.headline.split('\n');

  return (
    <section
      id="top"
      className="relative min-h-screen bg-bg flex items-center justify-center overflow-hidden pt-24 pb-20"
    >
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(232,255,71,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(232,255,71,0.5) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Glow blob */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full bg-accent/5 blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto text-center"
        >
          {/* Eyebrow */}
          {hero.eyebrow && (
            <motion.div variants={itemVariants} className="mb-6">
              <span className="inline-flex items-center gap-2 font-mono text-xs tracking-widest text-accent/80 uppercase border border-accent/20 rounded-full px-4 py-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                {hero.eyebrow}
              </span>
            </motion.div>
          )}

          {/* Headline — staggered word-by-word */}
          <div className="mb-6">
            {lines.map((line, li) => (
              <motion.div key={li} variants={itemVariants}>
                <h1 className="font-display font-700 text-display-xl text-ink-100 leading-[1.0]">
                  {line}
                </h1>
              </motion.div>
            ))}
          </div>

          {/* Subhead */}
          <motion.p
            variants={itemVariants}
            className="font-sans text-lg md:text-xl text-ink-300 leading-relaxed max-w-2xl mx-auto mb-10"
          >
            {hero.subhead}
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href={hero.primary_cta.href}
              className="group inline-flex items-center gap-2 bg-accent text-bg font-sans font-600 px-7 py-3.5 rounded-full text-base hover:bg-accent-soft transition-all duration-200 hover:scale-105"
            >
              {hero.primary_cta.label}
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                className="transition-transform duration-200 group-hover:translate-x-0.5"
              >
                <path
                  d="M3 8h10M9 4l4 4-4 4"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
            {hero.secondary_cta && (
              <a
                href={hero.secondary_cta.href}
                className="inline-flex items-center gap-2 text-ink-300 font-sans font-500 text-base hover:text-ink-100 transition-colors duration-200 group"
              >
                {hero.secondary_cta.label}
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  className="transition-transform duration-200 group-hover:translate-y-0.5"
                >
                  <path
                    d="M8 3v10M4 9l4 4 4-4"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            )}
          </motion.div>

          {/* Stats row */}
          <motion.div
            variants={itemVariants}
            className="mt-16 pt-10 border-t border-bg-border grid grid-cols-3 gap-8 max-w-lg mx-auto"
          >
            {[
              { value: '48t', label: 'Responstid' },
              { value: 'AIO', label: 'Ny tjeneste' },
              { value: '100%', label: 'Norsk team' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="font-display font-700 text-2xl md:text-3xl text-ink-100">
                  {stat.value}
                </div>
                <div className="font-mono text-xs text-ink-400 tracking-wide mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="font-mono text-xs text-ink-500 tracking-widest">SCROLL</span>
        <div className="w-px h-10 bg-gradient-to-b from-ink-500 to-transparent" />
      </motion.div>
    </section>
  );
}
