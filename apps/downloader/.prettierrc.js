/* istanbul ignore file */
module.exports = {
  ...require('../../.prettierrc.js'),
  importOrder: ['<THIRD_PARTY_MODULES>', '^@dwn/(.*)$', '^[./]'],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
}
