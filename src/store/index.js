import Vue from 'vue'
import Vuex from 'vuex'
import index from './Index/index'
import events from './events/events'


Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    index,
    events
  },

  state: {
    hasloginCount: false,
    loginState: false,
    close: false
  },

  mutations: {
    setHasLogin (state,payload) {
      state.hasloginCount = !state.hasloginCount
    },
    setClose (state,payload) {
      state.close = false
    },
    setLoginState (state,payload) {
      state.loginState = payload
    },
    showLogReg (state,payload) {
      state.loginState = payload[0]
      state.hasloginCount = payload[1]
      state.close = payload[2]
    }
  }
})
