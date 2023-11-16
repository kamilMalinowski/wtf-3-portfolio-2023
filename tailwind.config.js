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
        primary: "#7EFFD1",
        mygray: {
          500: "#676B73",
          900: "#020916",
        },
      },
      borderRadius: {
        custom: "1.25rem",
      },
      boxShadow: {
        card: "0px 2px 0px  rgba(255, 255, 255, 0.15) inset",
        images: "0px 0px 20px 0px #7EFFD1 inset;",
      },
      animation:{
        'logo-spin': 'logoSpin 16s linear infinite',
      },
      keyframes: {
        logoSpin: {
          '0%': { transform: 'rotateY(0deg)' },
          '100%': { transform: 'rotateY(360deg)' }
        }
      }
    },
  },
  plugins: [],
};
