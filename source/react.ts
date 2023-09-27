import type { Linter } from "eslint";
import eslintOverride from "./overrides/eslint/index.js";
import jsonOverride from "./overrides/json/index.js";
import reactOverride from "./overrides/react/index.js";
import typescriptOverride from "./overrides/typescript/index.js";

const config: Linter.Config = {
  env: {
    browser: true,
    node: true
  },
  overrides: [
    eslintOverride,
    typescriptOverride,
    reactOverride,
    jsonOverride
  ]
};

module.exports = config;
