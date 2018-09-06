const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const baseConf = require('./webpack.base.conf')


module.exports = merge(baseConf, {
  mode: 'development',

  module: {
    rules: [
      {
        test: /\.styl/,
        use: [
          'vue-style-loader',
          {
            loader: 'css-loader',
            options: {
              sourceMap: true
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true
            }
          },
          {
            loader: 'stylus-loader',
            options: {
              sourceMap: true
            }
          },
        ],
      },
    ]
  },


  devServer: {
    clientLogLevel: 'warning',
    hot: true,
    compress: true,
    host: 'localhost',
    port: 3008,
    open: false,
    overlay: false,
    publicPath: '/',
    quiet: false
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
})