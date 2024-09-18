/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "350px",
      },
      colors: {
        primary: "#4423A9",
        secondary: "#6A44D9",
        accent: "#E3DBFA",
        dark: "#141413",
        light: "#F5F5F5",
        yellow: "#FFD62C",
      },
    },
  },
  plugins: [],
};
