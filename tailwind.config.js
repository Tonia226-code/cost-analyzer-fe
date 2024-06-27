/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "white-100": "#ECEEF6",
        "white-200": "#DBE0EF",
        "blue-100": "#284FB4",
        "blue-200": "#1B2843",
        "blue-250": "#141A2D",
        "blue-270": "#151923",
        "blue-300": "#060A12",
        "blue-400": "#0D111D",
        "blue-500": "#090D17",
        "green-100": "#14BC11",
        "red-100": "#FA2323",
        "yellow-100": "#F89808",
        "grey-100": " #4D5C6C",
        "grey-150": " #A0A0A0",
        "grey-200": " #808491",
        "grey-250": " #7B7E88",
        "grey-300": " #414B59",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
