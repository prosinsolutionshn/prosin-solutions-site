import PluginForms from '@tailwindcss/forms';
import { Config } from 'tailwindcss';

/**
 * Generate colors with:
 * @see https://uicolors.app/create
 */
const primaryColor = {
  '50': 'var(--primary-color-50)',
  '100': 'var(--primary-color-100)',
  '200': 'var(--primary-color-200)',
  '300': 'var(--primary-color-300)',
  '400': 'var(--primary-color-400)',
  '500': 'var(--primary-color-500)',
  '600': 'var(--primary-color-600)',
  '700': 'var(--primary-color-700)',
  '800': 'var(--primary-color-800)',
  '900': 'var(--primary-color-900)',
  '950': 'var(--primary-color-950)',
};

const secondaryColor = {
  '50': 'var(--secondary-color-50)',
  '100': 'var(--secondary-color-100)',
  '200': 'var(--secondary-color-200)',
  '300': 'var(--secondary-color-300)',
  '400': 'var(--secondary-color-400)',
  '500': 'var(--secondary-color-500)',
  '600': 'var(--secondary-color-600)',
  '700': 'var(--secondary-color-700)',
  '800': 'var(--secondary-color-800)',
  '900': 'var(--secondary-color-900)',
  '950': 'var(--secondary-color-950)',
};

const thirdColor = {
  '50': 'var(--third-color-50)',
  '100': 'var(--third-color-100)',
  '200': 'var(--third-color-200)',
  '300': 'var(--third-color-300)',
  '400': 'var(--third-color-400)',
  '500': 'var(--third-color-500)',
  '600': 'var(--third-color-600)',
  '700': 'var(--third-color-700)',
  '800': 'var(--third-color-800)',
  '950': 'var(--third-color-950)',
};

const whites = {
  '50': 'var(--white-color)',
};

const black = {
  '50': 'var(--black-color)',
};

const text = {
  muted: 'var(--text-muted-color)',
  primary: 'var(--text-primary-color)',
};

export default <Config>{
  content: ['./pages/**/*.{ts,jsx,tsx,mdx}', './components/**/*.{ts,jsx,tsx,mdx}', './app/**/*.{ts,jsx,tsx,mdx}'],
  plugins: [PluginForms],
  theme: {
    extend: {
      colors: {
        'custom-black': {
          main: black[50],
        },
        'custom-white': {
          main: whites[50],
        },
        primary: {
          ...primaryColor,
          main: primaryColor[950],
        },
        secondary: {
          ...secondaryColor,
          main: secondaryColor[400],
        },
        third: {
          ...thirdColor,
          main: thirdColor[500],
        },
        typography: {
          ...text,
          main: text.primary,
          muted: text.muted,
        },
      },
    },
  },
};
