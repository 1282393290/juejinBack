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
      },

      '/getNavList': {
        target: 'http://xiaoce-timeline-api-ms.juejin.im',
        pathRewrite: {
          '^/getNavList': ''
        }
      },

      '/getBookList': {
        target: 'http://xiaoce-timeline-api-ms.juejin.im',
        pathRewrite: {
          '^/getBookList': ''
        }
      },

      '/getEventList': {
        target: 'http://event-storage-api-ms.juejin.im',
        pathRewrite: {
          '^/getEventList': ''
        }
      }
    }
  }
}