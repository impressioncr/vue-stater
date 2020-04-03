module.exports = function (api) {
  api.cache(false)
  return {
    presets: [
      [
        '@babel/preset-env',
        {
          debug: false,
          useBuiltIns: 'usage',
          corejs: 3
        }
      ]
    ],
    plugins: [
      '@babel/plugin-transform-runtime',
      '@babel/plugin-syntax-dynamic-import'
    ]
  }
}
