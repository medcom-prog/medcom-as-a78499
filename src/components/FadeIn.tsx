import { ReactNode } from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  style?: React.CSSProperties;
  direction?: 'up' | 'left' | 'right' | 'none';
}

/**
 * FadeIn — render children always visible,
 * but animate a subtle Y-translate on scroll-into-view.
 * No opacity: 0 start — content is ALWAYS readable.
 */
export function FadeIn({ children, delay = 0, className, style, direction = 'up' }: FadeInProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0 });

  const yFrom = direction === 'up' ? 16 : 0;
  const xFrom = direction === 'left' ? -16 : direction === 'right' ? 16 : 0;

  return (
    <motion.div
      ref={ref}
      // Always start visible — just shift position slightly
      initial={{ y: yFrom, x: xFrom }}
      animate={{
        y: isInView ? 0 : yFrom,
        x: isInView ? 0 : xFrom,
      }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1], delay }}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  );
}
