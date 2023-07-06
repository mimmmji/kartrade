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
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".flex-center": {
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        },
        ".border-gray": {
          border: "1px solid #d8d8d8",
        },
        ".gray": {
          color: "#777777",
        },
        ".gray2": {
          color: "#646464",
        },
        ".gray3": {
          color: "#B7B7B7",
        },
        ".gray4": {
          backgroundColor: "#D8D8D8",
        },
        ".black": {
          color: "black",
        },
        ".icon": {
          height: "18px",
          width: "18px",
        },
        ".mx-default": {
          marginRight: "25px",
          marginLeft: "25px",
        },
        ".section": {
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          maxWidth: "375px",
          margin: "0 auto",
          border: "1px solid gray",
        },
        ".bottom-gray": {
          borderBottom: "1px solid #d8d8d8",
        },
        ".bottom-gray2": {
          borderBottom: "1px solid #A8A8A8",
        },
        ".top-gray": {
          borderTop: "1px solid #d8d8d8",
        },
        ".border-gray-2": {
          borderBottom: "1px solid #d8d8d8",
          borderTop: "1px solid #d8d8d8",
        },
        ".round-button": {
          height: "38px",
          width: "38px",
          border: "1px solid",
          borderRadius: "100%",
        },
        ".black-button": {
          width: "152.6px",
          height: "55px",
          border: "1px solid #1B1B1B",
          borderRadius: "74px",
          color: "white",
          background: "#1B1B1B",
        },
        ".white-button": {
          width: "152.6px",
          height: "55px",
          border: "1px solid #777777",
          borderRadius: "74px",
        },
        ".white-button2": {
          width: "325px",
          height: "55px",
          border: "1px solid #000000",
          borderRadius: "74px",
        },
        ".black-button2": {
          width: "325px",
          height: "55px",
          background: "#1B1B1B",
          borderRadius: "74px",
          color: "white",
        },
        ".font1": {
          fontSize: "16px",
          fontWeight: "500",
          lineHeight: "34px",
        },
        ".font2": {
          fontSize: "16px",
          lineHeight: "28px",
          color: "#777777",
        },
        ".font3": {
          fontSize: "16px",
          lineHeight: "16px",
        },
      };
      addUtilities(newUtilities);
    },
  ],
};
