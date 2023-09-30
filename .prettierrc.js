/* istanbul ignore file */
module.exports = {
  plugins: ['@trivago/prettier-plugin-sort-imports'],
  singleQuote: true,
  semi: false,
  importOrder: ['<THIRD_PARTY_MODULES>', '^[./]'],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  trailingComma: 'all',
}
