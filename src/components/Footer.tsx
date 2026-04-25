import { motion } from 'framer-motion';
import { site } from '../site.config';
import { Wordmark } from './Wordmark';

export function Footer() {
  const { footer, company } = site;

  return (
    <footer className="bg-bg border-t border-bg-border pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-16">
          {/* Brand column */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="md:col-span-1"
          >
            <Wordmark variant="dark" className="mb-4" />
            <p className="font-sans text-sm text-ink-500 leading-relaxed max-w-[200px]">
              {footer.tagline}
            </p>
          </motion.div>

          {/* Link columns */}
          {footer.columns.map((col, i) => (
            <motion.div
              key={col.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1], delay: (i + 1) * 0.06 }}
            >
              <h4 className="font-mono text-xs tracking-widest text-ink-500 uppercase mb-4">
                {col.title}
              </h4>
              <ul className="space-y-2.5">
                {col.links.map(([label, href]) => (
                  <li key={label}>
                    <a
                      href={href}
                      className="font-sans text-sm text-ink-400 hover:text-ink-100 transition-colors duration-150"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-bg-border pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <span className="font-mono text-xs text-ink-600">
            {footer.status_line}
          </span>
          <div className="flex items-center gap-4">
            <span className="font-mono text-xs text-ink-600">
              {company.email}
            </span>
            <span className="font-mono text-xs text-ink-600">
              {company.phone}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
