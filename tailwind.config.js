/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
      },
      colors: {
        blue: '#00b4d9',
        gray: '#777',
        dark: 'rgba(0, 0, 0, 0.6)',
        light: 'rgba(0, 0, 0, 0.1)',
      },
      boxShadow: {
        small: '0 2px 92px 0 rgba(0, 0, 0, .07)',
        tg: '0 2px 32px 0 rgba(4, 123, 248,  .3)',
        popup: '0 0 10px 1px #666',
        btn: '0 0 4px 1px #eee',
        basket: '0 3px 6px rgb(4, 177, 243 / 42%)',
        dropdown: '0 6px 12px rgba(0,0,0,.18)',
        input:
          'inset 0 1px 1px rgb(0 0 0 / 8%), 0 0 8px rgb(102 175 233 / 60%)',
      },
      backgroundImage: {
        'main-bg': "url('/src/assets/facebook.jpeg')",
        glasses: "url('/src/assets/glasses.png')",
      },
      fontSize: {
        sm: '14px',
        md: '18px',
        base: '17px',
      },
      keyframes: {
        dyinglight: {
          '15%': { transform: 'scale(1.6)' },
          '50%': { transform: 'rotate(-89deg)' },
          '100%': { transform: 'rotate(-90deg)' },
        },
        shake: {
          '15%': { transform: 'translateZ(0)' },
          '10%,30%,50%,70%,90%': { transform: 'translate3d(-10px,0,0)' },
          '20%,40%,60%,80%': { transform: 'translate3d(10px,0,0)' },
        },
      },
      animation: {
        dyinglight: '1s ease infinite',
        shake: '1s ease',
      },
    },
  },
  plugins: [],
};
