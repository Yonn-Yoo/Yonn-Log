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
        background1: '#212121',
        background2: '#323232',
        background3: '#1E1E1E',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
export default config;
