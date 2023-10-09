/* istanbul ignore file */
module.exports = {
  ...require('../../.prettierrc.js'),
  importOrder: ['<THIRD_PARTY_MODULES>', '^@elct/(.*)$', '^[./]'],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
}
