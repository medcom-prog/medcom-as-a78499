import { FadeIn } from './FadeIn';

const steps = [
  {
    n: '01',
    title: 'Analyse',
    desc: 'Vi kartlegger hva du trenger, hvem du prøver å nå, og hva konkurrentene dine gjør. Ingen standardpakker — bare det som fungerer for deg.',
  },
  {
    n: '02',
    title: 'Design & bygg',
    desc: 'Vi designer og bygger nettsiden din fra bunnen. Responsiv, rask og optimalisert for konvertering. Du ser og godkjenner underveis.',
  },
  {
    n: '03',
    title: 'Lansering & AIO',
    desc: 'Vi lanserer og setter opp AIO hvis du ønsker det. Etter lansering optimaliserer AI-en innholdet ditt løpende. Du fokuserer på business.',
  },
];

export function Process() {
  return (
    <section id="prosess" style={{ background: '#0D0F1A', padding: '6rem 0' }}>
      <div className="container mx-auto px-6">
        <FadeIn className="mb-16">
          <div
            className="font-mono text-xs tracking-widest uppercase mb-3"
            style={{ color: 'rgba(232,255,71,0.7)' }}
          >
            (03) Slik jobber vi
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
            Fra idé til nettside.{' '}
            <span style={{ color: '#555E99' }}>På tre steg.</span>
          </h2>
        </FadeIn>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <FadeIn key={step.n} delay={i * 0.1}>
              <div>
                {/* Number bubble */}
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mb-6"
                  style={{ border: '2px solid #252840', background: '#0D0F1A' }}
                >
                  <span
                    className="font-mono font-medium text-xl"
                    style={{ color: '#E8FF47' }}
                  >
                    {step.n}
                  </span>
                </div>

                <h3
                  style={{
                    fontFamily: "'Bricolage Grotesque', system-ui, sans-serif",
                    fontWeight: 700,
                    fontSize: '1.5rem',
                    lineHeight: 1.15,
                    letterSpacing: '-0.015em',
                    color: '#F0F2FF',
                    marginBottom: '0.75rem',
                  }}
                >
                  {step.title}
                </h3>
                <p className="font-sans text-sm leading-relaxed" style={{ color: '#6B7280' }}>
                  {step.desc}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* CTA */}
        <FadeIn delay={0.3} className="mt-12">
          <a
            href="#kontakt"
            className="inline-flex items-center gap-2 font-sans text-sm font-semibold rounded-full px-6 py-3 transition-colors duration-200"
            style={{
              color: '#E8FF47',
              border: '1px solid rgba(232,255,71,0.3)',
            }}
          >
            Book en gjennomgang
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path
                d="M2.5 7h9M8 3.5l3.5 3.5L8 10.5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </FadeIn>
      </div>
    </section>
  );
}
