module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'prettier'],
  plugins: ['svelte3', '@typescript-eslint'],
  ignorePatterns: ['*.cjs'],
  overrides: [{ files: ['*.svelte'], processor: 'svelte3/svelte3' }],
  settings: {
    'svelte3/typescript': () => require('typescript'),
  },
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 'latest',
  },
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  rules: {
    '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    '@typescript-eslint/no-namespace': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    semi: ['error', 'never'],
    quotes: ['error', 'single'],
    indent: ['error', 2],
    'arrow-parens': ['error', 'as-needed'],
  },
}
