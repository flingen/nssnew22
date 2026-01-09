/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'deep-navy': '#0a1628',
        'navy-surface': '#0f172a',
        'navy-light': '#1e293b',
        'royal-blue': '#1e3a8a',
        'electric-blue': '#3b82f6',
        'cyan': '#06b6d4',
        'dark-teal': '#0d9488',
        'teal': '#14b8a6',
        'teal-dark': '#115e59',
        'nigeria-green': '#00A859',
        'green-light': '#10b981',
        'purple': '#7c3aed',
        'purple-light': '#a78bfa',
        'fintech-gold': '#FFD700',
        'gold-dark': '#f59e0b',
        'text-grey': '#94a3b8',
        'text-light': '#cbd5e1',
        'light-bg': '#f8fafc',
      },
      fontFamily: {
        satoshi: ['Plus Jakarta Sans', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, rgba(10, 22, 40, 0.9) 0%, rgba(30, 58, 138, 0.7) 30%, rgba(124, 58, 237, 0.5) 60%, rgba(10, 22, 40, 0.95) 100%)',
        'energy-gradient': 'linear-gradient(135deg, #00A859 0%, #10b981 100%)',
        'blue-purple-gradient': 'linear-gradient(135deg, #1e40af 0%, #7c3aed 100%)',
        'gold-gradient': 'linear-gradient(135deg, #FFD700 0%, #f59e0b 100%)',
        'green-gradient': 'linear-gradient(135deg, #00A859 0%, #059669 100%)',
        'rich-gradient': 'linear-gradient(135deg, #0a1628 0%, #1e3a8a 25%, #7c3aed 50%, #1e3a8a 75%, #0a1628 100%)',
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'glow-pulse': 'glowPulse 3s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'slide-right': 'slideRight 30s linear infinite',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        glowPulse: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(0, 168, 89, 0.3)' },
          '50%': { boxShadow: '0 0 40px rgba(0, 168, 89, 0.6)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        slideRight: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      boxShadow: {
        'glow-green': '0 0 30px rgba(0, 168, 89, 0.3)',
        'glow-gold': '0 0 30px rgba(255, 215, 0, 0.4)',
        'glow-blue': '0 0 30px rgba(59, 130, 246, 0.3)',
      },
    },
  },
  plugins: [],
};
