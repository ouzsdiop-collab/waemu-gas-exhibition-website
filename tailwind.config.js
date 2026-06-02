/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1.25rem',
        sm: '1.5rem',
        lg: '2rem',
        xl: '2.5rem',
      },
      screens: {
        '2xl': '1180px',
      },
    },
    extend: {
      colors: {
        ivory: '#F7F3EA',
        ivorySoft: '#FBF8F1',
        petrol: '#0B2A33',
        petrolLight: '#143F4A',
        energyGreen: '#1E8F6A',
        energyGreenSoft: '#DDF3EA',
        institutionalGold: '#C9A24A',
        goldSoft: '#F4E7BE',
        slateText: '#475569',
        mutedText: '#64748B',
        borderSoft: 'rgba(11, 42, 51, 0.12)',
        cardWhite: '#FFFDF7',
        danger: '#B42318',
        success: '#15803D',
      },
      fontFamily: {
        display: ['Georgia', 'Times New Roman', 'serif'],
        body: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
      },
      boxShadow: {
        premium: '0 22px 60px rgba(11, 42, 51, 0.10)',
        soft: '0 14px 40px rgba(11, 42, 51, 0.08)',
        insetGold: 'inset 0 1px 0 rgba(201, 162, 74, 0.24)',
      },
      borderRadius: {
        premium: '1.5rem',
        card: '1.25rem',
        button: '999px',
      },
      spacing: {
        section: 'clamp(4rem, 8vw, 7.5rem)',
      },
    },
  },
  plugins: [],
}
