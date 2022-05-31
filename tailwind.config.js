module.exports = {
  content: [
    "./pages/**/*.tsx",
    "./page-sections/**/*.tsx",
    "./components/**/*.tsx",
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          700: "#111313",
          600: "#161A1A",
          500: "#303033",
          400: "#3A3A3D",
          300: "#424346",
          200: "#99999F",
          100: "#D5D5D5",
        },
        transparent: "transparent",
        current: "current",
      },
      backgroundImage: {
        landing: "url('/background/landing.svg')",
      },
      spacing: {
        "50vh": "50vh",
        "85vh": "85vh",
      },
    },
    colors: {
      white: "#FFFFFF",
      primary: {
        100: "#F8FCFF",
        200: "#2DCEEF",
        400: "#2D9BEF",
      },
      secondary: "#9B2DEF",
      facebook: "#4267B2",
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
