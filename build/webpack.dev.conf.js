const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const autoprefixer = require('autoprefixer')
const postcssPx2rem = require('postcss-px2rem')
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')
const portfinder = require('portfinder')
const baseConf = require('./webpack.base.conf')
const userConfig = require('../project.config')
const userWebpack = userConfig.webpackConf

const devWebpackConfig = merge(baseConf, {
  mode: 'development',

  module: {
    rules: [
      {
        test: /\.styl/,
        use: [
          'vue-style-loader',
          {
            loader: 'css-loader'
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: () => [
                autoprefixer(),
                postcssPx2rem({remUnit: 50})
              ],
            }
          },
          {
            loader: 'stylus-loader'
          },
        ],
      }
    ]
  },

  devServer: {
    clientLogLevel: 'warning',
    hot: true,
    compress: true,
    host: 'localhost',
    port: userWebpack.dev.port,
    open: false,
    overlay: true,
    publicPath: '/',
    disableHostCheck: true,
    quiet: true
  },

  devtool: 'cheap-module-eval-source-map',

  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
})

module.exports = new Promise((resolve, reject) => {
  const expectPort = userWebpack.dev.port
  portfinder.basePort = expectPort
  portfinder.getPort((err, port) => {
    if (err) {
      reject(err)
    } else {
      devWebpackConfig.devServer.port = port
      const messages = userConfig.entries.map((page, index) => {
        const isSampleConf = typeof page === 'string'
        const chunkName = isSampleConf ? page : page.htmlName
        return `Your application ${index + 1} is running here: http://${userWebpack.dev.host}:${port}/${chunkName}.html`
      })
      const ifPortOccupied = port !== expectPort
      ifPortOccupied && messages.unshift(`${expectPort} port has been Occupied, found ${port} instead`)
      devWebpackConfig.plugins.push(new FriendlyErrorsPlugin({
        compilationSuccessInfo: {
          messages,
        },
        onErrors: undefined
      }))
      resolve(devWebpackConfig)
    }
  })
})
