/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        void: {
          DEFAULT: "#08080A",
          soft: "#101012",
          card: "#131311",
          line: "#2A2620",
        },
        cream: {
          DEFAULT: "#F2ECDD",
          dim: "#C9C2AF",
        },
        gold: {
          DEFAULT: "#C9A662",
          soft: "#E4CE97",
          deep: "#8A6E36",
        },
        muted: "#7A7568",
      },
      fontFamily: {
        display: ["Bebas Neue", "sans-serif"],
        signature: ["Allura", "cursive"],
        body: ["Montserrat", "sans-serif"],
        mono: ["IBM Plex Mono", "monospace"],
      },
      letterSpacing: {
        widest2: "0.28em",
        widest3: "0.35em",
      },
      backgroundImage: {
        "gold-gradient": "linear-gradient(180deg, #F2E4BC 0%, #D8B876 40%, #9C7B3E 100%)",
      },
    },
  },
  plugins: [],
}
