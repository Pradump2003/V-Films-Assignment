/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        castoro: ['"Castoro"', "serif"], // for paragraphs or body text
        island: ['"Island Moments"', "cursive"], // for headings or quotes
      },
    },
  },
  plugins: [],
};
