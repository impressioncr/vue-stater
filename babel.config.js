module.exports = function(api) {
  api.cache(false)
  return {
    presets: [
      [
        "@babel/preset-env", 
        {
          debug:  true,
          useBuiltIns: 'usage'
        }
      ] 
    ],
    plugins: [
      "@babel/plugin-transform-runtime"
    ]
  }
}