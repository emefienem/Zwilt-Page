/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx}"],
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      width: ["group-hover"],
    },
  },
  plugins: [require("tailwindcss-animate"), require("tailwind-scrollbar-hide")],
};
