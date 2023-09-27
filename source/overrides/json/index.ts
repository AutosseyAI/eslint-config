import type { Linter } from "eslint";

const override: Linter.ConfigOverride = {
  files: ["*.json"],
  extends: [
    "plugin:json/recommended"
  ]
};

export default override;
