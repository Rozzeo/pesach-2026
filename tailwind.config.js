/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        parchment: '#FBF5E6',
        wine: {
          DEFAULT: '#8B1A1A',
          light: '#A52A2A',
          dark: '#6B0F0F',
        },
        gold: {
          DEFAULT: '#C8993C',
          light: '#D4AA5A',
          dark: '#A67C2A',
        },
        'herb-green': {
          DEFAULT: '#2D5016',
          light: '#3D6B1E',
          dark: '#1E3510',
        },
        sand: '#E8D5B7',
      },
      fontFamily: {
        serif: ['Georgia', 'Cambria', '"Times New Roman"', 'serif'],
      },
      backgroundImage: {
        'grain': "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E\")",
      },
    },
  },
  plugins: [],
}
