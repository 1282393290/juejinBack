// //活动页面的数据
// import http from '@/utils/http'
// export default{
//   namespaced: true,
//   state: {
//     maringList:[]
//   },

//   mutations: {
//     SETMARING(state,list){
//       state.maringList = list;
//     }
//   },

//   actions:{
//     getmaringList({commit}){
//       http.get('v1/getEventList?uid=&client_id=&token=&src=web&orderType=startTime&bannerStartTime=2019-06-12T15%3A59%3A59.999Z&pageNum=1&pageSize=20&showBanner=1',{
//         headers:{
//           'X-Agent': 'Juejin/Web'
//         }
//       })
//       .then( res =>{
//         if(res.s === 0){
//           commit('SETMARING',res.data);
//          }
//       })
//     }
//   }
// }
