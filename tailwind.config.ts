import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'bg-white': '#FFFFFF',
        'bg-light': '#F5F5F5',
        'text-primary': '#1C1C1C',
        'text-secondary': '#666666',
        'border-color': '#E5E5E5',
      },
      borderRadius: {
        'image': '20px',
      },
      maxWidth: {
        'container': '1280px',
      },
      fontFamily: {
        sans: ['var(--font-manrope)', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;
