import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    container: { center: true, padding: '1.5rem', screens: { '2xl': '1280px' } },
    extend: {
      colors: {
        // Dark base palette — editorial-mono dark variant
        bg: {
          DEFAULT: '#0D0F1A',
          soft: '#13162A',
          card: '#181B2E',
          border: '#252840',
        },
        ink: {
          50: '#F8F9FF',
          100: '#F0F2FF',
          200: '#D4D8F5',
          300: '#A8AFDB',
          400: '#7880B8',
          500: '#555E99',
          600: '#3C4480',
          700: '#2A3066',
          800: '#1C2052',
          900: '#0D0F1A',
        },
        accent: {
          DEFAULT: '#E8FF47',
          soft: '#F2FF85',
          muted: '#C8DF00',
        },
        // For light sections
        light: {
          bg: '#F5F7FF',
          card: '#FFFFFF',
          border: '#E2E6FF',
        },
      },
      fontFamily: {
        sans: ['"Inter Tight"', '"Inter"', 'system-ui', 'sans-serif'],
        display: ['"Bricolage Grotesque"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      fontSize: {
        'display-xl': ['clamp(2.5rem, 5.5vw, 5rem)', { lineHeight: '1.0', letterSpacing: '-0.03em' }],
        'display-lg': ['clamp(2rem, 4vw, 3.5rem)', { lineHeight: '1.05', letterSpacing: '-0.025em' }],
        'display-md': ['clamp(1.5rem, 2.8vw, 2.5rem)', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'display-sm': ['clamp(1.25rem, 2vw, 1.75rem)', { lineHeight: '1.15', letterSpacing: '-0.015em' }],
      },
      borderRadius: {
        '2xl': '1.25rem',
        '3xl': '1.75rem',
      },
      boxShadow: {
        soft: '0 1px 3px rgba(0,0,0,0.3), 0 8px 24px rgba(0,0,0,0.2)',
        glow: '0 0 40px rgba(232,255,71,0.15)',
        'glow-lg': '0 0 80px rgba(232,255,71,0.2)',
      },
      animation: {
        'ticker': 'ticker 30s linear infinite',
      },
      keyframes: {
        ticker: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
