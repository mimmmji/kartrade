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
          width: "375px",
          margin: "0 auto",
          border: "1px solid gray",
        },
        ".bottom-gray": {
          borderBottom: "1px solid #d8d8d8",
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
      };
      addUtilities(newUtilities);
    },
  ],
};
