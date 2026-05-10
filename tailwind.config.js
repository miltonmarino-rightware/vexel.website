/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        vexel: {
          bg: '#05070D',
          night: '#090D16',
          panel: '#101623',
          ice: '#F4F7FB',
          muted: '#AAB6C8',
          silver: '#BFC7D5',
          blue: '#5B8CFF',
          violet: '#8A6CFF',
          cyan: '#8EDBFF',
        },
      },
      boxShadow: {
        glow: '0 0 60px rgba(91, 140, 255, 0.22)',
        panel: '0 24px 90px rgba(0, 0, 0, 0.55)',
      },
      backgroundImage: {
        'vexel-radial': 'radial-gradient(circle at 20% 20%, rgba(91,140,255,.22), transparent 32%), radial-gradient(circle at 80% 30%, rgba(138,108,255,.16), transparent 28%), linear-gradient(180deg, #05070D 0%, #090D16 100%)',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
