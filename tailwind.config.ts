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
      fontFamily: {
        handwriting: ['var(--font-handwriting)', 'cursive'],
        Twinkle_Star: ['var(--font-twinkle-star)'],
        poppins: ['var(--font-poppins)'],
        caveat: ['var(--font-caveat)'],

      }
    },
  },
  plugins: 
  [
    // daisyui,
  ]
  ,
} satisfies Config;
