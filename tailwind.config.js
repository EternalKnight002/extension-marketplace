/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{ts,tsx,js,jsx}",
    "./src/components/**/*.{ts,tsx,js,jsx}",
    "./app/**/*.{ts,tsx,js,jsx}"
  ],
  darkMode: "class",
  theme: {
    extend: {
      borderRadius: { "2xl": "1rem" },
      boxShadow: { card: "0 6px 30px rgba(2,6,23,0.12)" }
    }
  },
  plugins: []
};
