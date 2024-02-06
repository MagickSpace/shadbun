const { fontFamily } = require('tailwindcss/defaultTheme')
const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
export const darkMode = ['class']
export const content = [
  './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
]
export const theme = {
  container: {
    center: true,
    padding: '2rem',
    screens: {
      '2xl': '1400px',
    },
  },
  extend: {
    fontFamily: {
      body: ['Manrope', ...defaultTheme.fontFamily.sans],
      sans: ['Inter', ...fontFamily.sans],
      heading: ['CalSans Semibold', ...fontFamily.sans],
    },
    gridTemplateColumns: {
      list: 'repeat(auto-fill, minmax(400px, max-content))',
    },
    height: {
      18: '4.5rem',
    },
    spacing: {
      18: '4.5rem',
    },
    colors: {
      white: '#f8f9fa',
      brand: {
        50: '#F0FFFF',
        100: '#D6FFFE',
        200: '#9EFFFD',
        300: '#29FFFB',
        400: '#00F5F1',
        500: '#00ECE8',
        600: '#00D6D3',
        700: '#00BDBA',
        800: '#009E9B',
        900: '#00706E',
        950: '#005250',
      },
      border: 'hsl(var(--border))',
      input: 'hsl(var(--input))',
      ring: 'hsl(var(--ring))',
      background: 'hsl(var(--background))',
      foreground: 'hsl(var(--foreground))',
      primary: {
        DEFAULT: 'hsl(var(--primary))',
        foreground: 'hsl(var(--primary-foreground))',
      },
      secondary: {
        DEFAULT: 'hsl(var(--secondary))',
        foreground: 'hsl(var(--secondary-foreground))',
      },
      destructive: {
        DEFAULT: 'hsl(var(--destructive))',
        foreground: 'hsl(var(--destructive-foreground))',
      },
      muted: {
        DEFAULT: 'hsl(var(--muted))',
        foreground: 'hsl(var(--muted-foreground))',
      },
      accent: {
        DEFAULT: 'hsl(var(--accent))',
        foreground: 'hsl(var(--accent-foreground))',
      },
      popover: {
        DEFAULT: 'hsl(var(--popover))',
        foreground: 'hsl(var(--popover-foreground))',
      },
      card: {
        DEFAULT: 'hsl(var(--card))',
        foreground: 'hsl(var(--card-foreground))',
      },
    },
    borderRadius: {
      lg: 'var(--radius)',
      md: 'calc(var(--radius) - 2px)',
      sm: 'calc(var(--radius) - 4px)',
    },
    keyframes: {
      'accordion-down': {
        from: { height: 0 },
        to: { height: 'var(--radix-accordion-content-height)' },
      },
      'accordion-up': {
        from: { height: 'var(--radix-accordion-content-height)' },
        to: { height: 0 },
      },
    },
    animation: {
      'accordion-down': 'accordion-down 0.2s ease-out',
      'accordion-up': 'accordion-up 0.2s ease-out',
    },
  },
}
export const plugins = [
  require('tailwindcss-animate'),
  require('@tailwindcss/typography'),
]
