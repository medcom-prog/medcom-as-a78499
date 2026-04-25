import { FadeIn } from './FadeIn';
import { site } from '../site.config';
import { motion } from 'framer-motion';

const accentColors = ['#E8FF47', '#A78BFA', '#38BDF8', '#34D399'];

export function ServicesGrid() {
  return (
    <section id="tjenester" style={{ background: '#0D0F1A', padding: '6rem 0' }}>
      <div className="container mx-auto px-6">
        {/* Section header */}
        <FadeIn className="mb-16">
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
        </FadeIn>

        {/* Grid */}
        <div
          className="grid grid-cols-1 md:grid-cols-2"
          style={{ gap: '1px', background: '#252840' }}
        >
          {site.services.map((service, i) => (
            <FadeIn key={service.n} delay={i * 0.08}>
              <motion.div
                whileHover={{
                  backgroundColor: 'rgba(24,27,46,0.9)',
                  boxShadow: `inset 0 0 0 1px ${accentColors[i]}22`,
                }}
                className="group cursor-default h-full"
                style={{
                  background: '#0D0F1A',
                  padding: '2.5rem',
                  minHeight: '300px',
                  transition: 'background 0.2s ease',
                }}
              >
                {/* Number + accent bar */}
                <div className="flex items-start justify-between mb-6">
                  <div
                    className="font-mono font-medium leading-none select-none"
                    style={{
                      fontSize: '3rem',
                      color: accentColors[i],
                      opacity: 0.25,
                    }}
                  >
                    {service.n}
                  </div>
                  {service.n === '02' && (
                    <span
                      className="font-mono text-xs font-medium px-2.5 py-1 rounded-full border"
                      style={{
                        background: 'rgba(232,255,71,0.08)',
                        color: '#E8FF47',
                        borderColor: 'rgba(232,255,71,0.3)',
                      }}
                    >
                      Ny tjeneste
                    </span>
                  )}
                </div>

                {/* Title */}
                <h3
                  style={{
                    fontFamily: "'Bricolage Grotesque', system-ui, sans-serif",
                    fontWeight: 700,
                    fontSize: '1.375rem',
                    lineHeight: 1.2,
                    letterSpacing: '-0.015em',
                    color: '#F0F2FF',
                    marginBottom: '0.75rem',
                  }}
                >
                  {service.title}
                </h3>

                {/* Lead */}
                <p
                  className="font-sans text-sm leading-relaxed mb-6"
                  style={{ color: '#7880B8', lineHeight: 1.65 }}
                >
                  {service.lead}
                </p>

                {/* Included list */}
                <ul className="space-y-2.5">
                  {service.included.map((item) => (
                    <li key={item} className="flex items-center gap-3 font-sans" style={{ color: '#A8AFDB', fontSize: '0.875rem' }}>
                      <span
                        className="flex-shrink-0 w-4 h-4 rounded-full flex items-center justify-center"
                        style={{
                          border: `1px solid ${accentColors[i]}44`,
                        }}
                      >
                        <span
                          className="w-1.5 h-1.5 rounded-full"
                          style={{ background: `${accentColors[i]}66` }}
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
                    style={{ color: accentColors[i] }}
                  >
                    Book en prat →
                  </a>
                </div>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
