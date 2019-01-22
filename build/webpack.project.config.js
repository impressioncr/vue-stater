const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
// const resolve = (p) => path.resolve(p)
const userConfig = require('../project.config')
const { coreJsPolyfill } = userConfig.webpackConf
const entry = {}

const HtmlWebpackPlugins = userConfig.entries.map(page => {
  const isSampleConf = typeof page === 'string'
  const chunkName = isSampleConf ? page : page.htmlName
  entry[chunkName] = [...coreJsPolyfill, `./src/views/${chunkName}/index.js`]
  return new HtmlWebpackPlugin({
    filename: `${chunkName}.html`,
    template: 'index.html',
    chunks: ['vendors', chunkName],
    inject: true
  })
})


module.exports = {
  entry,
  HtmlWebpackPlugins
}