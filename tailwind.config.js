/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.html"],
  theme: {
    extend: {
      cursor: {
        'fancy': 'url(cursor.cur), pointer',
      }
    },
  },
  plugins: [],
}

