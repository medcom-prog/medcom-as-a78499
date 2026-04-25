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

  const navStyle = {
    position: 'fixed' as const,
    top: 0,
    left: 0,
    right: 0,
    zIndex: 50,
    transition: 'all 0.3s ease',
    background: scrolled ? 'rgba(13,15,26,0.92)' : 'transparent',
    backdropFilter: scrolled ? 'blur(12px)' : 'none',
    borderBottom: scrolled ? '1px solid #252840' : '1px solid transparent',
  };

  return (
    <>
      <motion.header
        initial={{ y: -16, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        style={navStyle}
      >
        <div
          className="container mx-auto px-6 flex items-center justify-between"
          style={{ height: '4rem' }}
        >
          <Wordmark variant="dark" />

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-sans text-sm font-medium transition-colors duration-200"
                style={{ color: '#7880B8' }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.color = '#F0F2FF';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.color = '#7880B8';
                }}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center">
            <a
              href="#kontakt"
              className="inline-flex items-center gap-2 font-sans font-semibold text-sm px-5 py-2 rounded-full transition-all duration-200"
              style={{ background: '#E8FF47', color: '#0D0F1A' }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.background = '#F2FF85';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.background = '#E8FF47';
              }}
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
              className="block w-5 h-0.5 transition-all duration-300"
              style={{
                background: '#F0F2FF',
                transform: menuOpen ? 'rotate(45deg) translate(2px, 8px)' : 'none',
              }}
            />
            <span
              className="block w-5 h-0.5 transition-all duration-300"
              style={{
                background: '#F0F2FF',
                opacity: menuOpen ? 0 : 1,
              }}
            />
            <span
              className="block w-5 h-0.5 transition-all duration-300"
              style={{
                background: '#F0F2FF',
                transform: menuOpen ? 'rotate(-45deg) translate(2px, -8px)' : 'none',
              }}
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
            style={{
              position: 'fixed',
              top: '4rem',
              left: 0,
              right: 0,
              zIndex: 40,
              background: '#0D0F1A',
              borderBottom: '1px solid #252840',
            }}
          >
            <nav className="container mx-auto px-6 py-6 flex flex-col gap-4">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="font-sans text-base font-medium py-2 transition-colors"
                  style={{ color: '#D4D8F5' }}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#kontakt"
                className="inline-flex items-center justify-center font-sans font-semibold text-sm px-5 py-3 rounded-full mt-2"
                style={{ background: '#E8FF47', color: '#0D0F1A' }}
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
