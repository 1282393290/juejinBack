//  首页子仓库
import axios from 'axios'
import http from '@/utils/http'
const state = {
  adsInfo: [],
  tagNavList: [],
  articleList: [],
  categoryList: []
}

const mutations = {
  setAdsInfo (state, payload) {
    state.adsInfo = payload
  },
  setTagNavList (state, payload) {
    state.tagNavList = payload
  },
  setArticleList (state, payload) {
    state.articleList = payload
  },
  setCategoryList (state, payload) {
    state.categoryList = payload
  }
}

const getters = {
  resetCategoryList (state) {
    state.categoryList = state.categoryList.map((val,key,arr)=>{
      var title = '/'+val.title+'/'+val.title
      return {name:val.name,title:title}
    })
    state.categoryList.unshift({name:'推荐',title:'/'})
    return state.categoryList
  }
}

const actions = {
  getArticleList ({ commit },payload) {
    axios.post('/query/query',payload.params,{
      headers: {
        'X-Agent': 'Juejin/Web'
      }
    })
      .then(response => {
        commit('setArticleList',response.data.data.articleFeed.items.edges)
      })
  },
  getTagNavList ({ commit },payload) {
    axios.post('/query/query',payload.params,{
      headers: {
        'X-Agent': 'Juejin/Web'
      }
    })
      .then(response => {
        commit('setTagNavList',response.data.data.tagNav.items)
      })
  },
  getAdsInfo ({ commit }) {
    axios.post('/query/v3/web/wbbr/aebldnj',{
      extensions: {query: {id: "85c0f781f40a7390dd7aedf0b1b35889"}},
      operationName: "",
      query: "",
      variables: {platformCode: 1, positionCodes: [2, 3, 4, 5]}
    },{
      headers: {
        'X-Agent': 'Juejin/Web'
      }
    })
      .then(response => {
        commit('setAdsInfo',response.data.data.advertisementCard.items)
      })
  },
  getCategoryList ({ commit }) {
    http.get('/getCategoryList/v1/categories',{
      headers: {
        'X-Juejin-Client': '1560472673582',
        'X-Juejin-Src': 'web',
        'X-Juejin-Token': 'eyJhY2Nlc3NfdG9rZW4iOiI2RURyR0lYbjEzNGk5NEc2IiwicmVmcmVzaF90b2tlbiI6Im9LTzNHaDhMd250bm50MkoiLCJ0b2tlbl90eXBlIjoibWFjIiwiZXhwaXJlX2luIjoyNTkyMDAwfQ==',
        'X-Juejin-Uid': '5cfdf074f265da1bcb4f2094'
      }
    })
      .then(response => {
        commit('setCategoryList',response.categoryList)
      })
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}