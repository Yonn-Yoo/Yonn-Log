import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        text1: '#ececec',
        text2: '#d9d9d9',
        text3: '#acacac',
        text4: '#595959',
      },
    },
  },
  plugins: [],
};
export default config;
