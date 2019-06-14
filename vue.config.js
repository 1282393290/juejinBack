module.exports = {
  
  devServer: {
    proxy: {
      '/query': {
        target: 'http://web-api.juejin.im',
        pathRewrite: {
          '^/query': ''
        }
      },

      '/getArticleList': {
        target: 'http://xiaoce-timeline-api-ms.juejin.im',
        pathRewrite: {
          '^/getArticleList': ''
        }
      },

      '/getCategoryList': {
        target: 'http://gold-tag-ms.juejin.im',
        pathRewrite: {
          '^/getCategoryList': ''
        }
      }
    }
  }
}