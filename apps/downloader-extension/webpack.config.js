const { composePlugins, withNx } = require('@nx/webpack')
const { withReact } = require('@nx/react')
const path = require('node:path')

module.exports = composePlugins(withNx(), withReact(), (config) => {
  config.entry = {
    ...config.entry,
    background: path.resolve(__dirname, 'src/background/index.ts'),
  }
  return config
})
