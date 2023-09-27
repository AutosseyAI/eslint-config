import type { Linter } from "eslint";

export const rules: Linter.RulesRecord = {
  "react/display-name": "off",
  "react/jsx-pascal-case": ["error", { allowAllCaps: true }],
  "react/jsx-wrap-multilines": ["error", {
    declaration: "parens-new-line",
    assignment: "parens-new-line",
    return: "parens-new-line",
    arrow: "parens-new-line",
    condition: "ignore",
    logical: "ignore",
    prop: "ignore"
  }],
  "react/prop-types": "off",
  "react/react-in-jsx-scope": "off"
};
