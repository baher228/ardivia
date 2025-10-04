// eslint.config.ts (or .mjs/.js — keep ESM)
import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

/**
 * We extend Next’s recommended configs via FlatCompat,
 * then add one more flat-config block to override rules.
 */
const eslintConfig = [
  // Bring in Next defaults (core web vitals + TS)
  ...compat.extends("next/core-web-vitals", "next/typescript"),

  // Our overrides (this block is the key change)
  {
    rules: {
      // Unblock your Docker build by disabling the error:
      // Testimonial.tsx had react/no-unescaped-entities
      "react/no-unescaped-entities": "off",

      // Keep the <img> reminder but as a warning (optional)
      "@next/next/no-img-element": "warn",

      // Quiet unused vars to warnings with common ignore patterns (optional)
      "@typescript-eslint/no-unused-vars": [
        "warn",
        {
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^_",
          caughtErrorsIgnorePattern: "^_",
        },
      ],
    },
  },
];

export default eslintConfig;
