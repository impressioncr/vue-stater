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
      port: 3000,
      proxyTable: {}
    },
    prd: {
      
    }
  }
}




