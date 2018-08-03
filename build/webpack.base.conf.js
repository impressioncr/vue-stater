const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const isDev = process.env.NODE_ENV === 'development'
console.log('isDev', isDev);

module.exports = {
  entry: {
    app: './src/app.js'
  },

  output: {
    publicPath: '/',
    filename: '[name].[hash:5].js'
  },

  optimization: {
    runtimeChunk: {
      name: 'manifest'
    },
    splitChunks: {
      chunks: 'all'
    }
  },

  module: {
    rules: [
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
              name: 'static/imgs/[name][hash:5].[ext]',
              limit: 10000,
              useRelativePath: true
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
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      inject: true
    }),
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, '../static'),
        to: '/',
        ignore: ['.*']
      }
    ]),
    new VueLoaderPlugin(), // Vue-loader在15.*之后的版本需要 VueLoaderPlugin
  ]
}