/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        mobileSpirit: "#121725ed",
        primary: "#121725",
        secondary: "#54E6AF",
        icon: "#5A668A",
        paragraph: "#C2CBE5",
        emailInput: "#2C344B",
        error: "#FB3E3E",
        buttonHover: "#B3FFE2",
      },
      backgroundImage: {
        hostMobile: "url('/assets/image-host-mobile.jpg')",
        hostTablet: "url('/assets/image-host-tablet.jpg')",
        hostDesktop: "url('/assets/image-host.jpg')",
      },
    },
  },
  plugins: [],
};
