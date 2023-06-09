/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "8B909A": "#8B909A",
        "23272E": "#23272E",
        "7367F0": "#7367F0",
        "0F60FF": "#0F60FF",
        "28C76F": "#28C76F",
        EA5455: "#EA5455",
        "4B465C": "#4B465C",
        FFC600: "#FFC600",
        F5F5F5: "#F5F5F5",
        DBDADE: "#DBDADE",
        "1EB564": "#1EB564",
        E9E7FD: "#E9E7FD",
        F1F2F6: "#F1F2F6",
      },
      maxWidth: {
        container: "1200px",
        wrapper: "1440px",
        menu: "260px",
        menuMobile: "60px",
      },
      width: {
        menu: "260px",
      },
      fontFamily: {
        "public-sans": ["var(--font-public-sans)"],
      },
      letterSpacing: {
        0.02: "0.02em",
      },
      backgroundImage: {
        avatar:
          "linear-gradient(0deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2))",
      },
      boxShadow: {
        input: "0px 4px 16px rgba(0, 0, 0, 0.04)",
      },
    },
  },
  plugins: [],
};
