import { useState, FormEvent } from 'react';
import { motion } from 'framer-motion';
import { site } from '../site.config';

export function Contact() {
  const { contact, company } = site;
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    service: 'Nettside',
    message: '',
  });

  const services = ['Nettside', 'AIO — SEO', 'Meta Ads', 'Avansert webløsning', 'Annet'];

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    // Simulate form submission
    await new Promise((res) => setTimeout(res, 900));
    setStatus('sent');
  };

  return (
    <section id="kontakt" className="bg-bg-soft border-t border-bg-border py-24 md:py-32">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left — info */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="font-mono text-xs tracking-widest text-accent/70 uppercase mb-4">
              (04) Kontakt
            </div>
            <h2 className="font-display font-700 text-display-lg text-ink-100 mb-4">
              {contact.heading}
            </h2>
            <p className="font-sans text-ink-400 leading-relaxed mb-10 text-base">
              {contact.subhead}
            </p>

            {/* Contact details */}
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full border border-bg-border flex items-center justify-center flex-shrink-0">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M2 4a2 2 0 012-2h8a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V4zm2 0l4 3 4-3" stroke="#E8FF47" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div>
                  <div className="font-mono text-xs text-ink-500 mb-0.5">E-post</div>
                  <a
                    href={`mailto:${company.email}`}
                    className="font-sans text-sm text-ink-200 hover:text-accent transition-colors"
                  >
                    {company.email}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full border border-bg-border flex items-center justify-center flex-shrink-0">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M2.5 3.5a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 01-1 1H4a6 6 0 005 5v-1.5a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 01-1 1A11 11 0 012.5 3.5z" stroke="#E8FF47" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div>
                  <div className="font-mono text-xs text-ink-500 mb-0.5">Telefon</div>
                  <a
                    href={`tel:${company.phone.replace(/\s/g, '')}`}
                    className="font-sans text-sm text-ink-200 hover:text-accent transition-colors"
                  >
                    {company.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full border border-bg-border flex items-center justify-center flex-shrink-0">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <circle cx="8" cy="8" r="5.5" stroke="#E8FF47" strokeWidth="1.2" />
                    <path d="M8 5v3l2 2" stroke="#E8FF47" strokeWidth="1.2" strokeLinecap="round" />
                  </svg>
                </div>
                <div>
                  <div className="font-mono text-xs text-ink-500 mb-0.5">Åpningstider</div>
                  <div className="font-sans text-sm text-ink-200">{contact.opening_hours}</div>
                </div>
              </div>

              {contact.service_area && (
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full border border-bg-border flex items-center justify-center flex-shrink-0">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M8 1.5C5.51 1.5 3.5 3.51 3.5 6c0 3.75 4.5 8.5 4.5 8.5s4.5-4.75 4.5-8.5c0-2.49-2.01-4.5-4.5-4.5zm0 6a1.5 1.5 0 110-3 1.5 1.5 0 010 3z" stroke="#E8FF47" strokeWidth="1.2" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-mono text-xs text-ink-500 mb-0.5">Dekningsområde</div>
                    <div className="font-sans text-sm text-ink-200">{contact.service_area}</div>
                  </div>
                </div>
              )}
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
              <div className="bg-bg-card border border-accent/20 rounded-2xl p-10 text-center">
                <div className="w-14 h-14 rounded-full bg-accent/10 border border-accent/30 flex items-center justify-center mx-auto mb-4">
                  <span className="text-accent text-2xl">✓</span>
                </div>
                <h3 className="font-display font-700 text-xl text-ink-100 mb-2">Melding sendt!</h3>
                <p className="font-sans text-sm text-ink-400">
                  Vi svarer innen 48 timer på hverdager. Vi gleder oss til å høre mer om prosjektet ditt.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-bg-card border border-bg-border rounded-2xl p-8 space-y-5"
              >
                {/* Name + Company */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="font-mono text-xs text-ink-500 tracking-wide mb-1.5 block">
                      Navn *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-bg border border-bg-border rounded-xl px-4 py-3 font-sans text-sm text-ink-200 placeholder-ink-600 focus:outline-none focus:border-accent/40 transition-colors"
                      placeholder="Ola Nordmann"
                    />
                  </div>
                  <div>
                    <label className="font-mono text-xs text-ink-500 tracking-wide mb-1.5 block">
                      Bedrift
                    </label>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full bg-bg border border-bg-border rounded-xl px-4 py-3 font-sans text-sm text-ink-200 placeholder-ink-600 focus:outline-none focus:border-accent/40 transition-colors"
                      placeholder="Bedrift AS"
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label className="font-mono text-xs text-ink-500 tracking-wide mb-1.5 block">
                    E-post *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-bg border border-bg-border rounded-xl px-4 py-3 font-sans text-sm text-ink-200 placeholder-ink-600 focus:outline-none focus:border-accent/40 transition-colors"
                    placeholder="ola@bedrift.no"
                  />
                </div>

                {/* Service selector */}
                <div>
                  <label className="font-mono text-xs text-ink-500 tracking-wide mb-1.5 block">
                    Hva er du interessert i?
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {services.map((svc) => (
                      <button
                        key={svc}
                        type="button"
                        onClick={() => setFormData({ ...formData, service: svc })}
                        className={`font-sans text-xs px-3.5 py-2 rounded-full border transition-all duration-150 ${
                          formData.service === svc
                            ? 'bg-accent/10 border-accent/40 text-accent'
                            : 'bg-bg border-bg-border text-ink-400 hover:border-ink-600'
                        }`}
                      >
                        {svc}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="font-mono text-xs text-ink-500 tracking-wide mb-1.5 block">
                    Fortell litt om prosjektet
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-bg border border-bg-border rounded-xl px-4 py-3 font-sans text-sm text-ink-200 placeholder-ink-600 focus:outline-none focus:border-accent/40 transition-colors resize-none"
                    placeholder="Vi har en nettside fra 2018 som trenger en overhaling..."
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="w-full bg-accent text-bg font-sans font-600 py-4 rounded-full text-base hover:bg-accent-soft transition-all duration-200 hover:scale-[1.01] disabled:opacity-60 disabled:scale-100"
                >
                  {status === 'sending' ? 'Sender...' : 'Send melding'}
                </button>

                <p className="font-mono text-xs text-ink-600 text-center">
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
