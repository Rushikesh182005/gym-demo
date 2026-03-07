/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "system-ui", "sans-serif"]
      },
      colors: {
        iron: {
          900: "#050509",
          800: "#0b0b15",
          700: "#111122",
          600: "#1a1a33",
          500: "#ff4b36"
        }
      },
      boxShadow: {
        "glow-red": "0 0 30px rgba(255, 75, 54, 0.5)"
      }
    }
  },
  plugins: []
};


