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
      transitionTimingFunction: {
        "minor-spring": "cubic-bezier(0.18,0.89,0.82,1.04)",
      },
      backgroundImage: {},
    },
    fontFamily: {
      "firacode-light": ["firacode-light", "sans-serif"],
      "firacode-regular": ["firacode-regular", "sans-serif"],
      "firacode-bold": ["firacode-bold", "sans-serif"],
      "firacode-medium": ["firacode-medium", "sans-serif"],
    },
    animation: {
      rotate: "rotate 10s linear infinite",
    },
    keyframes: {
      rotate: {
        "0%": { transform: "rotate(0deg) scale(10)" },
        "100%": { transform: "rotate(-360deg) scale(10)" },
      },
      "reveal-up": {
        "0%": { opacity: "0", transform: "translateY(80%)" },
        "100%": { opacity: "1", transform: "translateY(0)" },
      },
      "reveal-down": {
        "0%": { opacity: "0", transform: "translateY(-80%)" },
        "100%": { opacity: "1", transform: "translateY(0)" },
      },
      "content-blur": {
        "0%": { filter: "blur(0.3rem)" },
        "100%": { filter: "blur(0)" },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
