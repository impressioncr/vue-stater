const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const baseConf = require('./webpack.base.conf')


module.exports = merge(baseConf, {
  mode: 'development',

  module: {
    rules: [
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
            options: {
              attrs: ['img:src', 'img:data-src']
            }
          }
        ]
      }
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