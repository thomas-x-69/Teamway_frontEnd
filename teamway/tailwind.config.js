module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
      tablet: "768px",
      desktop: "1280px",
    },
    extend: {
      scrollbarTrack: {
        lighter: "#F5F5F5",
        light: "#E5E5E5",
        normal: "#D4D4D4",
      },
      scrollbarThumb: {
        lighter: "#CCCCCC",
        light: "#B3B3B3",
        normal: "#888888",
        dark: "#737373",
      },
      colors: {
        // primary: "#1F94C4",
        primary: "#6538EB",
        secondary: "#38AAB1",
        paragraph: "#919191",
        "gray-light": "#F8FAFC",
        "gray-dark": "#4B5563",
      },
      fontFamily: {
        arabic: ["Alexandria", "sans-serif"],
      },
      boxShadow: {
        custom:
          "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
      },
      animation: {
        scroll: "scroll 40s linear infinite",
      },
      keyframes: {
        scroll: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-66.66%)" },
        },
      },
    },
  },
  plugins: [require("./src/components/scrollbarPlugin")],
};
