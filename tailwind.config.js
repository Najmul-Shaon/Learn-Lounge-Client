/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        lato: ["Lato", "serif"],
        pacifico: ["Pacifico", "serif"],
      },
      colors: {
        primary: "#2E3A8C",
        secondary: "#F5F5DC",
        accent: "#FFD700",
        text: "#111827",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light", "dark"],
  },
};
