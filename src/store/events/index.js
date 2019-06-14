//活动页面的数据
import http from '@/utils/http'
export default{
  namespaced: true,
  state: {
    bannerList:[]
  },

  mutations: {
    SETMARING(state,list){
      state.bannerList = list;
    }
  },


  actions:{
    getBannerList({commit}){
      http.get('/v1/getEventList?uid=&client_id=&token=&src=web&orderType=startTime&bannerStartTime=2019-06-13T15%3A59%3A59.999Z&pageNum=1&pageSize=20&showBanner=1')
      .then( res =>{
        commit('SETMARING',res);
        console.log(res)
      })
    }
  }
}
