/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        swiftBlue: "#1A3C6E",
        swiftTeal: "#0F9E7B",
        swiftAmber: "#E8A020",
        swiftWhite: "#FAF9F7",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
}

