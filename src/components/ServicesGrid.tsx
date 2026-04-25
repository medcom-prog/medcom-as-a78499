import { motion } from 'framer-motion';
import { site } from '../site.config';

export function ServicesGrid() {
  return (
    <section id="tjenester" className="bg-bg py-24 md:py-32">
      <div className="container mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16"
        >
          <div className="font-mono text-xs tracking-widest text-accent/70 uppercase mb-3">
            (01) Tjenester
          </div>
          <h2 className="font-display font-700 text-display-lg text-ink-100 max-w-xl">
            Fire ting vi gjør bra.
          </h2>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-bg-border">
          {site.services.map((service, i) => (
            <motion.div
              key={service.n}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{
                duration: 0.5,
                ease: [0.22, 1, 0.36, 1],
                delay: i * 0.08,
              }}
              whileHover={{ backgroundColor: 'rgba(24,27,46,1)' }}
              className="group relative bg-bg p-8 md:p-10 cursor-default transition-colors duration-300"
            >
              {/* Number */}
              <div className="font-mono text-5xl font-500 text-bg-border group-hover:text-accent/20 transition-colors duration-300 mb-6 leading-none select-none">
                {service.n}
              </div>

              {/* Title */}
              <h3 className="font-display font-700 text-display-sm text-ink-100 mb-3">
                {service.title}
                {service.n === '02' && (
                  <span className="ml-3 inline-flex items-center font-mono text-xs font-500 bg-accent/10 text-accent border border-accent/20 rounded-full px-2.5 py-0.5 align-middle">
                    Nytt
                  </span>
                )}
              </h3>

              {/* Lead */}
              <p className="font-sans text-ink-400 leading-relaxed mb-6 text-sm">
                {service.lead}
              </p>

              {/* Included list */}
              <ul className="space-y-2">
                {service.included.map((item) => (
                  <li key={item} className="flex items-center gap-2.5 font-sans text-sm text-ink-300">
                    <span className="flex-shrink-0 w-4 h-4 rounded-full border border-accent/30 group-hover:border-accent/60 flex items-center justify-center transition-colors duration-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent/40 group-hover:bg-accent/80 transition-colors duration-300" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>

              {/* Hover reveal CTA */}
              <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <a
                  href="#kontakt"
                  className="inline-flex items-center gap-1.5 font-mono text-xs text-accent hover:text-accent-soft"
                >
                  Les mer →
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
