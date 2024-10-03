import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'bg-color': 'rgb(180, 255, 255)',
        'container-bg-color': 'rgb(249, 252, 255)',
        'title-color': 'rgb(91, 165, 165)',
        'text-color': 'rgb(110, 110, 110)',
        'border-color': 'rgb(38, 108, 136)',
        'input-bg-color': 'rgb(230, 243, 255)',
        'input-text-color': 'rgb(155, 155, 155)',
        'sum-box-bg-color': 'rgb(38, 108, 136)',
        'sum-text-color': 'rgb(255,255,255)',
        'tip-amount-color': 'rgb(87, 223, 143)',
        'reset-btn-bg-color': 'rgb(196, 238, 255)',
        'reset-btn-text-color': 'rgb(38, 108, 136)',
        'reset-btn-hover-text-color': 'rgb(255,255,255)',
        'tip-btn-bg-color': 'rgb(38, 108, 136)',
        'tip-btn-hover-color': 'rgb(38, 108, 136)',
      },
      fontFamily: {
        sans: ['var(--font-geist-sans)', 'sans-serif'],
        mono: ['var(--font-geist-mono)', 'monospace'],
      },
    },
  },
  plugins: [],
};

export default config;
