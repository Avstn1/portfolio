import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#13B5C6",     // teal
        secondary: "#64C2FA",   // sky blue
        highlight: "#EDE6F3",   // pale lavender
        charcoal: "#171C1B",    // near black
        accent: "#5C66FF",      // periwinkle
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
} satisfies Config;
