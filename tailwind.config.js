/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        main: "#212529",
        secondary: "#343a40",
        primary: "#f8f9fa",
        overly: "rgba(0,0,0,0.75)",
        // main: "#fff05a",
      },
    },
  },
  plugins: [],
};
