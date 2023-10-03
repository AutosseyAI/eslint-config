import type { Linter } from "eslint";
import nodeRules from "./eslint-plugin-n.js";

const override: Linter.ConfigOverride = {
  files: ["*.ts", "*.tsx", "*.js", "*.jsx"],
  extends: [
    "plugin:n/recommended"
  ],
  rules: {
    ...nodeRules
  },
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
    "n"
  ],
  settings: {
    "import/parsers": {
      "@typescript-eslint/parser": [
        ".js",
        ".jsx"
      ]
    }
  }
};

export default override;
