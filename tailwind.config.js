/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html", // ✅ Vite는 index.html도 포함해야 해요
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        colors: {
            brand: '#F96162',
        },
    },
  },
  plugins: [],
}