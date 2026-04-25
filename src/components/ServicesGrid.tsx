import { motion } from 'framer-motion';
import { site } from '../site.config';

export function ServicesGrid() {
  return (
    <section id="tjenester" style={{ background: '#0D0F1A', padding: '6rem 0' }}>
      <div className="container mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16"
        >
          <div
            className="font-mono text-xs tracking-widest uppercase mb-3"
            style={{ color: 'rgba(232,255,71,0.7)' }}
          >
            (01) Tjenester
          </div>
          <h2
            style={{
              fontFamily: "'Bricolage Grotesque', system-ui, sans-serif",
              fontWeight: 800,
              fontSize: 'clamp(2rem, 4vw, 3.5rem)',
              lineHeight: 1.05,
              letterSpacing: '-0.025em',
              color: '#F0F2FF',
            }}
          >
            Fire ting vi gjør bra.
          </h2>
        </motion.div>

        {/* Grid */}
        <div
          className="grid grid-cols-1 md:grid-cols-2"
          style={{ gap: '1px', background: '#252840' }}
        >
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
              className="group relative cursor-default"
              style={{ background: '#0D0F1A', padding: '2.5rem' }}
            >
              {/* Number */}
              <div
                className="font-mono font-medium mb-6 leading-none select-none transition-colors duration-300"
                style={{ fontSize: '3.5rem', color: '#1C2052' }}
              >
                {service.n}
              </div>

              {/* Title */}
              <div className="flex items-center gap-3 mb-3">
                <h3
                  style={{
                    fontFamily: "'Bricolage Grotesque', system-ui, sans-serif",
                    fontWeight: 700,
                    fontSize: 'clamp(1.25rem, 2vw, 1.75rem)',
                    lineHeight: 1.15,
                    letterSpacing: '-0.015em',
                    color: '#F0F2FF',
                  }}
                >
                  {service.title}
                </h3>
                {service.n === '02' && (
                  <span
                    className="font-mono text-xs font-medium px-2.5 py-0.5 rounded-full border"
                    style={{
                      background: 'rgba(232,255,71,0.08)',
                      color: '#E8FF47',
                      borderColor: 'rgba(232,255,71,0.25)',
                    }}
                  >
                    Nytt
                  </span>
                )}
              </div>

              {/* Lead */}
              <p className="font-sans text-sm leading-relaxed mb-6" style={{ color: '#555E99' }}>
                {service.lead}
              </p>

              {/* Included list */}
              <ul className="space-y-2">
                {service.included.map((item) => (
                  <li key={item} className="flex items-center gap-2.5 font-sans text-sm" style={{ color: '#A8AFDB' }}>
                    <span
                      className="flex-shrink-0 w-4 h-4 rounded-full border flex items-center justify-center"
                      style={{ borderColor: 'rgba(232,255,71,0.25)' }}
                    >
                      <span
                        className="w-1.5 h-1.5 rounded-full"
                        style={{ background: 'rgba(232,255,71,0.5)' }}
                      />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>

              {/* Hover reveal CTA */}
              <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <a
                  href="#kontakt"
                  className="font-mono text-xs"
                  style={{ color: '#E8FF47' }}
                >
                  Book en prat →
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
