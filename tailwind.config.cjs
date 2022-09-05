/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        background: "#f8fafc",
        primary: "#F53A45",
        accent: "#AF252D",
        test: "#A9373A"
      },
    },
  },
  plugins: [],
};
