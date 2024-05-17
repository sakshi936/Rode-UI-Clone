/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        lg: "992px",
        // => @media (min-width: 992px) { ... }

        "ex-lg": "1200px",
        // => @media (min-width: 1200px) { ... }
      },
    },
  },
  plugins: [],
};
