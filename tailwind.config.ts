import type { Config } from "tailwindcss";
import daisyui from "daisyui"

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      transitionProperty: {
        height: 'height',
      },
      fontFamily: {
        handwriting: ['var(--font-handwriting)', 'cursive'],
        twinkle_star: ['var(--font-twinkle-star)'],
        poppins: ['var(--font-poppins)'],
        caveat: ['var(--font-caveat)'],
        merryweather: ['var(--font-merriweather)']
      }
    },
  },
  plugins: 
  [
    // daisyui,
  ]
  ,
} satisfies Config;
