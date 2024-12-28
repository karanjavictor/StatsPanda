/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    extend: {
      fontFamily: {
        sans: ['Nunito Sans', 'sans-serif'],
      },
      colors: {
        'content': {
          DEFAULT: '#111827', // primary text color
          'muted': '#6b7280', // secondary text color
        },
        'brand': {
          DEFAULT: '#000000',
          'muted': '#111827',
          'hover': '#1f2937',
        },
      },
    },
  },
  plugins: [],
}

