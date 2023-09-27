import type { Linter } from "eslint";

const typescript: Linter.RulesRecord = {
  "@typescript-eslint/consistent-type-definitions": "off",
  "@typescript-eslint/consistent-type-imports": ["error", {
    prefer: "type-imports",
    fixStyle: "separate-type-imports"
  }],
  "@typescript-eslint/explicit-function-return-type": "off",
  "@typescript-eslint/explicit-module-boundary-types": "off",
  "@typescript-eslint/no-empty-interface": ["error", {
    allowSingleExtends: true
  }],
  "@typescript-eslint/no-explicit-any": "off",
  "@typescript-eslint/no-floating-promises": "warn",
  "@typescript-eslint/no-misused-promises": "warn",
  "@typescript-eslint/no-namespace": "off",
  "@typescript-eslint/no-non-null-assertion": "warn",
  "@typescript-eslint/no-unnecessary-condition": "off",
  "@typescript-eslint/no-unsafe-argument": "warn",
  "@typescript-eslint/no-unsafe-assignment": "off",
  "@typescript-eslint/no-unsafe-return": "warn",
  "@typescript-eslint/non-nullable-type-assertion-style": "off",
  // Redundant type constituents can be useful for documentation.
  "@typescript-eslint/no-redundant-type-constituents": "off",
  "@typescript-eslint/prefer-nullish-coalescing": ["warn", { ignorePrimitives: true }]
};

const formatting: Linter.RulesRecord = {
  "@typescript-eslint/semi": "warn"
};

const extensions: Linter.RulesRecord = {
  "@typescript-eslint/dot-notation": ["warn", { allowIndexSignaturePropertyAccess: true }],
  "@typescript-eslint/no-empty-function": "off",
  "@typescript-eslint/no-extra-semi": "warn",
  "@typescript-eslint/no-shadow": "warn",
  // Unused variables can be good as documentation to show parameters that are available.
  "@typescript-eslint/no-unused-vars": "off",
  "@typescript-eslint/no-use-before-define": ["error", {
    functions: false
  }],
  "@typescript-eslint/require-await": "warn"
};

const deprecated: Linter.RulesRecord = {
  "@typescript-eslint/camelcase": "off"
};

const rules: Linter.RulesRecord = {
  ...typescript,
  ...formatting,
  ...extensions,
  ...deprecated
};

export default rules;
