module.exports = {
  singleQuote: true,
  trailingComma: 'all',
  printWidth: 100,
  plugins: [require('prettier-plugin-svelte'), require('prettier-plugin-tailwindcss')],
  tailwindConfig: './tailwind.config.cjs',
  pluginSearchDirs: false,
  overrides: [{ files: '*.svelte', options: { parser: 'svelte' } }],
}
