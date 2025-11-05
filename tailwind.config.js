/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'mint-green': '#3FE1B2',
        'light-green': '#A8E47F',
        'soft-cyan': '#6FE7E4',
        'golden-yellow': '#FFD54A',
        'pure-white': '#FFFFFF',
      },
      fontFamily: {
        sans: ['Poppins', 'Inter', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-diagonal': 'linear-gradient(135deg, #3FE1B2 0%, #6FE7E4 50%, #FFD54A 100%)',
        'gradient-reverse': 'linear-gradient(135deg, #FFD54A 0%, #6FE7E4 50%, #3FE1B2 100%)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-in-out',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
}
