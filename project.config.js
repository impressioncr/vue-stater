module.exports = {
  entries: [
    "app",
    {
      "htmlName": "bpage",
      "htmlTitle": "title",
    },
    {
      "htmlName": "cpage"
    }
  ],
  webpackConf: {
    common: {
      postcssPx2rem: {
        remUnit: 50
      }
    },
    dev: {
      host: 'localhost',
      port: 3000,
      proxyTable: {}
    },
    prd: {
      
    },
    coreJsPolyfill: [
      'core-js/modules/es6.promise'
    ]
  }
}




