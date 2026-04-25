import { FadeIn } from './FadeIn';

const stats = [
  { value: '48t', label: 'Responstid på hverdager' },
  { value: '100%', label: 'Norskutviklet — ingen outsourcing' },
  { value: '3 steg', label: 'Fra brief til lansering' },
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, i) => (
            <FadeIn key={stat.label} delay={i * 0.1}>
              <div
                className="flex flex-col items-center text-center"
                style={{
                  padding: '0 1.5rem',
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
                  {stat.value}
                </div>
                <div
                  className="font-mono text-xs tracking-wide leading-snug"
                  style={{ color: '#555E99', maxWidth: '150px' }}
                >
                  {stat.label}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
