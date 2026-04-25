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
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(232,255,71,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(232,255,71,0.6) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
        }}
      />

      {/* Glow blob */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse, rgba(232,255,71,0.06) 0%, transparent 70%)',
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto text-center"
        >
          {/* Eyebrow */}
          {hero.eyebrow && (
            <motion.div variants={itemVariants} className="mb-8">
              <span className="inline-flex items-center gap-2 font-mono text-xs tracking-widest text-accent/80 uppercase border border-accent/20 rounded-full px-4 py-2 bg-accent/5">
                <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                {hero.eyebrow}
              </span>
            </motion.div>
          )}

          {/* Headline — line by line stagger */}
          <div className="mb-6">
            {lines.map((line, li) => (
              <motion.div key={li} variants={itemVariants}>
                <h1
                  style={{
                    fontFamily: "'Bricolage Grotesque', system-ui, sans-serif",
                    fontWeight: 800,
                    fontSize: 'clamp(2.5rem, 6vw, 5.5rem)',
                    lineHeight: 1.0,
                    letterSpacing: '-0.03em',
                    color: '#F0F2FF',
                  }}
                >
                  {line}
                </h1>
              </motion.div>
            ))}
          </div>

          {/* Subhead */}
          <motion.p
            variants={itemVariants}
            className="font-sans text-lg md:text-xl leading-relaxed max-w-xl mx-auto mb-10"
            style={{ color: '#A8AFDB' }}
          >
            Nettsider + AIO-drevet SEO — vi sørger for at Google finner bedriften din, automatisk.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href={hero.primary_cta.href}
              className="group inline-flex items-center gap-2 font-sans font-semibold px-8 py-4 rounded-full text-base hover:scale-105 transition-all duration-200"
              style={{ background: '#E8FF47', color: '#0D0F1A' }}
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
                className="inline-flex items-center gap-2 font-sans font-medium text-base hover:opacity-80 transition-opacity duration-200 group"
                style={{ color: '#7880B8' }}
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
            className="mt-16 pt-10 grid grid-cols-3 gap-8 max-w-lg mx-auto"
            style={{ borderTop: '1px solid rgba(37,40,64,1)' }}
          >
            {[
              { value: '48t', label: 'Responstid' },
              { value: 'AIO', label: 'Ny tjeneste' },
              { value: '100%', label: 'Norsk team' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div
                  style={{
                    fontFamily: "'Bricolage Grotesque', system-ui, sans-serif",
                    fontWeight: 800,
                    fontSize: '1.875rem',
                    color: '#F0F2FF',
                  }}
                >
                  {stat.value}
                </div>
                <div
                  className="font-mono text-xs tracking-wide mt-1"
                  style={{ color: '#555E99' }}
                >
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
        <span className="font-mono text-xs tracking-widest" style={{ color: '#3C4480' }}>
          SCROLL
        </span>
        <div
          className="w-px h-10"
          style={{
            background: 'linear-gradient(to bottom, rgba(60,68,128,0.8), transparent)',
          }}
        />
      </motion.div>
    </section>
  );
}
