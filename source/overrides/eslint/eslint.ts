/* eslint-disable max-lines */
import type { Linter } from "eslint";

/**
 * These rules relate to possible logic errors in code.
 *
 * https://eslint.org/docs/latest/rules/#possible-problems
 */
const problems: Linter.RulesRecord = {
  "array-callback-return": "warn",
  // "constructor-super":
  // "for-direction":
  // "getter-return":
  // "no-async-promise-executor":
  "no-await-in-loop": "off",
  // "no-class-assign":
  "no-compare-neg-zero": "error",
  // "no-cond-assign":
  // "no-constant-binary-expression":
  // "no-constant-condition":
  "no-constructor-return": "error",
  // "no-control-regex":
  // "no-debugger":
  // "no-dupe-args":
  // "no-dupe-class-members":
  // "no-dupe-else-if":
  // "no-dupe-keys":
  "no-duplicate-imports": "off",
  // "no-duplicate-case":
  // "no-empty-character-class":
  // "no-empty-pattern":
  // "no-ex-assign":
  // "no-fallthrough":
  // "no-func-assign":
  // "no-import-assign":
  // "no-inner-declarations":
  // "no-invalid-regexp":
  // "no-irregular-whitespace":
  // "no-loss-of-precision":
  // "no-misleading-character-class":
  // "no-new-native-nonconstructor":
  // "no-new-symbol":
  // "no-obj-calls":
  // "no-promise-executor-return":
  // "no-prototype-builtins":
  // "no-self-assign":
  "no-self-compare": "error",
  // "no-setter-return":
  // "no-sparse-arrays":
  "no-template-curly-in-string": "off",
  // "no-this-before-super":
  // "no-undef":
  // "no-unexpected-multiline":
  "no-unmodified-loop-condition": "error",
  // "no-unreachable":
  // "no-unreachable-loop":
  // "no-unsafe-finally":
  // "no-unsafe-negation":
  // "no-unsafe-optional-chaining":
  // "no-unused-private-class-members":
  // "no-unused-vars":
  "no-use-before-define": "off",
  // "no-useless-backreference":
  "require-atomic-updates": "off"
  // "use-isnan":
  // "valid-typeof":
};

/**
 * These rules suggest alternative ways of doing things.
 *
 * https://eslint.org/docs/latest/rules/#suggestions
 */
const suggestions: Linter.RulesRecord = {
  "accessor-pairs": "off",
  "arrow-body-style": "off",
  "block-scoped-var": "error",
  "camelcase": "off",
  "capitalized-comments": "off",
  "class-methods-use-this": "warn",
  "complexity": "off",
  "consistent-return": "error",
  "consistent-this": "error",
  "curly": ["warn", "all"],
  "default-case": "error",
  // "default-case-last":
  "default-param-last": "off",
  "dot-notation": "off", // Handle with @typescript-eslint/dot-notation
  "eqeqeq": ["warn", "always"],
  "func-name-matching": "error",
  "func-names": "error",
  "func-style": ["warn", "declaration", { allowArrowFunctions: true }],
  "grouped-accessor-pairs": "error",
  "guard-for-in": "error",
  "id-denylist": "error",
  "id-length": "off",
  "id-match": "error",
  "init-declarations": "off",
  // "logical-assignment-operators":
  "max-classes-per-file": "warn",
  "max-depth": "off",
  // 1. No clear cut-off point
  // 2. Long files are self-evident, don't need ESLint to tell us
  "max-lines": "off",
  "max-lines-per-function": "off",
  "max-nested-callbacks": "warn",
  "max-params": ["warn", 5],
  "max-statements": "off",
  "multiline-comment-style": "off",
  "new-cap": "off",
  "no-alert": "error",
  "no-array-constructor": "error",
  "no-bitwise": "off",
  "no-caller": "error",
  // "no-case-declarations":
  "no-confusing-arrow": "error",
  "no-console": ["error", { allow: ["warn", "error", "info"] }],
  "no-continue": "warn",
  // "no-delete-var":
  "no-div-regex": "error",
  "no-else-return": "off",
  "no-empty": ["error", { allowEmptyCatch: true }],
  "no-empty-function": "off",
  // "no-empty-static-block":
  "no-eq-null": "error",
  "no-eval": "error",
  "no-extend-native": "error",
  "no-extra-bind": "warn",
  // "no-extra-boolean-cast":
  "no-extra-label": "error",
  "no-extra-semi": "off", // Handled by @typescript-eslint/no-extra-semi
  "no-floating-decimal": "error",
  // "no-global-assign":
  "no-implicit-coercion": "warn",
  "no-implicit-globals": "warn",
  "no-implied-eval": "error",
  "no-inline-comments": "off",
  "no-invalid-this": "error",
  "no-iterator": "error",
  "no-label-var": "error",
  "no-labels": "error",
  "no-lone-blocks": "error",
  "no-lonely-if": "error",
  "no-loop-func": "error",
  "no-magic-numbers": "off",
  "no-mixed-operators": "error",
  "no-multi-assign": "error",
  "no-multi-str": "error",
  "no-negated-condition": "off",
  "no-nested-ternary": "off",
  "no-new": "error",
  "no-new-func": "error",
  "no-new-wrappers": "error",
  // "no-nonoctal-decimal-escape":
  "no-object-constructor": "error",
  // "no-octal":
  "no-octal-escape": "error",
  "no-param-reassign": "error",
  "no-plusplus": "error",
  "no-proto": "error",
  // "no-redeclare":
  // "no-regex-spaces":
  // "no-restricted-exports":
  "no-restricted-globals": ["error", "closed", "event", "fdescribe", "length", "location", "name", "parent", "top"],
  // "no-restricted-imports":
  "no-restricted-properties": "error",
  "no-restricted-syntax": "error",
  "no-return-assign": "error",
  "no-script-url": "error",
  "no-sequences": "error",
  "no-shadow": "off", // Handle with @typescript-eslint/no-shadow
  // "no-shadow-restricted-names":
  "no-ternary": "off",
  "no-throw-literal": "error",
  "no-undef-init": "off",
  "no-undefined": "off",
  "no-underscore-dangle": "off",
  "no-unneeded-ternary": "error",
  "no-unused-expressions": "error",
  // "no-unused-labels":
  "no-useless-call": "error",
  // "no-useless-catch":
  "no-useless-computed-key": "error",
  "no-useless-concat": "error",
  "no-useless-constructor": "error",
  // "no-useless-escape":
  "no-useless-rename": "error",
  "no-useless-return": "error",
  "no-var": "error",
  "no-void": "error",
  "no-warning-comments": "warn",
  // "no-with":
  "object-shorthand": "error",
  "one-var": ["warn", "never"],
  "one-var-declaration-per-line": "error",
  "operator-assignment": "error",
  "prefer-arrow-callback": "error",
  "prefer-const": "error",
  "prefer-destructuring": "off",
  "prefer-exponentiation-operator": "error",
  "prefer-named-capture-group": "off",
  "prefer-numeric-literals": "error",
  "prefer-object-has-own": "error",
  "prefer-object-spread": "error",
  "prefer-promise-reject-errors": "error",
  "prefer-regex-literals": "error",
  "prefer-rest-params": "error",
  "prefer-spread": "error",
  "prefer-template": "error",
  "quote-props": ["warn", "consistent-as-needed"],
  "radix": ["error", "as-needed"],
  "require-await": "off",
  "require-unicode-regexp": "off",
  // "require-yield":
  "sort-imports": "off",
  "sort-keys": "off",
  "sort-vars": "error",
  "spaced-comment": ["warn", "always", { markers: ["/"] }],
  "strict": ["error", "never"],
  "symbol-description": "error",
  "vars-on-top": "error",
  "yoda": "error"
};

