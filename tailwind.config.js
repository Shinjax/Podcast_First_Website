/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'MainGold': "#F5F5DC",
        'DarkGold': '#f5e3ba',
        'MainRed': "#CD5C5C",
        'SecondaryRed': "#F08080",
        'text': "#000000",
        'patreon': '#f96854',
        'instagram': '#833ab4',
      },
      spacing: {
        '150': '150vh',
      },
      container : {
        center: true,
        padding: '1rem',
        screens: {
          'sm' : "512px",
          'md' : "720px",
          'lg' : "1024px",
          'xl' : "1140px",
          '2xl' : "1320px"
        }
      },
    },
  },
  plugins: [],
}
