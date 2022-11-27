/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-cover': "url('/src/Assets/images/hero-cover.jpg')",
        'feature-watches': "url('/src/Assets/images/feature-watches.jpg')",
        'stripe': "url('/src/Assets/images/stripe.png')"
      }
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["luxury"],
  },
}
