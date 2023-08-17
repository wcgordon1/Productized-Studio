/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    screens: {
      sm: "540px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    fontSize: {
      xs: [
        "0.75rem",
        {
          lineHeight: "1rem",
        },
      ],
      sm: [
        "0.875rem",
        {
          lineHeight: "1.5rem",
        },
      ],
      base: [
        "1rem",
        {
          lineHeight: "1.75rem",
        },
      ],
      lg: [
        "1.125rem",
        {
          lineHeight: "2rem",
        },
      ],
      xl: [
        "1.25rem",
        {
          lineHeight: "2rem",
        },
      ],
      "2xl": [
        "1.5rem",
        {
          lineHeight: "2rem",
        },
      ],
      "3xl": [
        "2rem",
        {
          lineHeight: "2.5rem",
        },
      ],
      "4xl": [
        "2.5rem",
        {
          lineHeight: "3.5rem",
        },
      ],
      "5xl": [
        "3rem",
        {
          lineHeight: "3.5rem",
        },
      ],
      "6xl": [
        "3.75rem",
        {
          lineHeight: "1",
        },
      ],
      "7xl": [
        "4.5rem",
        {
          lineHeight: "1.1",
        },
      ],
      "8xl": [
        "6rem",
        {
          lineHeight: "1",
        },
      ],
      "9xl": [
        "8rem",
        {
          lineHeight: "1",
        },
      ],
    },
    extend: {
      boxShadow: {
        big: "0px 7px 32px rgb(0 0 0 / 35%);",
        massive: "0px 64px 64px rgba(0, 0, 0, 0.25), 0px 32px 32px rgba(0, 0, 0, 0.25), 0px 16px 16px rgba(0, 0, 0, 0.25), 0px 8px 8px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25);",
      },
      colors: {
        card:"#131313",        vanta: {
   50: "hsla(0, 0%, 95%, 1)",
  100: "hsla(0, 0%, 89%, 1)",
  200: "hsla(0, 0%, 78%, 1)",
  300: "hsla(0, 0%, 67%, 1)",
  400: "hsla(0, 0%, 56%, 1)",
  500: "hsla(0, 0%, 45%, 1)",
  600: "hsla(0, 0%, 34%, 1)",
  700: "hsla(0, 0%, 24%, 1)",
  800: "hsla(0, 0%, 13%, 1)",
  900: "hsla(0, 0%, 1%, 1)",
  950: "hsla(0, 0%, 1%, 1)",
},
      },
      fontFamily: {
        display: ["Syne", ...defaultTheme.fontFamily.sans],
         sans: ["Figtree", ...defaultTheme.fontFamily.sans],
        mono: ["Syne Mono", ...defaultTheme.fontFamily.mono],
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
  ],
}
