import type { Linter } from "eslint";
import eslintOverride from "./overrides/eslint/index.js";
import jsonOverride from "./overrides/json/index.js";
import typescriptOverride from "./overrides/typescript/index.js";

const config: Linter.Config = {
  env: {
    browser: false,
    node: true
  },
  overrides: [
    eslintOverride,
    typescriptOverride,
    jsonOverride
  ]
};

module.exports = config;
