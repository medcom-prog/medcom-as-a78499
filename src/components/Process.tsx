import { motion } from 'framer-motion';

const steps = [
  {
    n: '01',
    title: 'Analyse',
    desc: 'Vi kartlegger hva du trenger, hvem du prøver å nå, og hva konkurrentene dine gjør. Ingen standardpakker — bare det som fungerer for deg.',
  },
  {
    n: '02',
    title: 'Design & bygg',
    desc: 'Vi designer og bygger nettsiden din fra bunnen. Responsiv, rask og optimalisert for konvertering. Du ser og godkjenner undervies.',
  },
  {
    n: '03',
    title: 'Lansering & AIO',
    desc: 'Vi lanserer og setter opp AIO hvis du ønsker det. Etter lansering optimaliserer AI-en innholdet ditt løpende. Du fokuserer på business.',
  },
];

export function Process() {
  return (
    <section id="prosess" className="bg-bg py-24 md:py-32">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16"
        >
          <div className="font-mono text-xs tracking-widest text-accent/70 uppercase mb-3">
            (03) Slik jobber vi
          </div>
          <h2 className="font-display font-700 text-display-lg text-ink-100">
            Fra idé til nettside.
            <br />
            <span className="text-ink-400">På tre steg.</span>
          </h2>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Connector line */}
          <div className="hidden md:block absolute top-8 left-0 right-0 h-px bg-bg-border" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0">
            {steps.map((step, i) => (
              <motion.div
                key={step.n}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{
                  duration: 0.5,
                  ease: [0.22, 1, 0.36, 1],
                  delay: i * 0.1,
                }}
                className="relative md:pr-8"
              >
                {/* Number bubble */}
                <div className="relative z-10 w-16 h-16 rounded-full bg-bg border-2 border-bg-border flex items-center justify-center mb-6 group-hover:border-accent transition-colors">
                  <span className="font-mono font-500 text-xl text-ink-100">{step.n}</span>
                </div>

                <h3 className="font-display font-700 text-display-sm text-ink-100 mb-3">
                  {step.title}
                </h3>
                <p className="font-sans text-sm text-ink-400 leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
          className="mt-12"
        >
          <a
            href="#kontakt"
            className="inline-flex items-center gap-2 font-sans text-sm font-600 text-accent border border-accent/30 rounded-full px-6 py-3 hover:bg-accent/5 transition-colors duration-200"
          >
            Book en gjennomgang
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M2.5 7h9M8 3.5l3.5 3.5L8 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
