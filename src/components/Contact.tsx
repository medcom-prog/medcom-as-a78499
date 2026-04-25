import { useState, FormEvent } from 'react';
import { motion } from 'framer-motion';
import { site } from '../site.config';

export function Contact() {
  const { contact, company } = site;
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    companyName: '',
    email: '',
    service: 'Nettside',
    message: '',
  });

  const services = ['Nettside', 'AIO — SEO', 'Meta Ads', 'Avansert webløsning', 'Annet'];

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    await new Promise((res) => setTimeout(res, 900));
    setStatus('sent');
  };

  const inputStyle = {
    background: '#0D0F1A',
    border: '1px solid #252840',
    borderRadius: '0.75rem',
    padding: '0.75rem 1rem',
    color: '#F0F2FF',
    fontFamily: "'Inter Tight', system-ui, sans-serif",
    fontSize: '0.875rem',
    width: '100%',
    outline: 'none',
  };

  return (
    <section
      id="kontakt"
      style={{
        background: '#13162A',
        borderTop: '1px solid #252840',
        padding: '6rem 0',
      }}
    >
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left — info */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <div
              className="font-mono text-xs tracking-widest uppercase mb-4"
              style={{ color: 'rgba(232,255,71,0.7)' }}
            >
              (04) Kontakt
            </div>
            <h2
              style={{
                fontFamily: "'Bricolage Grotesque', system-ui, sans-serif",
                fontWeight: 800,
                fontSize: 'clamp(2rem, 4vw, 3rem)',
                lineHeight: 1.05,
                letterSpacing: '-0.025em',
                color: '#F0F2FF',
                marginBottom: '1rem',
              }}
            >
              {contact.heading}
            </h2>
            <p
              className="font-sans leading-relaxed mb-10 text-base"
              style={{ color: '#555E99' }}
            >
              {contact.subhead}
            </p>

            {/* Contact details */}
            <div className="space-y-5">
              {[
                {
                  label: 'E-post',
                  value: company.email,
                  href: `mailto:${company.email}`,
                  icon: (
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <rect x="1.5" y="3.5" width="13" height="9" rx="1.5" stroke="#E8FF47" strokeWidth="1.3" />
                      <path d="M1.5 5.5l6.5 4 6.5-4" stroke="#E8FF47" strokeWidth="1.3" strokeLinecap="round" />
                    </svg>
                  ),
                },
                {
                  label: 'Telefon',
                  value: company.phone,
                  href: `tel:${company.phone.replace(/\s/g, '')}`,
                  icon: (
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M3 2.5a1 1 0 011-1h2.5a.5.5 0 01.5.4l.6 3a.5.5 0 01-.3.55L6 6a8.5 8.5 0 004 4l.55-1.3a.5.5 0 01.55-.3l3 .6a.5.5 0 01.4.5V12a1 1 0 01-1 1C5.716 13 3 10.284 3 7V2.5z" stroke="#E8FF47" strokeWidth="1.3" />
                    </svg>
                  ),
                },
                {
                  label: 'Åpningstider',
                  value: contact.opening_hours || '',
                  href: null,
                  icon: (
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <circle cx="8" cy="8" r="5.5" stroke="#E8FF47" strokeWidth="1.3" />
                      <path d="M8 5v3l2.5 1.5" stroke="#E8FF47" strokeWidth="1.3" strokeLinecap="round" />
                    </svg>
                  ),
                },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-4">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ border: '1px solid #252840' }}
                  >
                    {item.icon}
                  </div>
                  <div>
                    <div className="font-mono text-xs mb-0.5" style={{ color: '#555E99' }}>
                      {item.label}
                    </div>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="font-sans text-sm transition-colors"
                        style={{ color: '#D4D8F5' }}
                        onMouseEnter={(e) => {
                          (e.currentTarget as HTMLAnchorElement).style.color = '#E8FF47';
                        }}
                        onMouseLeave={(e) => {
                          (e.currentTarget as HTMLAnchorElement).style.color = '#D4D8F5';
                        }}
                      >
                        {item.value}
                      </a>
                    ) : (
                      <div className="font-sans text-sm" style={{ color: '#D4D8F5' }}>
                        {item.value}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right — form */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          >
            {status === 'sent' ? (
              <div
                className="rounded-2xl p-10 text-center"
                style={{
                  background: '#181B2E',
                  border: '1px solid rgba(232,255,71,0.2)',
                }}
              >
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4"
                  style={{
                    background: 'rgba(232,255,71,0.08)',
                    border: '1px solid rgba(232,255,71,0.3)',
                  }}
                >
                  <span style={{ color: '#E8FF47', fontSize: '1.5rem' }}>✓</span>
                </div>
                <h3
                  style={{
                    fontFamily: "'Bricolage Grotesque', system-ui, sans-serif",
                    fontWeight: 700,
                    fontSize: '1.25rem',
                    color: '#F0F2FF',
                    marginBottom: '0.5rem',
                  }}
                >
                  Melding sendt!
                </h3>
                <p className="font-sans text-sm" style={{ color: '#555E99' }}>
                  Vi svarer innen 48 timer på hverdager.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="rounded-2xl p-8 space-y-5"
                style={{ background: '#181B2E', border: '1px solid #252840' }}
              >
                {/* Name + Company */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label
                      className="font-mono text-xs tracking-wide mb-1.5 block"
                      style={{ color: '#555E99' }}
                    >
                      Navn *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      style={inputStyle}
                      placeholder="Ola Nordmann"
                    />
                  </div>
                  <div>
                    <label
                      className="font-mono text-xs tracking-wide mb-1.5 block"
                      style={{ color: '#555E99' }}
                    >
                      Bedrift
                    </label>
                    <input
                      type="text"
                      value={formData.companyName}
                      onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                      style={inputStyle}
                      placeholder="Bedrift AS"
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label
                    className="font-mono text-xs tracking-wide mb-1.5 block"
                    style={{ color: '#555E99' }}
                  >
                    E-post *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    style={inputStyle}
                    placeholder="ola@bedrift.no"
                  />
                </div>

                {/* Service selector */}
                <div>
                  <label
                    className="font-mono text-xs tracking-wide mb-1.5 block"
                    style={{ color: '#555E99' }}
                  >
                    Hva er du interessert i?
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {services.map((svc) => (
                      <button
                        key={svc}
                        type="button"
                        onClick={() => setFormData({ ...formData, service: svc })}
                        className="font-sans text-xs px-3.5 py-2 rounded-full border transition-all duration-150"
                        style={{
                          background: formData.service === svc ? 'rgba(232,255,71,0.1)' : '#0D0F1A',
                          borderColor: formData.service === svc ? 'rgba(232,255,71,0.4)' : '#252840',
                          color: formData.service === svc ? '#E8FF47' : '#555E99',
                        }}
                      >
                        {svc}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label
                    className="font-mono text-xs tracking-wide mb-1.5 block"
                    style={{ color: '#555E99' }}
                  >
                    Fortell litt om prosjektet
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    style={{ ...inputStyle, resize: 'none' }}
                    placeholder="Vi har en nettside fra 2018 som trenger en overhaling..."
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="w-full font-sans font-semibold py-4 rounded-full text-base transition-all duration-200 disabled:opacity-60"
                  style={{ background: '#E8FF47', color: '#0D0F1A' }}
                  onMouseEnter={(e) => {
                    if (status !== 'sending') {
                      (e.currentTarget as HTMLButtonElement).style.background = '#F2FF85';
                      (e.currentTarget as HTMLButtonElement).style.transform = 'scale(1.01)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.background = '#E8FF47';
                    (e.currentTarget as HTMLButtonElement).style.transform = 'scale(1)';
                  }}
                >
                  {status === 'sending' ? 'Sender...' : 'Send melding'}
                </button>

                <p className="font-mono text-xs text-center" style={{ color: '#3C4480' }}>
                  Vi svarer innen 48 timer på hverdager.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
