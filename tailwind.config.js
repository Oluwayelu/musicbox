module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        gray: {
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
        "landing-1": "url('/background/landing.svg')",
        listen: "url('/background/listen.svg')",
      },
    },
    colors: {
      white: "#FFFFFF",
      primary: "#2D9BEF",
      secondary: "#9B2DEF",
      primaryLight: "#2DCEEF",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
