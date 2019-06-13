//  首页子仓库
import axios from 'axios'
import http from '@/utils/http'
const state = {
  adsInfo: [],
  tagNavList: [],
  articleList: [],
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
  }
}

const getters = {

}

const actions = {
  getArticleList ({ commit }) {
    axios.post('/query/query',{
      extensions: {query: {id: "21207e9ddb1de777adeaca7a2fb38030"}},
      operationName: "",
      query: "",
      variables: {first: 20, after: "", order: "POPULAR"}
    },{
      headers: {
        'X-Agent': 'Juejin/Web'
      }
    })
      .then(response => {
        commit('setArticleList',response.data.data.articleFeed.items.edges)
      })
  },
  getTagNavList ({ commit }) {
    http.get('/getArticleList/v1/getListByLastTime?uid=&client_id=&token=&src=web&pageNum=1')
      .then(response => {
        commit('setTagNavList',response)
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
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}