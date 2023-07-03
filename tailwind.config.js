/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {},
    fontFamily: {
      'sans': ['Poppins', 'Helvetica', 'Arial', 'sans-serif'],
    }
  },
  plugins: [],
  content: ["./src/**/*.{js,jsx,ts,tsx,html}", "./public/index.html"],
};
