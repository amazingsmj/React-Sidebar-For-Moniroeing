/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'sky-blue': '#00aaff', // Vous pouvez définir la couleur bleu-ciel ici
      },
    },
  },
  plugins: [],
}

