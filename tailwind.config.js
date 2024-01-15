/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{ts,tsx,mdx}", "./components/**/*.{ts,tsx,mdx}"],
  theme: {
    extend: {
      screens: {
        mobileMax: { max: "768px" },
        postMax: { min: "1280px" },
      },
      colors: {
        veryLightBlue: "#F0F8FF",
        lightBlue: "#E6F3FF",
        lightBlue2: "#d7e9fa",
        darkBlue: "#004D80",
        gray: "#5F666D",
        black: "#2B2A35",
        lightBlack: "#2b2c32",
        transparent: "rgba(255, 255, 255, 0)",
        halfTransparentBlack: "rgba(0, 0, 0, 0.6)",
      },
      backgroundImage: {
        "title-hover-color":
          "linear-gradient(to right, #004D80, #004D80 50%, #2B2A35 50%)",
      },
      spacing: {
        mobileX: "0.8rem",
        mobileY: "2rem",
        desktopX: "5rem",
        desktopY: "5rem",
        desktopY_Xl: "7rem",
        sliderShadowWidthClamp: "clamp(3rem, 2rem + 5vw, 6rem)",
        sliderLogoHeightClamp: "clamp(1.875rem, 1rem + 5vw, 3.125rem)",
        sliderLogoMarginClamp: "clamp(1.5rem, 1rem + 5vw, 3.3rem)",
      },
      maxWidth: {
        maxContent: "1440px",
      },
      fontSize: {
        heroHClamp: "clamp(2rem, 5vw, 3.5rem)",
        postTitleH2Clamp: "clamp(1.8rem, 3vw, 3.3rem)",
        aboutMeTitleClamp: "clamp(1.4rem, 3vw, 2.6rem)",
        heroPClamp: "clamp(1.2rem, 2vw, 1.4rem)",
        postPClamp: "clamp(1rem, 2vw, 1.2rem)",
      },
      boxShadow: {
        imageShadow: "1px 2px 6px -1px rgba(95, 102, 109, 1);",
      },
      keyframes: {
        slide: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-100%)" },
        },
      },
      animation: {
        slide: "slide 40s infinite linear",
      },
    },
    screens: {
      sm: "576px",
      md: "768px",
      lg: "992px",
      xl: "1200px",
      "2xl": "1400px",
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
