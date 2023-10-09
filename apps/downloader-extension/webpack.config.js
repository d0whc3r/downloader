const { composePlugins, withNx } = require('@nx/webpack')
const { withReact } = require('@nx/react')
// const {
//   WriteIndexHtmlPlugin,
// } = require('@nx/webpack/src/plugins/write-index-html-plugin')
// const path = require('node:path')

module.exports = composePlugins(withNx(), withReact(), (config) => {
  // config.plugins = config.plugins.map((plugin) => {
  //   if (plugin instanceof WriteIndexHtmlPlugin) {
  //     plugin.options.scripts = []
  //   }
  //   return plugin
  // })

  // config.resolve.plugins[0].configFile = path.resolve(
  //   __dirname,
  //   'apps/downloader-extension/tsconfig.app.json',
  // )

  return config
})