/**
 * These rules care about how the code looks rather than how it executes.
 *
 * https://eslint.org/docs/latest/rules/#possible-problems
 */
const formatting: Linter.RulesRecord = {
  "array-bracket-newline": "off",
  "array-bracket-spacing": "error",
  "array-element-newline": "off",
  "arrow-parens": "error",
  "arrow-spacing": "error",
  "block-spacing": "error",
  "brace-style": "error",
  "comma-dangle": ["warn", "never"],
  "comma-spacing": "error",
  "comma-style": "error",
  "computed-property-spacing": "error",
  "dot-location": ["warn", "property"],
  "eol-last": "error",
  "func-call-spacing": "error",
  "function-call-argument-newline": ["warn", "consistent"],
  "function-paren-newline": ["error", "multiline-arguments"],
  "generator-star-spacing": "error",
  "implicit-arrow-linebreak": "error",
  "indent": ["error", 2, { SwitchCase: 1 }],
  "jsx-quotes": "error",
  "key-spacing": "error",
  "keyword-spacing": ["warn", {
    overrides: {
      if: {
        after: false
      },
      for: {
        after: false
      },
      while: {
        after: false
      },
      catch: {
        after: false
      },
      throw: {
        after: true
      },
      switch: {
        after: false
      }
    }
  }],
  "line-comment-position": "off",
  "linebreak-style": "error",
  "lines-around-comment": "off",
  "lines-between-class-members": ["warn", "never"],
  "max-len": ["warn", {
    code: 120,
    ignoreUrls: true,
    ignoreStrings: true,
    ignoreTemplateLiterals: true
  }],
  "max-statements-per-line": "error",
  "multiline-ternary": "off",
  "new-parens": "error",
  "newline-per-chained-call": ["warn", { ignoreChainWithDepth: 4 }],
  "no-extra-parens": "off",
  // "no-mixed-spaces-and-tabs":
  "no-multi-spaces": "error",
  "no-multiple-empty-lines": "warn",
  "no-tabs": "error",
  "no-trailing-spaces": ["warn", {
    ignoreComments: true // Set to `true` to support two trailing spaces to wrap TypeScript comments.
  }],
  "no-whitespace-before-property": "error",
  "nonblock-statement-body-position": "error",
  "object-curly-newline": "error",
  "object-curly-spacing": ["warn", "always"],
  "object-property-newline": "off",
  "operator-linebreak": ["error", "before"],
  "padded-blocks": ["warn", "never"],
  "padding-line-between-statements": "error",
  "quotes": ["warn", "double", { avoidEscape: true }],
  "rest-spread-spacing": "error",
  "semi": "off", // handle with @typescript-eslint/semi
  "semi-spacing": "error",
  "semi-style": "error",
  "space-before-blocks": "error",
  "space-before-function-paren": ["error", {
    anonymous: "never",
    named: "never",
    asyncArrow: "always"
  }],
  "space-in-parens": "error",
  "space-infix-ops": "off",
  "space-unary-ops": "error",
  "switch-colon-spacing": "error",
  "template-curly-spacing": "error",
  "template-tag-spacing": "error",
  "unicode-bom": "error",
  "wrap-iife": "error",
  "wrap-regex": "error",
  "yield-star-spacing": "error"
};

const deprecated: Linter.RulesRecord = {
  "no-return-await": "error"
};

const rules: Linter.RulesRecord = {
  ...problems,
  ...suggestions,
  ...formatting,
  ...deprecated
};

export default rules;
