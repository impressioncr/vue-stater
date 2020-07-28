const path = require('path')
const webpack = require('webpack')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const ProgressBarPlugin = require('progress-bar-webpack-plugin')

// const CopyWebpackPlugin = require('copy-webpack-plugin')
const { HtmlWebpackPlugins, entry } = require('./webpack.project.config')
const { webpackConf } = require('../project.config')
const isDev = process.env.NODE_ENV === 'DEV'
console.log('isDev', isDev)

const baseConf = {
  entry,

  output: {
    publicPath: '/',
    filename: '[name].[hash:5].js'
  },

  optimization: {
    minimize: false,
    splitChunks: {
      minSize: 0,
      name: "vendors",
      chunks: "all"
    }
  },

  module: {
    rules: [
      {
        test: /\.(vue|js|jsx)$/,
        loader: 'eslint-loader',
        exclude: /node_modules/,
        enforce: 'pre'
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          preserveWhitepace: true,
          extractCSS: !isDev
        }
      },
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
        },
        exclude: /node_modules/
      },
      {
        test: /\.(gif|jpg|png)\??.*$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              name: 'images/[name].[hash:5].[ext]',
              limit: 10000
            }
          }
        ]
      }
    ]
  },

  resolve: {
    extensions: ['.js', '.vue'],
    alias: {
      'vue': path.join(__dirname, '../node_modules/vue/dist/vue.esm.js'),
      '@': path.join(__dirname, '../src')
    }
  },

  plugins: [
    // new webpack.DllReferencePlugin({
    //   manifest: require('../src/dll/vue-manifest.json')
    // }),
    ...HtmlWebpackPlugins,
    new ProgressBarPlugin({
      format: 'build [:bar] :percent (:elapsed seconds)',
      clear: false, 
      width: 60
    }),
    new VueLoaderPlugin(),
  ]
}

// if (webpackConf.common.postcssPx2rem) {
//   baseConf.
// }

module.exports = baseConf
