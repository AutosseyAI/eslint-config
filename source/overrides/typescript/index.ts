import type { Linter } from "eslint";
import rules from "./typescript.js";

const override: Linter.ConfigOverride = {
  files: ["*.ts", "*.tsx"],
  extends: [
    "plugin:@typescript-eslint/strict-type-checked",
    "plugin:@typescript-eslint/stylistic-type-checked"
  ],
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
  plugins: [
    "@typescript-eslint"
  ],
  rules
};

export default override;
