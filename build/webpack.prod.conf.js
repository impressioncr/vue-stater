const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const baseConf = require('./webpack.base.conf')


module.exports = merge(baseConf, {
  mode: 'production',

  output: {
    filename: 'static/js/[name].[hash:5].js'
  },

  plugins: [
  ]
})