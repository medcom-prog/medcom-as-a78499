import { motion } from 'framer-motion';
import { site } from '../site.config';
import { Wordmark } from './Wordmark';

export function Footer() {
  const { footer, company } = site;

  return (
    <footer
      style={{
        background: '#0D0F1A',
        borderTop: '1px solid #252840',
        paddingTop: '4rem',
        paddingBottom: '2rem',
      }}
    >
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand column */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="md:col-span-1"
          >
            <Wordmark variant="dark" className="mb-4" />
            <p
              className="font-sans text-sm leading-relaxed"
              style={{ color: '#555E99', maxWidth: '200px' }}
            >
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
              <h4
                className="font-mono text-xs tracking-widest uppercase mb-4"
                style={{ color: '#555E99' }}
              >
                {col.title}
              </h4>
              <ul className="space-y-2.5">
                {col.links.map(([label, href]) => (
                  <li key={label}>
                    <a
                      href={href}
                      className="font-sans text-sm transition-colors duration-150"
                      style={{ color: '#7880B8' }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLAnchorElement).style.color = '#F0F2FF';
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLAnchorElement).style.color = '#7880B8';
                      }}
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
        <div
          className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3"
          style={{ borderTop: '1px solid #252840' }}
        >
          <span className="font-mono text-xs" style={{ color: '#3C4480' }}>
            {footer.status_line}
          </span>
          <div className="flex items-center gap-4">
            <span className="font-mono text-xs" style={{ color: '#3C4480' }}>
              {company.email}
            </span>
            <span className="font-mono text-xs" style={{ color: '#3C4480' }}>
              {company.phone}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
