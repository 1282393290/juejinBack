import http from 'axios'
export default {
  namespaced: true,
  state: {
    booklist:[],
    navlist:[]
  },
  mutations:{
    SETNAVLIST (state, list) {
      list.unshift({name:'全部'})
      state.navlist = list
    },
    SETBOOKLIST(state,list){
      state.booklist=list
    }
  },
  actions:{
    getnavList ({ commit }) {
      http.get('http://localhost:8080/v1/getNavList')
      .then(response => {
        commit('SETNAVLIST', response.data.d)
      })
    },
    getbookList ({ commit }) {
      http.get('http://localhost:8080/v1/getListByLastTime',
      {
          params:{
            uid:'',
            client_id:'',
            token:'',
            src:'web',
            alias:'',
            pageNum:1
          }
      })
      .then(response => {
        console.log(response)
        commit('SETBOOKLIST', response.data.d)
      })
    }
  }
}