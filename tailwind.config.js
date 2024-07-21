/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      backgroundImage: {},
    },
    fontFamily: {
      "firacode-light": ["firacode-light", "sans-serif"],
      "firacode-regular": ["firacode-regular", "sans-serif"],
      "firacode-bold": ["firacode-bold", "sans-serif"],
      "firacode-medium": ["firacode-medium", "sans-serif"],
    },
  },
  plugins: [],
}
