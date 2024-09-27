/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        themify: ["Themify", "sans-serif"],
      },
      colors: {
        primarycolor: "#01B3A7",
        primarydark: "#162E44",
        secondarydark: "#11263A",
        mygray: "#F7F7F7",
        menuactivecolor: " #2E465A",
      },
      keyframes: {
        'pan-focus': {
          '0%': { backgroundPosition: '0% 30%' },    
          '50%': { backgroundPosition: '50% 100%' },  
          '100%': { backgroundPosition: '0% 30%' },  
        },
      },
      animation: {
        'slow-pan-focus': 'pan-focus 60s linear infinite', 
      },
    },
  },
  plugins: [],
};
