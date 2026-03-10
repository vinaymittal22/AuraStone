/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ivory: "#f8f5ef",
        champagne: "#e7d7be",
        sand: "#d7c5aa",
        ink: "#131313",
        gold: "#b99256",
        bronze: "#8a6b3f",
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', "serif"],
        sans: ['"Manrope"', "sans-serif"],
      },
      boxShadow: {
        glow: "0 25px 60px -30px rgba(185, 146, 86, 0.45)",
        soft: "0 24px 80px -38px rgba(19, 19, 19, 0.28)",
      },
      backgroundImage: {
        "hero-overlay":
          "linear-gradient(90deg, rgba(10,10,10,0.72) 5%, rgba(10,10,10,0.42) 40%, rgba(10,10,10,0.18) 100%)",
        "gold-fade":
          "radial-gradient(circle at top, rgba(185,146,86,0.22), rgba(185,146,86,0) 55%)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
        },
        rise: {
          "0%": { opacity: "0", transform: "translateY(28px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        rise: "rise 900ms ease-out both",
        shimmer: "shimmer 5s linear infinite",
      },
      letterSpacing: {
        luxe: "0.32em",
      },
    },
  },
  plugins: [],
};