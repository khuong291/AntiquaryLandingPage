/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#6b4f3a",
        secondary: "#10B981",
        dark: "#1F2937",
        light: "#F9FAFB",
      },
      fontFamily: {
        sans: ["SF Pro Rounded", "Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
