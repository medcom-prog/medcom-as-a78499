'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Wordmark } from './Wordmark';

const links = [
  { label: 'Tjenester', href: '#tjenester' },
  { label: 'AIO', href: '#aio' },
  { label: 'Prosess', href: '#prosess' },
  { label: 'Kontakt', href: '#kontakt' },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 32);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -16, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-bg/90 backdrop-blur-md border-b border-bg-border'
            : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-6 h-16 flex items-center justify-between">
          <Wordmark variant="dark" />

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-sans text-sm font-medium text-ink-300 hover:text-ink-100 transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a
              href="#kontakt"
              className="inline-flex items-center gap-2 bg-accent text-bg px-5 py-2 rounded-full font-sans font-600 text-sm hover:bg-accent-soft transition-colors duration-200"
            >
              Få et tilbud
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Lukk meny' : 'Åpne meny'}
          >
            <span
              className={`block w-5 h-0.5 bg-ink-100 transition-all duration-300 ${
                menuOpen ? 'rotate-45 translate-y-2' : ''
              }`}
            />
            <span
              className={`block w-5 h-0.5 bg-ink-100 transition-all duration-300 ${
                menuOpen ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`block w-5 h-0.5 bg-ink-100 transition-all duration-300 ${
                menuOpen ? '-rotate-45 -translate-y-2' : ''
              }`}
            />
          </button>
        </div>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="fixed top-16 left-0 right-0 z-40 bg-bg border-b border-bg-border md:hidden"
          >
            <nav className="container mx-auto px-6 py-6 flex flex-col gap-4">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="font-sans text-base font-medium text-ink-200 hover:text-accent transition-colors py-2"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#kontakt"
                className="inline-flex items-center justify-center bg-accent text-bg px-5 py-3 rounded-full font-sans font-600 text-sm mt-2"
                onClick={() => setMenuOpen(false)}
              >
                Få et tilbud
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
