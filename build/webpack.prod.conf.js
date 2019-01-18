const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const ExtractTextPlugin = require('extract-text-webpack-plugin') // 或者使用mini-css-extract-plugin
const autoprefixer = require('autoprefixer')
const postcssPx2rem = require('postcss-px2rem')
const baseConf = require('./webpack.base.conf')


module.exports = merge(baseConf, {
  mode: 'production',

  output: {
    publicPath: '../',
    filename: 'js/[name].[hash:5].js'
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
        })  
      }
    ]
  },

  plugins: [
    new ExtractTextPlugin({
      filename: 'css/[name].[hash:5].css',
      // allChunks: false
    })
  ]
})