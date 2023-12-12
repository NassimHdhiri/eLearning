/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    'node_modules/flowbite-react/lib/esm/**/*.js',
  ],
  theme: {
    extend: {
      "size": {
        "sm": "h-1.5",
        "md": "h-2.5",
        "lg": "h-4",
        "xl": "h-6"
      }
    },
  },
  plugins: [require('flowbite/plugin')],
}

