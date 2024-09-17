/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        themify: ["Themify", "sans-serif"],
      },
      colors: {
        primarycolor: "#FF817E",
        secondarycolor: "#FFF9F8",
        mainbg: "#FBF5ED",
      },
    },
  },
  plugins: [],
};
