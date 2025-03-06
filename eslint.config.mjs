import globals from "globals";
import pluginJs from "@eslint/js";
import stylisticJs from '@stylistic/eslint-plugin-js';

/** @type {import('eslint').Linter.Config[]} */
export default [
  {files: ['**/**.mjs', '**/**.js', '**/**.cjs']}, // за зaмовчуванням перевіряє **/*.js, **/*.cjs, **/*.mjs
  //  {ignores: ['**/**.cjs'},
  {languageOptions: {
    globals: globals.node,
    sourceType: 'module',
  }
  },
  pluginJs.configs.recommended,
  {
    plugins: {
      '@stylistic/js': stylisticJs
    },
  },
  {
    rules:{
      "@stylistic/js/indent": ["error", 2],
      "semi": 2,
      "no-useless-escape": 1,
      "eqeqeq": 0,
      "no-dupe-args": 1,
      "no-dupe-else-if": 2,
      "object-curly-spacing": ["error", "never"],
      "array-bracket-spacing": ["error", "never"],
      "computed-property-spacing": ["error", "never"],
      "no-multi-spaces": 2,
      "no-trailing-spaces":2,
      "no-multiple-empty-lines": ["warn", {"max": 1, "maxEOF": 0}],
      "space-in-parens": 2,
      "space-before-function-paren": ["error", "never"],
      "camelcase": "error",
      "prefer-const": "warn",
      "@stylistic/js/arrow-spacing": 2,
    }
  },
];