<!--BEGIN HEADER-->
<div align="center">
  <h1>@autossey/eslint-config</h1>
  <a href="https://npmjs.com/package/@autossey/eslint-config">
    <img alt="npm" src="https://img.shields.io/npm/v/@autossey/eslint-config.svg">
  </a>
  <a href="https://github.com/AutosseyAI/eslint-config">
    <img alt="typescript" src="https://img.shields.io/github/languages/top/AutosseyAI/eslint-config.svg">
  </a>
</div>

<br />

<blockquote align="center">A base for projects that use ESLint.</blockquote>

<br />

_If I should maintain this repo, please ⭐️_
<a href="https://github.com/AutosseyAI/eslint-config">
  <img align="right" alt="GitHub stars" src="https://img.shields.io/github/stars/AutosseyAI/eslint-config?label=%E2%AD%90%EF%B8%8F&style=social">
</a>

_DM me on [Twitter](https://twitter.com/bconnorwhite) if you have questions or suggestions._
<a href="https://twitter.com/bconnorwhite">
  <img align="right" alt="Twitter Follow" src="https://img.shields.io/twitter/url?label=%40bconnorwhite&style=social&url=https%3A%2F%2Ftwitter.com%2Fbconnorwhite">
</a>

---
<!--END HEADER-->

This package provides a base ESLint config for TypeScript, and a second for TypeScript with React.

## Installation

<details open>
  <summary>
    <a href="https://www.npmjs.com/package/@autossey/eslint-config">
      <img src="https://img.shields.io/badge/npm-CB3837?logo=npm&logoColor=white" alt="NPM" />
    </a>
  </summary>

```sh
npm install --save-dev @autossey/eslint-config
```

</details>

<details open>
  <summary>
    <a href="https://yarnpkg.com/package/@autossey/eslint-config">
      <img src="https://img.shields.io/badge/yarn-2C8EBB?logo=yarn&logoColor=white" alt="Yarn" />
    </a>
  </summary>

```sh
yarn add --dev @autossey/eslint-config
```
</details>

<details open>
  <summary>
    <img src="https://img.shields.io/badge/pnpm-F69220?logo=pnpm&logoColor=white" alt="PNPM" />
  </summary>

```sh
pnpm add --save-dev @autossey/eslint-config
```

</details>

<details open>
  <summary>
    <img src="https://img.shields.io/badge/bun-EE81C3?logo=bun&logoColor=white" alt="Bun" />
  </summary>

```sh
bun add --dev @autossey/eslint-config
```

</details>

## Usage

In your `package.json` file:

**TypeScript**

```json
{
  "eslintConfig": {
    "extends": "@autossey/eslint-config"
  }
}
```

**React**

```json
{
  "eslintConfig": {
    "extends": "@autossey/eslint-config/react"
  }
}
```

### Running ESLint

Now to run ESLint, run `yarn eslint source` or `npm run eslint source`.

## Updates

As this package updates, bug fixes are considered patch updates as usual.

Rule changes are considered minor updates. Rule changes can cause linting errors in your code, If you want to avoid rule changes, you can set your package to use a specific minor version of this package with the `~` operator:

```json
{
  "devDependencies": {
    "@autossey/eslint-config": "~0.1.0"
  }
}
```

<!--BEGIN FOOTER-->

<br />

<h2>Dependencies<a href="https://www.npmjs.com/package/@autossey/eslint-config?activeTab=dependencies"><img align="right" alt="dependencies" src="https://img.shields.io/librariesio/release/npm/@autossey/eslint-config.svg"></a></h2>

- [@types/eslint](https://www.npmjs.com/package/@types/eslint): TypeScript definitions for eslint
- [@typescript-eslint/eslint-plugin](https://www.npmjs.com/package/@typescript-eslint/eslint-plugin): TypeScript plugin for ESLint
- [@typescript-eslint/parser](https://www.npmjs.com/package/@typescript-eslint/parser): An ESLint custom parser which leverages TypeScript ESTree
- [eslint-plugin-i](https://www.npmjs.com/package/eslint-plugin-i): A fork of `eslint-plugin-import` using `get-tsconfig` to replace `tsconfig-paths` and heavy `typescript` under the hood.
- [eslint-plugin-json](https://www.npmjs.com/package/eslint-plugin-json): eslint plugin for JSON files
- [eslint-plugin-n](https://www.npmjs.com/package/eslint-plugin-n): Additional ESLint's rules for Node.js
- [eslint-plugin-react](https://www.npmjs.com/package/eslint-plugin-react): React specific linting rules for ESLint
- [eslint-plugin-react-hooks](https://www.npmjs.com/package/eslint-plugin-react-hooks): ESLint rules for React Hooks

<br />

<h3>Peer Dependencies</h3>

- [eslint](https://www.npmjs.com/package/eslint): An AST-based pattern checker for JavaScript.

<br />

<h3>Dev Dependencies</h3>

- [@autossey/tsconfig](https://www.npmjs.com/package/@autossey/tsconfig): A collection of base TSConfigs for various types of projects.
- [eslint](https://www.npmjs.com/package/eslint): An AST-based pattern checker for JavaScript.

<br />

<h2>License <a href="https://opensource.org/licenses/MIT"><img align="right" alt="license" src="https://img.shields.io/npm/l/@autossey/eslint-config.svg"></a></h2>

[MIT](https://opensource.org/licenses/MIT) - _MIT License_
<!--END FOOTER-->
