import type { Linter } from "eslint";

// https://www.npmjs.com/package/eslint-plugin-import

const helpfulWarnings: Linter.RulesRecord = {
  // "import/export":
  "import/no-deprecated": "warn",
  // "import/no-empty-named-blocks":
  // "import/no-extraneous-dependencies":
  "import/no-mutable-exports": "error",
  "import/no-named-as-default": "off"
  // "import/no-named-as-default-member":
  // "import/no-unused-modules":
};

const moduleSystems: Linter.RulesRecord = {
  // "import/no-amd":
  // "import/no-commonjs":
  // "import/no-import-module-exports":
  // "import/no-nodejs-modules":
  // "import/unambiguous":
};

const staticAnalysis: Linter.RulesRecord = {
  // "import/default":
  // "import/named":
  // "import/namespace":
  "import/no-absolute-path": "error",
  // "import/no-cycle":
  // "import/no-dynamic-require":
  "import/no-internal-modules": "off",
  "import/no-relative-packages": "error",
  "import/no-relative-parent-imports": "error",
  "import/no-restricted-paths": "off",
  "import/no-self-import": "error",
  "import/no-unresolved": "off",
  "import/no-useless-path-segments": ["error", { noUselessIndex: false }],
  "import/no-webpack-loader-syntax": "error"
};

const styleGuide: Linter.RulesRecord = {
  // "import/consisten-type-specifier-style":
  // "import/dynamic-import-chunkname":
  "import/exports-last": "off",
  "import/extensions": ["error", "ignorePackages"],
  "import/first": "warn",
  "import/group-exports": "off",
  "import/max-dependencies": "off",
  "import/newline-after-import": "error",
  // "import/no-anonymous-default-export":
  // "import/no-default-export":
  "import/no-duplicates": "error"
  // "import/no-named-default":
  // "import/no-named-export":
  // "import/no-namespace":
  // "import/no-unassigned-import":
  // "import/order":
  // "import/prefer-default-export":
};


const rules: Linter.RulesRecord = {
  ...helpfulWarnings,
  ...moduleSystems,
  ...staticAnalysis,
  ...styleGuide
};

export default rules;
