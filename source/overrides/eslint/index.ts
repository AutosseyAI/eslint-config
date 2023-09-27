import type { Linter } from "eslint";
import importRules from "./eslint-plugin-import.js";
import nodeRules from "./eslint-plugin-n.js";
import eslintRules from "./eslint.js";

const override: Linter.ConfigOverride = {
  files: ["*.ts", "*.tsx", "*.js", "*.jsx"],
  extends: [
    "eslint:recommended",
    "plugin:import/recommended",
    "plugin:n/recommended"
  ],
  rules: {
    ...eslintRules,
    ...importRules,
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
    "import",
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
