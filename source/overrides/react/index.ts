import type { Linter } from "eslint";
import { rules } from "./rules.js";

const override: Linter.ConfigOverride = {
  files: ["*.tsx", "*.jsx"],
  extends: [
    "plugin:react/recommended"
  ],
  plugins: [
    "react-hooks"
  ],
  rules,
  parser: "@typescript-eslint/parser",
  // https://typescript-eslint.io/packages/parser/#configuration
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: "latest",
    project: true,
    sourceType: "module",
    warnOnUnsupportedTypeScriptVersion: false
  },
  settings: {
    react: {
      version: "detect"
    }
  }
};

export default override;
