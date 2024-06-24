/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "white-100": "#ECEEF6",
        "blue-200": "#1B2843",
        "blue-300": "#060A12",
        "blue-100": "#284FB4",
        "green-100": "#14BC11",
        "grey-100": " #4D5C6C",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
