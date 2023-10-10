/* istanbul ignore file */
module.exports = {
  ...require('../../.prettierrc.js'),
  importOrder: ['<THIRD_PARTY_MODULES>', '^@ext/(.*)$', '^[./]'],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
}
