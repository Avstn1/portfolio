import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
      // ✅ Allow JSX comments outside braces
      "react/jsx-no-comment-textnodes": "off",

      // ✅ Allow unescaped characters like `'` in JSX
      "react/no-unescaped-entities": "off",

      // ✅ Allow using <img> instead of <Image />
      "@next/next/no-img-element": "off",
    },
  },
];

export default eslintConfig;
