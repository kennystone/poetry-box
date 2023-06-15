/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      'serif': ['Charter', 'Bitstream Charter', 'Cambria', 'Georgia', 'source-sans-pro', 'serif'],
      'sans': ['-apple-system', 'source-sans-pro', 'system-ui', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [],
}