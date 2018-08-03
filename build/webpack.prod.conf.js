const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const ExtractTextPlugin = require('extract-text-webpack-plugin') // 或者使用mini-css-extract-plugin
const baseConf = require('./webpack.base.conf')


module.exports = merge(baseConf, {
  mode: 'production',

  output: {
    filename: 'static/js/[name].[hash:5].js'
  },

  module: {
    rules: [
      {
        test: /\.styl/,
        use: ExtractTextPlugin.extract({
          fallback: {
            loader: 'vue-style-loader',
          },
          use: [
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
        })  
      },
    ]
  },

  plugins: [
    new ExtractTextPlugin({
      filename: 'static/css/[name].[hash:5].css',
      allChunks: false
    })
  ]
})