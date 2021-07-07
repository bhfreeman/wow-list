module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {

    },
    extend: {
      colors: {
        'light-gray': '#292829',
        'off-cream': '#DEDFDB'
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
