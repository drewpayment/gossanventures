import type { Config } from 'tailwindcss'

/**
 * Tailwind is scoped to the marketing frontend only so it never interferes
 * with the Payload admin UI (which ships its own styles).
 */
const config: Config = {
  content: [
    './src/app/(frontend)/**/*.{ts,tsx}',
    './src/components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Brand palette derived from the Gossan Ventures logo.
        teal: {
          DEFAULT: '#1C5F6E', // primary — wordmark / buttons / nav
          50: '#EFF6F7',
          100: '#D6E9EB',
          200: '#Acd4d8',
          300: '#7FBAC0',
          400: '#4E97A0',
          500: '#2E7A85',
          600: '#1C5F6E',
          700: '#174C58',
          800: '#143C44',
          900: '#102F36',
        },
        ink: '#102F36', // deepest pine — primary text
        seafoam: {
          DEFAULT: '#9FD0CE',
          light: '#C7E5E3',
          soft: '#E4F2F1',
        },
        sand: {
          DEFAULT: '#F1E7CB',
          light: '#F7F0DC',
          deep: '#E6D7AE',
        },
        sunrise: '#EAD78A',
        cloud: '#FBFAF6', // off-white page base
      },
      fontFamily: {
        display: ['var(--font-display)', 'Georgia', 'serif'],
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        container: '80rem',
      },
      boxShadow: {
        card: '0 1px 2px rgba(16,47,54,0.04), 0 12px 32px -12px rgba(16,47,54,0.18)',
        lift: '0 24px 60px -24px rgba(16,47,54,0.35)',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.7s cubic-bezier(0.21,0.61,0.35,1) both',
      },
    },
  },
  plugins: [],
}

export default config
