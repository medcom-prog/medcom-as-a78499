import { motion, useInView } from 'framer-motion';
import { useRef, ReactNode } from 'react';

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  style?: React.CSSProperties;
  direction?: 'up' | 'left' | 'right' | 'none';
}

export function FadeIn({ children, delay = 0, className, style, direction = 'up' }: FadeInProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const getInitial = () => {
    switch (direction) {
      case 'up': return { opacity: 0, y: 24 };
      case 'left': return { opacity: 0, x: -24 };
      case 'right': return { opacity: 0, x: 24 };
      case 'none': return { opacity: 0 };
    }
  };

  const getAnimate = () => {
    switch (direction) {
      case 'up': return isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 };
      case 'left': return isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -24 };
      case 'right': return isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 24 };
      case 'none': return isInView ? { opacity: 1 } : { opacity: 0 };
    }
  };

  return (
    <motion.div
      ref={ref}
      initial={getInitial()}
      animate={getAnimate()}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay }}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  );
}
