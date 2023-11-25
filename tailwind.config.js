/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bgPurple: "#7269BD",
        bgPurpleDarker: "#3E3775",
        bgDirtyWhite: "#F1F1F1",
      },
    },
  },
  plugins: [],
};
