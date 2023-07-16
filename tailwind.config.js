/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      poppins: "Poppins, sans-serif",
      oswald: "Oswald, sans-serif",
      urbanist: "Urbanist, sans-serif",
    },
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
}

// 491323180781-5jjerrd6fujim80a4qu7334sbh05igog.apps.googleusercontent.com
// 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
// http://localhost:1337/api/auth/google/callback
