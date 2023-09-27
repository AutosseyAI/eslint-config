import type { Linter } from "eslint";

const rules: Linter.RulesRecord = {
  "n/callback-return": "error",
  // "exports-style":
  "n/file-extension-in-import": "error",
  "n/global-require": "error",
  "n/handle-callback-err": "off",
  // "no-callback-literal":
  // "no-deprecated-api":
  // "no-exports-assign":
  // "no-extraneous-import":
  // "no-extraneous-require":
  // "no-hide-core-modules":
  // "no-missing-import":
  "n/no-mixed-requires": "error",
  "n/no-new-require": "error",
  "n/no-path-concat": "error",
  "n/no-process-env": "off",
  "n/no-process-exit": "error",
  // "no-restricted-import":
  // "no-restricted-require":
  "n/no-sync": "off"
  // "no-unpublished-bin":
  // "no-unpublished-import":
  // "no-unpublished-require":
  // "no-unsupported-features":
  // "no-unsupported-features/es-builtins":
  // "no-unsupported-features/es-syntax":
  // "no-unsupported-features/node-builtins":
  // "prefer-global/buffer"
  // "prefer-global/console"
  // "prefer-global/process"
  // "prefer-global/text-decoder"
  // "prefer-global/text-encoder"
  // "prefer-global/url"
  // "prefer-global/url-search-params"
  // "prefer-promises/dns":
  // "prefer-promises/fs":
  // "process-exit-as-throw":
  // "shebang":
};

export default rules;
