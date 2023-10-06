const { composePlugins, withNx } = require('@nx/webpack')
const { withReact } = require('@nx/react')
const path = require('node:path')
const fs = require('node:fs')
const GeneroutedPlugin = require('./plugin')

const backgroundFile = path.join(__dirname, 'src/background/index.ts')
const hasBackground = fs.existsSync(backgroundFile)

const stylesFile = path.join(__dirname, 'src/styles.scss')
const hasStyles = fs.existsSync(stylesFile)

const mainFile = path.join(__dirname, 'src/main.tsx')
const hasMain = fs.existsSync(mainFile)

module.exports = composePlugins(withNx(), withReact(), (config) => {
  config.plugins.push(new GeneroutedPlugin())
  config.entry = {
    ...(hasMain && { main: [mainFile] }),
    ...(hasStyles && { styles: [stylesFile] }),
    ...(hasBackground && { background: [backgroundFile] }),
  }

  return config
})
