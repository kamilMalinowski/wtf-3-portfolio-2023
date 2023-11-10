module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {

    extend: {
      fontFamily: {
        dmsans: ["DM Sans", "sans-serif"],
      },
      colors: {
        gradientfrom: "rgba(255, 255, 255, 0.10)",
        gradientto: "rgba(255, 255, 255, 0.04)",
        primary: "#CEFF7E",
        mygray: {
          400: "#9CA3AF",
          500: "#676B73",
          700: "#1F2937",
          900: "#020916",
        },
      },
      borderRadius: {
        custom: "1.25rem",
      },
      boxShadow: {
        card: "0px 2px 0px  rgba(255, 255, 255, 0.15) inset",
      },
    },
  },
  plugins: [],
};
