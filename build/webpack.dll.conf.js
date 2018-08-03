const path = require('path')
const webpack = require('webpack')

module.exports = {

  mode: 'development',

  entry: {
    vue: ['vue', 'vuex', 'vue-router']
  },

  output: {
    path: path.join(__dirname, '../src/dll/'),
    filename: '[name].dll.js',
    library: '[name]'
  },

  resolve: {
    alias: {
      'vue$': path.join(__dirname, '../node_modules/vue/dist/vue.esm.js'),
    }
  },

  plugins: [
    new webpack.DllPlugin({
      path: path.join(__dirname, '../src/dll', '[name]-manifest.json'),
      name: '[name]'
    })
  ]
}